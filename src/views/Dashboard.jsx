import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Code, GitBranch, Terminal, ArrowRight, Mail } from 'lucide-react';
import Card from '../components/UI/Card';
import useGitHubStats from '../hooks/useGitHubStats';

const StatCard = ({ icon: Icon, label, value, color, loading }) => (
    <Card className="text-center hover:border-opacity-50 transition-all">
        <div className={`w-12 h-12 rounded-full bg-${color}/10 flex items-center justify-center mx-auto mb-4`}>
            <Icon className={`w-6 h-6 text-${color}`} />
        </div>
        <p className="text-gray-400 text-sm font-mono mb-2">{label}</p>
        <p className={`text-3xl font-bold text-${color}`}>
            {loading ? '...' : value}
        </p>
    </Card>
);

const ActivityItem = ({ action, target, time }) => (
    <div className="flex items-center gap-4 py-3 border-b border-dark-border last:border-0 hover:bg-white/5 transition-colors px-4 -mx-4 rounded">
        <div className="w-2 h-2 rounded-full bg-neon-cyan" />
        <div className="flex-1">
            <p className="text-sm text-gray-300">
                <span className="text-neon-cyan font-mono">{action}</span> {target}
            </p>
        </div>
        <span className="text-xs text-gray-500 font-mono">{time}</span>
    </div>
);

const Dashboard = ({ setActiveTab }) => {
    const { repos, totalCommits, loading } = useGitHubStats('Keyshi9');
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
        >
            {/* Hero Section */}
            <motion.div variants={item} className="text-center md:text-left max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-green bg-clip-text text-transparent">
                    Sow
                </h1>
                <h2 className="text-xl md:text-2xl text-neon-cyan font-mono mb-6">
                    Web & Software Developer — Web3 & Crypto Enthusiast
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                    Passionate developer specializing in full-stack web development and blockchain technologies.
                    Building decentralized applications and exploring the intersection of traditional software
                    engineering and Web3 innovation. Experienced in DeFi protocols, smart contracts, and modern
                    web frameworks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button
                        onClick={() => setActiveTab('projects')}
                        className="px-8 py-3 rounded-lg bg-neon-cyan text-dark-bg font-bold hover:bg-neon-cyan/90 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] flex items-center justify-center gap-2"
                    >
                        View Projects <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setActiveTab('contact')}
                        className="px-8 py-3 rounded-lg border-2 border-neon-violet text-neon-violet font-bold hover:bg-neon-violet/10 transition-all flex items-center justify-center gap-2"
                    >
                        Contact Me <Mail className="w-5 h-5" />
                    </button>
                </div>
            </motion.div>

            {/* Stats Grid - Real-time GitHub Data */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div variants={item}><StatCard icon={Code} label="Featured Projects" value="2" color="neon-cyan" loading={false} /></motion.div>
                <motion.div variants={item}><StatCard icon={GitBranch} label="GitHub Repos" value={repos} color="neon-violet" loading={loading} /></motion.div>
                <motion.div variants={item}><StatCard icon={Terminal} label="Total Commits" value={totalCommits > 0 ? totalCommits : '150+'} color="neon-green" loading={loading} /></motion.div>
            </div>

            {/* Recent Work */}
            <motion.div variants={item}>
                <Card className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <Activity className="w-6 h-6 text-neon-cyan" />
                            Recent Work
                        </h3>
                    </div>
                    <div className="space-y-1">
                        <ActivityItem action="Deployed" target="Vooi Checker to Mainnet" time="2 hours ago" />
                        <ActivityItem action="Updated" target="Base Footprint Smart Contracts" time="5 hours ago" />
                        <ActivityItem action="Created" target="New Repository: DEV_HUB" time="Today, 10:00 AM" />
                        <ActivityItem action="Minted" target="NFT #4021 on Base" time="Yesterday" />
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    );
};

export default Dashboard;
