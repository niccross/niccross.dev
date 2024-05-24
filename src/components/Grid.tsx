import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid';
import React             from 'react';

const gridItems = [
	{
		title:'title 1',
		description:'description 1',
	},
	{
		title:'title 2',
		description:'description 2',
	},
	{
		title:'title 3',
		description:'description 3',
	},
	{
		title:'title 4',
		description:'description 4',
	},
];

const Grid = () => {
	return (
		<section id='about'>
			<BentoGrid>
				{gridItems.map((item, index) => (
					<BentoGridItem
						id={index}
						key={index}
						title={item.title}
						description={item.description}
				                                                />
				))}
			</BentoGrid>
		</section>
	)
};

export default Grid;