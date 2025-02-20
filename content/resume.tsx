import { IconArticle, IconBrandGithub, IconBrandLinkedin, IconHome, IconMail, IconWorld } from '@/components/icons';

const resume = {
  name: 'Nhân',
  shortname: 'Nhân Nguyễn',
  fullname: 'Nguyễn Chơn Trọng Nhân',
  initials: 'NCTN',
  domain: 'https://anywaylupin.vercel.app',
  greetings: ['Hi', 'Hello', 'Howdy', 'Hey'],
  description:
    "Conjuring magic through code. Currently thriving as a Frontend Developer at TotallyAwesome, I'm on a part-time journey to become a master problem-solver.",
  about:
    "Hello! I'm Lupin—a dedicated problem-solver who thrives in collaborative settings. My childhood dream of becoming a Robotics engineer still inspires me. I am fascinated by the potential of robots and AI to address challenges in our lives. With a growing expertise in coding and computer science, I aim to develop innovative solutions. I also enjoy sports, music, and gaming, which keep me balanced and motivated.",
  experience: [
    {
      title: (
        <p>
          Intern at Marketing and Communications Team
          <br />@ <span className="text-[#ffad1d]">Fulbright University Vietnam</span>
        </p>
      ),
      company: 'TotallyAwesome',
      logo: '/totally-awesome.jpg',
      dates: 'August 2023 - Present',
      badges: [
        { title: 'Website', icon: IconWorld, href: 'https://www.totallyawesome.tv' },
        { title: 'Linkedin', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/company/totallyawesome' }
      ],
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
            important event of Fulbright with the scope of hundreds students and faculties, and 30+ strategic partners
            and donors.
          </li>
        </ul>
      )
    },
    {
      title: (
        <p>
          President @{' '}
          <a className="text-[#4472C4]" href="https://www.socialimpactcatalyst.org/">
            FUV Social Impact Catalyst Vietnam
          </a>
        </p>
      ),
      company: 'FUV Social Impact Catalyst Vietnam',
      logo: '/images/sic-logo.png',
      dates: 'January 2023 - Present',
      badges: [
        { title: 'Website', icon: IconWorld, href: 'https://pacificlinks.org' },
        { title: 'Linkedin', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/company/pacificlinks' }
      ],
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
      )
    },
    {
      title: (
        <p>
          Admissions Student Assistant Workstudy
          <br />@ <span className="text-[#ffad1d]">Fulbright University Vietnam</span>
        </p>
      ),
      company: 'FUV Social Impact Catalyst Vietnam',
      logo: '/images/sic-logo.png',
      dates: 'August 2021 - Present',
      badges: [
        { title: 'Website', icon: IconWorld, href: 'https://pacificlinks.org' },
        { title: 'Linkedin', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/company/pacificlinks' }
      ],
      description: (
        <ul className="flex flex-col gap-4">
          <li>
            Leading of a team of 7 people virtually, arrange all the process of Buddies program for 7 highschool
            students.
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
            Working with large data and intensive information due to admission process. Working with lots of stake
            holders such as highschool students, undergraduate students and faculties along the way to process the tasks
            and timeline.
          </li>
        </ul>
      )
    },
    {
      title: (
        <p>
          Intern at Development and Strategic Initiatives Department
          <br />@ <span className="text-[#ffad1d]">Fulbright University Vietnam</span>
        </p>
      ),
      company: 'FUV Social Impact Catalyst Vietnam',
      logo: '/images/fulbright-logo.jpeg',
      dates: 'August 2022 - August 2023',
      badges: [
        { title: 'Website', icon: IconWorld, href: 'https://pacificlinks.org' },
        { title: 'Linkedin', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/company/pacificlinks' }
      ],
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
            <span>,</span> including manage all stakeholders involved in holding Giving Sessions and promote them to
            reach to the target of 2000 USD donation.
          </li>
          <li>
            Being in-charged of researching and outreaching leads of in-kind sponsors for the upcoming Fulbright Run
            Race with the expected volume of 20,000 online runners and 7,000 offline runners. Managing the whole 200
            leads in the scope of reaching out, communicating, and enhancing partnerships.
          </li>
          <li>
            Being an ambassador for Fulbright students spirit and being the representative to meet high-class sponsors
            to share about Fulbright vision and mission. Deeply experiencing the bare roots of Fulbright initiatives to
            follow its vision.
          </li>
        </ul>
      )
    },
    {
      title: (
        <p>
          President @ <span className="text-[#00196e]">Fulbright University Business Club</span>
        </p>
      ),
      company: 'FUV Social Impact Catalyst Vietnam',
      logo: '/images/fbc-logo.jpg',
      dates: 'August 2022 - August 2023',
      badges: [
        { title: 'Website', icon: IconWorld, href: 'https://pacificlinks.org' },
        { title: 'Linkedin', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/company/pacificlinks' }
      ],
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
      )
    }
  ],
  skills: ['React', 'Next.js', 'Typescript', 'Node.js', 'Python'],
  projects: [
    {
      title: 'Shopper Landing Page',
      image: '/shopper.png',
      description:
        'Showcasing a dynamic ad banner platform with a demo preview. Users can visualize banners in various sizes and product amounts, with the ability to scrape data from e-commerce sites for potential real-time updates.',
      tags: ['Next.js', 'TailwindCSS', 'Phaser', 'GSAP', 'Shadcn UI', 'Aceternity UI', 'Embla Carousel'],
      website: 'https://slp-dev.vercel.app',
      highlight: '#0047CB'
    },
    {
      title: 'ChopKyHoa',
      image: '/chopkyhoa.png',
      description:
        'Interactive portfolio for a pickleball coach showcasing programs and client testimonials. Features smooth horizontal scrolling and booking options for a seamless user experience.',
      tags: ['Next.js', 'TailwindCSS', 'Shadcn UI', 'GSAP', 'Nodemailer'],
      website: 'https://thaivanthuc.vercel.app',
      github: 'https://github.com/anywaylupin/ChopKyHoa',
      highlight: '#d7ff01'
    },
    {
      title: 'HieuNhan',
      image: '/hieunhan.png',
      description:
        'Portfolio and blog designed for a university student to highlight academic activities and share insights. The clean layout allows for easy presentation of achievements and reflections.',
      tags: ['React', 'Astro', 'TailwindCSS', 'Aceternity UI', 'Framer Motion'],
      website: 'https://hieunhan.vercel.app',
      github: 'https://github.com/anywaylupin/HieuNhan',
      highlight: '#F9E6F0'
    }
  ],
  navbar: [
    { title: 'Home', icon: <IconHome />, href: '/' },
    { title: 'Blogs', icon: <IconArticle />, href: '/blog' },
    { title: 'GitHub', icon: <IconBrandGithub />, href: 'https://github.com/anywaylupin' },
    { title: 'Linkedin', icon: <IconBrandLinkedin />, href: 'https://www.linkedin.com/in/lupinnguyen' },
    { title: 'Send Email', icon: <IconMail />, href: 'mailto:lupin.nguyen@outlook.com' }
  ]
};

export default resume;
