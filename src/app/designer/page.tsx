import Image from 'next/image';
import { DesignSuggestionsClient } from './client';

export default function DesignerPage() {
  return (
    <div>
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-2">AI-Powered Design Assistant</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               Unleash your creativity with our AI assistant. Describe your model and preferences to get unique design suggestions in real-time.
            </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
                 <div className="sticky top-24">
                     <h2 className="text-2xl font-headline mb-4">Your 3D Model Preview</h2>
                     <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-primary/20 shadow-lg">
                        <Image 
                            src="/img/designer-preview-room.jpg"
                            width={1280}
                            height={720}
                            alt="3D model of a room"
                            className="object-cover w-full h-full"
                            data-ai-hint="modern living room"
                        />
                     </div>
                 </div>
            </div>
            <div className="lg:col-span-2">
                <DesignSuggestionsClient />
            </div>
        </div>
      </section>
    </div>
  );
}
