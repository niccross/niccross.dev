import React               from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton         from '@/components/ui/MagicButton';
import Spotlight           from '@/components/ui/Spotlight';
import TextGenerateEffect  from '@/components/ui/TextGenerateEffect';

const Hero = () => {
	const wordClasses = [];
	wordClasses[4] = wordClasses[5] = 'text-purple';
	return (
		<div className='pb-20 pt-36'>
			<div>
				<Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
				<Spotlight className='top-10 left-full h-[80vh] w-[50-vw]' fill='purple' />
				<Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
			</div>

			<div className='h-[50rem] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center'>
				{/* Radial gradient for the container to give a faded look */}
				<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
			</div>

			<div className='flex justify-center relative my-20 z-10'>
				<div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
					<h2 className='uppercase tracking-widest text-center text-blue-100 max-w-80'>
						This is the H2
					</h2>

					<TextGenerateEffect
						className='text-center text-[40px] md:text-5xl lg:text-6xl'
						classOverride={wordClasses}
						words='Transforming Concepts into Seamless User Experiences'
					/>

					<p className='text-center mb-4 md:tracking-wider text-sm md:text-lg lg:text-2xl'>
						Hi, I&apos;m Nicholas Cross, A Web Developer with over 20 years of industry experience.
					</p>

					<a href='#about'>
						<MagicButton
							title='Show My Work'
							icon={<FaLocationArrow />}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;