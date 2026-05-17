import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "motion/react";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-luxe-ink/5 rounded-full flex items-center justify-center mb-8 text-luxe-ink/20">
          <ShoppingBag size={48} strokeWidth={1} />
        </div>
        <h2 className="text-4xl mb-4 italic">The Archive is Empty</h2>
        <p className="text-luxe-ink/50 max-w-sm mb-12">
          Your personalized selection has not yet been curated. Browse our collections to find architectural pieces for your wardrobe.
        </p>
        <Link 
          to="/collections" 
          className="bg-luxe-ink text-luxe-paper px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-luxe-ink/90 transition-colors"
        >
          Explore Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-luxe-paper min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.5em] mb-12 opacity-50">Curation</p>
        <h1 className="text-6xl md:text-8xl mb-24 italic">Your Selection</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-start">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-12">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col sm:flex-row gap-8 pb-12 border-b border-luxe-ink/5 group"
                >
                  <div className="w-full sm:w-48 aspect-[3/4] bg-luxe-ink/5 overflow-hidden rounded-2xl">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                    />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between py-2">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-luxe-ink/30 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-6">{item.category}</p>
                    </div>

                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex items-center space-x-4 bg-white border border-luxe-ink/5 px-4 py-2 rounded-full">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="hover:text-luxe-accent transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-xs font-medium w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="hover:text-luxe-accent transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="text-xl font-light">{item.price}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            <Link 
              to="/collections" 
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity pt-12"
            >
              <ArrowLeft size={14} />
              <span>Continue Browsing</span>
            </Link>
          </div>

          {/* Summary */}
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-luxe-ink/5 sticky top-32">
            <h2 className="text-3xl font-serif mb-12">Summary</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex justify-between text-sm">
                <span className="opacity-40">Items</span>
                <span>{cartCount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-40">Shipping</span>
                <span className="italic">Complimentary</span>
              </div>
              <div className="pt-6 border-t border-luxe-ink/5 flex justify-between text-xl">
                <span>Total</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>
            </div>

            <button className="w-full bg-luxe-ink text-luxe-paper py-6 text-xs uppercase tracking-[0.3em] hover:bg-luxe-ink/90 transition-colors mb-6">
              Inquire to Purchase
            </button>
            <p className="text-[10px] text-center opacity-30 leading-relaxed uppercase tracking-widest">
              Pricing inclusive of white-glove <br /> architectural delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
