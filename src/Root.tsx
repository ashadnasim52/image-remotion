import './style.css';

import {Still} from 'remotion';
import {PreviewCard} from './PreviewCard';
import {PreviewCardTwo} from './PreviewCardTwo';
import {myCompSchema} from './PreviewCard';
// import { ProductAd, productAdSchema } from './ProductAd';
import {ProductAdTwo, ProductAdTwoSchema} from './ProductAdTwo';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Still
				id="PreviewCardTwo"
				component={PreviewCardTwo}
				width={1200}
				height={627}
				schema={myCompSchema}
				defaultProps={{
					subtitle: 'sdfssdfsfdfdsubtitle' as const,
					title: 'Welcome to Remotion' as const,
					description: 'Edit Video.tsx to change template' as const,
					color: '#0B84F3' as const,
				}}
			/>
			{/* <Still
				id='ProductAd'
				component={ProductAd}
				width={1080}
				height={1020}
				schema={productAdSchema}
				defaultProps={{
					title: 'Amazing Product',
					subtitle: 'Limited Time Offer',
					price: '$99.99',
					offerText: 'Discounted Price',
					offerPrice: '$79.99',
					actionButtonText: 'Buy Now',
					productImage: 'https://via.placeholder.com/300',
					backgroundGradient:
						'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
				}}
			/> */}
			<Still
				id="ProductAdTwo"
				component={ProductAdTwo}
				width={500}
				height={800}
				schema={ProductAdTwoSchema}
				defaultProps={{
					title: 'Amazing Product',
					subtitle: 'Limited Time Offer',
					price: '$99.99',
					offerText: 'Discounted Price',
					offerPrice: '$79.99',
					actionButtonText: 'Buy Now',
					productImage: 'https://via.placeholder.com/800',
					bgcName: 'rrreplicate.svg',
				}}
			/>
			<Still
				id="PreviewCard"
				component={PreviewCard}
				width={1200}
				height={627}
				schema={myCompSchema}
				defaultProps={{
					subtitle: 'sdfssdfsfdfdsubtitle' as const,
					title: 'Welcome to Remotion' as const,
					description: 'Edit Video.tsx to change template' as const,
					color: '#0B84F3' as const,
				}}
			/>
		</>
	);
};
