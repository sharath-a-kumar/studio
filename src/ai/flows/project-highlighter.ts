// This is an autogenerated file from Firebase Studio.
'use server';

/**
 * @fileOverview A project highlighting AI agent.
 *
 * - getHighlightedProjects - A function that handles the project highlighting process.
 * - GetHighlightedProjectsInput - The input type for the getHighlightedProjects function.
 * - GetHighlightedProjectsOutput - The return type for the getHighlightedProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetHighlightedProjectsInputSchema = z.object({
  viewingHistory: z.array(z.string()).describe('The viewing history of the visitor, as a list of project names.'),
  availableProjects: z.array(z.string()).describe('The list of available projects.'),
});
export type GetHighlightedProjectsInput = z.infer<typeof GetHighlightedProjectsInputSchema>;

const GetHighlightedProjectsOutputSchema = z.object({
  highlightedProjects: z.array(z.string()).describe('The projects to highlight, based on the viewing history.'),
});
export type GetHighlightedProjectsOutput = z.infer<typeof GetHighlightedProjectsOutputSchema>;

export async function getHighlightedProjects(input: GetHighlightedProjectsInput): Promise<GetHighlightedProjectsOutput> {
  return getHighlightedProjectsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getHighlightedProjectsPrompt',
  input: {schema: GetHighlightedProjectsInputSchema},
  output: {schema: GetHighlightedProjectsOutputSchema},
  prompt: `You are a portfolio assistant that highlights the most relevant projects based on the viewing history of the visitor.

The viewing history is as follows:
{{#if viewingHistory}}
  {{#each viewingHistory}}
    - {{this}}
  {{/each}}
{{else}}
  The visitor has no viewing history.
{{/if}}

The available projects are as follows:
{{#each availableProjects}}
  - {{this}}
{{/each}}

Highlight the projects that are most relevant to the visitor, and only return project that are available.
`, 
});

const getHighlightedProjectsFlow = ai.defineFlow(
  {
    name: 'getHighlightedProjectsFlow',
    inputSchema: GetHighlightedProjectsInputSchema,
    outputSchema: GetHighlightedProjectsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
