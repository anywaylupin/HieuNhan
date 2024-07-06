import type { ThemeConfig } from 'tailwindcss/types/config';

const width = {
  section: '90rem'
} satisfies ThemeConfig['width'];

const maxWidth = {
  section: '90rem'
} satisfies ThemeConfig['maxWidth'];

const height = {
  section: '40rem'
} satisfies ThemeConfig['height'];

const maxHeight = {
  section: '40rem'
} satisfies ThemeConfig['maxHeight'];

export const sizing = { width, maxWidth, height, maxHeight };
