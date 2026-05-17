import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-luxe-ink text-luxe-paper pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-luxe-gold/10 pb-20">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-serif mb-6 tracking-widest uppercase text-luxe-gold">Luxe Collection</h2>
          <p className="text-luxe-paper/60 max-w-sm mb-8 leading-relaxed">
            A premium architectural approach to modern fashion. Elevated essentials, quiet luxury, and signature collections curated for the sophisticated silhouette.
          </p>
          <div className="flex space-x-6 text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-luxe-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-luxe-gold transition-colors">Pinterest</a>
            <a href="#" className="hover:text-luxe-gold transition-colors">LinkedIn</a>
          </div>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] mb-8 opacity-40">Boutique</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><Link to="/collections" className="hover:text-luxe-gold transition-colors">The Signature Archive</Link></li>
            <li><Link to="/services" className="hover:text-luxe-gold transition-colors">Our Services</Link></li>
            <li><Link to="/about" className="hover:text-luxe-gold transition-colors">Our Story</Link></li>
            <li><Link to="/faq" className="hover:text-luxe-gold transition-colors">Concierge FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] mb-8 opacity-40">Privacy & Terms</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><Link to="/privacy" className="hover:text-luxe-gold transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-luxe-gold transition-colors">Terms of Service</Link></li>
            <li><Link to="/shipping" className="hover:text-luxe-gold transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/contact" className="hover:text-luxe-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-40">
        <p>© 2026 Luxe Collection, LLC. All rights reserved.</p>
        <p className="mt-4 md:mt-0">1209 MOUNTAIN ROAD PL NE STE R, Albuquerque, NM 87110</p>
      </div>
    </footer>
  );
}
