import { motion } from "motion/react";

export default function Equipment() {
  const items = [
    { name: "Rifle de Assalto M4A1", category: "AEG", desc: "Equipamento padrão para operadores de linha de frente." },
    { name: "Colete Tático JPC", category: "Proteção", desc: "Leveza e modularidade para missões de alta mobilidade." },
    { name: "Rádio Comunicador", category: "Comms", desc: "Essencial para coordenação tática em tempo real." },
    { name: "Óculos de Proteção", category: "Segurança", desc: "Proteção balística certificada para máxima segurança." },
  ];

  return (
    <section id="equipment" className="py-24 bg-tactical-gray/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">
              Arsenal e <span className="text-olive">Equipamento</span>
            </h2>
            <p className="text-muted-gray leading-relaxed">
              Utilizamos apenas equipamentos de alta performance que atendem aos padrões de simulação militar. 
              A padronização garante a eficiência da brigada em campo.
            </p>
          </div>
          <button className="text-olive font-mono text-xs uppercase tracking-widest border-b border-olive pb-1 hover:text-white hover:border-white transition-all">
            Ver Guia Completo
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-tactical-gray/30 border-l-4 border-olive relative group"
            >
              <div className="font-mono text-[10px] text-olive mb-4 uppercase tracking-[0.2em]">
                REF_{idx + 1024} // {item.category}
              </div>
              <h3 className="text-lg font-bold uppercase mb-3 group-hover:text-olive transition-colors">
                {item.name}
              </h3>
              <p className="text-muted-gray text-sm leading-relaxed">
                {item.desc}
              </p>
              
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <div className="w-12 h-12 border border-white flex items-center justify-center text-[8px] font-mono">
                  TAC_SPEC
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 relative h-[400px] overflow-hidden border border-white/5">
          <img
            src="https://images.unsplash.com/photo-1584273143981-43c2910f33cc?q=80&w=2072&auto=format&fit=crop"
            alt="Tactical Gear Layout"
            className="w-full h-full object-cover grayscale opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-base-black/40 backdrop-blur-[2px]">
            <div className="text-center p-8 border border-olive/30 bg-base-black/80 max-w-lg">
              <h4 className="text-2xl font-bold uppercase mb-4">Kit de Recruta</h4>
              <p className="text-muted-gray text-sm mb-6">
                Está começando? Temos um guia completo de equipamentos básicos necessários para sua primeira missão com a Brigada.
              </p>
              <button className="bg-olive text-white px-8 py-3 font-mono text-xs uppercase tracking-widest">
                Baixar Manual do Recruta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
