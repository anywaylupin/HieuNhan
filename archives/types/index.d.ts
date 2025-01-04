import { colors } from '@/themes';

declare type Props<T = unknown> = React.PropsWithChildren<T & { className?: string; id?: string }>;

declare type PropsWithColors = Props<{ color?: keyof typeof colors }>;
