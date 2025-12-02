import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { TrendCarousel } from '@/components/TrendCarousel';
import { LookbookSection } from '@/components/LookbookSection';
import { SizeGuideModal } from '@/components/SizeGuideModal';
import { CategoryFilter } from '@/components/CategoryFilter';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz completamente editable para la página principal.
 * El agente IA puede modificar colores, textos, layout, etc.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section - New Drops */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/6760e391-6dd2-4370-9211-1c073217772b/silk-blouse-hero.jpg"
            alt="New Drops Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 opacity-90">
              Spring/Summer Collection
            </p>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              New Drops
            </h1>
            <p className="text-lg md:text-xl editorial-text mb-8 max-w-md font-light">
              Discover this season's most refined pieces. Timeless silhouettes crafted with exceptional attention to detail.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => {
                  const section = document.getElementById('collections');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-editorial-inverse"
              >
                Shop Now
              </button>
              <SizeGuideModal />
            </div>
          </div>
        </div>
      </section>

      {/* Trend Carousel */}
      <TrendCarousel />

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3">
                Our Collections
              </h2>
              <p className="text-muted-foreground editorial-text">
                Thoughtfully curated selections for every occasion
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lookbook Section */}
      <LookbookSection />

      {/* Products Section */}
      <section id="products" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'}` 
                  : 'All Pieces'
                }
              </h2>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                {filteredProducts.length} Items
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              {selectedCollectionId && (
                <Button 
                  variant="outline" 
                  onClick={handleShowAllProducts}
                  size="sm"
                  className="uppercase tracking-widest text-xs"
                >
                  View All
                </Button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <CategoryFilter />
          </div>
          
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-background aspect-[3/4] animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground editorial-text">
                No pieces available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};