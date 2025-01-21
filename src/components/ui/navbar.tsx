'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { IconGitHub, IconLinkedin, IconMail } from '@/components/icons';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/utils/cn';

const navItems = [
  { name: 'Home', link: '/#hero' },
  { name: 'About', link: '/#about' },
  { name: 'Experience', link: '/#experience' },
  { name: 'Blog', link: '/blog' }
];

const externalLinks = [
  { name: 'Mail', link: `mailto:${'nhansocok@gmail.com'}`, icon: IconMail },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/hieunhannguyen/',
    icon: IconLinkedin
  },
  {
    name: 'GitHub',
    link: 'https://github.com/anywaylupin/HieuNhan',
    icon: IconGitHub
  }
];

export const Navbar = ({ className }: PropsWithClass) => {
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
              href={`${link}`}
              className={cn('px-8 py-4 transition hover:text-tertiary', {
                'text-tertiary': isActive
              })}
            >
              {name}
            </a>
          );
        })}

        <div className="ml-auto mr-6 flex h-full items-center">
          {externalLinks?.map(({ name, icon: Icon, link }, idx) => (
            <a key={`${name}-${idx}`} href={link} target={link.startsWith('mailto') ? '' : '_blank'} className="p-2">
              <Icon className="transition hover:text-tertiary" />
            </a>
          ))}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
