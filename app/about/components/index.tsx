import { CardBody, CardContainer, CardItem } from '@/components';

import Image from 'next/image';
import { cn } from '@/utils'

;

declare type AboutText = Readonly<Array<{ text: string; type: 'highlight' | 'normal' }>>;

export const content: AboutText = [
  {
    text: 'Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    type: 'highlight'
  },
  {
    text: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
    type: 'normal'
  },
  {
    text: 'Mauris massa. Vestibulum lacinia arcu eget nulla.',
    type: 'highlight'
  },
  {
    text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.',
    type: 'normal'
  }
];

const header =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.';

export const AboutContent = () => (
  <>
    <div>
      <p className="text-2xl font-medium">{header}</p>
    </div>
    <div className="min-w-full text-base leading-relaxed">
      {content.map(({ text, type }, index) => (
        <p
          key={`${text}-${index}`}
          className={cn(
            'py-1 text-justify',
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
          src="/me.png"
          height="1000"
          width="1000"
          className="w-full rounded-xl object-cover group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
    </CardBody>
  </CardContainer>
);
