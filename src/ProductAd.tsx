import React from 'react';
import { AbsoluteFill } from 'remotion';

interface ProductAdProps {
	title: string;
	subtitle: string;
	price: string;
	offerText: string;
	offerPrice: string;
	actionButtonText: string;
	productImage: string;
	backgroundGradient: string;
}

export const ProductAd: React.FC<ProductAdProps> = ({
	title,
	subtitle,
	price,
	offerText,
	offerPrice,
	actionButtonText,
	productImage,
	backgroundGradient,
}) => {
	return (
		<AbsoluteFill
			className='flex items-center justify-center text-white p-5'
			style={{
				background: backgroundGradient,
			}}
		>
			<div className='flex flex-col items-center text-center'>
				<img
					src={productImage}
					alt='Product'
					className='max-w-[80%] rounded-md shadow-lg'
				/>
				<h1 className='mt-5 text-4xl font-bold'>{title}</h1>
				<h2 className='mt-2 text-2xl font-semibold'>{subtitle}</h2>
				<p className='text-xl mt-2'>Price: {price}</p>
				<p className='text-lg mt-2'>
					{offerText}: <span className='line-through'>{price}</span>{' '}
					{offerPrice}
				</p>
				<button className='mt-5 px-6 py-2 text-lg bg-green-500 rounded-md hover:bg-green-600'>
					{actionButtonText}
				</button>
			</div>
		</AbsoluteFill>
	);
};

// Define schema if needed
export const productAdSchema = {
	title: {
		type: 'string',
		default: 'Amazing Product',
	},
	subtitle: {
		type: 'string',
		default: 'Limited Time Offer',
	},
	price: {
		type: 'string',
		default: '$99.99',
	},
	offerText: {
		type: 'string',
		default: 'Discounted Price',
	},
	offerPrice: {
		type: 'string',
		default: '$79.99',
	},
	actionButtonText: {
		type: 'string',
		default: 'Buy Now',
	},
	productImage: {
		type: 'string',
		default: 'https://via.placeholder.com/300',
	},
	backgroundGradient: {
		type: 'string',
		default: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
	},
};
