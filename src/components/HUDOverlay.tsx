import { useEffect, useState } from "react";
import { motion } from "motion/react";

// Procedural sound generator for HUD beeps
const playBeep = (frequency = 800, duration = 0.05, volume = 0.02) => {
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    
    gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio context might be blocked by browser policy until user interaction
  }
};

export default function HUDOverlay() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Play a subtle beep on click
  useEffect(() => {
    const handleClick = () => playBeep(1200, 0.03, 0.01);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Scanline & Noise Layers */}
      <div className="absolute inset-0 hud-scanline opacity-30"></div>
      <div className="absolute inset-0 hud-noise"></div>
      <div className="absolute inset-0 hud-grid opacity-20"></div>

      {/* Corner Brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-olive/40"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-olive/40"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-olive/40"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-olive/40"></div>

      {/* Dynamic Coordinates */}
      <div className="absolute bottom-12 left-12 font-mono text-[10px] text-olive/60 uppercase tracking-widest space-y-1">
        <div>LAT: {coords.y.toString().padStart(4, "0")}</div>
        <div>LNG: {coords.x.toString().padStart(4, "0")}</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-olive/40 animate-pulse"></div>
          <span>SIGNAL: STABLE</span>
        </div>
      </div>

      {/* Top Status Bar */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center gap-8 font-mono text-[9px] text-olive/40 tracking-[0.3em] uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 bg-olive/60 rounded-full"></span>
          <span>SYS_READY</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 bg-olive/60 rounded-full animate-ping"></span>
          <span>LIVE_FEED</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 bg-olive/60 rounded-full"></span>
          <span>ENC_AES256</span>
        </div>
      </div>

      {/* Radar Sweep Effect (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] pointer-events-none opacity-[0.03]">
        <div className="w-full h-full radar-sweep bg-gradient-to-r from-olive/20 via-transparent to-transparent"></div>
      </div>

      {/* Crosshair (Follows Mouse) */}
      <motion.div 
        animate={{ x: coords.x, y: coords.y }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none opacity-20"
      >
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-olive"></div>
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-olive"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-olive rounded-full"></div>
      </motion.div>
    </div>
  );
}
