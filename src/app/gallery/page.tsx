import { GalleryClient } from "./client";

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-2">Inspiration Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover curated designs to spark your imagination. Filter by room, style, or budget to find your perfect interior.
            </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <GalleryClient />
      </section>
    </div>
  );
}
