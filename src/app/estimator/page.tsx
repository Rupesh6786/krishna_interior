import { EstimatorClient } from "./client";

export default function EstimatorPage() {
  return (
    <div>
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-2">Price & Budget Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get a transparent, real-time estimate for your interior design project. Adjust your budget and see the possibilities.
            </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <EstimatorClient />
      </section>
    </div>
  );
}
