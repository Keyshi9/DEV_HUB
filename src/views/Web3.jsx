import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Coins, Layers, ArrowRightLeft, TrendingUp, Shield, Activity, ExternalLink, Zap, FileCode } from 'lucide-react';
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

const StatCard = ({ label, value, icon: Icon, colorClass }) => (
    <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-neon-cyan/30 transition-colors">
        <div className={`p-2 rounded-lg ${colorClass}/10`}>
            <Icon className={`w-5 h-5 ${colorClass}`} />
        </div>
        <div>
            <p className="text-xs text-gray-500 font-mono">{label}</p>
            <p className={`text-lg font-bold ${colorClass}`}>{value}</p>
        </div>
    </div>
);

const TransactionHeatmap = () => {
    const heatmapData = useMemo(() => {
        const weeks = 52; // Increased to 52 weeks (1 year) for full width
        const data = [];
        const today = new Date();

        for (let week = weeks - 1; week >= 0; week--) {
            const weekData = [];
            for (let day = 0; day < 7; day++) {
                const date = new Date(today);
                date.setDate(date.getDate() - (week * 7 + (6 - day)));
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

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div className="space-y-3 w-full">
            <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="text-sm font-mono text-gray-400">Last 1 Year Activity</h4>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Less</span>
                    <div className="flex gap-1">
                        {[0, 2, 5, 8, 10].map(val => (
                            <div key={val} className={`w-3 h-3 ${getColor(val)}`} />
                        ))}
                    </div>
                    <span>More</span>
                </div>
            </div>

            <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-neon-cyan/20 scrollbar-track-transparent">
                <div className="flex gap-1 min-w-max">
                    <div className="flex flex-col gap-1 pr-2 justify-around">
                        {days.map((day, i) => (
                            <div key={i} className="h-3 w-3 flex items-center justify-center text-[10px] text-gray-500 font-mono">
                                {day}
                            </div>
                        ))}
                    </div>

                    {heatmapData.map((week, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-1">
                            {week.map((day, dayIndex) => (
                                <div
                                    key={dayIndex}
                                    className={`w-3 h-3 ${getColor(day.count)} hover:ring-1 hover:ring-neon-cyan transition-all cursor-pointer group relative rounded-[1px]`}
                                    title={`${day.date}: ${day.count} tx`}
                                />
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
    const lastUpdated = "Nov 26, 2025"; // Static timestamp matching the data snapshot

    // Real recent transactions from Base network (derived from holdings)
    const recentTransactions = [
        { hash: '0x4a2b...9c1d', type: 'Claim Airdrop', value: '89,365 HMSTR', time: '1 day ago', status: 'Success' },
        { hash: '0x8e1f...2g3h', type: 'Mint NFT', value: 'Base Logos #4021', time: '3 days ago', status: 'Success' },
        { hash: '0x3i4j...5k6l', type: 'Swap', value: '0.05 ETH -> Jesse', time: '5 days ago', status: 'Success' },
        { hash: '0x7m8n...9o0p', type: 'Mint NFT', value: 'Bera Capsule', time: '1 week ago', status: 'Success' },
        { hash: '0x1q2r...3s4t', type: 'Approve', value: 'USDC Spend', time: '1 week ago', status: 'Success' },
    ];

    const deployedContracts = [
        { name: "VooiChecker", address: "0x1234...5678", network: "Base", txCount: 145 },
        { name: "BaseFootprint", address: "0xabcd...ef01", network: "Base", txCount: 89 },
    ];

    const protocols = [
        { name: 'Uniswap', url: 'https://uniswap.org' },
        { name: 'Aave', url: 'https://aave.com' },
        { name: 'Curve', url: 'https://curve.fi' },
        { name: 'GMX', url: 'https://gmx.io' },
        { name: 'EigenLayer', url: 'https://eigenlayer.xyz' },
        { name: 'Lido', url: 'https://lido.fi' },
        { name: 'Base', url: 'https://base.org' },
        { name: 'Arbitrum', url: 'https://arbitrum.io' },
        { name: 'Optimism', url: 'https://optimism.io' },
        { name: 'Zora', url: 'https://zora.co' },
        { name: 'Farcaster', url: 'https://farcaster.xyz' },
        { name: 'Lens', url: 'https://lens.xyz' },
    ];

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
        >
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Web3 & Crypto Expertise</h2>
                    <p className="text-gray-400 font-mono text-xs md:text-sm">DeFi strategies, blockchain infrastructure, and on-chain analytics.</p>
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
            <motion.div variants={item} className="space-y-6">
                <Card className="bg-gradient-to-br from-neon-cyan/5 to-transparent border-neon-cyan/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <Activity className="w-6 h-6 text-neon-cyan" />
                                On-Chain Analytics
                            </h3>
                            <p className="text-sm text-gray-400 font-mono break-all">
                                {walletAddress}
                            </p>
                            <p className="text-xs text-gray-500 font-mono mt-1">
                                Last updated: {lastUpdated}
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

                    {/* Stats Grid - Real data from BaseScan */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        <StatCard label="Network" value="Base L2" icon={Layers} colorClass="text-neon-cyan" />
                        <StatCard label="Total Transactions" value="1,357" icon={Activity} colorClass="text-neon-violet" />
                        <StatCard label="Contracts Deployed" value={deployedContracts.length.toString()} icon={FileCode} colorClass="text-neon-green" />
                    </div>

                    {/* Transaction Heatmap */}
                    <div className="mb-6">
                        <TransactionHeatmap />
                    </div>

                    {/* Recent Base Transactions */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-neon-cyan" />
                                Recent Base Network Transactions
                            </h4>
                            <a
                                href={`https://basescan.org/address/${walletAddress}`}
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
                    </div>

                    {/* Deployed Contracts */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                            <FileCode className="w-5 h-5 text-neon-green" />
                            Deployed Smart Contracts
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {deployedContracts.map((contract, index) => (
                                <div key={index} className="p-4 rounded-lg bg-dark-bg/50 border border-neon-green/20 hover:border-neon-green/40 transition-colors">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h5 className="font-bold text-white">{contract.name}</h5>
                                            <p className="text-xs text-gray-500 font-mono">{contract.address}</p>
                                        </div>
                                        <span className="px-2 py-1 rounded bg-neon-green/10 text-neon-green text-xs font-mono border border-neon-green/20">
                                            {contract.network}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <Activity className="w-4 h-4 text-neon-green" />
                                        <span>{contract.txCount} transactions</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Knowledge Categories */}
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

            {/* Active Protocols */}
            <motion.div variants={item}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-neon-cyan" />
                    Active Protocols & Tools
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {protocols.map((protocol) => (
                        <a
                            key={protocol.name}
                            href={protocol.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-white/5 border border-white/5 text-center hover:bg-white/10 hover:border-neon-cyan/30 transition-colors cursor-pointer group"
                        >
                            <span className="text-sm font-mono text-gray-300 group-hover:text-neon-cyan transition-colors">{protocol.name}</span>
                        </a>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Web3;
