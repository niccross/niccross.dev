"use client";
import Link           from 'next/link';
import { usePathname } from 'next/navigation';
import '@/app/globals.css';
import { useState } from 'react';

const navLinks = [
	{ name: 'Register', href: '/dashboard/register' },
	{ name: 'Login', href : '/dashboard/login' },
	{ name: 'Forgot Password', href : '/forgot-password' },
	{ name: 'Logout', href : '/dashboard/logout' }
];

export default function AuthLayout({
	children,
} : {
	children: React.ReactNode;
} ) {
	const [input, setInput] = useState('');
	const pathname = usePathname();

	return (
		<div>
			<div>
				<input value={input} onChange={(e) => setInput(e.target.value)} />
			</div>
			{navLinks.map( ( link, index) => {
				const isActive = pathname.startsWith(link.href);

				return (
					<Link
						href={link.href}
						key={`${link.name}-${index}`}
						className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}>
					>
						{link.name}
					</Link>
				);
			} )}
			{children}
		</div>
	)
}