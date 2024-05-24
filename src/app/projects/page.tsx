import Link from 'next/link';

export default function ProjectList() {
	return <>
		<Link href='/'>Home</Link>
		<h1>Project list</h1>
		<h2><Link href=''>Project 1</Link></h2>
		<h2><Link href=''>Project 2</Link></h2>
		<h2><Link href=''>Project 3</Link></h2>
	</>
}