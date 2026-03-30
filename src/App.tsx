import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HUDOverlay from "./components/HUDOverlay";
import FieldMap from "./components/FieldMap";
import GameModes from "./components/GameModes";
import Rules from "./components/Rules";
import TeamManager from "./components/TeamManager";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-olive text-white flex items-center justify-center border border-white/20 shadow-2xl hover:bg-olive/80 transition-colors group"
        >
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-white/40"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-white/40"></div>
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-base-black selection:bg-olive selection:text-white font-sans text-white">
      <HUDOverlay />
      <Navbar />
      <main>
        <Hero />
        <FieldMap />
        <GameModes />
        <Rules />
        <TeamManager />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
