import { Agent, Model, Provider } from '@sparrowstack/sparrow';
import { addTwoNumbersTool } from '@src/examples/toolCall/addTwoNumbersTool';

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
	tools: [addTwoNumbersTool],
});

const response = await agent.sendMessage({
	message: 'What is the sum of 2 and 2?',
});

console.log(response.text);
