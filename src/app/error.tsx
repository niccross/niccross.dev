'use client';

export default function ErrorBoundary( {
	error,
	reset
} : {
	error: Error;
	reset: () => void;
} ) {
	return <div>
		An error occurred: {error.message}
		<button onClick={reset}>Try again</button>
	</div>;
}