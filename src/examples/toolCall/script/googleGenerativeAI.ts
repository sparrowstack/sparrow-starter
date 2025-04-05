import { Agent, Model, Provider } from '@sparrowstack/sparrow';
import { addTwoNumbersTool } from '@src/examples/toolCall/addTwoNumbersTool';

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
	tools: [addTwoNumbersTool],
});

const response = await agent.sendMessage({
	message: 'What is the sum of 2 and 2?',
});

console.log(response.text);
