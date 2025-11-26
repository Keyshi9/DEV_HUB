import React, { useState } from 'react';
import MainLayout from './components/Layout/MainLayout';
import Dashboard from './views/Dashboard';
import Projects from './views/Projects';
import Skills from './views/Skills';
import Web3 from './views/Web3';
import About from './views/About';
import Contact from './views/Contact';
import Terminal from './views/Terminal';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Dashboard />;
      case 'projects': return <Projects />;
      case 'skills': return <Skills />;
      case 'web3': return <Web3 />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'terminal': return <Terminal />;
      default: return <Dashboard />;
    }
  };

  return (
    <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </MainLayout>
  );
}

export default App;
