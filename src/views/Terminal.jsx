import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', content: 'Welcome to DEV_OS Terminal v1.0.0' },
        { type: 'system', content: 'Type "help" to see available commands.' },
    ]);
    const inputRef = useRef(null);
    const endRef = useRef(null);

    const commands = {
        help: 'Available commands: help, about, projects, skills, contact, clear, date, whoami',
        about: 'Developer | Web3 Enthusiast | Creative Coder. Building the future of the web.',
        projects: 'Check out the Projects tab for a visual interface. Top projects: Vooi Checker, Base Footprint.',
        skills: 'Expertise in: React, Solidity, Node.js, Python, C++, and more.',
        contact: 'Email: contact@dev_os.local (Simulation)',
        date: new Date().toLocaleString(),
        whoami: 'guest@dev_os',
        sudo: 'Permission denied: You are not in the sudoers file. This incident will be reported.',
    };

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        if (trimmedCmd === 'clear') {
            setHistory([]);
            return;
        }

        const response = commands[trimmedCmd] || `Command not found: ${trimmedCmd}. Type "help" for assistance.`;

        setHistory(prev => [
            ...prev,
            { type: 'user', content: cmd },
            { type: 'system', content: response }
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) return;
        handleCommand(input);
        setInput('');
    };

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    return (
        <div className="h-full flex flex-col font-mono text-sm">
            <div className="flex items-center gap-2 mb-4 text-neon-green">
                <TerminalIcon className="w-5 h-5" />
                <span className="font-bold">TERMINAL_ACCESS</span>
            </div>

            <div
                className="flex-1 bg-black/80 rounded-lg border border-dark-border p-4 overflow-y-auto custom-scrollbar"
                onClick={() => inputRef.current?.focus()}
            >
                {history.map((entry, i) => (
                    <div key={i} className="mb-2">
                        {entry.type === 'user' ? (
                            <div className="flex gap-2 text-neon-cyan">
                                <span>➜</span>
                                <span>~</span>
                                <span className="text-white">{entry.content}</span>
                            </div>
                        ) : (
                            <div className="text-gray-300 whitespace-pre-wrap pl-6">
                                {entry.content}
                            </div>
                        )}
                    </div>
                ))}

                <form onSubmit={handleSubmit} className="flex gap-2 text-neon-cyan mt-2">
                    <span>➜</span>
                    <span>~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                        autoFocus
                    />
                </form>
                <div ref={endRef} />
            </div>

            <div className="mt-2 text-xs text-gray-500">
                Press Enter to submit command.
            </div>
        </div>
    );
};

export default Terminal;
