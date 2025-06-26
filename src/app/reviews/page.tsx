import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Priya & Rohan Sharma",
        location: "Mumbai",
        avatar: "/img/review-priya-rohan.jpg",
        hint: "couple portrait",
        rating: 5,
        title: "A dream come true!",
        comment: "The team at Krishna Interiors transformed our house into a home. Their attention to detail is impeccable, and they perfectly captured our vision. The 3D previews were a game-changer!"
    },
    {
        name: "Anjali Mehta",
        location: "Pune",
        avatar: "/img/review-anjali.jpg",
        hint: "woman smiling",
        rating: 5,
        title: "Seamless process and stunning results.",
        comment: "From the initial consultation to the final installation, the process was seamless and professional. My kitchen is now my favorite part of the house. Highly recommended for their creativity and execution."
    },
    {
        name: "Vikram Singh",
        location: "Delhi",
        avatar: "/img/review-vikram.jpg",
        hint: "man professional",
        rating: 5,
        title: "Exceeded all our expectations.",
        comment: "We were looking for a minimal yet warm design for our home office, and Krishna Interiors delivered beyond our expectations. The team is professional, and the quality of work is top-notch."
    },
    {
        name: "The Desai Family",
        location: "Bengaluru",
        avatar: "/img/review-desai-family.jpg",
        hint: "family picture",
        rating: 4,
        title: "Beautiful designs, slightly delayed.",
        comment: "The final outcome is beautiful, and we love our new living room. There was a slight delay in the project timeline, but the team was communicative and resolved all our concerns."
    },
     {
        name: "Sandeep Patil",
        location: "Hyderabad",
        avatar: "/img/review-sandeep.jpg",
        hint: "smiling man",
        rating: 5,
        title: "Functional and stylish wardrobe.",
        comment: "I needed a wardrobe that was both functional and aesthetically pleasing. Krishna's team designed the perfect solution for my space. The quality of materials and the finish is excellent."
    },
     {
        name: "Neha Gupta",
        location: "Chennai",
        avatar: "/img/review-neha.jpg",
        hint: "woman portrait professional",
        rating: 5,
        title: "The best in the business!",
        comment: "Their AI design tool was surprisingly helpful in exploring color options. The entire team is passionate about what they do, and it shows in their work. I couldn't be happier with my new home."
    }
];

export default function ReviewsPage() {
    return (
        <div>
            <section className="bg-primary/5 py-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-headline text-primary mb-2">What Our Clients Say</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We pride ourselves on creating spaces our clients love. Here’s what they have to say about their experience with Krishna Interiors.
                    </p>
                </div>
            </section>
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardHeader className="flex-grow">
                                <div className="flex items-start gap-4">
                                    <Avatar className="w-16 h-16 border-2 border-primary">
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-headline text-xl">{testimonial.name}</h3>
                                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                        <div className="flex text-primary mt-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 fill-current" />
                                            ))}
                                            {[...Array(5 - testimonial.rating)].map((_, i) => (
                                                 <Star key={i} className="h-5 w-5 text-muted" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardTitle className="text-lg font-headline mb-2">{testimonial.title}</CardTitle>
                                <p className="italic text-muted-foreground">&quot;{testimonial.comment}&quot;</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
