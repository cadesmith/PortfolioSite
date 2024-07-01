import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.tsx",
    "./app/components/**/*.tsx",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '300': '75rem'
      },
      translate: {
        '1/5': '20%'
      }
    },
  },
  plugins: [],
};
export default config;
