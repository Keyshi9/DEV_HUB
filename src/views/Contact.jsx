import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin, Send } from 'lucide-react';
import Card from '../components/UI/Card';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Initialize Connection</h2>
                <p className="text-gray-400 font-mono">
                    Ready to collaborate? Send a signal through the encrypted channels below.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-neon-cyan" />
                        Send Message
                    </h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-mono text-gray-400 mb-2">Identity</label>
                            <input
                                type="text"
                                className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-mono text-gray-400 mb-2">Frequency (Email)</label>
                            <input
                                type="email"
                                className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all"
                                placeholder="email@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-mono text-gray-400 mb-2">Transmission</label>
                            <textarea
                                rows="4"
                                className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all resize-none"
                                placeholder="Your message..."
                            />
                        </div>
                        <button className="w-full py-3 rounded-lg bg-neon-cyan text-dark-bg font-bold hover:bg-neon-cyan/90 transition-colors flex items-center justify-center gap-2">
                            <Send className="w-4 h-4" />
                            Transmit Data
                        </button>
                    </form>
                </Card>

                <div className="space-y-6">
                    <Card>
                        <h3 className="text-xl font-bold mb-6">Direct Channels</h3>
                        <div className="space-y-4">
                            <a href="#" className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                                <div className="p-2 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] group-hover:scale-110 transition-transform">
                                    <Twitter className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Twitter / X</h4>
                                    <p className="text-sm text-gray-400">@keyshi9</p>
                                </div>
                            </a>

                            <a href="#" className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                                <div className="p-2 rounded-full bg-white/10 text-white group-hover:scale-110 transition-transform">
                                    <Github className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">GitHub</h4>
                                    <p className="text-sm text-gray-400">github.com/keyshi9</p>
                                </div>
                            </a>

                            <a href="#" className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                                <div className="p-2 rounded-full bg-[#0077B5]/10 text-[#0077B5] group-hover:scale-110 transition-transform">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">LinkedIn</h4>
                                    <p className="text-sm text-gray-400">Connect professionally</p>
                                </div>
                            </a>
                        </div>
                    </Card>

                    <Card className="bg-gradient-to-br from-neon-green/10 to-transparent border-neon-green/20">
                        <h3 className="text-lg font-bold text-neon-green mb-2">Status</h3>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green"></span>
                            </span>
                            <span className="text-white font-mono text-sm">Open to Opportunities</span>
                        </div>
                    </Card>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
