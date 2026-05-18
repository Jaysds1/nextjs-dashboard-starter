'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & {digest?: string};
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="flex h-full flex-col items-center justify-center">
            <h2 className="text-center">Something Went Wrong!</h2>
            <button
                onClick={() => reset()}
            >
                Try Again
            </button>
        </main>
    );
}