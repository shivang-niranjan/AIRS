import Navbar from './components/Navbar';
import Starfield from './components/Starfield';

import CoreIntelligence from './sections/CoreIntelligence';
import Dashboard from './sections/Dashboard';
import RiskMatrix from './sections/RiskMatrix';
import Hotspots from './sections/Hotspots';
import ActionPlan from './sections/ActionPlan';
import RiskAnalytics from './sections/RiskAnalytics';
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

        <div id="core-intelligence">
          <CoreIntelligence />
        </div>
        <Dashboard />
        <RiskMatrix />
        <Hotspots />
        <ActionPlan />
        <RiskAnalytics />
      </main>
      <Footer />
    </div>
  );
}

export default App;
