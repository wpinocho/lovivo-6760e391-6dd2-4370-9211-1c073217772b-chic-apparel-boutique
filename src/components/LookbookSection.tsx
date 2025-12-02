import { Link } from 'react-router-dom';

interface LookbookItem {
  image: string;
  title: string;
  products: string;
  link: string;
}

const lookbookItems: LookbookItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=900&fit=crop',
    title: 'Essential Edit',
    products: '12 Pieces',
    link: '#products'
  },
  {
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=900&fit=crop',
    title: 'Work Wardrobe',
    products: '8 Pieces',
    link: '#products'
  },
  {
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=900&fit=crop',
    title: 'Weekend Casual',
    products: '10 Pieces',
    link: '#products'
  },
  {
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&h=900&fit=crop',
    title: 'Evening Elegance',
    products: '6 Pieces',
    link: '#products'
  }
];

export const LookbookSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3">
            Curated Lookbooks
          </h2>
          <p className="text-muted-foreground editorial-text max-w-2xl mx-auto">
            Shop complete looks styled by our editorial team. Each collection tells a story of modern femininity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {lookbookItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[2/3] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                  <h3 className="text-lg md:text-xl font-light tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm opacity-90 tracking-wider uppercase">
                    {item.products}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="border border-white px-4 py-2 text-xs uppercase tracking-widest">
                      Shop Now
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};