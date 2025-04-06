/**
 * Usage:
 * --------
 * Use this file to play around with the SparrowStack Agent in an interactive terminal:
 * - Switch up Providers / Models
 * - Add/remove tools, or create your own
 * - Change the system prompt, or create your own
 *
 * To Try:
 * --------
 * Try testing "human in the loop" with the `pressTheNukeButtonTool` tool.
 * Ask the agent to "press the nuke button" and see what happens!
 */
import { InteractiveTerminal } from '@sparrowstack/interactive-terminal';
import { Agent, Model, Provider, type Settings } from '@sparrowstack/sparrow';
import { softwareEngineerTypeScriptPrompt } from '@sparrowstack/system-prompts';
import {
	getWeatherDataTool,
	pressTheNukeButtonTool,
	getDirectoryStructureTool,
} from '@sparrowstack/tools';

// Configuration
// --------------------------------
const provider = Provider.OpenAI;
const model = Model.OpenAI.o3Mini;
const apiKey = process.env['OPENAI_API_KEY'] as string;

const systemPrompt = softwareEngineerTypeScriptPrompt;
const tools = [
	// Tool call with params
	// OPEN_WEATHER_MAP_API_KEY is required
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
