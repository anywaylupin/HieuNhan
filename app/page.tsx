import { FaHome } from 'react-icons/fa';

import { FloatingNavbar, FloatingNavItem, Grid, Hero } from '@/components';

const navItems: FloatingNavItem[] = [
  { name: 'Home', link: '/', icon: <FaHome /> },
  { name: 'Home', link: '/', icon: <FaHome /> },
  { name: 'Home', link: '/', icon: <FaHome /> },
  { name: 'Home', link: '/', icon: <FaHome /> },
];

const Home = (): JSX.Element => (
  <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
    <div className="h-full w-full max-w-7xl">
      <FloatingNavbar navItems={navItems} />
      <Hero />
      <Grid />
    </div>
  </main>
);

export default Home;
