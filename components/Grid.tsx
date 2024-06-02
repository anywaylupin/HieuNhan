import React from 'react';

import { gridItems } from '@/data';

import { BentoGrid, BentoGridItem } from './ui/bento-grid';

export const Grid = () => (
  <section id="about">
    <BentoGrid>
      {gridItems.map((item) => (
        <BentoGridItem key={item.id} id={item.id} title={item.title} description={item.description} />
      ))}
    </BentoGrid>
  </section>
);
