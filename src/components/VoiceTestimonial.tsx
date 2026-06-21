import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, Star } from "lucide-react";

type Props = {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  hasVoice?: boolean;
  voiceUri?: string; // optional voice name hint
};

export default function VoiceTestimonial({ quote, name, role, avatar, hasVoice, voiceUri }: Props) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const estDuration = Math.max(4, quote.split(" ").length / 2.6); // rough seconds

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") window.speechSynthesis?.cancel();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const tick = () => {
    const elapsed = (performance.now() - startRef.current) / 1000;
    setProgress(Math.min(1, elapsed / estDuration));
    rafRef.current = requestAnimationFrame(tick);
  };

  const toggle = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    if (playing) {
      synth.cancel();
      setPlaying(false);
      setProgress(0);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(quote);
    u.rate = 0.98;
    u.pitch = 1;
    const voices = synth.getVoices();
    if (voiceUri) {
      const match = voices.find((v) => v.name.toLowerCase().includes(voiceUri.toLowerCase()));
      if (match) u.voice = match;
    }
    u.onend = () => {
      setPlaying(false);
      setProgress(0);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    u.onerror = () => setPlaying(false);
    utterRef.current = u;
    startRef.current = performance.now();
    synth.speak(u);
    setPlaying(true);
    rafRef.current = requestAnimationFrame(tick);
  };

  return (
    <div className="bento-card p-7 flex flex-col h-full relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="flex justify-between items-start mb-4 relative">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
          ))}
        </div>
        {hasVoice && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-gold flex items-center gap-1">
            <Volume2 className="w-3 h-3" /> voice
          </span>
        )}
      </div>

      <p className="font-body text-base md:text-lg leading-relaxed mb-6 relative flex-1">
        "{quote}"
      </p>

      {hasVoice && (
        <div className="relative flex items-center gap-3 mb-5 rounded-xl border border-gold/20 bg-gold/5 px-3 py-2.5">
          <button
            onClick={toggle}
            aria-label={playing ? "Pause testimonial" : "Play testimonial"}
            className="w-9 h-9 rounded-full bg-gold text-primary-foreground flex items-center justify-center hover:bg-[var(--gold-soft)] transition shrink-0"
          >
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
          <div className="flex-1">
            <div className="h-1 rounded-full bg-border overflow-hidden">
              <div
                className="h-full bg-gold transition-[width] duration-100"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <p className="font-mono text-[10px] text-muted-foreground mt-1">
              {playing ? "playing…" : "listen to this testimonial"}
            </p>
          </div>
        </div>
      )}

      <div className="relative flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/40 to-gold/10 border border-gold/30 flex items-center justify-center font-mono font-bold text-gold">
          {avatar ?? name.charAt(0)}
        </div>
        <div>
          <p className="font-mono text-sm font-bold">{name}</p>
          <p className="font-mono text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
