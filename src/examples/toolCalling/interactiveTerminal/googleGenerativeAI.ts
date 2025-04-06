import { Agent, Model, Provider } from '@sparrowstack/sparrow';
import { InteractiveTerminal } from '@sparrowstack/interactive-terminal';
import { addTwoNumbersTool } from '@src/examples/toolCalling/addTwoNumbersTool';

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

// Start Interactive Terminal
const interactiveTerminal = new InteractiveTerminal({ agent });
await interactiveTerminal.start();
