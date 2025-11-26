import React from 'react';
import Sidebar from './Sidebar';

const MainLayout = ({ children, activeTab, setActiveTab }) => {
    return (
        <div className="flex min-h-screen bg-dark-bg text-white font-sans selection:bg-neon-cyan/30 selection:text-neon-cyan">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="flex-1 ml-64 min-h-screen relative overflow-y-auto">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0 mix-blend-overlay"></div>
                <div className="relative z-10 p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
