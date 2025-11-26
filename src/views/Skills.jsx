import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Database, Globe } from 'lucide-react';
import Card from '../components/UI/Card';

const SkillBar = ({ skill, level, colorClass }) => (
    <div className="space-y-2">
        <div className="flex justify-between items-center">
            <span className="text-sm font-mono text-gray-300">{skill}</span>
            <span className="text-xs text-gray-500">{level}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`h-2 rounded-full ${colorClass}`}
                style={{ width: `${level}%` }}
            />
        </div>
    </div>
);

const TechBadge = ({ name }) => (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-neon-cyan/30 transition-colors">
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
                        <SkillBar skill="JavaScript / TypeScript" level={90} colorClass="bg-neon-cyan" />
                        <SkillBar skill="Python" level={85} colorClass="bg-neon-violet" />
                        <SkillBar skill="Solidity" level={80} colorClass="bg-neon-green" />
                        <SkillBar skill="C++" level={75} colorClass="bg-yellow-400" />
                        <SkillBar skill="Java" level={70} colorClass="bg-neon-cyan" />
                        <SkillBar skill="SQL" level={85} colorClass="bg-neon-violet" />
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
        </motion.div>
    );
};

export default Skills;
