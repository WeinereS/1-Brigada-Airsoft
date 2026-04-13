import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Shield, Gamepad2, Terminal, Camera, Users, Info, MessageSquare } from "lucide-react";

export default function Home() {
  const quickLinks = [
    { name: "Gameplay", href: "/gameplay", icon: <Gamepad2 size={20} />, desc: "Mapa, Modos e Regras" },
    { name: "Inteligência", href: "/intelligence", icon: <Terminal size={20} />, desc: "Documentos e Relatórios" },
    { name: "Galeria", href: "/gallery", icon: <Camera size={20} />, desc: "Registros de Operações" },
    { name: "Sobre", href: "/about", icon: <Info size={20} />, desc: "Nossa História" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Hero Style */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-base-black to-transparent z-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-30 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-olive/10 border border-olive/30 text-olive text-xs font-mono uppercase tracking-[0.4em] mb-8">
            <Shield size={16} className="animate-pulse" />
            Tactical Command Center
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-6 leading-none">
            1º Brigada <span className="text-olive">Airsoft</span>
          </h1>
          
          <p className="text-muted-gray font-mono text-sm md:text-base uppercase tracking-[0.3em] max-w-3xl mx-auto leading-relaxed">
            Honra, Disciplina e Estratégia. <br />
            Bem-vindo ao quartel-general da elite do Airsoft.
          </p>
        </motion.div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {quickLinks.map((link, idx) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <Link
                to={link.href}
                className="group relative flex flex-col items-center p-8 bg-tactical-gray/5 border border-white/5 hover:border-olive/40 transition-all duration-500 overflow-hidden h-full"
              >
                <div className="absolute inset-0 bg-olive/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-12 h-12 bg-olive/10 flex items-center justify-center text-olive border border-olive/20 mb-6 group-hover:bg-olive group-hover:text-white transition-all duration-500">
                  {link.icon}
                </div>
                
                <h3 className="text-xl font-bold uppercase tracking-tighter mb-2 group-hover:text-olive transition-colors">
                  {link.name}
                </h3>
                
                <p className="text-[10px] font-mono text-muted-gray uppercase tracking-widest text-center">
                  {link.desc}
                </p>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-olive/0 group-hover:border-olive/30 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-olive/0 group-hover:border-olive/30 transition-colors"></div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-olive text-white px-10 py-5 font-mono text-xs uppercase tracking-[0.3em] hover:bg-olive/80 transition-all border border-white/10 group"
          >
            <MessageSquare size={18} />
            Transmitir Mensagem
            <div className="w-2 h-2 bg-white rounded-full ml-2 animate-pulse"></div>
          </Link>
        </motion.div>
      </div>

      {/* Simulated Censorship Bars for Realism */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-[40%] left-[20%] w-24 h-3 bg-black -rotate-2"></div>
        <div className="absolute top-[38%] left-[45%] w-28 h-3 bg-black rotate-1"></div>
        <div className="absolute top-[42%] left-[70%] w-20 h-3 bg-black -rotate-1"></div>
      </div>
    </div>
  );
}
