import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div>
        <section className="bg-primary/5 py-12">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-headline text-primary mb-2">Get in Touch</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Ready to start your design journey? Contact us for a free consultation. We can't wait to hear about your project.
                </p>
            </div>
        </section>
        <section className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-headline text-primary mb-6">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-accent/20 p-3 rounded-full">
                                <Mail className="h-6 w-6 text-accent"/>
                            </div>
                            <div>
                                <h3 className="font-headline text-xl">Email</h3>
                                <p className="text-muted-foreground">For inquiries and support, email us at:</p>
                                <a href="mailto:tkrishna610@gmail.com" className="text-primary hover:underline">tkrishna610@gmail.com</a>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="bg-accent/20 p-3 rounded-full">
                                <Phone className="h-6 w-6 text-accent"/>
                            </div>
                            <div>
                                <h3 className="font-headline text-xl">Phone</h3>
                                <p className="text-muted-foreground">Speak to our design consultant:</p>
                                <a href="tel:+918268615316" className="text-primary hover:underline">+91 8268615316</a>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="bg-accent/20 p-3 rounded-full">
                                <MapPin className="h-6 w-6 text-accent"/>
                            </div>
                            <div>
                                <h3 className="font-headline text-xl">Visit Our Studio</h3>
                                <p className="text-muted-foreground">123 Design Lane, Creative City, India</p>
                                <p className="text-sm text-muted-foreground">(By appointment only)</p>
                            </div>
                        </div>
                    </div>
                     <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                        <Image src="/img/contact-map.png" data-ai-hint="city map" alt="Map to Krishna Interiors" width={800} height={400} className="w-full" />
                     </div>
                </div>
                <div>
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">Send us a Message</CardTitle>
                            <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" placeholder="Your Name" />
                                    </div>
                                     <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" placeholder="your.email@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" placeholder="e.g., 3BHK Interior Design" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Your Message</Label>
                                    <Textarea id="message" placeholder="Tell us about your project..." rows={6} />
                                </div>
                                <Button type="submit" size="lg" className="w-full">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    </div>
  );
}
