import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Database, Globe, TrendingUp, ExternalLink } from 'lucide-react';
import Card from '../components/UI/Card';

const SkillBar = ({ skill, level, color }) => (
    <div className="space-y-2">
        <div className="flex justify-between items-center">
            <span className="text-sm font-mono text-gray-300">{skill}</span>
            <span className="text-xs text-gray-500">{level}%</span>
        </div>
        <div className="w-full bg-dark-bg rounded-full h-2">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`h-2 rounded-full bg-${color}`}
            />
        </div>
    </div>
);

const TechBadge = ({ name, icon: Icon }) => (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-neon-cyan/30 transition-colors">
        {Icon && <Icon className="w-4 h-4 text-neon-cyan" />}
        <span className="text-sm font-mono text-gray-300">{name}</span>
    </div>
);

const Skills = () => {
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

    // Recent Base transactions (simulated data)
    const recentTransactions = [
        { hash: '0x1a2b...3c4d', type: 'Contract Deploy', value: '0.05 ETH', time: '2 hours ago', status: 'Success' },
        { hash: '0x5e6f...7g8h', type: 'Token Transfer', value: '100 USDC', time: '5 hours ago', status: 'Success' },
        { hash: '0x9i0j...1k2l', type: 'Swap', value: '0.1 ETH', time: '1 day ago', status: 'Success' },
        { hash: '0x3m4n...5o6p', type: 'NFT Mint', value: '0.02 ETH', time: '2 days ago', status: 'Success' },
        { hash: '0x7q8r...9s0t', type: 'LP Add', value: '0.5 ETH', time: '3 days ago', status: 'Success' },
    ];

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
        >
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Technical Skills</h2>
                <p className="text-gray-400 font-mono text-xs md:text-sm">Full-stack development expertise across web, software, and blockchain technologies.</p>
            </div>

            {/* Core Programming Languages */}
            <motion.div variants={item}>
                <Card>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Code className="w-6 h-6 text-neon-cyan" />
                        Core Programming Languages
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SkillBar skill="JavaScript / TypeScript" level={90} color="neon-cyan" />
                        <SkillBar skill="Python" level={85} color="neon-violet" />
                        <SkillBar skill="Solidity" level={80} color="neon-green" />
                        <SkillBar skill="C++" level={75} color="yellow-400" />
                        <SkillBar skill="Java" level={70} color="neon-cyan" />
                        <SkillBar skill="SQL" level={85} color="neon-violet" />
                    </div>
                </Card>
            </motion.div>

            {/* Web Development */}
            <motion.div variants={item}>
                <Card>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Globe className="w-6 h-6 text-neon-violet" />
                        Web Development
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <TechBadge name="React" />
                        <TechBadge name="Next.js" />
                        <TechBadge name="Tailwind CSS" />
                        <TechBadge name="Framer Motion" />
                        <TechBadge name="Three.js" />
                        <TechBadge name="Vite" />
                        <TechBadge name="HTML/CSS" />
                        <TechBadge name="XML/JSON" />
                    </div>
                </Card>
            </motion.div>

            {/* Backend & Database */}
            <motion.div variants={item}>
                <Card>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Database className="w-6 h-6 text-neon-green" />
                        Backend & Database
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <TechBadge name="Node.js" />
                        <TechBadge name="Express" />
                        <TechBadge name="PostgreSQL" />
                        <TechBadge name="MongoDB" />
                        <TechBadge name="GraphQL" />
                        <TechBadge name="Firebase" />
                        <TechBadge name="PHP" />
                        <TechBadge name="REST APIs" />
                    </div>
                </Card>
            </motion.div>

            {/* Web3 & Blockchain */}
            <motion.div variants={item}>
                <Card>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Layers className="w-6 h-6 text-yellow-400" />
                        Web3 & Blockchain
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <TechBadge name="Solidity" />
                        <TechBadge name="Hardhat" />
                        <TechBadge name="Foundry" />
                        <TechBadge name="Ethers.js" />
                        <TechBadge name="Wagmi" />
                        <TechBadge name="Viem" />
                        <TechBadge name="Smart Contracts" />
                        <TechBadge name="DeFi Protocols" />
                    </div>
                </Card>
            </motion.div>

            {/* Recent Base Transactions */}
            <motion.div variants={item}>
                <Card className="bg-gradient-to-br from-neon-cyan/5 to-transparent border-neon-cyan/20">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <TrendingUp className="w-6 h-6 text-neon-cyan" />
                            Recent Base Network Transactions
                        </h3>
                        <a
                            href="https://basescan.org/address/0x78db3729E58EcB6BDFd32e13801e197399b55d45"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-neon-cyan hover:text-white flex items-center gap-1"
                        >
                            View All <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-dark-border">
                                    <th className="text-left py-3 px-4 font-mono text-gray-400 text-xs">TX Hash</th>
                                    <th className="text-left py-3 px-4 font-mono text-gray-400 text-xs">Type</th>
                                    <th className="text-left py-3 px-4 font-mono text-gray-400 text-xs">Value</th>
                                    <th className="text-left py-3 px-4 font-mono text-gray-400 text-xs">Time</th>
                                    <th className="text-left py-3 px-4 font-mono text-gray-400 text-xs">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentTransactions.map((tx, index) => (
                                    <tr key={index} className="border-b border-dark-border/50 hover:bg-white/5 transition-colors">
                                        <td className="py-3 px-4 font-mono text-neon-cyan text-xs">{tx.hash}</td>
                                        <td className="py-3 px-4 text-gray-300">{tx.type}</td>
                                        <td className="py-3 px-4 font-mono text-gray-300">{tx.value}</td>
                                        <td className="py-3 px-4 text-gray-500 text-xs">{tx.time}</td>
                                        <td className="py-3 px-4">
                                            <span className="px-2 py-1 rounded bg-neon-green/10 text-neon-green text-xs font-mono border border-neon-green/20">
                                                {tx.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    );
};

export default Skills;
