import * as React from 'react';

export const SectionHead = ( {
	text,
	accent,
	...props
} : React.HTMLProps<any> & {
	text : string;
	accent ?: { [ p : string ] : number[] };
} ) => {

	return (
		<h1 className='heading' {...props}>
			{text.split( ' ' ).map( ( word : string, idx : number ) => {
				let cls : string = accent ? Object.entries( accent ).reduce(
					( acc, kv ) => kv[ 1 ].includes( idx ) ? kv[ 0 ] : acc
				, '' ) : '';

				return <span key={idx} className={cls}>{word} {' '}</span>;
			} )}
		</h1>
	);
};

export default SectionHead;