import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-luxe-ink text-luxe-paper pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-luxe-paper/10 pb-20">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-serif mb-6 tracking-widest uppercase">Luxe Collections</h2>
          <p className="text-luxe-paper/60 max-w-sm mb-8 leading-relaxed">
            A refined architectural approach to modern fashion. Elevated essentials, quiet luxury, and AI-crafted signature pieces.
          </p>
          <div className="flex space-x-6 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-luxe-paper/40 transition-colors">Instagram</a>
            <a href="#" className="hover:text-luxe-paper/40 transition-colors">Pinterest</a>
            <a href="#" className="hover:text-luxe-paper/40 transition-colors">LinkedIn</a>
          </div>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] mb-8 opacity-40">Boutique</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><Link to="/collections" className="hover:opacity-100 transition-opacity">The Signature Archive</Link></li>
            <li><Link to="/collections?cat=new" className="hover:opacity-100 transition-opacity">New Arrivals</Link></li>
            <li><Link to="/collections?cat=essentials" className="hover:opacity-100 transition-opacity">Elevated Essentials</Link></li>
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">Our Story</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] mb-8 opacity-40">Privacy & Terms</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Shipping & Returns</a></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-40">
        <p>© 2024 Luxe Collections LLC. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Refining Modern Style</p>
      </div>
    </footer>
  );
}
