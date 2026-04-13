import { motion } from "motion/react";
import { Camera, Maximize2, Image as ImageIcon } from "lucide-react";

export default function TacticalGallery() {
  const images = [
    { id: 1, src: "https://picsum.photos/seed/airsoft1/800/600", title: "Operação Noturna", category: "Operações" },
    { id: 2, src: "https://picsum.photos/seed/airsoft2/800/600", title: "Treinamento CQB", category: "Treinamento" },
    { id: 3, src: "https://picsum.photos/seed/airsoft3/800/600", title: "Equipamento Tático", category: "Equipamento" },
    { id: 4, src: "https://picsum.photos/seed/airsoft4/800/600", title: "Briefing de Missão", category: "Operações" },
    { id: 5, src: "https://picsum.photos/seed/airsoft5/800/600", title: "Patrulha de Reconhecimento", category: "Operações" },
    { id: 6, src: "https://picsum.photos/seed/airsoft6/800/600", title: "Linha de Tiro", category: "Treinamento" },
  ];

  return (
    <section id="gallery" className="py-32 bg-base-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10">
          <Camera size={400} className="text-olive" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive/10 border border-olive/30 text-olive text-[10px] font-mono uppercase tracking-[0.3em] mb-4">
            <ImageIcon size={12} className="animate-pulse" />
            Visual Reconnaissance Archive
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
            Galeria <span className="text-olive">Tática</span>
          </h2>
          <div className="w-20 h-1 bg-olive mx-auto mb-6"></div>
          <p className="text-muted-gray font-mono text-xs uppercase tracking-[0.2em] max-w-2xl mx-auto">
            Registros de operações, eventos e momentos marcantes da Brigada
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden bg-tactical-gray/20 border border-white/5"
            >
              <img 
                src={image.src} 
                alt={image.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-base-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-mono text-[10px] text-olive uppercase tracking-widest mb-2 block">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tighter text-white">
                    {image.title}
                  </h3>
                </div>
                
                <button className="absolute top-6 right-6 w-10 h-10 bg-olive/20 backdrop-blur-md border border-olive/40 flex items-center justify-center text-olive opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-olive hover:text-white">
                  <Maximize2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tactical Footer for Gallery */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-olive/30 to-transparent mb-8"></div>
          <p className="text-[10px] font-mono text-muted-gray/50 uppercase tracking-[0.4em]">
            End of Archive // Tactical Visual Log
          </p>
        </motion.div>
      </div>
    </section>
  );
}
