import { Agent, Model, Provider, type Settings } from '@sparrowstack/sparrow';
import { InteractiveTerminal } from '@sparrowstack/interactive-terminal';
import { softwareEngineerTypeScriptPromptParams } from '@sparrowstack/system-prompts';
import {
	getWeatherDataToolParams,
	getDirectoryStructureToolParams,
} from '@sparrowstack/tools';

// Configuration
// --------------------------------
const provider = Provider.GoogleGenerativeAI;
const model = Model.GoogleGenerativeAI.Gemini20Flash;
const apiKey = process.env['GOOGLE_GENERATIVE_AI_API_KEY'] as string;

const systemPrompt = softwareEngineerTypeScriptPromptParams;
const tools = [getWeatherDataToolParams, getDirectoryStructureToolParams];

const settings: Settings = {
	temperature: 0.03,
};
// --------------------------------

// Instantiate Agent
const agent = new Agent({
	model,
	tools,
	apiKey,
	provider,
	settings,
	systemPrompt,
	// databaseUrl, - coming soon..
	// vectorDatabaseUrl, - coming soon..
});

// Start Interactive Terminal
const interactiveTerminal = new InteractiveTerminal({ agent });
await interactiveTerminal.start();
