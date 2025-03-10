import type { StorybookConfig } from '@storybook/nextjs';

import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        getAbsolutePath('@storybook/addon-onboarding'),
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@chromatic-com/storybook'),
        getAbsolutePath('@storybook/addon-interactions'),
        getAbsolutePath('@storybook/addon-themes'),
        // {
        //     name: '@storybook/addon-toolbars',
        //     options: {
        //         toolbars: {
        //             // 여기에 툴바 아이템의 순서를 지정합니다
        //             order: [
        //                 'theme',
        //                 'viewport',
        //                 'backgrounds',
        //                 'outline',
        //                 'measure',
        //                 'zoom',
        //             ],
        //         },
        //     },
        // },
    ],
    framework: {
        name: getAbsolutePath('@storybook/nextjs'),
        options: {},
    },
    // staticDirs: ['..\\public'],
    // staticDirs: [join('..', 'public')],
    staticDirs: [join('../public')],
};
export default config;
