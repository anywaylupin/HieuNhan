export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_WORDPRESS_API_URL: string;
      NEXT_PUBLIC_WORDPRESS_API_HOSTNAME: string;
      HEADLESS_SECRET: string;
      WP_USER: string;
      WP_APP_PASS: string;
    }
  }
}
