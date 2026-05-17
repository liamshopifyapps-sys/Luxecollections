import { motion } from "motion/react";

export default function About() {
  return (
    <div className="bg-luxe-paper py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.5em] mb-12 opacity-50 text-luxe-gold">The Fashion House</p>
        
        <h1 className="text-6xl md:text-9xl mb-24 leading-none text-luxe-ink">
          Authentic <br /> <span className="italic text-luxe-gold">Architecture</span> <br /> in Style.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div className="space-y-12 text-lg text-luxe-ink/80 leading-relaxed bg-white p-12 rounded-[3rem] border border-luxe-beige">
            <h2 className="text-3xl text-luxe-ink">Our Business Identity</h2>
            <p>
              Luxe Collection is a premier fashion brand operated by <strong>Luxe Collection, LLC</strong>, a registered entity based in the United States. Our headquarters are located in Albuquerque, New Mexico, where we curate signature collections for a global audience.
            </p>
            <p>
              As an EIN-registered business, we are committed to professional excellence, legal transparency, and providing a secure environment for our customers.
            </p>
          </div>
          <div className="space-y-12 text-lg text-luxe-ink/80 leading-relaxed pt-12">
             <h2 className="text-3xl text-luxe-ink">Our Mission</h2>
             <p>
              Our mission is to combine timeless elegance with high-quality craftsmanship, offering fashion that serves the modern lifestyle with architectural precision.
            </p>
            <p>
              We believe in "Quiet Luxury"—the idea that true style doesn't scream for attention, but resonates through the silent language of quality fabrics and refined silhouettes. Every piece in our archive is selected to meet the highest standards of modern fashion.
            </p>
          </div>
        </div>

        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-luxe-beige pt-24">
          <div className="bg-white p-10 rounded-2xl border border-luxe-beige">
            <h4 className="text-xs uppercase tracking-widest mb-6 text-luxe-gold font-bold">USA Operations</h4>
            <p className="text-sm opacity-70 leading-relaxed">Headquartered in Albuquerque, NM, we manage all design and logistics with American standards of excellence.</p>
          </div>
          <div className="bg-white p-10 rounded-2xl border border-luxe-beige">
            <h4 className="text-xs uppercase tracking-widest mb-6 text-luxe-gold font-bold">Quality Guarantee</h4>
            <p className="text-sm opacity-70 leading-relaxed">Each archive piece undergoes a rigorous structural inspection before being certified for our boutique.</p>
          </div>
          <div className="bg-white p-10 rounded-2xl border border-luxe-beige">
            <h4 className="text-xs uppercase tracking-widest mb-6 text-luxe-gold font-bold">Trusted Service</h4>
            <p className="text-sm opacity-70 leading-relaxed">Secure transactions, white-glove delivery, and proactive customer support define our professional relationship with you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
