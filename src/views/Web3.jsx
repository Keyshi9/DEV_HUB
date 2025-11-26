import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Globe, Coins, Layers, ArrowRightLeft, TrendingUp, Shield, Activity, ExternalLink, Zap, Calendar } from 'lucide-react';
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

const StatCard = ({ label, value, icon: Icon, color }) => (
    <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-neon-cyan/30 transition-colors">
        <div className={`p-2 rounded-lg bg-${color}/10`}>
            <Icon className={`w-5 h-5 text-${color}`} />
        </div>
        <div>
            <p className="text-xs text-gray-500 font-mono">{label}</p>
            <p className={`text-lg font-bold text-${color}`}>{value}</p>
        </div>
    </div>
);

const TransactionHeatmap = () => {
    // Generate heatmap data for the last 12 weeks
    const heatmapData = useMemo(() => {
        const weeks = 12;
        const data = [];
        const today = new Date();

        for (let week = weeks - 1; week >= 0; week--) {
            const weekData = [];
            for (let day = 0; day < 7; day++) {
                const date = new Date(today);
                date.setDate(date.getDate() - (week * 7 + (6 - day)));

                // Simulate transaction activity (0-10 transactions per day)
                const txCount = Math.floor(Math.random() * 11);
                weekData.push({
                    date: date.toISOString().split('T')[0],
                    count: txCount,
                    day: date.getDay()
                });
            }
            data.push(weekData);
        }
        return data;
    }, []);

    const getColor = (count) => {
        if (count === 0) return 'bg-white/5';
        if (count <= 2) return 'bg-neon-cyan/20';
        if (count <= 5) return 'bg-neon-cyan/40';
        if (count <= 8) return 'bg-neon-cyan/60';
        return 'bg-neon-cyan/80';
    };

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h4 className="text-sm font-mono text-gray-400">Transaction Activity (Last 12 Weeks)</h4>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-sm bg-white/5" />
                        <div className="w-3 h-3 rounded-sm bg-neon-cyan/20" />
                        <div className="w-3 h-3 rounded-sm bg-neon-cyan/40" />
                        <div className="w-3 h-3 rounded-sm bg-neon-cyan/60" />
                        <div className="w-3 h-3 rounded-sm bg-neon-cyan/80" />
                    </div>
                    <span>More</span>
                </div>
            </div>

            <div className="overflow-x-auto pb-2">
                <div className="flex gap-1 min-w-max">
                    {/* Day labels */}
                    <div className="flex flex-col gap-1 pr-2">
                        {days.map((day, i) => (
                            <div key={day} className="h-3 flex items-center">
                                {i % 2 === 1 && (
                                    <span className="text-[10px] text-gray-500 font-mono">{day}</span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Heatmap grid */}
                    {heatmapData.map((week, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-1">
                            {week.map((day, dayIndex) => (
                                <div
                                    key={dayIndex}
                                    className={`w-3 h-3 rounded-sm ${getColor(day.count)} hover:ring-1 hover:ring-neon-cyan transition-all cursor-pointer group relative`}
                                    title={`${day.date}: ${day.count} transactions`}
                                >
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-dark-card border border-neon-cyan/20 rounded text-xs text-white font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                        {day.date}: {day.count} tx
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

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

    const walletAddress = "0x78db3729E58EcB6BDFd32e13801e197399b55d45";

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
        >
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Web3 & Crypto Expertise</h2>
                    <p className="text-gray-400 font-mono text-xs md:text-sm">DeFi strategies, blockchain infrastructure, and on-chain analytics knowledge.</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded bg-neon-cyan/10 text-neon-cyan text-xs font-mono border border-neon-cyan/20">
                        EVM Compatible
                    </span>
                    <span className="px-3 py-1 rounded bg-neon-violet/10 text-neon-violet text-xs font-mono border border-neon-violet/20">
                        L2 Native
                    </span>
                </div>
            </div>

            {/* Blockchain Analytics Section */}
            <motion.div variants={item}>
                <Card className="bg-gradient-to-br from-neon-cyan/5 to-transparent border-neon-cyan/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <Activity className="w-6 h-6 text-neon-cyan" />
                                On-Chain Analytics
                            </h3>
                            <p className="text-sm text-gray-400 font-mono break-all">
                                Base Network: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                            </p>
                        </div>
                        <a
                            href={`https://basescan.org/address/${walletAddress}#analytics`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 transition-all border border-neon-cyan/20 font-mono text-sm w-fit"
                        >
                            View on BaseScan <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <StatCard label="Network" value="Base L2" icon={Layers} color="neon-cyan" />
                        <StatCard label="Active Since" value="2024" icon={Zap} color="neon-violet" />
                        <StatCard label="Transactions" value="Active" icon={Activity} color="neon-green" />
                        <StatCard label="DeFi Protocols" value="Multiple" icon={Coins} color="yellow-400" />
                    </div>

                    {/* Transaction Heatmap */}
                    <div className="p-4 rounded-lg bg-dark-bg/50 border border-neon-cyan/10 mb-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Calendar className="w-5 h-5 text-neon-cyan" />
                            <h4 className="text-lg font-bold text-white">Transaction Heatmap</h4>
                        </div>
                        <TransactionHeatmap />
                    </div>

                    <div className="p-4 rounded-lg bg-dark-bg/50 border border-neon-cyan/10">
                        <p className="text-sm text-gray-300 mb-2">
                            <span className="text-neon-cyan font-bold">Live Analytics:</span> Track real-time on-chain activity, transaction history, and DeFi interactions on Base network.
                        </p>
                        <p className="text-xs text-gray-500 font-mono">
                            Analytics include: Transaction volume, Gas usage, Token transfers, Smart contract interactions, NFT activity
                        </p>
                    </div>
                </Card>
            </motion.div>

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
        </motion.div>
    );
};

export default Web3;
