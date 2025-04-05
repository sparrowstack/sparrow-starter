import { Agent, Model, Provider } from '@sparrowstack/sparrow';
import { InteractiveTerminal } from '@sparrowstack/interactive-terminal';
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

// Start Interactive Terminal
const interactiveTerminal = new InteractiveTerminal({ agent });
await interactiveTerminal.start();
