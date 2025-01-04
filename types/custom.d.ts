declare module 'tailwindcss/lib/util/flattenColorPalette';

declare type PropsWithClass<T = unknown> = React.PropsWithChildren<
  T & { className?: string; containerClassName?: string; id?: string }
>;
