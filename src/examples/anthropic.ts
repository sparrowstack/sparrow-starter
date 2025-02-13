import { Agent } from '@sparrowstack/agent';
import { Model, ApiKey, Provider } from '@sparrowstack/core';
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

const provider = Provider.Anthropic;
const model = Model.Anthropic.Claude35Sonnet;
const apiKey = process.env[ApiKey.Anthropic] as string;
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
