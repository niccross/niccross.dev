import { Metadata } from 'next';

type Props = {
	params : {
		blogId : string;
	};
};

export const generateMetadata = ( { params : { blogId } } : Props ) : Metadata => ( {
	title : blogId
} );

export default function FirstBlog( { params } : Props ) {
	return <h1>First Blog</h1>;
}