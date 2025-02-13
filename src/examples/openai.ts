import { Agent, Model, ApiKey, Provider } from '@sparrowstack/sparrow';
import { InteractiveTerminal } from '@sparrowstack/interactive-terminal';
import { softwareEngineerTypeScriptPrompt } from '@sparrowstack/system-prompts';
import {
	getWeatherDataToolParams,
	getDirectoryStructureToolParams,
} from '@sparrowstack/tools';

// Configuration
// --------------------------------
const systemPrompt = softwareEngineerTypeScriptPrompt;
const tools = [getWeatherDataToolParams, getDirectoryStructureToolParams];

const model = Model.OpenAI.GPT4o;
const provider = Provider.OpenAI;
const apiKey = process.env[ApiKey.OpenAI] as string;
// --------------------------------

// Instantiate Agent
const agent = new Agent({
	model,
	tools,
	apiKey,
	provider,
	systemPrompt,
	// databaseUrl, - coming soon..
	// vectorDatabaseUrl, - coming soon..
});

// Start Interactive Terminal
const interactiveTerminal = new InteractiveTerminal({ agent });
await interactiveTerminal.start();
