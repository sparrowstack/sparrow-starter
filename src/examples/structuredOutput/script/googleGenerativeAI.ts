import { Agent, Model, Provider } from '@sparrowstack/sparrow';
// This response format just adds metadata to the response
import { ChatMetadataResponseFormat } from '@src/examples/structuredOutput/ChatMetadataResponseFormat';
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
	// You can also add a responseFormat to the agent for all responses
	// any responseFormat added to sendMessage will override this responseFormat
	// responseFormat: ChatMetadataResponseFormat,
});

const response = await agent.sendMessage({
	message: 'Hello, how are you?',
	responseFormat: ChatMetadataResponseFormat,
});

console.log(response.text);
