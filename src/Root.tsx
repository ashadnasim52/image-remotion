import { Still } from 'remotion';
import { PreviewCard } from './PreviewCard';
import { PreviewCardTwo } from './PreviewCardTwo';
import { myCompSchema } from './PreviewCard';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Still
				id='PreviewCardTwo'
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
			<Still
				id='PreviewCard'
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
