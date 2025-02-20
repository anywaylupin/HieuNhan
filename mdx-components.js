import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';

const themeComponents = getThemeComponents();

/** @type {getThemeComponents} */
export const useMDXComponents = (components) => {
  return { ...themeComponents, ...components };
};
