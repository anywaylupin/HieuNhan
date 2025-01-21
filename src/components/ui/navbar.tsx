'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/utils/cn';

export const Navbar = ({ className, navItems }: PropsWithClass<{ navItems: { name: string; link: string }[] }>) => {
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
        className={cn('flex w-full', className)}
      >
        {navItems.map(({ name, link }, idx: number) => {
          const isActive = activeSection === link;

          return (
            <a
              key={`${name}-${idx}`}
              href={`${link}`}
              className={cn('px-8 py-4 transition hover:text-tertiary', {
                'text-tertiary': isActive
              })}
            >
              {name}
            </a>
          );
        })}
      </motion.nav>
    </AnimatePresence>
  );
};
