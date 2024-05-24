import SectionHead                  from '@/components/ui/SectionHead';
import { aboutItems }               from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const About = () => {
	return (
		<section id="about">
			<SectionHead text='Get to know me' accent={{'text-purple':[3]}} />

			<BentoGrid className="w-full py-20">
				{aboutItems.map(( {
					id,
					img,
					className,
					title,
					spareImg,
					titleClassName,
					imgClassName,
					description
				}, i) => (
					<BentoGridItem
						id={id}
						key={i}
						title={title}
						description={description}
						// remove icon prop
						// remove original classname condition
						className={className}
						img={img}
						imgClassName={imgClassName}
						titleClassName={titleClassName}
						spareImg={spareImg}
					/>
				))}
			</BentoGrid>
		</section>
	);
};

export default About;