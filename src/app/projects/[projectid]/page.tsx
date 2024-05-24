export const runtime = 'edge';

export default function ProjectDetails( {
	params
} :	{
	params: { projectId: string };
} ) {
	return <h1>Project {params.projectId} Details</h1>
}