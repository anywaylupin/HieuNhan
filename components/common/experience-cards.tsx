import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

import { Badge } from '../ui';
import Link from 'next/link';
import content from '@/content/resume';

export const ExperienceCards = () => (
  <ul className="relative left-4 gap-4 divide-y divide-dashed border-l">
    {content.experience.map(({ title, company, logo, dates, description, badges }) => (
      <li key={company} className="relative">
        <Avatar className="border-border bg-background absolute top-2 -left-6 flex size-12 items-center justify-center overflow-hidden rounded-full border">
          <AvatarImage src={logo} alt={company} className="object-contain" />
          <AvatarFallback>{company[0]}</AvatarFallback>
        </Avatar>

        <div className="flex flex-1 flex-col justify-start gap-1 py-4 pl-10">
          <h2 className="text-base leading-none font-semibold">{company}</h2>
          <h3 className="text-sm">{title}</h3>
          <time className="text-muted-foreground text-xs">{dates}</time>
          <span className="prose dark:prose-invert text-muted-foreground text-sm">{description}</span>

          {badges && badges.length > 0 && (
            <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
              {badges?.map(({ title, icon: Icon, href }, idx) => (
                <Link href={href} key={`${title}-${idx}`}>
                  <Badge title={title} className="flex gap-2">
                    <Icon className="size-4" />
                    {title}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </li>
    ))}
  </ul>
);
