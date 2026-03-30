import { motion, AnimatePresence } from "motion/react";
import { Shield, Menu, X, Activity } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Mapa", href: "#map" },
    { name: "Modos", href: "#modes" },
    { name: "Regras", href: "#field-rules" },
    { name: "Equipes", href: "#teams" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-base-black/95 backdrop-blur-xl border-b border-olive/30 py-4" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-olive rotate-45 border border-white/20 group-hover:rotate-90 transition-transform duration-500"></div>
            <Shield className="relative text-white w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold text-lg tracking-tighter uppercase leading-none">
              1º Brigada <span className="text-olive">Airsoft</span>
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-olive/60 mt-1">
              Tactical Command Unit
            </span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-gray hover:text-olive transition-all relative group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-olive transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity text-olive">
                  0{idx + 1}
                </span>
              </motion.a>
            ))}
          </div>
          
          <div className="h-8 w-px bg-white/10 mx-2"></div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-olive/10 hover:bg-olive text-white px-6 py-2.5 text-[10px] font-mono uppercase tracking-[0.2em] transition-all border border-olive/30 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Activity size={14} className="animate-pulse" />
              Alistar-se
            </span>
            <div className="absolute inset-0 bg-olive translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 bg-white/5 border border-white/10" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-base-black/98 backdrop-blur-2xl border-b border-olive/30 absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-mono text-sm uppercase tracking-[0.3em] text-muted-gray hover:text-olive transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <span className="text-[10px] text-olive/40 group-hover:text-olive">0{idx + 1}</span>
                </motion.a>
              ))}
              <button className="bg-olive text-white py-4 font-mono text-xs uppercase tracking-[0.3em] border border-white/10 w-full mt-4 flex items-center justify-center gap-2">
                <Activity size={16} className="animate-pulse" />
                Alistar-se Agora
              </button>
            </div>
            
            {/* Tactical Decoration for Mobile Menu */}
            <div className="absolute bottom-0 right-0 p-4 opacity-10 pointer-events-none">
              <Shield size={120} className="text-olive" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
