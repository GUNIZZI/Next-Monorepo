// /** @type {import('tailwindcss').Config} */
// module.exports = {
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
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {},
    presets: [require('../../tailwind-preset.ts')],
};
