import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface Trend {
  title: string;
  image: string;
  tag: string;
}

const trends: Trend[] = [
  {
    title: 'Minimalist Tailoring',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop',
    tag: 'TREND 01'
  },
  {
    title: 'Natural Linen',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1000&fit=crop',
    tag: 'TREND 02'
  },
  {
    title: 'Luxe Textures',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&h=1000&fit=crop',
    tag: 'TREND 03'
  },
  {
    title: 'Modern Monochrome',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1000&fit=crop',
    tag: 'TREND 04'
  }
];

export const TrendCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % trends.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + trends.length) % trends.length);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
              Trending Now
            </h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">
              This Season's Edit
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="h-10 w-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="h-10 w-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {trends.map((trend, index) => {
            const isActive = index === currentIndex;
            const isVisible = 
              index === currentIndex || 
              index === (currentIndex + 1) % trends.length ||
              index === (currentIndex + 2) % trends.length ||
              index === (currentIndex + 3) % trends.length;

            return (
              <div
                key={index}
                className={`relative overflow-hidden transition-all duration-500 ${
                  isVisible ? 'opacity-100' : 'opacity-0 hidden md:block'
                } ${isActive ? 'md:col-span-2 md:row-span-1' : ''}`}
              >
                <div className={`aspect-[3/4] ${isActive ? 'md:aspect-[2/3]' : ''} relative group cursor-pointer`}>
                  <img
                    src={trend.image}
                    alt={trend.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs tracking-widest mb-2 opacity-80">
                      {trend.tag}
                    </p>
                    <h3 className={`font-light tracking-tight ${isActive ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                      {trend.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};