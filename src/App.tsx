import React from 'react';
import Accordion from './components/Accordion';
import NeumorphismCard from './components/NeumorphismCard';
import GlassmorphismCard from './components/GlassmorphismCard';

const App: React.FC = () => {
  return (
    <div>
      <Accordion />
      <NeumorphismCard />
      <GlassmorphismCard />
    </div>
  );
}

export default App;
