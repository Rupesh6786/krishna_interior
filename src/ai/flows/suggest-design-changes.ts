'use server';

/**
 * @fileOverview A flow that suggests design changes for a 3D model, such as alternative colors and textures.
 *
 * - suggestDesignChanges - A function that handles the design change suggestion process.
 * - SuggestDesignChangesInput - The input type for the suggestDesignChanges function.
 * - SuggestDesignChangesOutput - The return type for the suggestDesignChanges function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestDesignChangesInputSchema = z.object({
  modelDescription: z
    .string()
    .describe('A description of the current 3D model, including the room type, style, and current colors/textures.'),
  userPreferences: z
    .string()
    .describe('The user preferences for the design, including desired colors, textures, and styles.'),
});
export type SuggestDesignChangesInput = z.infer<typeof SuggestDesignChangesInputSchema>;

const SuggestDesignChangesOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('A list of design suggestions, including alternative colors and textures.'),
});
export type SuggestDesignChangesOutput = z.infer<typeof SuggestDesignChangesOutputSchema>;

export async function suggestDesignChanges(input: SuggestDesignChangesInput): Promise<SuggestDesignChangesOutput> {
  return suggestDesignChangesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestDesignChangesPrompt',
  input: {schema: SuggestDesignChangesInputSchema},
  output: {schema: SuggestDesignChangesOutputSchema},
  prompt: `You are an AI-powered interior design assistant.  Your task is to suggest design changes for a 3D model based on the user's preferences.

Here is the description of the current 3D model:
{{{modelDescription}}}

Here are the user's preferences:
{{{userPreferences}}}

Suggest alternative colors and textures that would improve the design, keeping the user's preferences in mind.  Provide a numbered list.
`,
});

const suggestDesignChangesFlow = ai.defineFlow(
  {
    name: 'suggestDesignChangesFlow',
    inputSchema: SuggestDesignChangesInputSchema,
    outputSchema: SuggestDesignChangesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
