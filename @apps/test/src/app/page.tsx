'use client';

import Image from 'next/image';

import { Button } from '@ui/atoms';

import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
    const [cnt, setCnt] = useState(0);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1>TEST</h1>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={400}
                    height={81}
                    priority
                />

                <div>
                    <div>cnt : {cnt}</div>
                    <Button onClick={() => setCnt(cnt + 1)}>
                        <Mail />
                        Click me
                    </Button>
                </div>
            </main>
        </div>
    );
}
