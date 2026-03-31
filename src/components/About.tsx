import { motion } from "motion/react";
import { Shield, Target, Users, Crosshair, Award, Zap, Activity, Info } from "lucide-react";

export default function About() {
  const stats = [
    { icon: <Users size={20} />, label: "Operadores Ativos", value: "150+", color: "text-olive" },
    { icon: <Target size={20} />, label: "Missões Cumpridas", value: "480", color: "text-white" },
    { icon: <Shield size={20} />, label: "Anos de Operação", value: "10", color: "text-olive" },
  ];

  const values = [
    {
      title: "Missão",
      icon: <Zap className="text-olive" size={18} />,
      desc: "Forjar operadores de elite através da simulação militar ultra-realista, elevando os padrões de disciplina, técnica e imersão tática no cenário nacional.",
      tag: "DIRECTIVE_01"
    },
    {
      title: "Visão",
      icon: <Crosshair className="text-olive" size={18} />,
      desc: "Consolidar-se como a unidade de referência absoluta em Milsim, sendo o epicentro da excelência estratégica e treinamento tático avançado.",
      tag: "OBJECTIVE_ALPHA"
    },
    {
      title: "Valores",
      icon: <Award className="text-olive" size={18} />,
      desc: "Honra inabalável, lealdade ao pelotão, segurança operacional absoluta e o compromisso inegociável com o Fair Play e a hierarquia militar.",
      tag: "CORE_PROTOCOL"
    }
  ];

  return (
    <section id="about" className="py-32 bg-base-black relative overflow-hidden">
      {/* Background scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-olive/10 border border-olive/30 mb-8 rounded-sm">
              <Activity size={14} className="text-olive animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-olive font-bold">Arquivo de Inteligência // Desclassificado</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-10 leading-[0.9]">
              A Gênese da <br />
              <span className="text-olive">1º Brigada</span> Airsoft
            </h2>
            
            <div className="space-y-8 text-muted-gray text-lg leading-relaxed font-light border-l-2 border-olive/20 pl-8">
              <p>
                Nascida sob o fogo da necessidade de um Airsoft mais sério e comprometido, a <span className="text-white font-medium">1º Brigada</span> não é apenas uma associação; é uma irmandade forjada no aço da disciplina e no suor dos treinamentos exaustivos. 
              </p>
              <p>
                Desde o nosso primeiro desdobramento há mais de uma década, nossa trajetória tem sido marcada pela busca incessante da <span className="text-olive italic font-medium">Simulação Militar (Milsim)</span> em seu estado mais puro. Não jogamos apenas por pontos; operamos por objetivos.
              </p>
              <p className="text-sm font-mono uppercase tracking-widest opacity-60">
                // O "hit" é sagrado e a lealdade ao companheiro de trincheira é a nossa lei máxima.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mt-16">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-white/[0.02] border border-white/5 group-hover:border-olive/40 transition-all duration-500"></div>
                  <div className="relative p-8 text-center">
                    <div className={`${stat.color} mb-4 flex justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-500`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold font-mono tracking-tighter text-white mb-2">{stat.value}</div>
                    <div className="text-[8px] uppercase tracking-[0.2em] text-muted-gray group-hover:text-olive transition-colors duration-500">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Tactical Briefing Cards */}
            <div className="bg-tactical-gray/5 border border-white/5 p-1 relative group">
              <div className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-olive transition-all group-hover:w-10 group-hover:h-10"></div>
              <div className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-olive transition-all group-hover:w-10 group-hover:h-10"></div>
              
              <div className="p-10 space-y-12">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div className="flex items-center gap-3">
                    <Info size={14} className="text-olive" />
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.5em] text-muted-gray">Diretrizes Operacionais</h3>
                  </div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1 h-4 bg-olive/20 group-hover:bg-olive/40 transition-colors"></div>)}
                  </div>
                </div>

                <div className="space-y-10">
                  {values.map((item, idx) => (
                    <div key={idx} className="relative pl-10 group/item">
                      <div className="absolute left-0 top-1 text-olive opacity-30 group-hover/item:opacity-100 transition-all duration-500 group-hover/item:scale-110">
                        {item.icon}
                      </div>
                      <div className="mb-3 flex items-center gap-4">
                        <h4 className="text-2xl font-bold uppercase tracking-tighter text-white">{item.title}</h4>
                        <span className="font-mono text-[8px] text-olive/30 tracking-[0.3em] uppercase">{item.tag}</span>
                      </div>
                      <p className="text-muted-gray text-sm leading-relaxed max-w-md font-light">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex justify-between items-end border-t border-white/5">
                  <div className="space-y-1.5">
                    <div className="w-40 h-1 bg-olive/20"></div>
                    <div className="w-28 h-1 bg-olive/10"></div>
                  </div>
                  <div className="font-mono text-[8px] text-muted-gray/20 uppercase tracking-widest">
                    Auth_Level: Command_Staff // 0x7F42
                  </div>
                </div>
              </div>
            </div>

            {/* Tactical Image with HUD */}
            <div className="relative group overflow-hidden rounded-sm">
              <div className="aspect-[16/9] overflow-hidden border border-white/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?q=80&w=1974&auto=format&fit=crop"
                  alt="Tactical Deployment"
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-olive/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </div>
              
              {/* HUD Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-white/10 group-hover:border-olive/40 transition-colors duration-700"></div>
                <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-white/10 group-hover:border-olive/40 transition-colors duration-700"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-white/10 group-hover:border-olive/40 transition-colors duration-700"></div>
                <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-white/10 group-hover:border-olive/40 transition-colors duration-700"></div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/5 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-olive rounded-full animate-ping"></div>
                  <div className="absolute inset-0 border-t-2 border-olive/40 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-4 border-b-2 border-white/10 rounded-full animate-spin-reverse"></div>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-10 bg-base-black/90 backdrop-blur-xl border border-olive/30 p-5 min-w-[200px]">
                <div className="font-mono text-[9px] text-olive uppercase tracking-[0.3em] mb-3 font-bold">Status de Prontidão</div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                      <div key={i} className={`w-2.5 h-5 ${i < 7 ? 'bg-olive' : 'bg-olive/20'} transition-all duration-500`}></div>
                    ))}
                  </div>
                  <span className="font-mono text-xs text-white font-bold">85%</span>
                </div>
                <div className="mt-3 font-mono text-[8px] text-muted-gray uppercase tracking-widest">
                  Unit_Ready: Alpha_Squad
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
