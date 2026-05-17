import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-luxe-beige">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif tracking-[0.15em] uppercase text-luxe-ink">
          Luxe <span className="text-luxe-gold uppercase">Collection</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-xs uppercase tracking-[0.2em] transition-colors hover:text-luxe-accent",
                location.pathname === link.href ? "text-luxe-ink font-medium" : "text-luxe-ink/60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <Link 
            to="/cart"
            className="text-luxe-ink/80 hover:text-luxe-ink transition-colors relative"
          >
            <ShoppingBag 
              size={20} 
              strokeWidth={1.5} 
              onClick={(e) => {
                console.log("Cart icon clicked - potential for future sidebar or preview functionality.");
              }}
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] w-4 h-4 rounded-full bg-luxe-ink text-luxe-paper flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button 
            className="md:hidden text-luxe-ink/80"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-luxe-paper border-b border-luxe-ink/10 px-6 py-12 flex flex-col space-y-8 text-center overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-serif tracking-widest uppercase",
                  location.pathname === link.href ? "text-luxe-ink" : "text-luxe-ink/60"
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
