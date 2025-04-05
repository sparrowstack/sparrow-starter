import { Agent, Model, Provider } from '@sparrowstack/sparrow';

// Define settings
const provider = Provider.OpenAI;
const model = Model.OpenAI.o3Mini;
const apiKey = process.env['OPENAI_API_KEY'] as string;
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
