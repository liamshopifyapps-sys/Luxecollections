import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ShoppingBag, Eye, ShieldCheck, Star, SlidersHorizontal, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart, Product } from "../context/CartContext";

const PRODUCTS: Product[] = [
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
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="relative pt-40 pb-24 border-b border-luxe-beige overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.8em] text-luxe-gold font-bold mb-8"
          >
            Curated Signature Archive
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-9xl mb-12 italic font-serif leading-none text-luxe-ink"
          >
            The <span className="font-normal text-luxe-gold">Collection</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-luxe-ink/60 text-xl font-light leading-relaxed"
          >
            Experience the architectural precision of Luxe Collection. Each piece in our archive is selected for its structural integrity, elevated silhouette, and professional resonance.
          </motion.p>
        </div>
        
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-luxe-beige/30 -skew-x-12 transform translate-x-1/2 pointer-events-none" />
      </section>

      {/* Filter & Search Bar */}
      <div className="sticky top-24 z-30 bg-white/90 backdrop-blur-md border-b border-luxe-beige">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 rounded-full font-bold ${
                  activeCategory === cat 
                    ? "bg-luxe-gold text-white shadow-lg" 
                    : "bg-transparent text-luxe-ink/40 hover:text-luxe-ink/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative group w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-luxe-gold" size={16} />
            <input 
              type="text" 
              placeholder="Search Archive..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-luxe-paper border border-luxe-beige rounded-full py-4 pl-12 pr-6 text-[10px] uppercase tracking-widest outline-none focus:border-luxe-gold transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-24 min-h-[60vh]">
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32"
            >
              {filteredProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-luxe-beige overflow-hidden mb-10 rounded-[3rem] relative shadow-xl">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-luxe-ink/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
                       <Link 
                         to={`/product/${product.id}`}
                         className="w-16 h-16 bg-white text-luxe-ink rounded-full flex items-center justify-center shadow-2xl hover:bg-luxe-gold hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
                       >
                         <Eye size={24} strokeWidth={1.5} />
                       </Link>
                       <button 
                         onClick={() => addToCart(product)}
                         className="w-16 h-16 bg-white text-luxe-ink rounded-full flex items-center justify-center shadow-2xl hover:bg-luxe-gold hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75"
                       >
                         <ShoppingBag size={24} strokeWidth={1.5} />
                       </button>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 pointer-events-none transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl flex justify-between items-center shadow-2xl">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-luxe-gold">In Stock</span>
                        <ArrowRight size={16} className="text-luxe-gold" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 px-4 text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                      <div>
                        <Link to={`/product/${product.id}`} className="hover:text-luxe-gold transition-colors block">
                          <h3 className="text-4xl mb-2 font-serif text-luxe-ink">{product.name}</h3>
                        </Link>
                        <p className="text-[11px] uppercase tracking-[0.4em] text-luxe-gold font-bold">{product.category}</p>
                      </div>
                      <span className="text-xl font-light text-luxe-ink/40 bg-luxe-beige px-6 py-2 rounded-full">{product.price}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-40 text-center space-y-8"
            >
              <div className="w-24 h-24 bg-luxe-beige rounded-full flex items-center justify-center mx-auto text-luxe-gold">
                <Search size={40} />
              </div>
              <h3 className="text-4xl italic font-serif text-luxe-ink">No Archive Matches</h3>
              <p className="text-luxe-ink/40 max-w-sm mx-auto text-lg font-light leading-relaxed">
                We couldn't find any signature pieces matching your structural parameters.
              </p>
              <button 
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="text-[11px] uppercase tracking-widest border-b-2 border-luxe-gold pb-2 font-bold text-luxe-gold"
              >
                Reset Search
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Trust & Policy Section */}
      <section className="py-32 bg-luxe-ink text-luxe-paper">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
           {[
             { title: "Authentication", icon: <ShieldCheck />, desc: "Every signature item includes a certificate of authenticity." },
             { title: "Concierge Shipping", icon: <ShoppingBag />, desc: "Professional logistics and insured delivery to your verified address." },
             { title: "Corporate Integrity", icon: <Star />, desc: "USA-based operations with a focus on structural professionalism." },
             { title: "Signature Support", icon: <SlidersHorizontal />, desc: "Direct access to our style archivist for curated consultations." }
           ].map((item, i) => (
             <div key={i} className="space-y-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-luxe-gold mx-auto md:mx-0">
                  {item.icon}
                </div>
                <h4 className="text-lg font-serif italic text-luxe-gold">{item.title}</h4>
                <p className="text-sm text-luxe-paper/40 leading-relaxed font-light">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}

