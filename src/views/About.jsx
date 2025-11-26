import React from 'react';
import { motion } from 'framer-motion';
import { User, Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import Card from '../components/UI/Card';

const TimelineItem = ({ year, title, company, description }) => (
    <div className="relative pl-8 pb-8 border-l border-dark-border last:pb-0 last:border-0">
        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-neon-cyan" />
        <span className="text-xs font-mono text-neon-cyan mb-1 block">{year}</span>
        <h4 className="text-lg font-bold text-white">{title}</h4>
        <span className="text-sm text-gray-400 mb-2 block">{company}</span>
        <p className="text-sm text-gray-300">{description}</p>
    </div>
);

const About = () => {
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
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
                    <p className="text-gray-400 font-mono text-sm max-w-2xl">
                        Passionate Full Stack Developer & Web3 Engineer building decentralized applications and immersive digital experiences.
                    </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 transition-all font-mono text-sm border border-neon-cyan/20">
                    <Download className="w-4 h-4" />
                    Download CV
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <motion.div variants={item}>
                        <Card>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-neon-violet" />
                                Experience
                            </h3>
                            <div className="space-y-2">
                                <TimelineItem
                                    year="2023 - Present"
                                    title="Senior Web3 Developer"
                                    company="DeFi Protocol X"
                                    description="Leading smart contract development and frontend integration for a major DeFi protocol. Optimized gas usage by 30%."
                                />
                                <TimelineItem
                                    year="2021 - 2023"
                                    title="Full Stack Engineer"
                                    company="Tech Startup Y"
                                    description="Built scalable React applications and Node.js microservices. Implemented real-time features using WebSockets."
                                />
                                <TimelineItem
                                    year="2019 - 2021"
                                    title="Junior Developer"
                                    company="Digital Agency Z"
                                    description="Developed responsive websites and e-commerce platforms for various clients."
                                />
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div variants={item}>
                        <Card>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-neon-green" />
                                Education
                            </h3>
                            <div className="space-y-2">
                                <TimelineItem
                                    year="2015 - 2019"
                                    title="B.S. Computer Science"
                                    company="University of Technology"
                                    description="Focus on Algorithms, Data Structures, and Distributed Systems."
                                />
                            </div>
                        </Card>
                    </motion.div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <motion.div variants={item}>
                        <Card className="text-center">
                            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet p-1 mb-4">
                                <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center overflow-hidden">
                                    <User className="w-16 h-16 text-gray-400" />
                                    {/* Replace with actual image if available */}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white">Keyshi</h3>
                            <p className="text-neon-cyan font-mono text-sm mb-4">@keyshi9</p>
                            <div className="flex justify-center gap-2">
                                <span className="px-2 py-1 rounded bg-white/5 text-xs text-gray-300">Developer</span>
                                <span className="px-2 py-1 rounded bg-white/5 text-xs text-gray-300">Creator</span>
                                <span className="px-2 py-1 rounded bg-white/5 text-xs text-gray-300">Gamer</span>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div variants={item}>
                        <Card>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Award className="w-4 h-4 text-yellow-400" />
                                Certifications
                            </h3>
                            <ul className="space-y-3">
                                <li className="text-sm text-gray-300 flex justify-between">
                                    <span>AWS Certified Developer</span>
                                    <span className="text-gray-500">2023</span>
                                </li>
                                <li className="text-sm text-gray-300 flex justify-between">
                                    <span>EthGlobal Finalist</span>
                                    <span className="text-gray-500">2022</span>
                                </li>
                            </ul>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
