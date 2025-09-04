import LogoLoop from './Logo Loop/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import './LogoSection.css'; // make sure to import the css above

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

function LogoSection() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', padding: '50px 150px' }}>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <h3 className="trusted-heading" aria-label="Trusted Partners">
          <span className="reveal">Trusted&nbsp;</span>
          <span className="reveal">Partners</span>
        </h3>
      </div>

      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#050510"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default LogoSection;