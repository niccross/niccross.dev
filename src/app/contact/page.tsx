'use client';
import { useRouter } from 'next/navigation';

export default function Contact() {
	const router = useRouter();

	const handleClick = () => {
		console.log('Sending your message...');
		router.push( '/' );
	};
	return (
		<>
			<h1>Contact Form</h1>
			<button>Send</button>
		</>
	);
}