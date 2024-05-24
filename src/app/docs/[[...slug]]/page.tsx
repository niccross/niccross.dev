export default function Docs( {
	params
} : {
	params ?: {
		slug ?: string[];
	};
}) {
	const { slug} = params;
	if ( slug ) {
		const onFeature : boolean = 1 === slug.length;
		const onConcept : boolean = 2 === slug.length;
		switch ( slug.length ) {
			case 1:
				// FEATURE VIEW
				return <h1>Viewing docs for feature {slug[ 0 ]}.</h1>;
			case 2:
				// FEATURE CONCEPT VIEW
				return <h1>Viewing docs for feature {slug[ 0 ]} and concept {slug[ 1 ]}.</h1>;
		}
	}

	return <h1>Docs Homepage</h1>;
}