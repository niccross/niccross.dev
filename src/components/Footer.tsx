import React               from 'react';
import { FaLocationArrow } from 'react-icons/fa6';

import MagicButton         from '@/components/ui/MagicButton';
import SectionHead         from '@/components/ui/SectionHead';
import { socialMedia }     from '@/data';

const Footer = () => {
	return (
		<footer className='w-full pt-20 mb-[60px] md:mb-8 overflow-clip' id='contact'>

			<div className='flex flex-col items-center'>
				<SectionHead
					className='heading lg:max-w-[45vw]'
					text='Ready to take your digital presence to the next level?'
					accent={{ 'text-purple' : [ 3 ] }}
				/>

				<p className='text-white-200 md:mt-10 my-5 text-center'>
					Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
				</p>

				<a className='' href='mailto:contact@niccross.dev'>
					<MagicButton
						title='Get in touch'
						icon={<FaLocationArrow />}
						position='right'
					/>
				</a>

				<div className='w-full flex flex-col md:flex-row justify-between gap-6 items-center my-16'>
					<p className='md:text-base text-sm md:font-normal font-light order-2 text-white/[0.6]'>
						Copyright &copy; {( new Date( Date.now() ) ).getFullYear()} Nicholas Cross
					</p>
					<div className='flex items-center md:gap-3 gap-6 order-1'>
						{socialMedia.map( ( { id, img }, index ) => (
							<div key={ id } className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
								<img src={img} alt={img} width={20} height={20} />
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
		;
};

export default Footer;