'use client'

export default function GlobalError({
    error, reset
}: {
    error: Error & { digest?: string },
    reset: () => void
}) {
    return <div>
        <h2>Global Error: Something went wrong </h2>
        <button onClick={() => reset()}> Try again button</button>
    </div >
}
