import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, DraftingCompass, Sofa, Truck } from "lucide-react";

const galleryItems = [
  {
    src: "/img/gallery-living-room-minimal.jpg",
    hint: "living room",
    title: "Minimalist Living Room",
    style: "Minimal",
  },
  {
    src: "/img/gallery-kitchen-contemporary.jpg",
    hint: "kitchen",
    title: "Contemporary Kitchen",
    style: "Contemporary",
  },
  {
    src: "/img/gallery-bedroom-industrial.jpg",
    hint: "bedroom",
    title: "Industrial Bedroom",
    style: "Industrial",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    avatar: "/img/testimonial-priya.jpg",
    hint: "woman portrait",
    rating: 5,
    comment: "The team at Krishna Interiors transformed our house into a home. Their attention to detail is impeccable.",
  },
  {
    name: "Rahul Verma",
    avatar: "/img/testimonial-rahul.jpg",
    hint: "man portrait",
    rating: 5,
    comment: "From the 3D designs to the final installation, the process was seamless. Highly recommended!",
  },
];

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="/img/hero-interior.jpg"
          alt="Beautifully designed interior"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 brightness-50"
          data-ai-hint="elegant interior"
        />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-headline mb-4 drop-shadow-md">
            Designing Your Dreams Into Reality
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow">
            Experience bespoke interior design with Krishna Interiors. We craft personalized spaces that reflect your unique style and taste.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/estimator">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link href="/gallery">Explore Designs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4">
         <div className="flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/2">
             <Image src="/img/lead-designer.jpg" data-ai-hint="professional portrait" alt="Krishna Thakur" width={600} height={600} className="rounded-lg shadow-xl" />
           </div>
           <div className="md:w-1/2">
             <h2 className="text-3xl md:text-4xl font-headline mb-4 text-primary">Meet Our Lead Designer</h2>
             <p className="text-lg mb-4">
              Krishna Thakur, with over 6 years of experience in the interior design industry, leads our creative team. Her passion for creating beautiful and functional spaces is the driving force behind Krishna Interiors. She believes in a collaborative approach, working closely with clients to bring their vision to life.
             </p>
             <p className="text-muted-foreground">
                Our philosophy is simple: to create timeless designs that are not only aesthetically pleasing but also a true reflection of the people who inhabit them.
             </p>
           </div>
         </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary">Our Process</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-accent/20 rounded-full p-6 mb-4">
              <DraftingCompass className="h-12 w-12 text-accent" />
            </div>
            <h3 className="text-xl font-headline mb-2">1. Design & Plan</h3>
            <p className="text-muted-foreground">Book a free consultation, and our designers will create a personalized 2D and 3D plan for your space.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-accent/20 rounded-full p-6 mb-4">
               <Sofa className="h-12 w-12 text-accent" />
            </div>
            <h3 className="text-xl font-headline mb-2">2. Visualize & Finalize</h3>
            <p className="text-muted-foreground">Take a virtual walkthrough of your future home and finalize colors, materials, and furniture.</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="bg-accent/20 rounded-full p-6 mb-4">
              <Truck className="h-12 w-12 text-accent" />
            </div>
            <h3 className="text-xl font-headline mb-2">3. Execute & Install</h3>
            <p className="text-muted-foreground">Our project managers ensure a seamless execution and timely installation of your dream interior.</p>
          </div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section id="gallery" className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-headline text-primary">Featured Designs</h2>
          <Button asChild variant="link" className="text-accent hover:text-accent/80">
            <Link href="/gallery">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group">
              <CardContent className="p-0">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={item.hint}
                />
              </CardContent>
              <CardFooter className="p-4 bg-background/80">
                  <div className="w-full">
                    <p className="font-headline text-lg">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.style}</p>
                  </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint}/>
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-headline">{testimonial.name}</CardTitle>
                    <div className="flex text-primary">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic text-muted-foreground">&quot;{testimonial.comment}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
            <div className="text-center mt-8">
                <Button asChild variant="link" className="text-accent hover:text-accent/80 text-lg">
                    <Link href="/reviews">Read More Reviews <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
