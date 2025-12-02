import { useState } from 'react';
import { Button } from '@/components/ui/button';

const categories = [
  'All',
  'New Arrivals',
  'Tops',
  'Dresses',
  'Bottoms',
  'Outerwear',
  'Essentials'
];

interface CategoryFilterProps {
  onCategoryChange?: (category: string) => void;
}

export const CategoryFilter = ({ onCategoryChange }: CategoryFilterProps) => {
  const [selected, setSelected] = useState('All');

  const handleSelect = (category: string) => {
    setSelected(category);
    onCategoryChange?.(category);
  };

  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selected === category ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleSelect(category)}
          className={`whitespace-nowrap text-xs uppercase tracking-widest ${
            selected === category
              ? 'bg-foreground text-background hover:bg-foreground/90'
              : 'hover:bg-foreground hover:text-background'
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};