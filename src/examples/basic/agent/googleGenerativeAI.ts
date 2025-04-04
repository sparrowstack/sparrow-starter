// Import base classes
import { Agent, Model, Provider } from '@sparrowstack/sparrow';

// Define settings
const provider = Provider.GoogleGenerativeAI;
const model = Model.GoogleGenerativeAI.Gemini20Flash;
const apiKey = process.env['GOOGLE_GENERATIVE_AI_API_KEY'] as string;
const settings = {
	temperature: 0.03,
};

// Instantiate Agent
const agent = new Agent({
	model,
	apiKey,
	provider,
	settings,
});

const response = await agent.sendMessage({
	message: 'Hello, how are you?',
});

console.log(response.text);
