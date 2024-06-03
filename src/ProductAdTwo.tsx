import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Img, staticFile} from 'remotion';
import {z} from 'zod';

export const ProductAdTwoSchema = z.object({
	title: z.string(),
	subtitle: z.string(),
	price: z.string(),
	offerText: z.string(),
	bgcName: z.string(),
	offerPrice: z.string(),
	productImage: z.string(),
	actionButtonText: z.string(),
});

export const ProductAdTwo: React.FC<z.infer<typeof ProductAdTwoSchema>> = ({
	title,
	subtitle,
	price,
	offerText,
	offerPrice,
	actionButtonText,
	productImage,
	bgcName,
}) => {
	return (
		<AbsoluteFill className="flex items-center justify-center text-white p-5 bg-gray-50">
			<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
				{/* <img
					src='/img/beams.jpg'
					alt=''
					className='absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
					width='1308'
				/> */}
				<Img
					src={staticFile(bgcName)}
					className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
					width="1308"
					height={'500'}
				/>
				<div className="relative px-6 pb-8 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
					<div className="mx-auto max-w-md">
						<div className="border-1 relative flex h-60 items-center overflow-hidden rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
							<img
								className="object-contain align-middle"
								src={productImage}
								alt="product image"
							/>
							<span className="absolute left-0 top-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
								39% OFF
							</span>
						</div>
						<div className="divide-y divide-gray-300/50">
							<div className="space-y-6 py-8 text-base leading-7 text-gray-600">
								<strong className="rounded border border-indigo-500 bg-indigo-500 px-3 w py-1.5 text-[10px] font-medium text-white ">
									{title}
								</strong>
								<ul className="space-y-4">
									<li className="flex items-center">
										<svg
											className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<circle cx="12" cy="12" r="11" />
											<path
												d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
												fill="none"
											/>
										</svg>
										<p className="ml-4">
											Customizing your
											<code className="text-sm font-bold text-gray-900">
												tailwind.config.js
											</code>{' '}
											file
										</p>
									</li>

									<li className="flex items-center">
										<svg
											className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<circle cx="12" cy="12" r="11" />
											<path
												d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
												fill="none"
											/>
										</svg>
										<p className="ml-4">{offerText}</p>
									</li>
								</ul>
								<p>{subtitle}</p>
							</div>
							<div className="pt-8 text-base font-semibold leading-7">
								<p className="text-gray-900">
									Only at {offerPrice} limited time
								</p>
								<p>
									<button className="mt-2 text-2xl text-sky-500 hover:text-sky-600">
										{actionButtonText} &rarr;
									</button>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
};
