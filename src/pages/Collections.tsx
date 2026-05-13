import { useState } from "react";
import { motion } from "motion/react";
import PersonalStylist from "../components/PersonalStylist";
import { Search, Filter, ShoppingBag } from "lucide-react";

const PRODUCTS = [
  { id: 1, name: "Architectural Blazer", price: "$495", category: "Essentials", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop" },
  { id: 2, name: "Silk Column Dress", price: "$620", category: "Dresses", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1974&auto=format&fit=crop" },
  { id: 3, name: "Merino Wool Scarf", price: "$185", category: "Accessories", image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1974&auto=format&fit=crop" },
  { id: 4, name: "Tailored Trousers", price: "$345", category: "Essentials", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1974&auto=format&fit=crop" },
  { id: 5, name: "Sculptural Trench", price: "$890", category: "Outerwear", image: "https://images.unsplash.com/photo-1544022613-e87ce7526ed1?q=80&w=1974&auto=format&fit=crop" },
  { id: 6, name: "Cashmere Turtleneck", price: "$295", category: "Knitwear", image: "https://images.unsplash.com/photo-1574180563860-563630a8d4e3?q=80&w=1974&auto=format&fit=crop" },
];

const categories = ["All", "Essentials", "Dresses", "Outerwear", "Knitwear", "Accessories"];

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showStylist, setShowStylist] = useState(false);

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-luxe-paper min-h-screen">
      {/* Header */}
      <section className="py-24 border-b border-luxe-ink/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.5em] mb-8 opacity-50">Curated Architecture</p>
          <h1 className="text-6xl md:text-8xl mb-12 italic">The Archive</h1>
          <p className="max-w-2xl mx-auto text-luxe-ink/60 text-lg leading-relaxed">
            A precise selection of pieces designed to harmonize with the modern silhouette. Elevated essentials for a refined existence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 text-[10px] uppercase tracking-widest border transition-all duration-300 rounded-full ${
                  activeCategory === cat 
                    ? "bg-luxe-ink text-luxe-paper border-luxe-ink" 
                    : "border-luxe-ink/10 hover:border-luxe-ink/30 text-luxe-ink/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button 
             onClick={() => setShowStylist(!showStylist)}
             className="flex items-center space-x-3 bg-white border border-luxe-ink/5 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all group scale-105"
          >
            <div className="w-8 h-8 rounded-full bg-luxe-accent flex items-center justify-center text-white">
              <Search size={14} />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-medium">Personal Stylist</span>
          </button>
        </div>

        {showStylist && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-24"
          >
            <PersonalStylist />
          </motion.div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group"
            >
              <div className="aspect-[3/4] bg-luxe-ink/5 overflow-hidden mb-8 rounded-3xl relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 linear">
                   <button className="w-full bg-luxe-paper text-luxe-ink py-5 text-[10px] uppercase tracking-widest font-medium flex items-center justify-center space-x-3 shadow-2xl">
                      <ShoppingBag size={14} />
                      <span>Request Pieces</span>
                   </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl mb-1">{product.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">{product.category}</p>
                </div>
                <span className="text-sm font-medium">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom Teaser */}
      <section className="py-32 bg-luxe-ink text-luxe-paper mt-20">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl mb-8 leading-tight">Elevated essentials for more <br /><span className="italic">refined existence.</span></h2>
              <p className="text-luxe-paper/60 text-lg max-w-md">Our signature collection represents the intersection of luxury and utility. Every stitch is a statement of architectural intent.</p>
            </div>
            <div className="aspect-video rounded-[3rem] overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" 
                 alt="Boutique detail" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>
         </div>
      </section>
    </div>
  );
}
