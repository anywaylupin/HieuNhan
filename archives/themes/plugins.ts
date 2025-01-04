import svgToDataUri from 'mini-svg-data-uri';
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';

export const BackgroundPlugin = ({ matchUtilities, theme }: any) => {
  matchUtilities(
    {
      'bg-dot-thick': (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`,
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
  );
};

export const VariablesForColors = ({ addBase, theme }: any) => {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({ ':root': newVars });
};

export const plugins = [BackgroundPlugin, VariablesForColors];
