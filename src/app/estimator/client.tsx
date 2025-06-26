"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const baseCosts = {
  kitchen: 1500, // per sqft
  wardrobe: 1200, // per sqft
  'full-home': 1000, // per sqft for a base package
};

const qualityMultipliers = {
  basic: 1,
  standard: 1.5,
  premium: 2.5,
};

type Quality = keyof typeof qualityMultipliers;

const EstimatorTab = ({ type }: { type: 'kitchen' | 'wardrobe' | 'full-home' }) => {
  const [size, setSize] = useState(type === 'full-home' ? [1000] : [100]); // in sqft
  const [quality, setQuality] = useState<Quality>('standard');

  const estimatedCost = useMemo(() => {
    return size[0] * baseCosts[type] * qualityMultipliers[quality];
  }, [size, quality, type]);

  const features = {
    basic: ['Basic Materials', 'Standard Fittings', '2-Year Warranty'],
    standard: ['Mid-Range Materials', 'Durable Fittings', '5-Year Warranty', 'Basic Accessories'],
    premium: ['High-End Materials', 'Premium Brand Fittings', '10-Year Warranty', 'Advanced Accessories'],
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                 <CardTitle className="font-headline capitalize">{type.replace('-', ' ')} Estimate</CardTitle>
                 <CardDescription>Adjust the sliders to get a cost estimate.</CardDescription>
            </div>
            <div className="text-right">
                <p className="text-sm text-muted-foreground">Estimated Cost</p>
                <p className="text-3xl font-bold text-primary">₹{Math.round(estimatedCost).toLocaleString()}</p>
            </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-2">
            <label className="font-medium">Size ({size[0]} sq. ft.)</label>
            <Slider
                value={size}
                onValueChange={setSize}
                min={type === 'full-home' ? 500 : 50}
                max={type === 'full-home' ? 3000 : 300}
                step={type === 'full-home' ? 50 : 10}
            />
        </div>
        <div className="space-y-4">
            <label className="font-medium">Material & Finish Quality</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(Object.keys(qualityMultipliers) as Quality[]).map(q => (
                    <Button key={q} variant={quality === q ? 'default' : 'outline'} onClick={() => setQuality(q)} className="h-auto py-3 flex flex-col items-start text-left">
                        <span className="font-bold capitalize">{q}</span>
                        <span className="text-xs font-normal">{features[q][0]}</span>
                    </Button>
                ))}
            </div>
        </div>
         <div className="pt-4">
            <h4 className="font-headline text-lg mb-2">What's Included:</h4>
            <ul className="space-y-2">
                {features[quality].map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Book a Free Design Consultation</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export function EstimatorClient() {
  return (
    <Tabs defaultValue="kitchen" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
        <TabsTrigger value="wardrobe">Wardrobe</TabsTrigger>
        <TabsTrigger value="full-home">Full Home</TabsTrigger>
      </TabsList>
      <TabsContent value="kitchen">
        <EstimatorTab type="kitchen" />
      </TabsContent>
      <TabsContent value="wardrobe">
        <EstimatorTab type="wardrobe" />
      </TabsContent>
      <TabsContent value="full-home">
        <EstimatorTab type="full-home" />
      </TabsContent>
    </Tabs>
  );
}
