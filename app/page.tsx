import { ExperienceCards, Header, ProjectCards } from '@/components/common';
import { BlurFade } from '@/components/ui';
import content from '@/content/resume';
import { BLUR_FADE_DELAY } from '@/lib/constants';

const Home = () => (
  <>
    <Header />

    <main className="flex max-w-2xl flex-col gap-10 px-6 pb-12 sm:pb-24">
      <section id="about" className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="prose dark:prose-invert text-muted-foreground max-w-full text-sm text-pretty">
            {content.about}
          </p>
        </BlurFade>
      </section>

      <section id="work" className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Experience</h2>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
          <ExperienceCards />
        </BlurFade>
      </section>

      <section id="projects" className="hidden w-full space-y-12 pt-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="space-y-2">
            <div className="bg-foreground text-background inline-block rounded-lg px-3 py-1 text-sm">My Projects</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore my recent projects</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I have been involved in a diverse range of projects. Here are some of my top picks.
            </p>
          </div>
        </BlurFade>

        <BlurFade className="grid grid-cols-1 gap-3 sm:grid-cols-2" delay={BLUR_FADE_DELAY * 12}>
          <ProjectCards />
        </BlurFade>
      </section>
    </main>
  </>
);

export default Home;
