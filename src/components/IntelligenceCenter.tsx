import { motion } from "motion/react";
import { FileText, Download, Shield, Terminal, BookOpen } from "lucide-react";

export default function IntelligenceCenter() {
  const documents = [
    {
      title: "Estatuto Oficial da Associação",
      description: "Documento que define a estrutura, missão e organização da Brigada",
      href: "/docs/ESTATUTO_ASSOCIACAO_1BRG.pdf",
      icon: <Shield size={32} />,
      tag: "ESTATUTO_V1"
    },
    {
      title: "Regulamento Geral de Jogo",
      description: "Regras e diretrizes obrigatórias para participação nas operações",
      href: "/docs/REGULAMENTO_2025.pdf",
      icon: <BookOpen size={32} />,
      tag: "REGRAS_2025"
    }
  ];

  return (
    <section id="intelligence" className="py-32 bg-base-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-olive/5 -skew-x-12 transform translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-olive/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive/10 border border-olive/30 text-olive text-[10px] font-mono uppercase tracking-[0.3em] mb-4">
            <Terminal size={12} className="animate-pulse" />
            Intelligence & Operations Command
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
            Central de <span className="text-olive">Inteligência</span>
          </h2>
          <div className="w-20 h-1 bg-olive mx-auto mb-6"></div>
          <p className="text-muted-gray font-mono text-xs uppercase tracking-[0.2em] max-w-2xl mx-auto">
            Documentos oficiais e diretrizes operacionais da 1º Brigada Airsoft
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {documents.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-tactical-gray/5 border border-white/5 p-10 hover:border-olive/40 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative HUD element */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <FileText size={80} />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-olive/10 flex items-center justify-center text-olive border border-olive/20 mb-8 group-hover:bg-olive group-hover:text-white transition-all duration-500">
                  {doc.icon}
                </div>
                
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[8px] text-olive font-bold tracking-[0.3em] uppercase">{doc.tag}</span>
                  <div className="h-px w-8 bg-olive/30"></div>
                </div>
                
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 group-hover:text-olive transition-colors">
                  {doc.title}
                </h3>
                
                <p className="text-muted-gray text-sm font-light leading-relaxed mb-10 opacity-80">
                  {doc.description}
                </p>
                
                <a 
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white/5 hover:bg-olive text-white px-8 py-4 font-mono text-[10px] uppercase tracking-[0.2em] transition-all border border-white/10 group/btn"
                >
                  <Download size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
                  Acessar Documento
                </a>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-olive/30"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-olive/30"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
