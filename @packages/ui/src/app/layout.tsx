'use client';

// import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';

import { ThemeProvider } from '@ui/components/theme-provider';

import '../styles/globals.css';

// const geistSans = Geist({
//     variable: '--font-geist-sans',
//     subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//     variable: '--font-geist-mono',
//     subsets: ['latin'],
// });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                className={`antialiased`}
                suppressHydrationWarning
            >
                <ThemeProvider
                    attribute="data-theme"
                    defaultTheme={'red'}
                    // enableSystem={false}
                    // disableTransitionOnChange={false}
                    // themes={['light', 'dark']}
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
