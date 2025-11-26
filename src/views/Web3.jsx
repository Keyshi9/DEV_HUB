import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Coins, Layers, ArrowRightLeft, Lock, TrendingUp, Wallet, Shield } from 'lucide-react';
import Card from '../components/UI/Card';

const CategoryCard = ({ icon: Icon, title, items, color }) => (
    <Card className="h-full hover:border-opacity-50 transition-all duration-300">
        <div className={`w-10 h-10 rounded-lg bg-${color}/10 flex items-center justify-center mb-4`}>
            <Icon className={`w-6 h-6 text-${color}`} />
        </div>
        <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${color}`} />
                    {item}
                </li>
            ))}
        </ul>
    </Card>
);

const Web3 = () => {
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
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Web3 Ecosystem</h2>
                    <p className="text-gray-400 font-mono text-sm">DeFi strategies, blockchain infrastructure, and on-chain analytics.</p>
                </div>
                <div className="flex gap-2">
                    <span className="px-3 py-1 rounded bg-neon-cyan/10 text-neon-cyan text-xs font-mono border border-neon-cyan/20">
                        EVM Compatible
                    </span>
                    <span className="px-3 py-1 rounded bg-neon-violet/10 text-neon-violet text-xs font-mono border border-neon-violet/20">
                        L2 Native
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div variants={item}>
                    <CategoryCard
                        icon={Coins}
                        title="DeFi & Yield"
                        color="neon-green"
                        items={['Liquidity Providing (LP)', 'Yield Farming', 'Staking / Restaking', 'Delta-neutral Strategies']}
                    />
                </motion.div>

                <motion.div variants={item}>
                    <CategoryCard
                        icon={ArrowRightLeft}
                        title="Trading & Exchange"
                        color="neon-cyan"
                        items={['DEX (Uniswap, GMX)', 'CEX (Binance, Bybit)', 'Bridges / Cross-chain', 'MEV Protection']}
                    />
                </motion.div>

                <motion.div variants={item}>
                    <CategoryCard
                        icon={Layers}
                        title="Infrastructure"
                        color="neon-violet"
                        items={['Layer 1 / Layer 2', 'Smart Contracts', 'Oracles (Chainlink)', 'Account Abstraction']}
                    />
                </motion.div>

                <motion.div variants={item}>
                    <CategoryCard
                        icon={TrendingUp}
                        title="Analytics & Assets"
                        color="yellow-400"
                        items={['On-chain Analytics', 'RWA (Real World Assets)', 'Airdrop Hunting', 'Portfolio Tracking']}
                    />
                </motion.div>
            </div>

            {/* Featured Protocols / Tools */}
            <motion.div variants={item}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-neon-cyan" />
                    Active Protocols & Tools
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {['Uniswap', 'Aave', 'Curve', 'GMX', 'EigenLayer', 'Lido', 'Base', 'Arbitrum', 'Optimism', 'Zora', 'Farcaster', 'Lens'].map((protocol) => (
                        <div key={protocol} className="p-3 rounded-lg bg-white/5 border border-white/5 text-center hover:bg-white/10 transition-colors cursor-pointer">
                            <span className="text-sm font-mono text-gray-300">{protocol}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Wallet / Status Section */}
            <motion.div variants={item}>
                <Card className="bg-gradient-to-r from-dark-card to-dark-bg border-neon-violet/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-neon-violet/10 text-neon-violet">
                                <Wallet className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Wallet Integration</h3>
                                <p className="text-sm text-gray-400">Connect your wallet to view personalized on-chain data.</p>
                            </div>
                        </div>
                        <button className="px-6 py-2 rounded-lg bg-neon-violet text-white font-bold hover:bg-neon-violet/80 transition-colors shadow-[0_0_15px_rgba(157,0,255,0.3)]">
                            Connect Wallet
                        </button>
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    );
};

export default Web3;
