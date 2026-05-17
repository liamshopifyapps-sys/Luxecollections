import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Page Frame */}
      <div className="fixed inset-0 border-[12px] border-white z-50 pointer-events-none hidden md:block" />
      <div className="fixed inset-0 border border-luxe-gold/10 z-[51] pointer-events-none m-[12px] hidden md:block" />
      
      <Navbar />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
