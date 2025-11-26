import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Code, GitBranch, Terminal, Clock, Zap } from 'lucide-react';
import Card from '../components/UI/Card';

const StatCard = ({ icon: Icon, label, value, color }) => (
    <Card className="flex items-center gap-3 md:gap-4">
        <div className={`p-2 md:p-3 rounded-lg bg-${color}/10 text-${color}`}>
            <Icon className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <div>
            <p className="text-gray-400 text-xs md:text-sm font-mono">{label}</p>
            <h3 className="text-xl md:text-2xl font-bold text-white">{value}</h3>
        </div>
    </Card>
);

const ActivityItem = ({ action, target, time }) => (
    <div className="flex items-start gap-3 py-3 border-b border-dark-border last:border-0">
        <div className="mt-1 w-2 h-2 rounded-full bg-neon-cyan" />
        <div>
            <p className="text-sm text-gray-300">
                <span className="text-neon-cyan font-mono">{action}</span> {target}
            </p>
            <p className="text-xs text-gray-500 font-mono mt-1">{time}</p>
        </div>
    </div>
);

const Dashboard = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
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
            className="space-y-6"
        >
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">System Overview</h2>
                    <p className="text-gray-400 font-mono text-xs md:text-sm">Welcome back, User. System operating at 100% efficiency.</p>
                </div>
                <div className="flex items-center gap-2 text-neon-green font-mono text-xs md:text-sm bg-neon-green/10 px-3 py-1 rounded-full border border-neon-green/20 w-fit">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                    ONLINE
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div variants={item}><StatCard icon={Code} label="Projects" value="12" color="neon-cyan" /></motion.div>
                <motion.div variants={item}><StatCard icon={GitBranch} label="Commits" value="1,234" color="neon-violet" /></motion.div>
                <motion.div variants={item}><StatCard icon={Terminal} label="Hours Coded" value="843" color="neon-green" /></motion.div>
                <motion.div variants={item}><StatCard icon={Zap} label="Current Streak" value="14 Days" color="yellow-400" /></motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                {/* Recent Activity */}
                <motion.div variants={item} className="lg:col-span-2">
                    <Card className="h-full">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Activity className="w-5 h-5 text-neon-cyan" />
                                Recent Activity
                            </h3>
                            <button className="text-xs font-mono text-neon-cyan hover:text-white transition-colors">VIEW ALL</button>
                        </div>
                        <div className="space-y-1">
                            <ActivityItem action="Deployed" target="Vooi Checker to Mainnet" time="2 hours ago" />
                            <ActivityItem action="Updated" target="Base Footprint Smart Contracts" time="5 hours ago" />
                            <ActivityItem action="Created" target="New Repository: DEV_HUB" time="Today, 10:00 AM" />
                            <ActivityItem action="Minted" target="NFT #4021 on Base" time="Yesterday" />
                        </div>
                    </Card>
                </motion.div>

                {/* System Status / Quick Actions */}
                <motion.div variants={item} className="space-y-6">
                    <Card>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-neon-violet" />
                            Quick Actions
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="p-3 rounded-lg bg-white/5 hover:bg-neon-cyan/20 hover:text-neon-cyan transition-all text-sm font-mono border border-white/5 hover:border-neon-cyan/50">
                                New Project
                            </button>
                            <button className="p-3 rounded-lg bg-white/5 hover:bg-neon-violet/20 hover:text-neon-violet transition-all text-sm font-mono border border-white/5 hover:border-neon-violet/50">
                                Deploy
                            </button>
                            <button className="p-3 rounded-lg bg-white/5 hover:bg-neon-green/20 hover:text-neon-green transition-all text-sm font-mono border border-white/5 hover:border-neon-green/50">
                                Run Tests
                            </button>
                            <button className="p-3 rounded-lg bg-white/5 hover:bg-yellow-400/20 hover:text-yellow-400 transition-all text-sm font-mono border border-white/5 hover:border-yellow-400/50">
                                Docs
                            </button>
                        </div>
                    </Card>

                    <Card className="bg-gradient-to-br from-neon-violet/20 to-transparent border-neon-violet/30">
                        <h3 className="text-lg font-bold mb-2">Next Goal</h3>
                        <p className="text-sm text-gray-300 mb-3">Complete the Developer OS dashboard implementation.</p>
                        <div className="w-full bg-dark-bg rounded-full h-2">
                            <div className="bg-neon-violet h-2 rounded-full" style={{ width: '45%' }} />
                        </div>
                        <div className="flex justify-between text-xs font-mono mt-2 text-gray-400">
                            <span>Progress</span>
                            <span>45%</span>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Dashboard;
