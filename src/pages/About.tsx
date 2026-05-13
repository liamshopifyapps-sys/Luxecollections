import { motion } from "motion/react";

export default function About() {
  return (
    <div className="bg-luxe-paper py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.5em] mb-12 opacity-50"
        >Our Story</motion.p>
        
        <h1 className="text-6xl md:text-8xl mb-24 leading-none">
          Elegance is <br /> <span className="italic">the silence</span> <br /> between notes.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div className="space-y-12 text-lg text-luxe-ink/80 leading-relaxed">
            <p>
              Luxe Collections is a fashion brand operated by Luxe Collections LLC. We are committed to delivering stylish, high-quality clothing to customers while ensuring a seamless and secure shopping experience.
            </p>
            <p>
              Our mission is to combine elegance with affordability, offering fashion that fits every lifestyle. We believe that true luxury isn't about being noticed, but about the feeling of being in a space that is authentically your own.
            </p>
          </div>
          <div className="space-y-12 text-lg text-luxe-ink/80 leading-relaxed">
             <p>
              Founded on the principles of architectural precision and quiet luxury, we focus on elevated essentials that serve as the foundation of a modern wardrobe.
            </p>
            <p>
              Whether you’re shopping for everyday wear or special occasions, our collection is crafted to meet modern fashion needs with a refined, timeless aesthetic.
            </p>
          </div>
        </div>

        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-luxe-ink/10 pt-24 text-center md:text-left">
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 opacity-40">The Quality</h4>
            <p className="text-sm opacity-70 leading-relaxed">We source only the finest fabrics, ensuring each piece lasts as a staple in your collection for years.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 opacity-40">The Precision</h4>
            <p className="text-sm opacity-70 leading-relaxed">Every silhouette is engineered with an architectural eye for balance and form.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 opacity-40">The Ethics</h4>
            <p className="text-sm opacity-70 leading-relaxed">Transparency is luxury. We operate with structural integrity from sourcing to shipping.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
