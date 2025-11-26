import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import Card from '../components/UI/Card';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
        >
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get In Touch</h2>
                <p className="text-gray-400 font-mono text-sm md:text-base">
                    Interested in working together? Feel free to reach out through any of these channels.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Email */}
                <a
                    href="mailto:contact@keyshi.dev"
                    className="group"
                >
                    <Card className="h-full text-center hover:border-neon-cyan/50 transition-all cursor-pointer">
                        <div className="p-4 rounded-full bg-neon-cyan/10 text-neon-cyan group-hover:bg-neon-cyan/20 transition-colors w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-white mb-2 text-lg">Email</h3>
                        <p className="text-sm text-gray-400 font-mono break-all">contact@keyshi.dev</p>
                    </Card>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/keyshi9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <Card className="h-full text-center hover:border-neon-violet/50 transition-all cursor-pointer">
                        <div className="p-4 rounded-full bg-neon-violet/10 text-neon-violet group-hover:bg-neon-violet/20 transition-colors w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <Github className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-white mb-2 text-lg">GitHub</h3>
                        <p className="text-sm text-gray-400 font-mono">@keyshi9</p>
                    </Card>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://linkedin.com/in/keyshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <Card className="h-full text-center hover:border-neon-green/50 transition-all cursor-pointer">
                        <div className="p-4 rounded-full bg-neon-green/10 text-neon-green group-hover:bg-neon-green/20 transition-colors w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <Linkedin className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-white mb-2 text-lg">LinkedIn</h3>
                        <p className="text-sm text-gray-400 font-mono">Connect professionally</p>
                    </Card>
                </a>
            </div>

            <div className="mt-12 text-center">
                <Card className="bg-gradient-to-br from-neon-cyan/10 to-transparent border-neon-cyan/20">
                    <p className="text-gray-300 text-sm md:text-base">
                        <span className="text-neon-cyan font-bold">Open to opportunities</span> —
                        Available for freelance projects, collaborations, and full-time positions in Web3/DeFi.
                    </p>
                </Card>
            </div>
        </motion.div>
    );
};

export default Contact;
