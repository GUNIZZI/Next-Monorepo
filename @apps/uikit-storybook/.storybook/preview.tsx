'use client';

import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@packages/ui/src/components/theme-provider';
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';

import '@ui/styles/globals.css';
import '../src/styles/globals.css';

const preview: Preview = {
    globalTypes: {
        // theme: {
        //     title: 'Theme',
        //     description: '모드설정(라이트/다크)',
        //     defaultValue: 'light',
        //     toolbar: {
        //         // title: 'Light',
        //         // icon: 'sun',
        //         items: [
        //             {
        //                 value: 'light',
        //                 icon: 'sun',
        //                 title: 'Light',
        //             },
        //             { value: 'dark', icon: 'moon', title: 'Dark' },
        //         ],
        //         dynamicTitle: true,
        //         // showName: true, // 텍스트 숨김
        //     },
        // },
        color: {
            title: 'Color',
            description: '컬러셋 설정',
            defaultValue: 'default',
            toolbar: {
                items: [
                    { value: 'default', title: '⚫ Default' },
                    { value: 'red', title: '🔴 Red' },
                    { value: 'green', title: '🟢 Green' },
                    { value: 'blue', title: '🔵 Blue' },
                ],
                dynamicTitle: true,
            },
        },
        darkMode: {
            title: 'DarkMode',
            description: '다크모드드 설정',
            defaultValue: 'light',
            toolbar: {
                items: [
                    { value: 'light', icon: 'sun', title: 'Light' },
                    { value: 'dark', icon: 'moon', title: 'Dark' },
                ],
                dynamicTitle: true,
            },
        },
    },
    // parameters: {
    //     docs: {
    //         // theme: themes.light, // 다크 모드일 때
    //         // or
    //         // theme: themes.light, // 라이트 모드일 때
    //     },
    //     //     // 동적으로 테마 변경을 위한 설정
    //     //     // darkMode: {
    //     //     //     dark: { ...themes.dark },
    //     //     //     light: { ...themes.light },
    //     //     //     current: 'light',
    //     //     // },
    // },
    decorators: [
        (Story, context) => {
            const { setTheme } = useTheme();
            const colorSet = context.globals.color;
            const darkMode = context.globals.darkMode;

            useEffect(() => {
                const applyTheme = () => {
                    setTheme(darkMode);
                    document.documentElement.setAttribute(
                        'data-theme',
                        colorSet || 'default'
                    );
                    document.documentElement.setAttribute(
                        'data-mode',
                        darkMode || 'light'
                    );
                    document.documentElement.style.colorScheme = colorSet;
                };
                applyTheme();
            }, [darkMode, setTheme]);

            return (
                <ThemeProvider
                    attribute="data-theme"
                    defaultTheme={darkMode}
                    enableSystem={false}
                    disableTransitionOnChange={false}
                    themes={['light', 'dark']}
                >
                    <div className="bg-background text-foreground">
                        <Story />
                    </div>
                </ThemeProvider>
            );
        },
    ],
};

export default preview;
