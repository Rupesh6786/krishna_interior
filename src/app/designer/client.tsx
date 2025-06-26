"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getDesignSuggestions } from '../actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Lightbulb } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  modelDescription: z.string().min(10, 'Please provide a more detailed description.'),
  userPreferences: z.string().min(10, 'Please describe your preferences in more detail.'),
});

type FormValues = z.infer<typeof formSchema>;

export function DesignSuggestionsClient() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      modelDescription: 'A contemporary living room with a grey sofa, light wood floors, and white walls.',
      userPreferences: 'I want a warmer, cozier feel. I like earthy tones, natural textures like linen and wool, and a touch of gold or brass for elegance.',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setSuggestions([]);
    try {
      const result = await getDesignSuggestions(data);
      if (result.suggestions) {
        setSuggestions(result.suggestions);
      } else {
        toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to get suggestions. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "An unexpected error occurred",
        description: (error as Error).message || "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center gap-2"><Wand2 className="text-primary"/> Get AI Suggestions</CardTitle>
          <CardDescription>Describe your current model and what you're looking for, and let our AI provide fresh ideas.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="modelDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Model Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., A modern kitchen with white cabinets..." {...field} rows={4} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userPreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Preferences</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., I'd like a rustic, farmhouse style..." {...field} rows={4} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? 'Generating Ideas...' : 'Suggest Designs'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

        {(isLoading || suggestions.length > 0) && (
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2"><Lightbulb className="text-primary"/> Design Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                    {isLoading ? (
                        <div className="space-y-4">
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-5/6" />
                            <Skeleton className="h-6 w-full" />
                        </div>
                    ) : (
                        <ul className="list-decimal list-inside space-y-3 text-muted-foreground">
                            {suggestions.map((suggestion, index) => (
                                <li key={index}>{suggestion}</li>
                            ))}
                        </ul>
                    )}
                </CardContent>
            </Card>
        )}
    </div>
  );
}
