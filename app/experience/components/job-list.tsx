'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

import { TimelineItem, type TimelineItemProps } from '@/components';

export interface StickyScrollContent extends TimelineItemProps {
  content?: React.ReactNode;
}

export const content: StickyScrollContent[] = [
  {
    title: 'Software Engineer @ TechCorp',
    dateTime: 'Jan 2020 - Present',
    description:
      'As a Software Engineer at TechCorp, I have spearheaded numerous projects that leverage cutting-edge technology to deliver innovative solutions. My role involves collaborating with cross-functional teams to design, develop, and deploy high-quality software products. Through agile methodologies and continuous integration practices, I ensure our solutions are scalable and maintainable. Key achievements include leading the development of a microservices architecture that improved system reliability and performance by 30%.',
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        TechCorp Experience
      </div>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff">
        <path d="m480-400-80-80 80-80 80 80-80 80Zm-85-235L295-735l185-185 185 185-100 100-85-85-85 85ZM225-295 40-480l185-185 100 100-85 85 85 85-100 100Zm510 0L635-395l85-85-85-85 100-100 185 185-185 185ZM480-40 295-225l100-100 85 85 85-85 100 100L480-40Z" />
      </svg>
    )
  },
  {
    title: 'Frontend Developer @ WebSolutions',
    dateTime: 'Mar 2018 - Dec 2019',
    description:
      'At WebSolutions, I worked as a Frontend Developer where I was responsible for creating responsive and user-friendly web interfaces. Utilizing technologies like React, Redux, and CSS-in-JS, I built dynamic web applications that enhanced user engagement and satisfaction. My contributions included optimizing page load times by 40% and implementing a design system that standardized UI components across projects. I also collaborated closely with UX designers to ensure the final product met user needs and business goals.',
    content: <div className="flex h-full w-full items-center justify-center text-white"></div>,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff">
        <path d="M312-312h144v-144H312v144Zm0-192h144v-144H312v144Zm192 192h144v-144H504v144Zm0-192h144v-144H504v144ZM168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm0-72h624v-432H168v432Zm0 0v-432 432Z" />
      </svg>
    )
  },
  {
    title: 'Backend Developer @ DataStream',
    dateTime: 'Jun 2016 - Feb 2018',
    description:
      'In my role as a Backend Developer at DataStream, I focused on building robust and scalable server-side applications. My expertise in Node.js, Express, and MongoDB allowed me to develop RESTful APIs that powered various client applications. I played a key role in migrating legacy systems to a modern stack, which resulted in a 50% reduction in server response times. Additionally, I implemented security best practices to protect sensitive data and ensure compliance with industry standards.',
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        DataStream Experience
      </div>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff">
        <path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-485q87 0 177.33-26.17 90.34-26.16 111.34-57.83-21.67-31-111.84-57.67-90.16-26.66-176.83-26.66-89 0-177.5 25.83T190.67-689q23.33 33.33 111.16 58.67Q389.67-605 480-605Zm-.67 209q42 0 83-4.33 41-4.34 78.5-12.84T712.17-434q33.83-12.33 61.16-27.67V-605q-28 15.33-61.83 27.67-33.83 12.33-71.67 20.83-37.83 8.5-78.16 13.17-40.34 4.66-82.34 4.66T396-543.33q-41.33-4.67-78.83-13.17t-70.84-20.83Q213-589.67 186.67-605v143.33Q213-446.33 246-434q33 12.33 70.5 20.83 37.5 8.5 78.83 12.84 41.34 4.33 84 4.33Zm.67 209.33q47.33 0 97.17-8 49.83-8 91.5-21.16Q710.33-229 739-245.17q28.67-16.16 34.33-33.16v-116Q746-379 712.17-367q-33.84 12-71.34 20.5t-78.16 12.83q-40.67 4.34-83.34 4.34-42.66 0-84-4.34Q354-338 316.5-346.5T246-367q-33-12-59.33-27.33v117q5 16.33 33.16 32.66Q248-228.33 290-215.5q42 12.83 92 20.83 50 8 98 8Z" />
      </svg>
    )
  },
  {
    title: 'Intern @ StartupHub',
    dateTime: 'Jan 2015 - May 2016',
    description:
      'During my internship at StartupHub, I gained hands-on experience in various aspects of software development. I contributed to both frontend and backend projects, learning the intricacies of full-stack development. My responsibilities included writing unit tests, debugging code, and participating in code reviews. This experience provided me with a solid foundation in software engineering principles and practices, and I was able to apply my academic knowledge to real-world projects effectively.',
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        StartupHub Experience
      </div>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff">
        <path d="M146.67-80q-27 0-46.84-19.83Q80-119.67 80-146.67v-466.66q0-27 19.83-46.84Q119.67-680 146.67-680H380v-133.33q0-27 19.83-46.84Q419.67-880 446.94-880h66.12q27.27 0 47.11 19.83Q580-840.33 580-813.33V-680h233.33q27 0 46.84 19.83Q880-640.33 880-613.33v466.66q0 27-19.83 46.84Q840.33-80 813.33-80H146.67Zm0-66.67h666.66v-466.66H580v20q0 29.66-19.83 48.16-19.84 18.5-47.11 18.5h-66.12q-27.27 0-47.11-18.5Q380-563.67 380-593.33v-20H146.67v466.66Zm88-98H474V-260q0-17.67-9.17-31.83Q455.67-306 440.67-312q-28-10.33-46.84-14.17Q375-330 356-330q-20.33 0-41.5 4.5T268.67-312q-15.67 6-24.84 20.17-9.16 14.16-9.16 31.83v15.33Zm330.66-64.66H732v-53.34H565.33v53.34ZM356-362.67q23.33 0 39.67-16.33Q412-395.33 412-418.67q0-23.33-16.33-39.66-16.34-16.34-39.67-16.34-23.33 0-39.67 16.34Q300-442 300-418.67q0 23.34 16.33 39.67 16.34 16.33 39.67 16.33Zm209.33-62H732V-478H565.33v53.33ZM446.67-593.33h66.66v-220h-66.66v220ZM480-380Z" />
      </svg>
    )
  }
];

export const JobList = () => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ['start start', 'end start']
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = useMemo(
    () => [
      'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
      'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
      'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))'
    ],
    []
  );

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      className="relative mb-32 flex h-[30rem] justify-center gap-4 space-x-10 overflow-hidden overflow-y-auto rounded-md pr-2"
      ref={ref}
    >
      <div className="relative flex w-full max-w-4xl items-start">
        <div className="size-full max-h-full pb-96">
          {content.map(({ title, description, dateTime, icon }, index) => (
            <TimelineItem
              key={`${title}-${index}`}
              active={activeCard === index}
              title={title}
              description={description}
              dateTime={dateTime?.toUpperCase()}
              icon={icon}
              baseColor={linearGradients[index % linearGradients.length]}
            />
          ))}
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className="sticky top-0 hidden h-full w-fit min-w-96 overflow-hidden rounded-md bg-white lg:block"
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
