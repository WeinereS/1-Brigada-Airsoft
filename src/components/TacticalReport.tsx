import React, { useState } from "react";
import { motion } from "motion/react";
import { AlertTriangle, Send, Terminal, Shield, FileText, User, Calendar } from "lucide-react";

export default function TacticalReport() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="report" className="py-32 bg-base-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-olive/5 skew-x-12 transform -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-olive/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-red-500/10 border border-red-500/30 mb-8 rounded-sm">
            <AlertTriangle size={14} className="text-red-500 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold">Protocolo de Ocorrência</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-6 leading-[0.9]">
            Relatório <span className="text-olive">Tático</span>
          </h2>
          <p className="text-muted-gray text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Utilize este canal para registrar incidentes, condutas inadequadas ou problemas técnicos durante as operações. 
            Sua integridade ajuda a manter o padrão de excelência da Brigada.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* HUD Corners */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-olive/30 pointer-events-none"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-olive/30 pointer-events-none"></div>

          <div className="bg-tactical-gray/5 p-8 md:p-12 border border-white/5 backdrop-blur-xl relative">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20 space-y-6"
              >
                <div className="w-20 h-20 bg-olive/20 border border-olive/40 rounded-full flex items-center justify-center mx-auto text-olive mb-8">
                  <Shield size={40} />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tighter">Relatório Transmitido</h3>
                <p className="text-muted-gray font-mono text-sm uppercase tracking-widest">
                  Relatório enviado com sucesso. A Brigada irá analisar a ocorrência.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-olive font-mono text-[10px] uppercase tracking-[0.3em] hover:underline"
                >
                  Novo Relatório
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] uppercase text-muted-gray tracking-[0.2em] font-bold">Identificação de Contato</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-olive/50">
                        <Terminal size={14} />
                      </div>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-base-black/50 border border-white/10 pl-12 pr-5 py-4 focus:border-olive/50 outline-none transition-all font-mono text-xs uppercase tracking-widest placeholder:text-white/10"
                        placeholder="Seu e-mail (opcional para retorno)"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] uppercase text-muted-gray tracking-[0.2em] font-bold">Data da Ocorrência</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-olive/50">
                        <Calendar size={14} />
                      </div>
                      <input 
                        required
                        type="date" 
                        className="w-full bg-base-black/50 border border-white/10 pl-12 pr-5 py-4 focus:border-olive/50 outline-none transition-all font-mono text-xs uppercase tracking-widest placeholder:text-white/10 [color-scheme:dark]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] uppercase text-muted-gray tracking-[0.2em] font-bold">Tipo de Ocorrência</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-olive/50">
                        <FileText size={14} />
                      </div>
                      <select 
                        required
                        className="w-full bg-base-black/50 border border-white/10 pl-12 pr-5 py-4 focus:border-olive/50 outline-none transition-all font-mono text-xs uppercase tracking-widest appearance-none cursor-pointer"
                      >
                        <option value="">SELECIONE O TIPO</option>
                        <option value="highlander">Highlander (não acusar hit)</option>
                        <option value="discussao">Discussão</option>
                        <option value="antidesportiva">Conduta antidesportiva</option>
                        <option value="tecnico">Problema técnico</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] uppercase text-muted-gray tracking-[0.2em] font-bold">Operador Envolvido</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-olive/50">
                        <User size={14} />
                      </div>
                      <input 
                        type="text" 
                        className="w-full bg-base-black/50 border border-white/10 pl-12 pr-5 py-4 focus:border-olive/50 outline-none transition-all font-mono text-xs uppercase tracking-widest placeholder:text-white/10"
                        placeholder="NOME DO JOGADOR (OPCIONAL)"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] uppercase text-muted-gray tracking-[0.2em] font-bold">Descrição da Ocorrência</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-base-black/50 border border-white/10 px-5 py-4 focus:border-olive/50 outline-none transition-all font-mono text-xs uppercase tracking-widest placeholder:text-white/10 resize-none"
                    placeholder="Descreva detalhadamente o ocorrido..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-olive hover:bg-olive/80 text-white py-5 font-mono text-xs uppercase tracking-[0.3em] transition-all border border-white/10 flex items-center justify-center gap-3 group overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Enviar Relatório
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
