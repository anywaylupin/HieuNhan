/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  tabWidth: 2,
  printWidth: 120,
  trailingComma: 'none',
  semi: true,
  plugins: ['prettier-plugin-tailwindcss']
};

export default config;
