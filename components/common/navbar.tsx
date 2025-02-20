'use client';

import content from '@/content/resume';

import { FloatingDock } from '../ui';
import { ThemeSwitch } from 'nextra-theme-blog';

export const Navbar = () => {
  const navItems = [...content.navbar, { title: 'Theme', icon: <ThemeSwitch /> }];

  return (
    <nav className="fixed right-8 bottom-4 z-50 flex max-h-max origin-bottom items-center justify-center md:right-auto">
      <FloatingDock className="border shadow" mobileClassName="-translate-y-10" items={navItems} />
    </nav>
  );
};
