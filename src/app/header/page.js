'use client';

import Dock from './components/Dock';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';

export default function HomePage() {
  const items = [
    { icon: <VscHome size={18} color="#fff" />, label: 'Home', onClick: () => alert('Home!') }, /* Added color prop */
    { icon: <VscArchive size={18} color="#fff" />, label: 'Archive', onClick: () => alert('Archive!') }, /* Added color prop */
    { icon: <VscAccount size={18} color="#fff" />, label: 'Profile', onClick: () => alert('Profile!') }, /* Added color prop */
    { icon: <VscSettingsGear size={18} color="#fff" />, label: 'Settings', onClick: () => alert('Settings!') }, /* Added color prop */
  ];

  return (
    <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '2rem' }}>
      <Dock 
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}