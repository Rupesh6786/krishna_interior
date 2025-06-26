"use server";

import { suggestDesignChanges, type SuggestDesignChangesInput, type SuggestDesignChangesOutput } from '@/ai/flows/suggest-design-changes';

export async function getDesignSuggestions(input: SuggestDesignChangesInput): Promise<SuggestDesignChangesOutput> {
  console.log('Fetching design suggestions for:', input);
  try {
    const result = await suggestDesignChanges(input);
    return result;
  } catch (error) {
    console.error("Error in getDesignSuggestions action:", error);
    // In a real app, you might want to throw a more specific error
    // or return a structured error object.
    throw new Error('Failed to get suggestions from AI model.');
  }
}
