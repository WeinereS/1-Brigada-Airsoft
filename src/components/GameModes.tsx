import { motion } from "motion/react";
import { Target, Flag, Shield, Bomb, UserCheck, Users, ChevronRight, Zap } from "lucide-react";

export default function GameModes() {
  const modes = [
    {
      icon: <Target size={28} />,
      title: "Team Deathmatch",
      desc: "O modo clássico de eliminação. Duas equipes se enfrentam em um combate direto onde a coordenação é a chave para a vitória.",
      objective: "Eliminar todos os membros da equipe adversária ou ter o maior número de eliminações ao fim do tempo.",
      players: "10 - 40 jogadores",
      code: "TDM-01"
    },
    {
      icon: <Flag size={28} />,
      title: "Capture a Bandeira",
      desc: "Estratégia e velocidade. Infiltre-se no território inimigo para capturar o estandarte adversário e trazê-lo para sua base.",
      objective: "Capturar a bandeira inimiga 3 vezes. Requer defesa sólida e ataque coordenado.",
      players: "12 - 30 jogadores",
      code: "CTF-02"
    },
    {
      icon: <Shield size={28} />,
      title: "Dominação",
      desc: "Controle de território. Três pontos estratégicos (A, B e C) devem ser mantidos sob controle para acumular pontos de vitória.",
      objective: "Manter a posse dos pontos estratégicos pelo maior tempo possível. Vence quem atingir o limite de pontos primeiro.",
      players: "16 - 50 jogadores",
      code: "DOM-03"
    },
    {
      icon: <Bomb size={28} />,
      title: "Busca e Destruição",
      desc: "Modo tático de alta tensão. Uma equipe deve plantar um artefato em um dos dois locais designados, enquanto a outra defende.",
      objective: "Atacantes: Detonar o objetivo. Defensores: Desarmar o artefato ou eliminar todos os atacantes.",
      players: "10 - 20 jogadores",
      code: "SND-04"
    },
    {
      icon: <UserCheck size={28} />,
      title: "VIP Escolta",
      desc: "Proteção de alto valor. Um jogador é designado como VIP e deve ser escoltado com segurança até o ponto de extração.",
      objective: "Escoltas: Levar o VIP ao ponto de extração. Atacantes: Neutralizar o VIP antes da extração.",
      players: "8 - 24 jogadores",
      code: "VIP-05"
    },
  ];

  return (
    <section id="modes" className="py-32 bg-base-black relative overflow-hidden">
      {/* Tactical Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-olive/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-olive/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive/10 border border-olive/30 text-olive text-[10px] font-mono uppercase tracking-[0.3em] mb-4">
            <Zap size={12} className="animate-pulse" />
            Operational Protocols
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
            Modos de <span className="text-olive">Jogo</span>
          </h2>
          <div className="w-20 h-1 bg-olive mx-auto mb-6"></div>
          <p className="text-muted-gray font-mono text-xs uppercase tracking-[0.2em] max-w-2xl mx-auto">
            Briefing de Missão // Selecione o Cenário de Engajamento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modes.map((mode, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-tactical-gray/5 border border-white/5 p-8 flex flex-col hover:bg-tactical-gray/10 hover:border-olive/30 transition-all duration-500 rounded-sm overflow-hidden"
            >
              {/* Tactical Overlay */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="font-mono text-4xl font-bold">{mode.code}</span>
              </div>
              
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-olive/10 flex items-center justify-center text-olive border border-olive/20 group-hover:bg-olive group-hover:text-white transition-all duration-500">
                  {mode.icon}
                </div>
                <div className="flex items-center gap-2 text-[9px] font-mono text-muted-gray bg-base-black/80 px-3 py-1.5 border border-white/5 tracking-widest">
                  <Users size={12} className="text-olive" />
                  {mode.players}
                </div>
              </div>

              <h3 className="text-xl font-bold uppercase mb-4 tracking-tighter group-hover:text-olive transition-colors">
                {mode.title}
              </h3>
              
              <p className="text-muted-gray text-sm mb-8 leading-relaxed font-light">
                {mode.desc}
              </p>

              <div className="mt-auto space-y-6">
                <div className="pt-6 border-t border-white/5">
                  <span className="font-mono text-[9px] text-olive uppercase tracking-[0.2em] block mb-3">Objetivo Primário:</span>
                  <p className="text-xs text-muted-gray leading-relaxed opacity-80">
                    {mode.objective}
                  </p>
                </div>

                <motion.button 
                  whileHover={{ x: 5 }}
                  className="w-full py-3.5 bg-transparent border border-olive/30 group-hover:bg-olive text-white transition-all duration-500 font-mono text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-2"
                >
                  Confirmar Missão
                  <ChevronRight size={14} />
                </motion.button>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-olive/0 group-hover:border-olive/40 transition-all"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-olive/0 group-hover:border-olive/40 transition-all"></div>
            </motion.div>
          ))}
          
          {/* Decorative Empty Card for Grid Balance */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex flex-col items-center justify-center border border-dashed border-white/5 p-8 opacity-20"
          >
            <div className="w-12 h-12 border border-dashed border-white/20 rounded-full flex items-center justify-center mb-4">
              <Zap size={20} />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest">Aguardando Novos Protocolos</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
