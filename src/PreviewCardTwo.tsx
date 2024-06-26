import React from 'react';
import {AbsoluteFill} from 'remotion';
import './fonts.css';
import {Swirl} from './Swirl';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import './style.css';

const fontFamily = 'Inter';

const absContainer: React.CSSProperties = {
	backgroundColor: 'white',
};

const titleStyle: React.CSSProperties = {
	fontSize: '5.5em',
	marginTop: 0,
	fontWeight: 700,
	marginBottom: 0,
};

const descriptionStyle: React.CSSProperties = {
	color: '#61778a',
	fontSize: '3.2em',
	margin: 0,
	marginTop: 20,
	lineHeight: 1.3,
	fontWeight: 500,
	maxWidth: '90%',
	maxLines: 2,
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	lineClamp: 2,
};

const gradientText: React.CSSProperties = {
	background: 'linear-gradient(to right, black, #666)',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	fontFamily,
};

const sloganStyle: React.CSSProperties = {
	position: 'absolute',
	bottom: 58,
	right: 100,
	fontSize: 36,
	lineHeight: 1.1,
	fontWeight: 700,
	textAlign: 'right',
	whiteSpace: 'pre',
};

export const myCompSchema = z.object({
	title: z.string(),
	subtitle: z.string(),
	description: z.string(),
	color: zColor(),
});

export const PreviewCardTwo: React.FC<z.infer<typeof myCompSchema>> = ({
	title,
	description,
	subtitle,
	color,
}) => {
	return (
		<AbsoluteFill style={absContainer}>
			<AbsoluteFill>
				<div className="bg-red-900">
					<div style={titleStyle}>
						22222 <span style={gradientText}>{title}</span>
					</div>
					<p style={descriptionStyle}>{description}</p>
					<div style={sloganStyle}>{subtitle}</div>
				</div>
			</AbsoluteFill>
			<AbsoluteFill>
				<Swirl color={color} />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
