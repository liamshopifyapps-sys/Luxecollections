import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ShoppingBag, Plus, Minus, Info } from "lucide-react";
import { useState } from "react";
import { useCart, Product } from "../context/CartContext";
import { cn } from "../lib/utils";

const PRODUCTS: Product[] = [
  { id: 1, name: "Architectural Blazer", price: "$495", category: "Essentials", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop", description: "A structural masterpiece designed to define the silhouette. Constructed from Italian wool with hidden closures and internal architectural reinforcement." },
  { id: 2, name: "Silk Column Dress", price: "$620", category: "Dresses", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1974&auto=format&fit=crop", description: "Fluidity meets form in this heavy-weight silk column dress. Features a clean architectural neckline and a silent interior finish." },
  { id: 3, name: "Merino Wool Scarf", price: "$185", category: "Accessories", image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1974&auto=format&fit=crop", description: "The ultimate insulation. Oversized dimensions allowed for sculptural draping. 100% sustainably sourced Merino wool." },
  { id: 4, name: "Tailored Trousers", price: "$345", category: "Essentials", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1974&auto=format&fit=crop", description: "Precision-cut trousers with a sharp architectural crease. Minimalist waistband design and premium gabardine finish." },
  { id: 5, name: "Sculptural Trench", price: "$890", category: "Outerwear", image: "https://images.unsplash.com/photo-1544022613-e87ce7526ed1?q=80&w=1974&auto=format&fit=crop", description: "A seasonal staple reimagined. Exaggerated proportions paired with technical water-repellent cotton for the modern wanderer." },
  { id: 6, name: "Cashmere Turtleneck", price: "$295", category: "Knitwear", image: "https://images.unsplash.com/photo-1574180563860-563630a8d4e3?q=80&w=1974&auto=format&fit=crop", description: "Softness defined through form. 12-gauge Mongolian cashmere with a structure that maintains its architectural integrity." },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="py-32 px-6 text-center">
        <h2 className="text-4xl italic">Piece Not Found</h2>
        <Link to="/collections" className="text-sm underline mt-8 inline-block">Return to Archive</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
    // UX: Add some feedback or navigate to cart
    navigate('/cart');
  };

  return (
    <div className="bg-luxe-paper min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center space-x-3 text-xs uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-12"
        >
          <ArrowLeft size={14} />
          <span>Back to Grid</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Images */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-[3/4] bg-luxe-ink/5 rounded-[3rem] overflow-hidden"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover grayscale-[10%]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-square bg-luxe-ink/5 rounded-3xl overflow-hidden opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                 <img src={product.image} className="w-full h-full object-cover scale-150" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square bg-luxe-ink/5 rounded-3xl overflow-hidden opacity-50 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center p-8 text-center text-[10px] uppercase tracking-widest leading-loose">
                 Architectural Fabrication <br /> Detail Study
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-32">
            <p className="text-[10px] uppercase tracking-[0.5em] mb-4 opacity-50">{product.category}</p>
            <h1 className="text-6xl md:text-7xl mb-8 leading-none">{product.name}</h1>
            <p className="text-2xl font-light mb-12">{product.price}</p>
            
            <div className="space-y-8 mb-16">
              <p className="text-lg text-luxe-ink/70 leading-relaxed italic">
                "{product.description}"
              </p>
              
              <div className="flex items-center space-x-4 py-6 border-y border-luxe-ink/5">
                <div className="w-8 h-8 rounded-full bg-luxe-accent flex items-center justify-center text-white">
                  <Info size={14} />
                </div>
                <span className="text-[10px] uppercase tracking-widest opacity-60">Sizing: Architectural Fit (Tailored to Silhouette)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex items-center space-x-6 border border-luxe-ink/10 px-8 py-5 rounded-full">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="hover:text-luxe-accent transition-colors"><Minus size={16} /></button>
                <span className="text-sm font-medium w-6 text-center">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="hover:text-luxe-accent transition-colors"><Plus size={16} /></button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-luxe-ink text-luxe-paper py-5 px-12 rounded-full text-xs uppercase tracking-[0.3em] flex items-center justify-center space-x-4 hover:bg-luxe-ink/90 transition-all shadow-xl hover:shadow-2xl"
              >
                <ShoppingBag size={16} />
                <span>Add to Archive</span>
              </button>
            </div>

            <div className="mt-16 pt-16 border-t border-luxe-ink/5 grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest opacity-40 mb-4">Fabrication</h4>
                <p className="text-xs leading-relaxed opacity-70">Premium Italian Textiles & Structural Interfacing</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest opacity-40 mb-4">Origin</h4>
                <p className="text-xs leading-relaxed opacity-70">Architectural Studio, Florence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
