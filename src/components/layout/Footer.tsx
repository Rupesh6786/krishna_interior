import Link from "next/link";
import { DraftingCompass, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <DraftingCompass className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-semibold text-primary">
                Krishna Interiors
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Crafting beautiful and functional spaces tailored to your lifestyle.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="font-headline text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/estimator" className="text-sm text-muted-foreground hover:text-primary transition-colors">Price Estimator</Link></li>
              <li><Link href="/reviews" className="text-sm text-muted-foreground hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link href="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-headline text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>Email: <a href="mailto:tkrishna610@gmail.com" className="hover:text-primary transition-colors">tkrishna610@gmail.com</a></p>
              <p>Phone: <a href="tel:+918292615316" className="hover:text-primary transition-colors">+91 8292615316</a></p>
            </address>
          </div>
          <div className="col-span-1">
             <h3 className="font-headline text-lg mb-4">Follow Us</h3>
             <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-6 w-6" /></a>
             </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Krishna Interiors. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
