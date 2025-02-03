'use client';

import * as React from 'react';
import {
    ThemeProvider as NextThemeProvider,
    type ThemeProviderProps,
} from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemeProvider
            // attribute="data-theme"
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            {...props}
        >
            {children}
        </NextThemeProvider>
    );
}
