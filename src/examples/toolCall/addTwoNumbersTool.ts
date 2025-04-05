import { Tool, PropertyType } from '@sparrowstack/tool';

// Define Tool
export const addTwoNumbersTool = new Tool({
	name: 'addTwoNumbers',
	description: 'Add two numbers together.',
	function: ({ number1, number2 }: { number1: number; number2: number }) => {
		return number1 + number2;
	},
	parameters: {
		number1: {
			required: true,
			type: PropertyType.Number,
			description: 'The first number to add.',
		},
		number2: {
			required: true,
			type: PropertyType.Number,
			description: 'The second number to add.',
		},
	},
});