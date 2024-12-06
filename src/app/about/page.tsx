'use client';
import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Link from 'next/link';

import image from '@/components/images/smartcents.png';

export default function About() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
			<CardContainer className='inter-var'>
				<CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border'>
					<CardItem
						translateZ='50'
						className='text-xl font-bold text-neutral-600 dark:text-white'
					>
						Hey, I'm Manav!
					</CardItem>
					<CardItem
						as='p'
						translateZ='60'
						className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
					>
						Abc 123
					</CardItem>
					<CardItem translateZ='100' className='w-full mt-4'>
						<Image
							src={image}
							height='1000'
							width='1000'
							className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
							alt='thumbnail'
						/>
					</CardItem>
					<div className='flex justify-between items-center mt-20'>
						<CardItem
							translateZ={20}
							as={Link}
							href='#'
							target='__blank'
							className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
						>
							Contact Me →
						</CardItem>
					</div>
				</CardBody>
			</CardContainer>
			<CardContainer className='inter-var'>
				<CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border'>
					<CardItem
						translateZ='50'
						className='text-xl font-bold text-neutral-600 dark:text-white'
					>
						Hey, I'm Vansh!
					</CardItem>
					<CardItem
						as='p'
						translateZ='60'
						className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
					>
						Abc 123
					</CardItem>
					<CardItem translateZ='100' className='w-full mt-4'>
						<Image
							src={image}
							height='1000'
							width='1000'
							className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
							alt='thumbnail'
						/>
					</CardItem>
					<div className='flex justify-between items-center mt-20'>
						<CardItem
							translateZ={20}
							as={Link}
							href='#'
							target='__blank'
							className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
						>
							Contact Me →
						</CardItem>
					</div>
				</CardBody>
			</CardContainer>
		</div>
	);
}
