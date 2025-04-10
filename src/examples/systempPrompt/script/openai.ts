import { Agent, Model, Provider } from '@sparrowstack/sparrow';
import { softwareEngineerTypeScriptPrompt } from '@src/examples/systempPrompt/softwareEngineerTypescriptPrompt';

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
	systemPrompt: softwareEngineerTypeScriptPrompt,
});

const response = await agent.sendMessage({
	message: 'Hello, can you show me your favorite method?',
});

console.log(response.text);
/** Response:

```typescript
// safelyGetNestedValue.ts

interface Params {
  obj: Record<string, any>;
  path: string;
  defaultValue?: any;
}

const safelyGetNestedValue = ({ obj, path, defaultValue = undefined }: Params) => {
  try {
    return path
      .split('.')
      .reduce((current, key) =>
        current && current[key] !== undefined ? current[key] : undefined,
        obj) ?? defaultValue;
  } catch (error) {
    return defaultValue;
  }
};
```
 */
