import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Terminal, Shield, Radio, Target } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-base-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-olive/5 -skew-x-12 transform translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-olive/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-olive/10 border border-olive/30 mb-8 rounded-sm">
              <Radio size={14} className="text-olive animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-olive font-bold">Canal de Comunicação Aberto</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
              Pronto para o <br />
              <span className="text-olive">Combate?</span>
            </h2>
            <p className="text-muted-gray text-lg mb-12 font-light leading-relaxed max-w-xl">
              Se você busca adrenalina, tática e uma comunidade unida, a <span className="text-white font-medium">1º Brigada</span> é o seu lugar. 
              Entre em contato para saber como participar dos nossos treinos e missões de elite.
            </p>
            
            <div className="space-y-10">
              {[
                { icon: <Mail size={20} />, label: "E-mail Operacional", value: "brigadarsoft@gmail.com", tag: "SECURE_MAIL" },
                { icon: <Phone size={20} />, label: "WhatsApp Tático", value: "+55 64 9933-7603", tag: "COMMS_LINE" },
                { icon: <MapPin size={20} />, label: "Base de Operações", value: "Rua PS25, 20 Portal do Sol - Jataí-GO", tag: "GRID_COORD" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 bg-tactical-gray/10 flex items-center justify-center text-olive border border-white/5 group-hover:border-olive/40 transition-all duration-500 relative">
                    <div className="absolute inset-0 bg-olive/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="font-mono text-[10px] uppercase text-olive font-bold tracking-widest">{item.label}</div>
                      <span className="font-mono text-[8px] text-muted-gray/30 tracking-widest">{item.tag}</span>
                    </div>
                    <div className="text-xl font-bold text-white group-hover:text-olive transition-colors duration-500">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* HUD Corners */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-olive/30 pointer-events-none"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-olive/30 pointer-events-none"></div>

            <div className="bg-tactical-gray/5 p-12 border border-white/5 backdrop-blur-xl relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Target size={64} />
              </div>

              <h3 className="text-2xl font-bold uppercase mb-10 flex items-center gap-4">
                <div className="w-10 h-10 bg-olive/20 flex items-center justify-center text-olive border border-olive/40">
                  <Send size={20} />
                </div>
                Transmitir Mensagem
              </h3>
              
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] uppercase text-muted-gray tracking-[0.2em] font-bold">Identificação</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        className="w-full bg-base-black/50 border border-white/10 px-5 py-4 focus:border-olive/50 outline-none transition-all font-mono text-xs uppercase tracking-widest placeholder:text-white/10"
                        placeholder="NOME DO OPERADOR"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] uppercase text-muted-gray tracking-[0.2em] font-bold">Canal Digital</label>
                    <input 
                      type="email" 
                      className="w-full bg-base-black/50 border border-white/10 px-5 py-4 focus:border-olive/50 outline-none transition-all font-mono text-xs uppercase tracking-widest placeholder:text-white/10"
                      placeholder="EMAIL@EXEMPLO.COM"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] uppercase text-muted-gray tracking-[0.2em] font-bold">Protocolo de Assunto</label>
                  <div className="relative">
                    <select className="w-full bg-base-black/50 border border-white/10 px-5 py-4 focus:border-olive/50 outline-none transition-all font-mono text-xs uppercase tracking-widest appearance-none cursor-pointer">
                      <option>QUERO ME ALISTAR</option>
                      <option>DÚVIDAS SOBRE MISSÕES</option>
                      <option>PARCERIAS ESTRATÉGICAS</option>
                      <option>OUTROS PROTOCOLOS</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-olive/50">
                      <Shield size={14} />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] uppercase text-muted-gray tracking-[0.2em] font-bold">Relatório de Missão</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-base-black/50 border border-white/10 px-5 py-4 focus:border-olive/50 outline-none transition-all font-mono text-xs uppercase tracking-widest placeholder:text-white/10 resize-none"
                    placeholder="DESCREVA SUA SOLICITAÇÃO AQUI..."
                  ></textarea>
                </div>
                
                <button className="w-full bg-olive hover:bg-olive/80 text-white py-5 font-mono text-xs uppercase tracking-[0.3em] transition-all border border-white/10 flex items-center justify-center gap-3 group overflow-hidden relative">
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Terminal size={18} className="group-hover:rotate-12 transition-transform" />
                  Transmitir Mensagem
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
