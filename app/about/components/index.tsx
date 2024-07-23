import { CardBody, CardContainer, CardItem } from '@/components';

import Image from 'next/image';
import { cn } from '@/utils';

declare type AboutText = Readonly<Array<{ text: string; type: 'highlight' | 'normal' }>>;

export const content: AboutText = [
  {
    text: "My ultimate goal is to create a societal impact as a way to give back for what I've received.",
    type: 'highlight'
  },
  {
    text: 'I am enthusiastic about challenging myself through a variety of work experiences and am open to different fields to learn and develop my skills.',
    type: 'normal'
  },
  {
    text: 'Being a young woman living in a complex and rapidly changing world, I adopted the mission of contributing to the development and closing the gap of inequality among people.',
    type: 'highlight'
  },
  {
    text: 'To achieve that mission, I urged myself to involve myself in experiencing knowledge and improving my skillset, and mindset in Sustainability Development. ',
    type: 'normal'
  }
];

export const AboutContent = () => (
  <>
    <div className="flex">
      <p className="text-left text-2xl font-medium">
        Hello, I&apos;m Hiếu Nhân, a senior Economics major at
        <br />
        Fulbright University Vietnam.
      </p>
    </div>
    <div className="min-w-full text-base leading-relaxed">
      {content.map(({ text, type }, index) => (
        <p
          key={`${text}-${index}`}
          className={cn(
            'py-2 text-justify',
            type === 'highlight' ? 'bg-tertiary font-semibold text-secondary' : 'text-dark-2'
          )}
        >
          {text}
        </p>
      ))}
    </div>
  </>
);

export const AboutAvatar = () => (
  <CardContainer className="inter-var">
    <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
      <CardItem translateZ="100" className="mt-4 w-full">
        <Image
          src="/about-me.png"
          height="1000"
          width="1000"
          className="w-full rounded-xl object-cover group-hover/card:shadow-xl"
          alt="Avatar"
        />
      </CardItem>
    </CardBody>
  </CardContainer>
);
