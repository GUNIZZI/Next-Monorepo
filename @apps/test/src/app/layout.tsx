'use client';

import { ThemeProvider } from '@ui/components/theme-provider';

import '@ui/styles/globals.css';
import '@/styles/globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased" suppressHydrationWarning>
                <ThemeProvider
                    attribute="data-theme"
                    defaultTheme={'custom'}
                    enableSystem={false}
                    disableTransitionOnChange={false}
                    themes={['light', 'dark']}
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
