export default function ProjectDetails( {
	params
} :	{
	params: { projectId: string };
} ) {
	return <h1>Project {params.projectid} Details</h1>
}