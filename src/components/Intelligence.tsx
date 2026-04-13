import { motion } from "motion/react";
import { Terminal, FileText, AlertTriangle } from "lucide-react";
import IntelligenceCenter from "./IntelligenceCenter";
import TacticalReport from "./TacticalReport";

export default function Intelligence() {
  const sublinks = [
    { name: "Documentos", href: "#intelligence", icon: <FileText size={14} /> },
    { name: "Relatórios", href: "#report", icon: <AlertTriangle size={14} /> },
  ];

  return (
    <div id="intelligence-hub" className="relative">
      {/* Intelligence Header / Sub-nav */}
      <div className="sticky top-[72px] z-40 bg-base-black/80 backdrop-blur-md border-b border-olive/20 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-8 md:gap-16">
          {sublinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-gray hover:text-olive transition-colors group"
            >
              <span className="text-olive/50 group-hover:text-olive transition-colors">
                {link.icon}
              </span>
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pt-20 pb-10 text-center bg-gradient-to-b from-olive/5 to-transparent"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive/10 border border-olive/30 text-olive text-[10px] font-mono uppercase tracking-[0.3em] mb-4">
          <Terminal size={12} className="animate-pulse" />
          Intelligence & Command Hub
        </div>
        <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
          Inteligência
        </h2>
        <p className="text-muted-gray font-mono text-xs uppercase tracking-[0.2em] max-w-2xl mx-auto px-6">
          Acesso a documentos oficiais e canais de comunicação tática
        </p>
      </motion.div>

      <div className="space-y-0">
        <IntelligenceCenter />
        <TacticalReport />
      </div>
    </div>
  );
}
