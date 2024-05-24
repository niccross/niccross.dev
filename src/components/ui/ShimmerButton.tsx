import React from 'react';

const ShimmerButton = ( {
	children,
	className
} : React.PropsWithRef<any> & {
	className : string;
} ) => {
	return (
		<button className={`inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#0d0d1c,45%,#181a3a,55%,#0d0d1c)] bg-[length:200%_100%] p-2 font-medium text-blue-100 transition-colors focus:outline-none mx-1.5 ${className}`}>
			{children}
		</button>

	);
};

export default ShimmerButton;