import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class', '[data-theme="dark"]'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        '../../@packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {},
    presets: [require('../../tailwind-preset.ts')],
};
export default config;
