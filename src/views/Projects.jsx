import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Maximize2, X, Github, Globe } from 'lucide-react';
import Card from '../components/UI/Card';
import clsx from 'clsx';

const projects = [
    {
        id: 'vooi-checker',
        title: 'Vooi Checker',
        description: 'A comprehensive tool to check eligibility and stats for Vooi protocol.',
        tags: ['Web3', 'React', 'API Integration', 'DeFi'],
        url: 'https://keyshi9.github.io/Vooi-Checker/',
        github: 'https://github.com/keyshi9/Vooi-Checker', // Assuming repo URL
        color: 'neon-cyan'
    },
    {
        id: 'base-footprint',
        title: 'Base Footprint',
        description: 'Track and visualize your on-chain footprint on the Base L2 network.',
        tags: ['Blockchain', 'NFT', 'Smart Contracts', 'Base'],
        url: 'https://keyshi9.github.io/base-footprint/',
        github: 'https://github.com/keyshi9/base-footprint', // Assuming repo URL
        color: 'neon-violet'
    }
];

const ProjectCard = ({ project, onOpen }) => (
    <Card className="h-full flex flex-col group hover:border-neon-cyan/50 transition-colors">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>
            <div className={`p-2 rounded-full bg-${project.color}/10 text-${project.color}`}>
                <Globe className="w-5 h-5" />
            </div>
        </div>
        <p className="text-gray-400 text-sm mb-6 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                    {tag}
                </span>
            ))}
        </div>

        <div className="flex gap-3 mt-auto">
            <button
                onClick={() => onOpen(project)}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 transition-all font-mono text-sm border border-neon-cyan/20"
            >
                <Maximize2 className="w-4 h-4" />
                Load App
            </button>
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/5"
            >
                <Github className="w-5 h-5" />
            </a>
        </div>
    </Card>
);

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <div className="h-full">
            <AnimatePresence>
                {activeProject ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-[100] bg-dark-bg flex flex-col"
                    >
                        {/* Focus Mode Header */}
                        <div className="h-14 border-b border-dark-border flex items-center justify-between px-6 bg-dark-card">
                            <div className="flex items-center gap-4">
                                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                                    {activeProject.title}
                                </h2>
                                <span className="text-xs font-mono text-gray-500 px-2 py-1 rounded bg-white/5">FOCUS MODE</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <a
                                    href={activeProject.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-mono"
                                >
                                    Open in New Tab <ExternalLink className="w-4 h-4" />
                                </a>
                                <button
                                    onClick={() => setActiveProject(null)}
                                    className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Iframe Container */}
                        <div className="flex-1 bg-black relative">
                            <iframe
                                src={activeProject.url}
                                className="w-full h-full border-0"
                                title={activeProject.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Featured Projects</h2>
                            <p className="text-gray-400 font-mono text-xs md:text-sm">Explore my recent work in Web3, DeFi, and blockchain development.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map(project => (
                                <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
