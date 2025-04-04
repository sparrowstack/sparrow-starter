import { Agent, Model, Provider, type Settings } from '@sparrowstack/sparrow';
import { InteractiveTerminal } from '@sparrowstack/interactive-terminal';
import { softwareEngineerTypeScriptPrompt } from '@sparrowstack/system-prompts';
import {
	getWeatherDataTool,
	pressTheNukeButtonTool,
	getDirectoryStructureTool,
} from '@sparrowstack/tools';

// Configuration
// --------------------------------

const provider = Provider.Anthropic;
const model = Model.Anthropic.Claude37Sonnet;
const apiKey = process.env['ANTHROPIC_API_KEY'] as string;

const systemPrompt = softwareEngineerTypeScriptPrompt;
const tools = [
	// Tool call with params
	getWeatherDataTool,
	// Tool call with human in the loop
	pressTheNukeButtonTool,
	// Tool call with no params
	getDirectoryStructureTool,
];

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
