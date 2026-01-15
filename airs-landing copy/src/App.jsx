import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Starfield from './components/Starfield';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import CoreIntelligence from './sections/CoreIntelligence';
import Dashboard from './sections/Dashboard';
import RiskMatrix from './sections/RiskMatrix';
import Hotspots from './sections/Hotspots';
import ActionPlan from './sections/ActionPlan';
import Footer from './components/Footer';
import useScrollAnimation from './hooks/useScrollAnimation';
import './index.css';

function App() {
  useScrollAnimation();

  return (
    <div className="app-container">
      <Starfield />
      <Navbar />

      <main className="content">
        <Hero />
        <Problem />
        <div id="core-intelligence">
          <CoreIntelligence />
        </div>
        <Dashboard />
        <RiskMatrix />
        <Hotspots />
        <ActionPlan />
      </main>
      <Footer />
    </div>
  );
}

export default App;
