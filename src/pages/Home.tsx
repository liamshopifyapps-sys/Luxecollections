import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ShieldCheck, Globe, Star, Award, MapPin, Mail, Phone, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Directly trigger mailto in a new window or current frame
    window.location.href = "mailto:support@luxecollection.online";
  };

  return (
    <div className="bg-luxe-paper text-luxe-ink">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Fashion Hero" 
            className="w-full h-full object-cover opacity-80 grayscale-[20%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex items-center">
          <div className="absolute inset-x-6 top-12 bottom-12 border border-luxe-gold/20 pointer-events-none hidden md:block" />
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl space-y-10"
          >
            <p className="text-[10px] uppercase tracking-[0.8em] text-luxe-gold font-bold">Luxe Collection • USA Operations</p>
            <h1 className="text-7xl md:text-[9rem] leading-[0.85] font-serif tracking-tighter text-luxe-ink">
              Quiet <br /> <span className="italic font-normal text-luxe-gold">Luxury.</span>
            </h1>
            <p className="text-xl text-luxe-ink/60 font-light max-w-lg leading-relaxed">
              Curating elevated essentials with architectural precision. Experience the intersection of signature style and structural integrity.
            </p>
            <div className="flex items-center space-x-12 pt-8">
              <Link to="/collections" className="group flex items-center space-x-6">
                <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-luxe-gold">Explore Archive</span>
                <div className="w-16 h-16 rounded-full border border-luxe-gold/30 flex items-center justify-center group-hover:bg-luxe-gold group-hover:text-white transition-all">
                  <ArrowRight size={20} />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Legitimacy Bar */}
      <section className="py-12 bg-luxe-ink border-y border-luxe-gold/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck size={20} />, text: "EIN REGISTERED LLC" },
            { icon: <Globe size={20} />, text: "ALBUQUERQUE, NM HQ" },
            { icon: <Award size={20} />, text: "AUTHENTICITY ASSURED" },
            { icon: <Star size={20} />, text: "PREMIUM CONCIERGE" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center space-x-4 text-luxe-paper/60 border-r last:border-0 border-luxe-paper/10 px-4">
              <span className="text-luxe-gold">{item.icon}</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-center">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 px-6 bg-white overflow-hidden border-b border-luxe-beige relative">
        <div className="absolute inset-x-6 top-12 bottom-12 border border-luxe-gold/10 pointer-events-none hidden md:block" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.5em] text-luxe-gold font-bold text-center md:text-left">Curated Archive</p>
              <h2 className="text-6xl md:text-8xl italic text-center md:text-left text-luxe-ink">The Signature <br /> <span className="text-luxe-gold font-normal">Essentials</span></h2>
            </div>
            <Link to="/collections" className="text-[11px] uppercase tracking-[0.3em] border-b-2 border-luxe-gold pb-2 hover:text-luxe-gold transition-colors font-bold">View Full Archive</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { id: 1, name: "Architectural Blazer", price: "$495", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop" },
              { id: 2, name: "Silk Column Dress", price: "$620", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1974&auto=format&fit=crop" },
              { id: 5, name: "Sculptural Trench", price: "$890", image: "https://images.unsplash.com/photo-1544022613-e87ce7526ed1?q=80&w=1974&auto=format&fit=crop" }
            ].map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-[4/5] bg-luxe-beige overflow-hidden mb-10 rounded-[3rem] relative shadow-lg">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-luxe-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <div className="bg-white text-luxe-ink px-8 py-4 rounded-full text-[10px] uppercase tracking-widest shadow-2xl font-bold">
                          Discover Piece
                       </div>
                    </div>
                  </div>
                  <h3 className="text-4xl mb-3 group-hover:text-luxe-gold transition-colors text-luxe-ink">{product.name}</h3>
                  <p className="text-[11px] uppercase tracking-[0.4em] text-luxe-gold font-bold">{product.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-40 bg-luxe-paper overflow-hidden relative">
        <div className="absolute inset-x-6 top-12 bottom-12 border border-luxe-gold/20 pointer-events-none hidden md:block" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5 space-y-12">
               <p className="text-[10px] uppercase tracking-[0.5em] text-luxe-gold font-bold">Business Legitimacy</p>
               <h2 className="text-5xl md:text-8xl italic leading-tight text-luxe-ink">Professional <br /> <span className="text-luxe-gold font-normal">Integrity.</span></h2>
               <p className="text-2xl text-luxe-ink/60 font-light leading-relaxed">
                 Luxe Collection, LLC is a registered fashion business serving the United States with a commitment to quality, style, and total customer satisfaction. We operate with structural honesty from our Albuquerque studio.
               </p>
               <div className="space-y-10 pt-8">
                  {[
                    "EIN Registered Business Entity (NM, USA)",
                    "Albuquerque Based Operations & Logistics",
                    "Secure SSL-Encrypted Merchant Processing",
                    "Authenticity Certification Included with All Pieces"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-8">
                       <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-luxe-gold shadow-sm border border-luxe-gold/10">
                          <ShieldCheck size={20} />
                       </div>
                       <span className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-70 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="lg:col-span-7 aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-[5rem] shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1441984969233-389a7315203e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional Workspace" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-luxe-gold/10 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Trust Section */}
      <section className="py-24 bg-white border-y border-luxe-beige">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-24 opacity-30 grayscale pointer-events-none">
               <span className="text-xs uppercase tracking-[1em] font-bold">VOGUE</span>
               <span className="text-xs uppercase tracking-[1em] font-bold">HARPER'S</span>
               <span className="text-xs uppercase tracking-[1em] font-bold">ELLE</span>
               <span className="text-xs uppercase tracking-[1em] font-bold">AD</span>
            </div>
         </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-x-6 top-12 bottom-12 border border-luxe-gold/5 pointer-events-none hidden md:block" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-luxe-gold font-bold mb-8">Exclusive Access</p>
              <h2 className="text-5xl md:text-7xl italic font-serif text-luxe-ink mb-8">Sign Up for the <br /> <span className="text-luxe-gold font-normal">Inner Circle.</span></h2>
              <p className="text-xl text-luxe-ink/60 font-light leading-relaxed max-w-lg">
                Receive prioritized notifications for signature releases, structural design updates, and professional archival insights.
              </p>
            </div>
            <div className="bg-luxe-paper p-12 md:p-16 rounded-[4rem] border border-luxe-gold/10">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Full Name</label>
                        <input required type="text" className="w-full bg-transparent border-b border-luxe-gold/20 py-3 focus:border-luxe-gold outline-none transition-colors text-sm" placeholder="Your Name" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Email Address</label>
                        <input required type="email" className="w-full bg-transparent border-b border-luxe-gold/20 py-3 focus:border-luxe-gold outline-none transition-colors text-sm" placeholder="email@example.com" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Phone Number</label>
                      <input required type="tel" className="w-full bg-transparent border-b border-luxe-gold/20 py-3 focus:border-luxe-gold outline-none transition-colors text-sm" placeholder="+1 (000) 000-0000" />
                    </div>
                    <div className="flex items-start space-x-4">
                      <input type="checkbox" id="home-consent" className="mt-1 accent-luxe-gold" required />
                      <label htmlFor="home-consent" className="text-[9px] uppercase tracking-widest text-luxe-ink/60 leading-relaxed font-bold cursor-pointer">
                        I consent to receive occasional boutiques updates and structural notifications from Luxe Collection, LLC via phone or email.
                      </label>
                    </div>
                    <button type="submit" className="w-full bg-luxe-ink text-white py-6 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxe-gold transition-all rounded-full shadow-lg text-center">
                      Join The Archive
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-8 py-12"
                  >
                    <div className="w-20 h-20 bg-luxe-gold/10 rounded-full flex items-center justify-center mx-auto text-luxe-gold">
                       <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl italic font-serif">Welcome to the Archive</h3>
                      <p className="text-sm text-luxe-ink/60 uppercase tracking-widest leading-relaxed">
                        Your structural profile has been registered. <br /> Check your email client to finalize connection.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 bg-luxe-ink text-luxe-paper relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full overflow-hidden opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" 
            alt="Abstract Fashion" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-12">
            <h2 className="text-6xl md:text-9xl italic font-light leading-none">Elevated by <br /> <span className="text-luxe-gold font-normal">Definition.</span></h2>
            <p className="text-2xl text-luxe-paper/60 font-light leading-relaxed max-w-xl">
              Join the guild of sophisticated collectors. Experience the gold standard of professional fashion curation today.
            </p>
            <div className="flex flex-wrap gap-8 pt-6">
              <Link to="/collections" className="bg-luxe-gold text-white px-16 py-8 text-[11px] uppercase tracking-[0.4em] hover:bg-white hover:text-luxe-ink transition-all font-bold shadow-[0_20px_50px_rgba(197,160,89,0.3)]">
                Enter The Archive
              </Link>
              <Link to="/contact" className="border border-luxe-paper/20 text-luxe-paper px-16 py-8 text-[11px] uppercase tracking-[0.4em] hover:bg-luxe-paper hover:text-luxe-ink transition-all font-bold">
                Contact Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
