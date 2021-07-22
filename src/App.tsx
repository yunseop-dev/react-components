import React from 'react';
import Accordion from './components/Accordion';
import NeumorphismCard from './components/NeumorphismCard';
import GlassmorphismCard from './components/GlassmorphismCard';
import BlurCard from './components/BlurCard';
import RotatingImageGallery from './components/RotatingImageGallery';
import ElasticLine from './components/ElasticLine';
import IsometricSocialMediaIcon from './components/IsometricSocialMediaIcon';
import LiquidText from './components/LiquidText';

const App: React.FC = () => {
  return (<>
    <Accordion />
    <div style={{ display: 'flex' }}>
      <NeumorphismCard />
      <GlassmorphismCard />
      <BlurCard />
    </div>
    <div>
      <RotatingImageGallery />
    </div>
    <div>
      <ElasticLine />
    </div>
    <div>
      <IsometricSocialMediaIcon />
    </div>
    <div>
      <LiquidText />
    </div>
  </>
  );
}

export default App;
