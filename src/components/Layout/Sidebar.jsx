import React from 'react';
import { Home, Folder, Cpu, Globe, User, Mail, Terminal, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'web3', label: 'Web3', icon: Globe },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'terminal', label: 'Terminal', icon: Terminal },
];

const Sidebar = ({ activeTab, setActiveTab }) => {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-64 h-screen bg-dark-card border-r border-dark-border flex flex-col p-4 fixed left-0 top-0 z-50"
        >
            <div className="flex items-center gap-3 mb-10 px-2">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-neon-cyan to-neon-violet flex items-center justify-center">
                    <Layers className="text-white w-5 h-5" />
                </div>
                <h1 className="text-xl font-bold font-mono tracking-tighter text-white">
                    DEV_OS <span className="text-neon-cyan text-xs">v1.0</span>
                </h1>
            </div>

            <nav className="flex-1 space-y-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={clsx(
                                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group relative overflow-hidden",
                                isActive
                                    ? "bg-neon-cyan/10 text-neon-cyan"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute left-0 top-0 w-1 h-full bg-neon-cyan"
                                />
                            )}
                            <Icon className={clsx("w-5 h-5", isActive && "drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]")} />
                            <span className="font-mono text-sm">{item.label}</span>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/5 to-neon-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]" />
                        </button>
                    );
                })}
            </nav>

            <div className="mt-auto pt-6 border-t border-dark-border">
                <div className="flex items-center gap-3 px-2">
                    <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                    <span className="text-xs text-gray-500 font-mono">System Online</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Sidebar;
