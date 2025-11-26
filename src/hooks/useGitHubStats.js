import { useState, useEffect } from 'react';

const useGitHubStats = (username) => {
    const [stats, setStats] = useState({
        repos: 0,
        totalCommits: 0,
        loading: true,
        error: null
    });

    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                // Fetch user repos
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
                if (!reposResponse.ok) throw new Error('Failed to fetch repos');

                const repos = await reposResponse.json();
                const publicRepos = repos.filter(repo => !repo.fork && !repo.private);

                // Fetch commits for each repo (limited to avoid rate limits)
                let totalCommits = 0;
                const commitPromises = publicRepos.slice(0, 10).map(async (repo) => {
                    try {
                        const commitsResponse = await fetch(
                            `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=100`
                        );
                        if (commitsResponse.ok) {
                            const commits = await commitsResponse.json();
                            return commits.length;
                        }
                        return 0;
                    } catch {
                        return 0;
                    }
                });

                const commitCounts = await Promise.all(commitPromises);
                totalCommits = commitCounts.reduce((sum, count) => sum + count, 0);

                setStats({
                    repos: publicRepos.length,
                    totalCommits: totalCommits,
                    loading: false,
                    error: null
                });
            } catch (error) {
                console.error('Error fetching GitHub stats:', error);
                setStats({
                    repos: 5, // Fallback values
                    totalCommits: 150,
                    loading: false,
                    error: error.message
                });
            }
        };

        if (username) {
            fetchGitHubStats();
        }
    }, [username]);

    return stats;
};

export default useGitHubStats;
