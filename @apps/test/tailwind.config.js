// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     // presets: [require('../../@packages/ui/tailwind.config.js')],
//     // content: [
//     //     './src/**/*.{ts,tsx}',
//     //     '../../@packages/ui/src/**/*.{ts,tsx}', // UI 패키지 컴포넌트 포함
//     // ],
//     // corePlugins: {
//     //     preflight: false, // UI 패키지의 기본 스타일만 사용
//     // },
//     darkMode: ['class'],
//     content: ['./src/**/*.{ts,tsx}'],
//     theme: {
//         extend: {
//             colors: {
//                 border: 'hsl(var(--border))',
//                 // ...기타 색상 설정...
//             },
//         },
//         // 공통 테마 설정
//     },
//     corePlugins: {
//         preflight: true, // Tailwind 기본 스타일 활성화
//     },
//     plugins: [require('tailwindcss-animate')],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',

        '../../@packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {},
    presets: [require('../../tailwind-preset.ts')],
};
