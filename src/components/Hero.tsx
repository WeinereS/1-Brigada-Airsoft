import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2070&auto=format&fit=crop"
          alt="Airsoft Tactical"
          className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-black via-base-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0B0B0B_100%)] opacity-60"></div>
        
        {/* Scanning Line */}
        <motion.div 
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[1px] bg-olive/40 z-10 shadow-[0_0_15px_rgba(85,107,47,0.5)]"
        ></motion.div>
      </div>

      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 z-1 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#556B2F 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-olive/50"></div>
            <span className="inline-block border border-olive/50 px-4 py-1 text-olive font-mono text-[10px] uppercase tracking-[0.4em] bg-olive/5">
              Operações Táticas de Elite // V.2026
            </span>
            <div className="h-px w-8 bg-olive/50"></div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
            Honra. <span className="text-olive">Disciplina.</span> <br />
            <span className="relative">
              Estratégia.
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 bg-olive opacity-50"
              ></motion.span>
            </span>
          </h1>
          
          <p className="text-muted-gray max-w-2xl mx-auto text-base md:text-lg mb-12 leading-relaxed font-light">
            Bem-vindo à <span className="text-white font-medium">1º Brigada Airsoft</span>. Mais que um esporte, uma simulação de combate real focada em tática, 
            trabalho em equipe e imersão militar absoluta.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#map" 
              className="group relative bg-olive text-white px-10 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-all border border-white/10 w-full sm:w-auto text-center overflow-hidden"
            >
              <span className="relative z-10">Ver Mapa Tático</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#teams" 
              className="group relative bg-white/5 hover:bg-white/10 text-white px-10 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-all border border-white/10 w-full sm:w-auto text-center overflow-hidden"
            >
              <span className="relative z-10">Entrar em Partida</span>
              <div className="absolute inset-0 bg-olive/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-olive opacity-50 cursor-pointer"
        onClick={() => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Decorative HUD Corners */}
      <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-olive/30 pointer-events-none">
        <div className="absolute top-0 left-0 w-2 h-2 bg-olive"></div>
      </div>
      <div className="absolute top-10 right-10 w-24 h-24 border-t border-r border-olive/30 pointer-events-none">
        <div className="absolute top-0 right-0 w-2 h-2 bg-olive"></div>
      </div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border-b border-l border-olive/30 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-olive"></div>
      </div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-olive/30 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-olive"></div>
      </div>

      {/* Side HUD Info */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="space-y-8">
          <div className="font-mono text-[10px] text-olive/40 rotate-180 [writing-mode:vertical-rl] uppercase tracking-[0.5em]">
            SYSTEM_STATUS: ACTIVE
          </div>
          <div className="w-px h-24 bg-olive/20 mx-auto"></div>
          <div className="font-mono text-[10px] text-olive/40 rotate-180 [writing-mode:vertical-rl] uppercase tracking-[0.5em]">
            LAT_23.5505_LONG_46.6333
          </div>
        </div>
      </div>
    </section>
  );
}
