'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

import { TimelineItem, type TimelineItemProps } from '@/components';

export interface StickyScrollContent extends TimelineItemProps {
  content?: React.ReactNode;
}

export const content: StickyScrollContent[] = [
  {
    icon: (
      <div className="size-full">
        <Image src="/fulbright-logo.jpeg" width="64" height="64" alt="Social Impact Catalyst" />
      </div>
    ),
    title: (
      <p>
        Intern at Marketing and Communications Team
        <br />@ <span className="text-[#ffad1d]">Fulbright University Vietnam</span>
      </p>
    ),
    dateTime: 'August 2023 - Present',
    description: (
      <ul className="flex flex-col gap-4 tracking-tight">
        <li>
          Creating content, designing and editing videos for school promotion, including school Facebook Page, Tiktok
          and Instagram. Highlighted sample with 1{' '}
          <a className="font-semibold" href="https://www.facebook.com/share/p/M1K4WcNQaJQMvm77/">
            post
          </a>{' '}
          and 1{' '}
          <a className="font-semibold" href="https://fb.watch/tvwQmFp95T/">
            video
          </a>
          <span>.</span>
        </li>
        <li>
          Main coordinator for Stage Preparation of Fulbright Convocation 2023, including managing and assisting new
          cohort talent performances, leading the backstage logistics such as sounds and lighting. The event is an
          important event of Fulbright with the scope of hundreds students and faculties, and 30+ strategic partners and
          donors.
        </li>
      </ul>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center border-[3px] border-[#ffad1d] text-white">
        <div className="loader absolute"></div>
        <div className="absolute">
          <iframe
            title="Facebook"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFulbrightUniVN%2Fposts%2Fpfbid02ai9VFVfFM1YSRb2f3fRTxDUyLB76yT7KaHniHrZVpb1raVhwwk83aBvnfkczytpcl&show_text=true&width=500"
            width="500"
            height="475"
            style={{ border: 'none', overflow: 'hidden' }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )
  },
  {
    icon: <Image src="/sic-logo.png" width="32" height="32" alt="Social Impact Catalyst" />,
    title: (
      <p>
        President @{' '}
        <a className="text-[#4472C4]" href="https://www.socialimpactcatalyst.org/">
          FUV Social Impact Catalyst Vietnam
        </a>
      </p>
    ),
    dateTime: 'January 2023 - Present',
    description: (
      <ul className="flex flex-col gap-4">
        <li>
          Co-building the FUV SIC’s mission and vision. As a school chapter of{' '}
          <a className="font-semibold text-[#4472C4]" href="https://www.socialimpactcatalyst.org/">
            Social Impact Catalyst
          </a>{' '}
          Singapore, FUV SIC runs as a form of student club with an aim to enhance social impact spirit for Fulbright
          students.
        </li>
        <li>
          Leading the team of 12 people to execute the flagship impact project -{' '}
          <a className="font-semibold text-[#4472C4]" href="https://www.facebook.com/fuvsic.ilmprogram">
            Impact Leader Mentorship Program
          </a>
          <span>.</span> Oversee all the process of the project including researching current needs of the target
          audience; validating the hypothesis, outlining the program’s key objectives, timeline and activities;
          executing 1.5 month program with the total of 5 mentor-mentee group.
        </li>
      </ul>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center border-[3px] border-[#4472C4] text-white">
        <Image
          src="/fuv-logo.jpg"
          width="940"
          height="788"
          className="size-full bg-opacity-10 object-cover shadow-lg group-hover/card:shadow-xl"
          alt="Social Impact Catalyst"
        />
      </div>
    )
  },
  {
    icon: (
      <div className="size-full">
        <Image src="/fulbright-logo.jpeg" width="64" height="64" alt="Social Impact Catalyst" />
      </div>
    ),
    title: (
      <p>
        Admissions Student Assistant Workstudy
        <br />@ <span className="text-[#ffad1d]">Fulbright University Vietnam</span>
      </p>
    ),
    dateTime: 'August 2021 - Present',
    description: (
      <ul className="flex flex-col gap-4">
        <li>
          Leading of a team of 7 people virtually, arrange all the process of Buddies program for 7 highschool students.
        </li>
        <li>
          Designing and editing videos for admissions promotion, highlighted samples with 1 ads running{' '}
          <a className="font-semibold" href="https://www.facebook.com/share/p/GfzP49X1AJBhnWaE/">
            post
          </a>{' '}
          and 1{' '}
          <a className="font-semibold" href="https://fb.watch/tvwQmFp95T/">
            video
          </a>
          <span>.</span>
        </li>
        <li>
          Working with large data and intensive information due to admission process. Working with lots of stake holders
          such as highschool students, undergraduate students and faculties along the way to process the tasks and
          timeline.
        </li>
      </ul>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center border-[3px] border-[#ffad1d] p-1">
        <div className="loader absolute"></div>
        <div className="absolute w-fit">
          <iframe
            title="Facebook"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRoadtoFUV%2Fposts%2Fpfbid02Lt7CVsFHZcvsyDKfjkY8RBTr3TbECrRwXGbxwHD7M9uh2P84CzY4AMqfB3zFp397l&show_text=true&width=500"
            width="500"
            height="475"
            style={{ border: 'none', overflow: 'hidden' }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )
  },
  {
    icon: (
      <div className="size-full">
        <Image src="/fulbright-logo.jpeg" width="64" height="64" alt="Social Impact Catalyst" />
      </div>
    ),
    title: (
      <p>
        Intern at Development and Strategic Initiatives Department
        <br />@ <span className="text-[#ffad1d]">Fulbright University Vietnam</span>
      </p>
    ),
    dateTime: 'August 2022 - August 2023',
    description: (
      <ul>
        <li>
          Main coordinator of Talent Giving at{' '}
          <a
            className="font-semibold"
            href="https://fulbright.edu.vn/fulbright-fun-run-2023-where-the-spirit-of-community-and-friendship-truly-shined/"
          >
            Fulbright Giving Week
          </a>
          <span>,</span> including manage all stakeholders involved in holding Giving Sessions and promote them to reach
          to the target of 2000 USD donation.
        </li>
        <li>
          Being in-charged of researching and outreaching leads of in-kind sponsors for the upcoming Fulbright Run Race
          with the expected volume of 20,000 online runners and 7,000 offline runners. Managing the whole 200 leads in
          the scope of reaching out, communicating, and enhancing partnerships.
        </li>
        <li>
          Being an ambassador for Fulbright students spirit and being the representative to meet high-class sponsors to
          share about Fulbright vision and mission. Deeply experiencing the bare roots of Fulbright initiatives to
          follow its vision.
        </li>
      </ul>
    ),
    content: (
      <div className="flex size-full items-center justify-center border-[3px] border-[#ffad1d] text-white">
        <Image
          src="/fulbright-fun-run.jpg"
          width="1680"
          height="1120"
          className="size-full bg-opacity-10 object-cover shadow-lg group-hover/card:shadow-xl"
          alt="Social Impact Catalyst"
        />
      </div>
    )
  },
  {
    icon: (
      <div className="size-full">
        <Image src="/fbc-logo.jpg" width="64" height="64" alt="Social Impact Catalyst" />
      </div>
    ),
    title: (
      <p>
        President @ <span className="text-[#00196e]">Fulbright University Business Club</span>
      </p>
    ),
    dateTime: 'August 2022 - August 2023',
    description: (
      <ul>
        <li>
          Main allocating all processes of FBC, including recruiting new members, planning the AY club timeline,
          managing human resources and club activities, as well as coordinating stakeholders in implementing club
          projects.
        </li>
        <li>
          Successfully completed the two-semester plan covering gathering 22 members, co-organized 6 internal training
          workshops, 3 external training workshops (1 C level and 2 Manager level), and 3 field trips to Companies
          (Shopee, VNG, Timo), other collaboration with external clubs and Fulbright departments; and enhencing club’s
          bonding with internal activities.
        </li>
        <li>
          Leading coreteam to initiate a full transition process including engagement, recruitment, training and
          reflection to sustainably encourage the young leaders to be enhancing the club’s vision and mission.
        </li>
      </ul>
    ),
    content: (
      <div className="flex size-full items-center justify-center border-[3px] border-[#1597BB] text-white">
        <Image
          src="/fbc-cv.jpg"
          width="1680"
          height="1120"
          className="size-full bg-opacity-10 object-cover shadow-lg group-hover/card:shadow-xl"
          alt="Social Impact Catalyst"
        />
      </div>
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

  const linearGradients = useMemo(() => ['#ffad1d', '#ffffff', '#ffad1d', '#ffad1d', '#1597BB'], []);

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      className="custom-scrollbar relative mb-32 flex h-[30rem] justify-center space-x-6 overflow-hidden overflow-y-auto rounded-md pr-2"
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
        className="sticky top-0 hidden h-full min-w-[500px] max-w-[500px] overflow-hidden rounded-md bg-white lg:block"
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
