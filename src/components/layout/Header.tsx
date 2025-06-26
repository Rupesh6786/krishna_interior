"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, X, DraftingCompass } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/estimator", label: "Price Estimator" },
  { href: "/designer", label: "AI Designer" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  const NavLink = ({ href, label, isMobile = false }: { href: string; label: string, isMobile?: boolean }) => {
    const isActive = pathname === href;
    const linkComponent = (
       <Link
        href={href}
        className={cn(
          "transition-colors hover:text-primary",
          isActive ? "text-primary font-bold" : "text-foreground/80",
          isMobile ? "text-xl py-2" : "text-sm font-medium"
        )}
      >
        {label}
      </Link>
    );

    return isMobile ? <SheetClose asChild>{linkComponent}</SheetClose> : linkComponent;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <DraftingCompass className="h-7 w-7 text-primary" />
          <span className="font-headline text-xl font-semibold text-primary">
            Krishna Interiors
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <Button asChild>
            <Link href="/contact">Get Quote</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center border-b pb-4">
                     <Link href="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                        <DraftingCompass className="h-7 w-7 text-primary" />
                        <span className="font-headline text-xl font-semibold text-primary">
                          Krishna Interiors
                        </span>
                    </Link>
                </div>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} href={link.href} label={link.label} isMobile />
                  ))}
                </nav>
                 <div className="mt-auto pt-8">
                    <SheetClose asChild>
                        <Button asChild className="w-full" size="lg">
                            <Link href="/contact">Get a Free Quote</Link>
                        </Button>
                    </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
