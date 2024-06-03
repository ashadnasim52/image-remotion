require('dotenv').config();

const OpenAI = require('openai');

async function generateImage() {
	const openai = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY, // Use the API key from environment variables

		// Make sure to replace with your actual API key
	});

	try {
		const response = await openai.images.generate({
			model: 'dall-e-3',
			prompt:
				'background white, gradients and beams, images will be lig image will be used as a product background for ads, ',
			n: 1,
			size: '1024x1024',
		});

		const image_url = response.data[0].url;
		console.log({image_url});
	} catch (error) {
		console.error('Error generating image:', error);
	}
}

generateImage();
