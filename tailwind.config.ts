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
      }
    },
  },
  plugins: [],
};
export default config;
