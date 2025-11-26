import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Cpu } from 'lucide-react';
import Card from '../components/UI/Card';

const SkillBar = ({ name, level, color }) => (
    <div className="mb-4">
        <div className="flex justify-between mb-1">
            <span className="text-sm font-mono text-gray-300">{name}</span>
            <span className="text-xs font-mono text-gray-500">{level}%</span>
        </div>
        <div className="w-full bg-dark-bg rounded-full h-2 overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`h-full bg-${color}`}
            />
        </div>
    </div>
);

const SkillBadge = ({ name, color }) => (
    <span className={`px-3 py-1 rounded-full text-xs font-mono border border-${color}/30 bg-${color}/10 text-${color} hover:bg-${color}/20 transition-colors cursor-default`}>
        {name}
    </span>
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

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
        >
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Technical Arsenal</h2>
                <p className="text-gray-400 font-mono text-sm">Proficiency levels and technology stack.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Core Languages */}
                <motion.div variants={item}>
                    <Card className="h-full">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Code className="w-5 h-5 text-neon-cyan" />
                            Core Languages
                        </h3>
                        <SkillBar name="JavaScript / TypeScript" level={95} color="neon-cyan" />
                        <SkillBar name="Python" level={90} color="neon-violet" />
                        <SkillBar name="Solidity" level={85} color="neon-green" />
                        <SkillBar name="C++" level={70} color="blue-500" />
                        <SkillBar name="Java" level={65} color="red-500" />
                    </Card>
                </motion.div>

                {/* Frontend & Backend */}
                <motion.div variants={item} className="space-y-6">
                    <Card>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Layout className="w-5 h-5 text-neon-violet" />
                            Frontend Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <SkillBadge name="React" color="neon-cyan" />
                            <SkillBadge name="Next.js" color="white" />
                            <SkillBadge name="Tailwind CSS" color="neon-cyan" />
                            <SkillBadge name="Framer Motion" color="neon-violet" />
                            <SkillBadge name="Three.js" color="white" />
                            <SkillBadge name="Vite" color="neon-green" />
                        </div>
                    </Card>

                    <Card>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Server className="w-5 h-5 text-neon-green" />
                            Backend & Data
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <SkillBadge name="Node.js" color="neon-green" />
                            <SkillBadge name="Express" color="white" />
                            <SkillBadge name="SQL / PostgreSQL" color="blue-400" />
                            <SkillBadge name="MongoDB" color="green-500" />
                            <SkillBadge name="GraphQL" color="neon-violet" />
                            <SkillBadge name="Firebase" color="yellow-500" />
                        </div>
                    </Card>
                </motion.div>
            </div>

            {/* Web3 Specialization */}
            <motion.div variants={item}>
                <Card className="border-neon-cyan/30 bg-neon-cyan/5">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-bold flex items-center gap-2 text-white">
                                <Cpu className="w-5 h-5 text-neon-cyan" />
                                Web3 Engineering
                            </h3>
                            <p className="text-sm text-gray-400 mt-1">Specialized blockchain development skills.</p>
                        </div>
                        <div className="px-3 py-1 rounded bg-neon-cyan/20 text-neon-cyan text-xs font-mono border border-neon-cyan/30">
                            FOCUS AREA
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-lg bg-dark-bg/50 border border-dark-border">
                            <h4 className="font-bold text-white mb-2">Smart Contracts</h4>
                            <p className="text-xs text-gray-400 mb-3">Development, testing, and deployment of secure contracts.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs text-neon-cyan">#Solidity</span>
                                <span className="text-xs text-neon-cyan">#Hardhat</span>
                                <span className="text-xs text-neon-cyan">#Foundry</span>
                            </div>
                        </div>
                        <div className="p-4 rounded-lg bg-dark-bg/50 border border-dark-border">
                            <h4 className="font-bold text-white mb-2">DeFi Protocols</h4>
                            <p className="text-xs text-gray-400 mb-3">Understanding of AMMs, Lending, and Yield strategies.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs text-neon-violet">#Uniswap</span>
                                <span className="text-xs text-neon-violet">#Aave</span>
                                <span className="text-xs text-neon-violet">#Curve</span>
                            </div>
                        </div>
                        <div className="p-4 rounded-lg bg-dark-bg/50 border border-dark-border">
                            <h4 className="font-bold text-white mb-2">Integration</h4>
                            <p className="text-xs text-gray-400 mb-3">Connecting frontends to blockchain networks.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs text-neon-green">#Ethers.js</span>
                                <span className="text-xs text-neon-green">#Wagmi</span>
                                <span className="text-xs text-neon-green">#Viem</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    );
};

export default Skills;
