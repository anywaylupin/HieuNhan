'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import type { Props } from '@/types';
import { cn } from '@/utils/cn';

declare interface FloatingNavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
  component?: JSX.Element | ((...args: any) => JSX.Element);
}

declare type FloatingNavProps = Props<{ navItems: FloatingNavItem[]; externalLinkItems?: FloatingNavItem[] }>;

export const FloatingNav = ({ navItems, externalLinkItems, className }: FloatingNavProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections: HTMLElement[] = [];

    navItems.forEach((navItem) => {
      const section = document.getElementById(navItem.link);
      if (section) {
        observer.observe(section);
        sectionRefs.current[navItem.link] = section;
        sections.push(section);
      }
    });

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [navItems]);

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn('fixed inset-x-0 z-40 mx-auto flex w-full items-center bg-white p-2.5 text-xl', className)}
      >
        {navItems.map(({ name, link }, idx: number) => {
          const isActive = activeSection === link;

          return (
            <a
              key={`${name}-${idx}`}
              href={`#${link}`}
              className={cn('px-8 py-4', { 'hover:text-tertiary text-black': !isActive })}
            >
              {name}
            </a>
          );
        })}

        <div className="ml-auto mr-6 flex h-full items-center">
          {externalLinkItems?.map(({ name, icon, link }, idx) => (
            <a key={`${name}-${idx}`} href={link} className="p-2">
              {icon}
            </a>
          ))}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
