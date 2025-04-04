// Import base classes
import { Agent, Model, Provider } from '@sparrowstack/sparrow';

// Define settings
const provider = Provider.Anthropic;
const model = Model.Anthropic.Claude37Sonnet;
const apiKey = process.env['ANTHROPIC_API_KEY'] as string;
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
