import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Map as MapIcon, Flag, Shield, Target, Info, Crosshair, Layers, Zap, Radio } from "lucide-react";

interface Marker {
  id: string;
  x: number;
  y: number;
  title: string;
  type: "base" | "objective" | "cover";
  desc: string;
  intel: string[];
}

export default function FieldMap() {
  const [activeMarker, setActiveMarker] = useState<Marker | null>(null);

  const markers: Marker[] = [
    { 
      id: "alpha", 
      x: 15, 
      y: 20, 
      title: "Base Alpha", 
      type: "base", 
      desc: "Ponto de inserção primário da equipe Alpha. Localizado em terreno elevado com cobertura natural densa.",
      intel: ["Altitude: 450m", "Visibilidade: Alta", "Defesa: Fortificada"]
    },
    { 
      id: "bravo", 
      x: 85, 
      y: 75, 
      title: "Base Bravo", 
      type: "base", 
      desc: "Ponto de inserção da equipe Bravo. Situado no complexo de galpões industriais, oferecendo múltiplas rotas de saída.",
      intel: ["Altitude: 410m", "Visibilidade: Média", "Defesa: Urbana"]
    },
    { 
      id: "obj1", 
      x: 50, 
      y: 45, 
      title: "O Bunker Central", 
      type: "objective", 
      desc: "Objetivo principal. Uma estrutura de concreto reforçado no centro do mapa. Controle este ponto para dominar as linhas de visão.",
      intel: ["Prioridade: Alpha-1", "Risco: Extremo", "Recompensa: Controle Total"]
    },
    { 
      id: "cover1", 
      x: 35, 
      y: 60, 
      title: "Zona de Trincheiras", 
      type: "cover", 
      desc: "Área de mata com trincheiras escavadas. Ideal para avanço furtivo e flanqueamento.",
      intel: ["Tipo: Furtivo", "Cobertura: 85%", "Dificuldade: Média"]
    },
    { 
      id: "cover2", 
      x: 65, 
      y: 30, 
      title: "Setor Urbano", 
      type: "cover", 
      desc: "Ruínas de edifícios que proporcionam cobertura vertical e combate em ambientes fechados (CQB).",
      intel: ["Tipo: CQB", "Verticalidade: Alta", "Risco: Emboscada"]
    },
  ];

  return (
    <section id="map" className="py-32 bg-base-black relative overflow-hidden">
      {/* Tactical Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(85, 107, 47, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(85, 107, 47, 0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive/10 border border-olive/30 text-olive text-[10px] font-mono uppercase tracking-[0.3em] mb-4">
            <Radio size={12} className="animate-pulse" />
            Satellite Reconnaissance Active
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6 flex items-center justify-center gap-4">
            <Crosshair className="text-olive/40 hidden sm:block" />
            Mapa do <span className="text-olive">Campo</span>
            <Crosshair className="text-olive/40 hidden sm:block" />
          </h2>
          <div className="h-1 w-20 bg-olive mx-auto mb-6"></div>
          <p className="text-muted-gray font-mono text-xs uppercase tracking-[0.2em] max-w-2xl mx-auto">
            Interface de Reconhecimento Tático v4.2 // Coordenadas Geográficas Confirmadas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Interactive Map Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 relative"
          >
            <div className="relative border border-olive/30 bg-tactical-gray/10 overflow-hidden group rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop"
                alt="Tactical Map"
                className="w-full h-auto grayscale brightness-[0.3] opacity-60 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Grid Lines Overlay */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 pointer-events-none z-10">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className="border-[0.2px] border-olive/5 flex items-start p-1">
                    <span className="text-[6px] font-mono text-olive/20">{String.fromCharCode(65 + (i % 8))}{Math.floor(i / 8) + 1}</span>
                  </div>
                ))}
              </div>

              {/* Markers */}
              {markers.map((marker) => (
                <motion.button
                  key={marker.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + (markers.indexOf(marker) * 0.1) }}
                  onClick={() => setActiveMarker(marker)}
                  className={`absolute z-30 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    activeMarker?.id === marker.id ? "scale-150 z-40" : "hover:scale-125"
                  }`}
                  style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                >
                  <div className={`relative p-2.5 rounded-full border shadow-[0_0_20px_rgba(85,107,47,0.3)] ${
                    marker.type === "base" ? "bg-blue-900/60 border-blue-400" :
                    marker.type === "objective" ? "bg-red-900/60 border-red-400" :
                    "bg-olive/60 border-white/40"
                  }`}>
                    {marker.type === "base" && <Flag size={14} className="text-white" />}
                    {marker.type === "objective" && <Target size={14} className="text-white" />}
                    {marker.type === "cover" && <Shield size={14} className="text-white" />}
                    
                    {/* Active Indicator */}
                    {activeMarker?.id === marker.id && (
                      <motion.div 
                        layoutId="marker-ring"
                        className="absolute -inset-2 border border-white/40 rounded-full animate-pulse"
                      />
                    )}
                  </div>
                  
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 animate-ping rounded-full bg-white/10 pointer-events-none"></div>
                </motion.button>
              ))}

              {/* HUD Corner Accents */}
              <div className="absolute top-6 left-6 font-mono text-[9px] text-olive flex flex-col gap-1 z-20 opacity-60">
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-olive animate-pulse"></div> SAT_LINK_ESTABLISHED</span>
                <span>LAT: 23.5505 S</span>
                <span>LON: 46.6333 W</span>
              </div>
              <div className="absolute bottom-6 right-6 font-mono text-[9px] text-olive z-20 opacity-60 flex flex-col items-end">
                <span>RECON_UNIT_01</span>
                <span>SYSTEM_V4.2.0</span>
              </div>
              
              {/* Viewport Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-olive/40"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-olive/40"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-olive/40"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-olive/40"></div>
            </div>
            
            <div className="mt-6 flex flex-wrap justify-between items-center gap-4 font-mono text-[9px] text-muted-gray uppercase tracking-[0.2em]">
              <div className="flex gap-6">
                <span className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500/50 border border-blue-400"></div> Bases de Inserção</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500/50 border border-red-400"></div> Objetivos Críticos</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 bg-olive/50 border border-white/40"></div> Zonas de Cobertura</span>
              </div>
              <span className="text-olive/60 animate-pulse">Interação Habilitada // Selecione Alvos</span>
            </div>
          </motion.div>

          {/* Tactical Info Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <AnimatePresence mode="wait">
              {activeMarker ? (
                <motion.div
                  key={activeMarker.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  className="bg-tactical-gray/10 border border-olive/30 p-8 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-2 opacity-5">
                    <Crosshair size={80} />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-olive/20 flex items-center justify-center text-olive border border-olive/40">
                      {activeMarker.type === "base" && <Flag size={24} />}
                      {activeMarker.type === "objective" && <Target size={24} />}
                      {activeMarker.type === "cover" && <Shield size={24} />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold uppercase tracking-tighter leading-none">{activeMarker.title}</h3>
                      <span className="text-[10px] font-mono text-olive/60 uppercase tracking-widest">Target Identified</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-gray text-sm leading-relaxed mb-8 font-light">
                    {activeMarker.desc}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <span className="block text-[10px] font-mono text-olive uppercase tracking-widest border-b border-olive/20 pb-2 mb-3">Dados de Inteligência</span>
                    {activeMarker.intel.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-muted-gray">
                        <Zap size={12} className="text-olive" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-[10px] font-mono text-muted-gray uppercase">Status: Operacional</span>
                    </div>
                    <button 
                      onClick={() => setActiveMarker(null)}
                      className="text-[10px] font-mono text-olive hover:text-white uppercase tracking-widest transition-colors"
                    >
                      [ Fechar_Terminal ]
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-tactical-gray/5 border border-white/5 p-10 text-center flex flex-col items-center justify-center min-h-[300px] rounded-sm"
                >
                  <div className="relative mb-6">
                    <Info className="text-olive/20" size={48} />
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-4 border border-dashed border-olive/10 rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-bold uppercase mb-3 tracking-tighter">Aguardando Seleção</h3>
                  <p className="text-muted-gray text-xs leading-relaxed max-w-[200px] font-mono opacity-60">
                    Selecione um marcador no mapa para descriptografar dados táticos.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* General Field Specs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-base-black border border-white/5 p-8 space-y-6 rounded-sm"
            >
              <h4 className="text-xs font-bold uppercase border-b border-white/10 pb-3 flex items-center gap-3 tracking-[0.2em]">
                <Layers size={16} className="text-olive" /> Especificações do Setor
              </h4>
              
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div className="space-y-1">
                  <span className="block text-[9px] text-muted-gray uppercase font-mono tracking-widest">Terreno</span>
                  <span className="text-xs font-bold uppercase text-white">Misto (Urbano/Mata)</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-[9px] text-muted-gray uppercase font-mono tracking-widest">Dificuldade</span>
                  <span className="text-xs font-bold uppercase text-red-500">Nível 4 (Avançado)</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-[9px] text-muted-gray uppercase font-mono tracking-widest">Área Total</span>
                  <span className="text-xs font-bold uppercase text-white">50.000 m²</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-[9px] text-muted-gray uppercase font-mono tracking-widest">Capacidade</span>
                  <span className="text-xs font-bold uppercase text-white">120 Operadores</span>
                </div>
              </div>
              
              <div className="pt-4 space-y-3">
                <span className="block text-[9px] text-muted-gray uppercase font-mono tracking-widest mb-2">Pontos de Interesse</span>
                <ul className="space-y-2">
                  {["Elevação Norte (Sniper Nest)", "Galpão 4 (CQB Intenso)", "Ponte de Travessia (Choke Point)"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[10px] text-muted-gray uppercase tracking-wider">
                      <div className="w-1 h-1 bg-olive"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
