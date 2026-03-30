import { motion } from "motion/react";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function Missions() {
  const missions = [
    {
      title: "Operação: Sombra do Deserto",
      date: "15 ABR 2026",
      location: "Campo de Treinamento Alpha",
      time: "06:00 AM",
      image: "https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2070&auto=format&fit=crop",
      status: "Inscrições Abertas",
    },
    {
      title: "Resgate em Ambiente Urbano",
      date: "02 MAI 2026",
      location: "Complexo Industrial Abandonado",
      time: "22:00 PM",
      image: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=1974&auto=format&fit=crop",
      status: "Briefing em Andamento",
    },
    {
      title: "Patrulha de Fronteira",
      date: "20 MAI 2026",
      location: "Reserva Florestal Norte",
      time: "05:00 AM",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1972&auto=format&fit=crop",
      status: "Planejamento",
    },
  ];

  return (
    <section id="missions" className="py-24 bg-base-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">
            Missões e <span className="text-olive">Operações</span>
          </h2>
          <p className="text-muted-gray font-mono text-sm uppercase tracking-widest">
            Próximos desdobramentos em campo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-tactical-gray/20 border border-white/5 hover:border-olive/50 transition-all overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-olive text-white text-[10px] font-mono px-2 py-1 uppercase">
                  {mission.status}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold uppercase mb-4 group-hover:text-olive transition-colors">
                  {mission.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-gray text-sm">
                    <Calendar size={16} className="text-olive" />
                    <span>{mission.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-gray text-sm">
                    <MapPin size={16} className="text-olive" />
                    <span>{mission.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-gray text-sm">
                    <Clock size={16} className="text-olive" />
                    <span>{mission.time}</span>
                  </div>
                </div>
                
                <button className="w-full py-3 border border-white/10 hover:bg-olive hover:border-olive transition-all font-mono text-xs uppercase tracking-widest">
                  Ver Detalhes do Briefing
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
