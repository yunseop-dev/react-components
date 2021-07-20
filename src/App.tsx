import React from 'react';
import Accordion from './components/Accordion';
import NeumorphismCard from './components/NeumorphismCard';
import GlassmorphismCard from './components/GlassmorphismCard';
import BlurCard from './components/BlurCard';

const App: React.FC = () => {
  return (<>
    <Accordion />
    <div style={{ display: 'flex' }}>
      <NeumorphismCard />
      <GlassmorphismCard />
      <BlurCard />
    </div>
  </>
  );
}

export default App;
