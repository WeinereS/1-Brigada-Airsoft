import { motion } from "motion/react";
import { 
  Eye, 
  Gauge, 
  Ban, 
  Trees, 
  HandHelping, 
  MessageSquareOff, 
  Users, 
  Gavel,
  ShieldAlert,
  Gamepad2,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";

export default function Rules() {
  const fieldRules = [
    { 
      icon: <Eye size={24} />, 
      title: "Proteção Ocular", 
      desc: "Uso obrigatório de óculos de proteção balística durante todo o tempo em zona de combate. Nunca remova os óculos em campo." 
    },
    { 
      icon: <Gauge size={24} />, 
      title: "Limite de FPS", 
      desc: "Todos os equipamentos devem passar pela cronagem oficial. Limites: AEG 400 FPS, Sniper 550 FPS (com BBs 0.20g)." 
    },
    { 
      icon: <Ban size={24} />, 
      title: "Área Segura", 
      desc: "Proibido terminantemente efetuar disparos ou testar equipamentos na Safe Zone. Mantenha o retém de segurança acionado." 
    },
    { 
      icon: <Trees size={24} />, 
      title: "Meio Ambiente", 
      desc: "Não danifique a vegetação local ou estruturas do campo. Utilize apenas BBs biodegradáveis e recolha seu lixo." 
    },
  ];

  const gameRules = [
    { 
      icon: <HandHelping size={24} />, 
      title: "Honrar Hits", 
      desc: "O Airsoft é um jogo de honra. Ao ser atingido, levante a mão, grite 'MORTO' e dirija-se ao ponto de spawn imediatamente." 
    },
    { 
      icon: <MessageSquareOff size={24} />, 
      title: "Sem Discussões", 
      desc: "Proibido discutir com outros jogadores ou juízes durante as partidas. Qualquer divergência deve ser resolvida após o round." 
    },
    { 
      icon: <Users size={24} />, 
      title: "Respeito Mútuo", 
      desc: "Trate todos os operadores com respeito. Ofensas verbais ou agressões físicas resultarão em expulsão imediata." 
    },
    { 
      icon: <Gavel size={24} />, 
      title: "Penalidades", 
      desc: "Infrações leves resultam em advertência. Reincidência ou infrações graves (como 'Highlander') causam banimento do evento." 
    },
  ];

  return (
    <section id="field-rules" className="py-32 bg-base-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none">
        <ShieldAlert size={800} className="text-olive mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-500 text-[10px] font-mono uppercase tracking-[0.3em] mb-4">
            <AlertTriangle size={12} className="animate-pulse" />
            Standard Operating Procedures
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
            Manual de <span className="text-olive">Conduta</span>
          </h2>
          <div className="w-20 h-1 bg-olive mx-auto mb-6"></div>
          <p className="text-muted-gray font-mono text-xs uppercase tracking-[0.2em] max-w-2xl mx-auto">
            Diretrizes de Segurança e Protocolos de Engajamento
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Field Rules Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <div className="w-12 h-12 bg-olive/20 flex items-center justify-center text-olive border border-olive/40">
                <ShieldAlert size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tighter">Regras do <span className="text-olive">Campo</span></h3>
                <span className="text-[10px] font-mono text-muted-gray uppercase tracking-widest">Segurança e Infraestrutura</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {fieldRules.map((rule, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-tactical-gray/5 border border-white/5 p-6 group hover:border-olive/30 transition-all duration-300"
                >
                  <div className="text-olive mb-4 group-hover:scale-110 transition-transform duration-300">
                    {rule.icon}
                  </div>
                  <h4 className="text-sm font-bold uppercase mb-3 tracking-tight group-hover:text-olive transition-colors">{rule.title}</h4>
                  <p className="text-muted-gray text-xs leading-relaxed opacity-80">{rule.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Game Rules Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <div className="w-12 h-12 bg-olive/20 flex items-center justify-center text-olive border border-olive/40">
                <Gamepad2 size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tighter">Regras do <span className="text-olive">Jogo</span></h3>
                <span className="text-[10px] font-mono text-muted-gray uppercase tracking-widest">Conduta e Fair Play</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {gameRules.map((rule, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-tactical-gray/5 border border-white/5 p-6 group hover:border-olive/30 transition-all duration-300"
                >
                  <div className="text-olive mb-4 group-hover:scale-110 transition-transform duration-300">
                    {rule.icon}
                  </div>
                  <h4 className="text-sm font-bold uppercase mb-3 tracking-tight group-hover:text-olive transition-colors">{rule.title}</h4>
                  <p className="text-muted-gray text-xs leading-relaxed opacity-80">{rule.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Honor Quote */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-10 bg-olive/5 border border-dashed border-olive/30 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(85,107,47,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <CheckCircle2 size={32} className="text-olive mb-6" />
            <p className="text-xl md:text-2xl font-serif italic text-white/90 max-w-3xl mb-4">
              "A honra é o nosso principal equipamento. No campo de batalha, sua integridade é sua maior vitória."
            </p>
            <span className="font-mono text-[10px] text-olive uppercase tracking-[0.4em]">Comando 1º Brigada Airsoft</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
