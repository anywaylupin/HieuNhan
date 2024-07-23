'use client';

import { Credits, FloatingNav, IconGitHub, IconLinkedin, IconMail } from '@/components';

import { About } from './about';
import { Experience } from './experience';
import { Hero } from './hero';
import { MY_EMAIL } from './constants';
import { Project } from './project';
import { useEffect } from 'react';

const navItems = [
  { name: 'Home', link: 'hero', component: Hero },
  { name: 'About', link: 'about', component: About },
  { name: 'Experience', link: 'experience', component: Experience },
  { name: 'Project', link: 'project', component: Project }
];

const externalLinkItems = [
  { name: 'Mail', link: `mailto:${MY_EMAIL}`, icon: <IconMail /> },
  { name: 'Linkedin', link: 'linkedin', icon: <IconLinkedin /> }
];

const Home = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <FloatingNav navItems={navItems} externalLinkItems={externalLinkItems} />

      <main className="relative z-20 flex size-full select-none flex-col items-center">
        {navItems.map(({ name, link, component: Component }, index) => (
          <Component key={`${name}-${index}`} id={link} className="relative w-full pt-20" />
        ))}

        <Credits id="credits" />
      </main>
    </>
  );
};

export default Home;
