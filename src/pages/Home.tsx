import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxe Hero" 
            className="w-full h-full object-cover grayscale-[20%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-luxe-ink/20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs uppercase tracking-[0.5em] mb-6 text-luxe-paper/80"
            >
              Defining Modern Elegance
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl mb-8 text-luxe-paper"
            >
              The Architecture <br /> of Fashion
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/collections" className="inline-flex items-center space-x-4 bg-luxe-paper text-luxe-ink px-8 py-5 text-xs uppercase tracking-widest hover:bg-luxe-paper/90 transition-colors">
                <span>Explore the Archive</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-luxe-paper">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl leading-[1.1]">
              Refined architectural approach to <span className="italic">modern style.</span>
            </h2>
            <p className="text-lg text-luxe-ink/70 leading-relaxed max-w-lg">
              At Luxe Collections, we believe clothing should be an extension of the space you inhabit. Our pieces are designed with architectural precision, focusing on form, silhouette, and the silent language of quality.
            </p>
            <div className="pt-4">
              <Link to="/about" className="text-xs uppercase tracking-widest border-b border-luxe-ink/30 pb-2 hover:border-luxe-ink transition-colors pb-1">
                Our Philosophy
              </Link>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[3/4] overflow-hidden rounded-[2rem]">
                <img 
                  src="https://images.unsplash.com/photo-1539109132374-348214a3c26b?q=80&w=1974&auto=format&fit=crop" 
                  alt="Style detail" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-luxe-accent p-8 rounded-full flex items-center justify-center text-center text-luxe-paper shadow-2xl">
                <p className="text-[10px] uppercase tracking-widest leading-tight">Handcrafted <br /> with <br /> Care</p>
             </div>
          </div>
        </div>
      </section>

      {/* Signature Teaser */}
      <section className="py-32 border-t border-luxe-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
            <h2 className="text-5xl">The Signature Archive</h2>
            <Link to="/collections" className="text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
              View All Pieces
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {[
              { id: 1, name: "Architectural Blazer", price: "$495", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop" },
              { id: 2, name: "Silk Column Dress", price: "$620", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1974&auto=format&fit=crop" },
              { id: 3, name: "Merino Wool Scarf", price: "$185", image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1974&auto=format&fit=crop" }
            ].map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-luxe-ink/5 overflow-hidden mb-6 rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl mb-1">{product.name}</h3>
                <p className="text-xs uppercase tracking-wider opacity-60">{product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Teaser */}
      <section className="py-24 bg-luxe-ink text-luxe-paper relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-luxe-paper/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <div className="inline-block px-4 py-2 border border-luxe-paper/20 rounded-full mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em]">AI-Powered Personalized Archive</span>
          </div>
          <h2 className="text-5xl md:text-7xl mb-12 max-w-4xl font-light">
            An Archive Crafted <br /> <span className="italic">Just for You.</span>
          </h2>
          <p className="text-luxe-paper/60 max-w-xl text-lg mb-12 leading-relaxed">
            Our AI stylist understands your aesthetic blueprints. Curating a personalized selection of signature pieces that harmonize with your existing wardrobe.
          </p>
          <Link to="/collections" className="bg-luxe-paper text-luxe-ink px-10 py-5 text-xs uppercase tracking-[0.2em] hover:bg-luxe-paper/90 transition-colors">
            Access My Stylist
          </Link>
        </div>
      </section>
    </div>
  );
}
