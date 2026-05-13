import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-luxe-paper/80 backdrop-blur-md border-b border-luxe-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif tracking-widest uppercase">
          Luxe Collections
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
          <button className="text-luxe-ink/80 hover:text-luxe-ink transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-2 -right-2 text-[10px] w-4 h-4 rounded-full bg-luxe-ink text-luxe-paper flex items-center justify-center">0</span>
          </button>
          <button 
            className="md:hidden text-luxe-ink/80"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-luxe-paper border-b border-luxe-ink/10 px-6 py-12 flex flex-col space-y-8 text-center"
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
    </nav>
  );
}
