'use client';

const ErrorBoundary = (
  {
    error,
    reset
  }: {
    error: Error,
    reset: () => void
  }
) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  )
}

export default ErrorBoundary;