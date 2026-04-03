import { Shield, Instagram, MessageCircle, Disc, Mail, Phone, MapPin, Activity, Terminal, Globe, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-black border-t border-olive/20 pt-32 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-olive/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-olive/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Column 1: Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-olive flex items-center justify-center rounded-sm rotate-45 border border-white/20 shadow-[0_0_15px_rgba(85,107,47,0.3)]">
                <Shield className="-rotate-45 text-white w-5 h-5" />
              </div>
              <div>
                <span className="font-mono font-bold text-xl tracking-tighter uppercase block leading-none">
                  1º Brigada <span className="text-olive">Airsoft</span>
                </span>
                <span className="text-[8px] font-mono text-muted-gray uppercase tracking-[0.4em] mt-1 block">Tactical Command Unit</span>
              </div>
            </div>
            <p className="text-muted-gray text-sm leading-relaxed font-light border-l border-olive/20 pl-4">
              Associação dedicada à simulação militar de alto nível. Honra, disciplina e estratégia em cada missão desdobrada no terreno.
            </p>
            <div className="flex items-center gap-2 text-olive/60 font-mono text-[9px] uppercase tracking-widest">
              <ShieldCheck size={12} />
              <span>Certificado de Excelência Milsim</span>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-olive" />
              <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-olive font-bold">Comunicações</h4>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-muted-gray hover:text-white transition-all group cursor-default">
                <MapPin size={18} className="text-olive/40 group-hover:text-olive shrink-0 transition-colors" />
                <span className="text-sm font-light">Rua PS25, 20 Portal do Sol - Jataí-GO</span>
              </li>
              <li className="flex items-center gap-4 text-muted-gray hover:text-white transition-all group cursor-default">
                <Phone size={18} className="text-olive/40 group-hover:text-olive shrink-0 transition-colors" />
                <span className="text-sm font-light">+55 64 9933-7603</span>
              </li>
              <li className="flex items-center gap-4 text-muted-gray hover:text-white transition-all group cursor-default">
                <Mail size={18} className="text-olive/40 group-hover:text-olive shrink-0 transition-colors" />
                <span className="text-sm font-light">brigadarsoft@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-olive" />
              <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-olive font-bold">Navegação</h4>
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                { name: "Início", href: "#home" },
                { name: "Mapa", href: "#map" },
                { name: "Modos", href: "#modes" },
                { name: "Regras", href: "#field-rules" },
                { name: "Inteligência", href: "#intelligence" },
                { name: "Relatório", href: "#report" },
                { name: "Equipes", href: "#teams" },
                { name: "Sobre", href: "#about" },
                { name: "Contato", href: "#contact" }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-muted-gray hover:text-olive text-[11px] transition-all font-mono uppercase tracking-widest flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-olive/20 group-hover:bg-olive transition-colors"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-olive" />
              <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-olive font-bold">Rede Tática</h4>
            </div>
            <div className="flex gap-4">
              {[
                { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/1brigadajti/" },
                { icon: <MessageCircle size={20} />, label: "WhatsApp", href: "https://wa.me/556499337603" },
                { icon: <Disc size={20} />, label: "Discord", href: "#" }
              ].map((social, idx) => (
                <motion.a 
                  key={idx}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-tactical-gray/10 border border-white/5 flex items-center justify-center text-muted-gray hover:text-olive hover:border-olive/50 transition-all rounded-sm relative group"
                  title={social.label}
                >
                  <div className="absolute inset-0 bg-olive/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className="pt-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-olive rounded-full animate-pulse shadow-[0_0_8px_rgba(85,107,47,0.8)]"></div>
                <div className="font-mono text-[9px] text-muted-gray uppercase tracking-[0.2em]">
                  Status do Servidor: <span className="text-olive font-bold">Operacional</span>
                </div>
              </div>
              <div className="mt-2 font-mono text-[8px] text-muted-gray/30 uppercase tracking-widest">
                Last_Sync: {new Date().toLocaleTimeString()} // GMT-3
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-gray font-bold">
              © {currentYear} 1º Brigada Airsoft // Tactical Operations
            </div>
            <div className="font-mono text-[8px] text-muted-gray/30 uppercase tracking-widest">
              Desenvolvido para operadores de elite // Protocolo v4.2.0
            </div>
          </div>
          
          <div className="flex gap-10">
            <div className="flex flex-col items-end gap-1">
              <p className="text-[9px] font-mono text-muted-gray/40 uppercase tracking-[0.3em]">
                Segurança em Primeiro Lugar
              </p>
              <div className="w-20 h-0.5 bg-olive/20"></div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <p className="text-[9px] font-mono text-muted-gray/40 uppercase tracking-[0.3em]">
                Milsim Excellence
              </p>
              <div className="w-20 h-0.5 bg-olive/20"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
