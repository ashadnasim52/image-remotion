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
		<AbsoluteFill className="flex items-center  min-h-screen min-w-full justify-center text-white  bg-gray-50">
			<div className="relative min-w-full  min-h-full flex-col justify-center p-5 bg-pink-100 ">
				{/* <img
					src='/img/beams.jpg'
					alt=''
					className='absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
					width='1308'
				/> */}
				<Img
					src={staticFile(bgcName)}
					className="absolute top-0 left-0  min-h-full min-w-full"
					width={'100%'}
					height={'100%'}
				/>
				<div className="relative px-6 pb-8 ring-gray-900/5 sm:rounded-lg sm:px-10">
					<div className="">
						<div className="border-1 relative flex min-h-[800px]  min-w-[400px]  overflow-hidden rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
							<Img
								className="object-cover min-w-full min-h-full"
								src={productImage}
								alt="product image"
							/>
							<span className="absolute left-0 top-0 m-2 rounded-full bg-black  text-center text-[30px] p-2 px-4 font-medium text-white">
								39% OFF
							</span>
						</div>
						<div className="divide-y divide-gray-300/50 mt-32">
							<div className="space-y-6 py-8 text-base leading-7 text-gray-600">
								<strong className="rounded border border-indigo-500 bg-indigo-500 px-3 w py-1.5 text-[50px] font-medium text-white ">
									{title}
								</strong>
								<ul className="space-y-4">
									<li className="flex items-center">
										<svg
											className="h-12 w-12 flex-none fill-sky-100 stroke-sky-500 stroke-2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<circle cx="12" cy="12" r="11" />
											<path
												d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
												fill="none"
											/>
										</svg>
										<p className="ml-4 text-[30px]">
											Customizing your
											<code className="text-[30px] font-bold text-gray-900">
												tailwind.config.js
											</code>{' '}
											file
										</p>
									</li>

									<li className="flex items-center">
										<svg
											className="h-12 w-12 flex-none fill-sky-100 stroke-sky-500 stroke-2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<circle cx="12" cy="12" r="11" />
											<path
												d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
												fill="none"
											/>
										</svg>
										<p className="ml-4 text-[30px]">{offerText}</p>
									</li>
								</ul>
								<p className="text-[40px] mt-20">{subtitle}</p>
							</div>
							<div className="pt-8 text-[60px] font-semibold leading-7">
								<p className="text-gray-900">
									Only at {offerPrice} limited time
								</p>
								<p>
									<button className="mt-24 text-[100px] text-sky-500 hover:text-sky-600">
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
