import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Card from '../components/UI/Card';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            // EmailJS configuration
            // Replace these with your actual EmailJS credentials
            const serviceId = 'YOUR_SERVICE_ID';
            const templateId = 'YOUR_TEMPLATE_ID';
            const publicKey = 'YOUR_PUBLIC_KEY';

            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.'
            });
            setFormState({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try emailing me directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
        >
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get In Touch</h2>
                <p className="text-gray-400 font-mono text-sm md:text-base">
                    Interested in working together? Send me a message or reach out through any of these channels.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Email */}
                <a
                    href="mailto:contact@sow.dev"
                    className="group"
                >
                    <Card className="h-full text-center hover:border-neon-cyan/50 transition-all cursor-pointer">
                        <div className="p-4 rounded-full bg-neon-cyan/10 text-neon-cyan group-hover:bg-neon-cyan/20 transition-colors w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-white mb-2 text-lg">Email</h3>
                        <p className="text-sm text-gray-400 font-mono break-all">contact@sow.dev</p>
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
                    href="https://linkedin.com/in/sow"
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

            {/* Contact Form */}
            <Card className="bg-gradient-to-br from-neon-cyan/5 to-transparent border-neon-cyan/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Send className="w-6 h-6 text-neon-cyan" />
                    Send Me a Message
                </h3>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border text-white focus:border-neon-cyan focus:outline-none transition-colors font-mono text-sm"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border text-white focus:border-neon-cyan focus:outline-none transition-colors font-mono text-sm"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border text-white focus:border-neon-cyan focus:outline-none transition-colors font-mono text-sm resize-none"
                            placeholder="Tell me about your project or inquiry..."
                        />
                    </div>

                    {status.message && (
                        <div className={`p-4 rounded-lg flex items-center gap-3 ${status.type === 'success'
                                ? 'bg-neon-green/10 border border-neon-green/20 text-neon-green'
                                : 'bg-red-500/10 border border-red-500/20 text-red-400'
                            }`}>
                            {status.type === 'success' ? (
                                <CheckCircle className="w-5 h-5" />
                            ) : (
                                <AlertCircle className="w-5 h-5" />
                            )}
                            <p className="text-sm font-mono">{status.message}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-8 py-3 rounded-lg bg-neon-cyan text-dark-bg font-bold hover:bg-neon-cyan/90 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="w-5 h-5" />
                    </button>
                </form>

                <div className="mt-6 p-4 rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                    <p className="text-sm text-yellow-400 font-mono">
                        <strong>Note:</strong> To enable email functionality, configure EmailJS with your credentials in the Contact.jsx file.
                    </p>
                </div>
            </Card>

            <div className="mt-8 text-center">
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
