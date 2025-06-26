"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  { id: 1, title: 'Serene Living Space', roomType: 'Living Room', style: 'Minimal', budget: 300000, src: '/img/gallery-living-room-minimal.jpg', hint: 'living room' },
  { id: 2, title: 'Modern Chef\'s Kitchen', roomType: 'Kitchen', style: 'Contemporary', budget: 500000, src: '/img/gallery-kitchen-contemporary.jpg', hint: 'modern kitchen' },
  { id: 3, title: 'Cozy Industrial Bedroom', roomType: 'Bedroom', style: 'Industrial', budget: 250000, src: '/img/gallery-bedroom-industrial.jpg', hint: 'industrial bedroom' },
  { id: 4, title: 'Elegant Wardrobe Design', roomType: 'Wardrobe', style: 'Contemporary', budget: 150000, src: '/img/gallery-wardrobe-elegant.jpg', hint: 'luxury wardrobe' },
  { id: 5, title: 'Sacred Pooja Room', roomType: 'Pooja Room', style: 'Traditional', budget: 80000, src: '/img/gallery-pooja-room-traditional.jpg', hint: 'pooja room' },
  { id: 6, title: 'Productive Home Office', roomType: 'Home Office', style: 'Minimal', budget: 120000, src: '/img/gallery-home-office-productive.jpg', hint: 'home office' },
  { id: 7, title: 'Urban Jungle Balcony', roomType: 'Balcony', style: 'Bohemian', budget: 50000, src: '/img/gallery-balcony-urban-jungle.jpg', hint: 'green balcony' },
  { id: 8, title: 'Sleek Contemporary Living', roomType: 'Living Room', style: 'Contemporary', budget: 400000, src: '/img/gallery-living-room-contemporary-sleek.jpg', hint: 'contemporary living' },
  { id: 9, title: 'Minimalist Kitchen', roomType: 'Kitchen', style: 'Minimal', budget: 450000, src: '/img/gallery-kitchen-minimalist.jpg', hint: 'minimalist kitchen' },
];

const roomTypes = ["All", "Living Room", "Kitchen", "Bedroom", "Wardrobe", "Pooja Room", "Home Office", "Balcony"];
const styles = ["All", "Minimal", "Contemporary", "Industrial", "Traditional", "Bohemian"];

export function GalleryClient() {
  const [activeRoomType, setActiveRoomType] = useState("All");
  const [activeStyle, setActiveStyle] = useState("All");
  const [budget, setBudget] = useState([750000]);
  const maxBudget = 1000000;

  const filteredItems = useMemo(() => {
    return galleryItems.filter(item => {
      const roomMatch = activeRoomType === 'All' || item.roomType === activeRoomType;
      const styleMatch = activeStyle === 'All' || item.style === activeStyle;
      const budgetMatch = item.budget <= budget[0];
      return roomMatch && styleMatch && budgetMatch;
    });
  }, [activeRoomType, activeStyle, budget]);

  return (
    <div className="space-y-8">
      <div className="p-6 border rounded-lg bg-card shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-2">
                <label className="text-sm font-medium">Style</label>
                <Select value={activeStyle} onValueChange={setActiveStyle}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a style" />
                </SelectTrigger>
                <SelectContent>
                    {styles.map(style => <SelectItem key={style} value={style}>{style}</SelectItem>)}
                </SelectContent>
                </Select>
            </div>
            <div className="space-y-2 col-span-1 md:col-span-2">
                <label htmlFor="budget" className="text-sm font-medium">Budget (Max: ₹{budget[0].toLocaleString()})</label>
                 <Slider
                    id="budget"
                    max={maxBudget}
                    min={50000}
                    step={10000}
                    value={budget}
                    onValueChange={setBudget}
                 />
            </div>
        </div>
        <div className="mt-4 pt-4 border-t">
            <div className="flex flex-wrap gap-2">
            {roomTypes.map(room => (
                <Button
                key={room}
                variant={activeRoomType === room ? "default" : "outline"}
                onClick={() => setActiveRoomType(room)}
                >
                {room}
                </Button>
            ))}
            </div>
        </div>
      </div>
      
      <div className="text-center mb-8">
        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Get a Free Consultation & Quote</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.length > 0 ? filteredItems.map(item => (
          <Card key={item.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
            <CardFooter className="p-4 flex-col items-start">
              <div className="flex gap-2 mb-2">
                <Badge variant="secondary">{item.roomType}</Badge>
                <Badge variant="outline">{item.style}</Badge>
              </div>
              <h3 className="font-headline text-xl">{item.title}</h3>
              <p className="text-sm text-primary font-semibold">Est. Budget: ₹{item.budget.toLocaleString()}</p>
            </CardFooter>
          </Card>
        )) : (
            <div className="col-span-full text-center py-16">
                <p className="text-xl text-muted-foreground">No designs match your criteria.</p>
                <p className="text-muted-foreground">Try adjusting your filters or budget.</p>
            </div>
        )}
      </div>
    </div>
  );
}
