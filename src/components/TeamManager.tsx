import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, UserPlus, Trash2, Shield, Sword, ArrowRight, ArrowLeft, RotateCcw, Scale, User, Zap } from "lucide-react";

interface Player {
  id: string;
  name: string;
  status: "ready" | "deployed";
}

export default function TeamManager() {
  const [playerName, setPlayerName] = useState("");
  const [availablePlayers, setAvailablePlayers] = useState<Player[]>([
    { id: "5", name: "Roach", status: "ready" },
    { id: "6", name: "Nikolai", status: "ready" },
  ]);
  const [alphaTeam, setAlphaTeam] = useState<Player[]>([
    { id: "1", name: "Ghost", status: "deployed" },
    { id: "2", name: "Soap", status: "deployed" },
  ]);
  const [bravoTeam, setBravoTeam] = useState<Player[]>([
    { id: "3", name: "Price", status: "deployed" },
    { id: "4", name: "Gaz", status: "deployed" },
  ]);

  const addPlayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim()) return;
    const newPlayer: Player = { 
      id: Date.now().toString(), 
      name: playerName.toUpperCase(),
      status: "ready"
    };
    setAvailablePlayers([...availablePlayers, newPlayer]);
    setPlayerName("");
  };

  const removePlayer = (id: string, from: "available" | "alpha" | "bravo") => {
    if (from === "available") setAvailablePlayers(availablePlayers.filter((p) => p.id !== id));
    if (from === "alpha") setAlphaTeam(alphaTeam.filter((p) => p.id !== id));
    if (from === "bravo") setBravoTeam(bravoTeam.filter((p) => p.id !== id));
  };

  const movePlayer = (player: Player, from: "available" | "alpha" | "bravo", to: "available" | "alpha" | "bravo") => {
    const updatedPlayer = { ...player, status: to === "available" ? "ready" as const : "deployed" as const };
    
    // Remove from source
    if (from === "available") setAvailablePlayers(prev => prev.filter(p => p.id !== player.id));
    if (from === "alpha") setAlphaTeam(prev => prev.filter(p => p.id !== player.id));
    if (from === "bravo") setBravoTeam(prev => prev.filter(p => p.id !== player.id));

    // Add to destination
    if (to === "available") setAvailablePlayers(prev => [...prev, updatedPlayer]);
    if (to === "alpha") setAlphaTeam(prev => [...prev, updatedPlayer]);
    if (to === "bravo") setBravoTeam(prev => [...prev, updatedPlayer]);
  };

  const autoBalance = () => {
    const allPlayers = [...availablePlayers, ...alphaTeam, ...bravoTeam];
    const shuffled = [...allPlayers].sort(() => Math.random() - 0.5);
    const mid = Math.ceil(shuffled.length / 2);
    
    setAlphaTeam(shuffled.slice(0, mid).map(p => ({ ...p, status: "deployed" })));
    setBravoTeam(shuffled.slice(mid).map(p => ({ ...p, status: "deployed" })));
    setAvailablePlayers([]);
  };

  const resetTeams = () => {
    setAvailablePlayers([...availablePlayers, ...alphaTeam, ...bravoTeam].map(p => ({ ...p, status: "ready" })));
    setAlphaTeam([]);
    setBravoTeam([]);
  };

  return (
    <section id="teams" className="py-32 bg-base-black relative overflow-hidden">
      {/* Tactical Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#556B2F 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive/10 border border-olive/30 text-olive text-[10px] font-mono uppercase tracking-[0.3em] mb-4">
            <Users size={12} className="animate-pulse" />
            Personnel Management System
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
            Gerenciamento de <span className="text-olive">Equipes</span>
          </h2>
          <div className="w-20 h-1 bg-olive mx-auto mb-6"></div>
          <p className="text-muted-gray font-mono text-xs uppercase tracking-[0.2em] max-w-2xl mx-auto">
            Distribuição Tática de Operadores // Alocação de Recursos Humanos
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-6 mb-16 justify-center items-stretch"
        >
          <form onSubmit={addPlayer} className="flex w-full max-w-xl group">
            <div className="relative flex-grow">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-olive/40 group-focus-within:text-olive transition-colors">
                <User size={18} />
              </div>
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="IDENTIFICAÇÃO DO OPERADOR"
                className="w-full bg-tactical-gray/5 border border-white/10 pl-12 pr-4 py-4 focus:border-olive/50 outline-none font-mono text-xs uppercase tracking-widest transition-all placeholder:text-white/10"
              />
            </div>
            <button type="submit" className="bg-olive px-8 py-4 text-white hover:bg-olive/80 transition-all border border-white/10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
              <UserPlus size={18} />
              <span className="hidden sm:inline">Adicionar</span>
            </button>
          </form>
          
          <div className="flex gap-3">
            <button 
              onClick={autoBalance}
              className="flex-grow sm:flex-initial flex items-center justify-center gap-3 bg-tactical-gray/10 hover:bg-olive transition-all text-white px-8 py-4 font-mono text-[10px] uppercase tracking-[0.2em] border border-white/10 group"
            >
              <Scale size={16} className="group-hover:rotate-12 transition-transform" /> 
              Balancear
            </button>
            <button 
              onClick={resetTeams}
              className="flex-grow sm:flex-initial flex items-center justify-center gap-3 bg-tactical-gray/10 hover:bg-red-900/40 transition-all text-white px-8 py-4 font-mono text-[10px] uppercase tracking-[0.2em] border border-white/10 group"
            >
              <RotateCcw size={16} className="group-hover:-rotate-45 transition-transform" /> 
              Resetar
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Available Pool */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-tactical-gray/5 border border-white/5 p-8 flex flex-col h-[600px] rounded-sm relative"
          >
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/5 flex items-center justify-center text-muted-gray border border-white/10">
                  <Users size={16} />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tighter">Disponíveis</h3>
                  <span className="text-[9px] font-mono text-muted-gray uppercase tracking-widest">Personnel Pool</span>
                </div>
              </div>
              <div className="bg-white/5 px-2 py-1 border border-white/10 font-mono text-muted-gray text-[10px]">
                {availablePlayers.length}
              </div>
            </div>

            <div className="flex-grow overflow-y-auto space-y-3 pr-2 custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {availablePlayers.map((player) => (
                  <motion.div
                    key={player.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center justify-between bg-base-black/40 p-4 border border-white/5 group hover:border-olive/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-olive/40 rounded-full"></div>
                      <span className="font-mono text-[11px] uppercase tracking-widest">{player.name}</span>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => movePlayer(player, "available", "alpha")} className="p-2 text-olive hover:bg-olive/10 border border-olive/20" title="Para Alpha">
                        <Shield size={14} />
                      </button>
                      <button onClick={() => movePlayer(player, "available", "bravo")} className="p-2 text-muted-gray hover:bg-white/10 border border-white/10" title="Para Bravo">
                        <Sword size={14} />
                      </button>
                      <button onClick={() => removePlayer(player.id, "available")} className="p-2 text-red-500/50 hover:text-red-500 border border-red-500/10" title="Remover">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {availablePlayers.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-muted-gray/20 italic text-xs border border-dashed border-white/5 gap-4">
                  <Zap size={32} className="opacity-10" />
                  <span className="font-mono uppercase tracking-widest">Aguardando Operadores</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Alpha Team (Green) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-olive/5 border border-olive/30 p-8 flex flex-col h-[600px] relative rounded-sm"
          >
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-olive/20 pointer-events-none"></div>
            <div className="flex items-center justify-between mb-8 border-b border-olive/20 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-olive/20 flex items-center justify-center text-olive border border-olive/40">
                  <Shield size={16} />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tighter text-olive">Time Alpha</h3>
                  <span className="text-[9px] font-mono text-olive/60 uppercase tracking-widest">Strike Force One</span>
                </div>
              </div>
              <div className="bg-olive/20 px-2 py-1 border border-olive/40 font-mono text-olive text-[10px] font-bold">
                {alphaTeam.length}
              </div>
            </div>

            <div className="flex-grow overflow-y-auto space-y-3 pr-2 custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {alphaTeam.map((player) => (
                  <motion.div
                    key={player.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center justify-between bg-olive/10 p-4 border border-olive/20 group relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-olive"></div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-white ml-2">{player.name}</span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => movePlayer(player, "alpha", "available")} className="p-2 text-muted-gray hover:text-white border border-white/10" title="Retornar">
                        <RotateCcw size={14} />
                      </button>
                      <button onClick={() => movePlayer(player, "alpha", "bravo")} className="p-2 text-muted-gray hover:text-red-500 border border-white/10" title="Para Bravo">
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Bravo Team (Dark Gray) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-tactical-gray/10 border border-white/10 p-8 flex flex-col h-[600px] relative rounded-sm"
          >
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/10 pointer-events-none"></div>
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/5 flex items-center justify-center text-muted-gray border border-white/10">
                  <Sword size={16} />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tighter">Time Bravo</h3>
                  <span className="text-[9px] font-mono text-muted-gray uppercase tracking-widest">Strike Force Two</span>
                </div>
              </div>
              <div className="bg-white/5 px-2 py-1 border border-white/10 font-mono text-muted-gray text-[10px] font-bold">
                {bravoTeam.length}
              </div>
            </div>

            <div className="flex-grow overflow-y-auto space-y-3 pr-2 custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {bravoTeam.map((player) => (
                  <motion.div
                    key={player.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center justify-between bg-base-black/60 p-4 border border-white/10 group relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-muted-gray"></div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-white ml-2">{player.name}</span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => movePlayer(player, "bravo", "alpha")} className="p-2 text-olive hover:text-white border border-olive/20" title="Para Alpha">
                        <ArrowLeft size={14} />
                      </button>
                      <button onClick={() => movePlayer(player, "bravo", "available")} className="p-2 text-muted-gray hover:text-white border border-white/10" title="Retornar">
                        <RotateCcw size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
