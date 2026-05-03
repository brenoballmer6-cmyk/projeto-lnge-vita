import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Menu, 
  X, 
  ChevronRight,
  Play,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';

const BENEFITS = [
  "Equilíbrio hormonal natural",
  "Alívio real dos sintomas da menopausa",
  "Mais energia e vitalidade diária",
  "Melhora no sono e humor",
  "Saúde da pele, unhas e cabelos",
  "Proteção articular e muscular",
  "Fórmula 100% natural e segura"
];

const OFFERS = [
  {
    quantity: "1 Frasco",
    duration: "30 dias de tratamento",
    price: "R$ 147,00",
    installments: "12x de R$ 14,76",
    savings: "Tratamento inicial",
    isPopular: false
  },
  {
    quantity: "3 Frascos",
    duration: "90 dias de tratamento",
    price: "R$ 347,00",
    installments: "12x de R$ 34,84",
    savings: "Mais Vendido - 20% OFF",
    isPopular: true
  },
  {
    quantity: "5 Frascos",
    duration: "150 dias de tratamento",
    price: "R$ 497,00",
    installments: "12x de R$ 49,90",
    savings: "Melhor Valor - 40% OFF",
    isPopular: false
  }
];

const TESTIMONIALS = [
  {
    name: "Maria Silva",
    age: "52 anos",
    text: "O Longevita mudou minha vida. As ondas de calor sumiram e voltei a dormir como uma adolescente.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Cláudia Souza",
    age: "48 anos",
    text: "Sinto uma energia que não tinha há anos. Minha pele e cabelo estão visivelmente mais saudáveis.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Ana Oliveira",
    age: "55 anos",
    text: "O acompanhamento pelo app é maravilhoso. Me sinto cuidada todos os dias. Recomendadíssimo!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const badgeRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-black text-white selection:bg-yellow-500/30" ref={containerRef}>
      {/* Sticky Urgency Bar */}
      <div className="fixed top-0 w-full z-[60] bg-[#d4af37] py-2.5 px-4 flex justify-center items-center gap-4 text-black font-black text-[10px] md:text-sm uppercase tracking-widest shadow-2xl">
        <span className="hidden sm:inline">⚠️ ATENÇÃO: OFERTA EXCLUSIVA DO APP EXPIRA EM:</span>
        <span className="sm:hidden">OFERTA EXPIRA EM:</span>
        <div className="flex gap-2">
          <span className="bg-black text-white px-2 py-0.5 rounded tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="font-bold">:</span>
          <span className="bg-black text-white px-2 py-0.5 rounded tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Floating Sparkles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(212,175,55,0.08)_0%,_rgba(0,0,0,1)_70%)]" />
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-500/20 blur-[1px] animate-pulse"
            style={{ 
              left: Math.random() * 100 + "%", 
              top: Math.random() * 100 + "%",
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              animationDuration: Math.random() * 3 + 2 + "s",
              animationDelay: Math.random() * 5 + "s"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 overflow-hidden min-h-[90vh] md:min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 relative text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-yellow-500 mb-6 md:mb-8">
              <Star className="w-2.5 h-2.5 md:w-3 h-3 fill-yellow-500" />
              <span>O mais amado pelas brasileiras</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-black leading-[1.0] md:leading-[0.9] mb-6 md:mb-10 tracking-tighter uppercase italic">
              VIVAA SUA <br />
              <span className="gold-gradient">MELHOR FASE</span> <br />
              AGORA!
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
              Equilibre seus hormônios naturalmente com a fórmula **Longevita**. Recupere sua energia e auto-estima com tecnologia exclusiva.
            </p>
            
            <div className="space-y-4 mb-10 md:mb-14 text-left inline-block lg:block">
              {BENEFITS.slice(0, 4).map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-yellow-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-yellow-500 w-3 h-3 md:w-3.5 md:h-3.5" />
                  </div>
                  <span className="text-slate-200 text-sm md:text-lg font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-10">
              <a 
                href="#ofertas" 
                className="gold-bg text-black font-black uppercase tracking-[0.2em] px-8 py-5 md:px-12 md:py-6 rounded-2xl flex items-center justify-center gap-3 md:gap-4 hover:scale-105 transition-all shadow-gold group text-sm md:text-base w-full sm:w-auto"
              >
                QUERO MEU EQUILÍBRIO
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
              </a>
              <div className="flex flex-col items-center sm:items-start opacity-60">
                <div className="flex gap-1 text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">+45 mil potes vendidos</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative z-10 w-full max-w-[320px] sm:max-w-[440px] md:max-w-[550px] mx-auto">
              {/* Product Pot Image with Enhanced Framing */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-30"
              >
                <div className="relative group">
                  {/* Dramatic Glows */}
                  <div className="absolute inset-0 bg-yellow-500/15 blur-[80px] rounded-full scale-110 animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/20 via-transparent to-transparent blur-2xl" />
                  
                  {/* Premium Frame */}
                  <div className="relative z-10 p-1.5 rounded-[40px] md:rounded-[60px] bg-gradient-to-br from-[#d4af37] via-[#f9f295] to-[#bf953f] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                    <div className="bg-zinc-950 rounded-[35px] md:rounded-[55px] overflow-hidden border border-black/80 relative">
                      <img 
                        src="/src/assets/images/regenerated_image_1777829385636.png" 
                        alt="Longevita Gold" 
                        className="w-full h-auto object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 brightness-110 contrast-110"
                        referrerPolicy="no-referrer"
                      />
                      {/* Integrated Label Feel */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-8 md:p-12 flex flex-col items-center">
                        <div className="h-1 w-16 bg-[#d4af37]/40 rounded-full mb-4" />
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-[#d4af37]">Longevita Premium</span>
                        <div className="flex gap-1 mt-2">
                           {[...Array(5)].map((_, i) => <Star key={i} className="w-2 h-2 fill-[#d4af37] text-[#d4af37]" />)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Massive Decorative Blur Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-[radial-gradient(circle,_rgba(212,175,55,0.15)_0%,_rgba(0,0,0,0)_70%)] blur-[80px] md:blur-[120px] -z-10" />
              
              {/* Refined Gold Seal Badge */}
              <motion.div 
                style={{ rotate: badgeRotate }}
                className="absolute -bottom-4 -right-4 md:-bottom-2 md:-right-2 w-28 h-28 md:w-44 md:h-44 z-40"
              >
                <div className="w-full h-full rounded-full border-[1.5px] border-black/20 gold-bg shadow-[0_10px_30px_rgba(212,175,55,0.5)] flex flex-col items-center justify-center relative p-4">
                  <div className="absolute inset-0 rounded-full border-4 border-black/5 scale-[1.05]" />
                  <span className="font-display font-black text-3xl md:text-6xl leading-none text-black">120</span>
                  <span className="text-black font-bold text-[8px] md:text-[11px] uppercase tracking-widest text-center mt-1">Cápsulas</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Marquee Social Proof */}
      <div className="bg-zinc-950 border-y border-white/5 py-8 overflow-hidden flex whitespace-nowrap">
        <div className="flex gap-24 animate-marquee items-center min-w-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
                Uma nova mulher em {['SP', 'RJ', 'MG', 'PR', 'RS'][Math.floor(Math.random()*5)]} acaba de garantir o tratamento
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* VSL Section */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold italic mb-6">Assista à <span className="gold-gradient">Apresentação</span></h2>
            <p className="text-slate-400 text-lg">Descubra o mecanismo celular que está salvando a auto-estima de milhares de mulheres.</p>
          </div>
          
          <div className="relative group cursor-pointer aspect-video rounded-[40px] overflow-hidden border border-white/10 vsl-shadow">
             <div className="absolute inset-0 flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                <div className="w-24 h-24 rounded-full gold-bg flex items-center justify-center shadow-gold">
                   <Play className="text-black w-10 h-10 fill-current ml-1" />
                </div>
             </div>
             <img 
               src="https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=1200" 
               alt="Mulher Longevita" 
               className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-10 text-center">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500">Vídeo Exclusivo • Clique para Iniciar</span>
             </div>
          </div>
        </div>
      </section>

      {/* Objection Killing Section */}
      <section className="py-24 md:py-32 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto font-sans">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16 md:mb-24 italic">Isso é para <span className="gold-gradient">você</span> se...</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { q: "Acha difícil começar?", a: "Nossa aplicação leva apenas 30 segundos por dia. Simples e prático." },
              { q: "Já tentou de tudo?", a: "Nossa fórmula atua onde suplementos comuns não chegam, com absorção máxima." },
              { q: "Tem medo de química?", a: "Longevita é 100% natural, formulado com extratos puros e seguros." },
              { q: "Preocupada com prazo?", a: "A maioria das usuárias relata melhora na disposição já na primeira semana." }
            ].map((obj, i) => (
              <div key={i} className="p-8 md:p-10 rounded-[28px] md:rounded-[35px] border border-white/5 bg-black/40 hover:border-yellow-500/20 transition-all flex flex-col h-full">
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-[10px] mb-5 md:mb-6 italic">{obj.q}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{obj.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Ecosystem Section */}
      <section className="py-32 px-4 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
             {/* Glowing light behind visual */}
             <div className="absolute inset-0 bg-yellow-500/15 blur-[120px] rounded-full scale-125 opacity-40 group-hover:opacity-60 transition-opacity" />
             
             <div className="relative z-10 w-full max-w-[450px] mx-auto aspect-square rounded-[2rem] md:rounded-[3rem] border-2 border-white/10 shadow-2xl overflow-hidden group-hover:border-yellow-500/30 transition-all duration-500">
                {/* The new image added by user */}
                <img 
                  src="/src/assets/images/regenerated_image_1777828135176.png" 
                  alt="Longevita App Experience" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                
                {/* Premium Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge (Already inside the image but we can add a small UI touch) */}
                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                   <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500">Tecnologia Gold-Link</span>
                   </div>
                   <div className="w-10 h-10 rounded-full gold-bg flex items-center justify-center shadow-gold">
                      <ShieldCheck className="w-5 h-5 text-black" />
                   </div>
                </div>
             </div>
          </div>

          <div className="space-y-12">
            <div className="text-yellow-500 text-xs font-bold uppercase tracking-[0.5em]">Experiência Premium Digital</div>
            <h2 className="text-5xl md:text-7xl font-display font-medium italic leading-[1.0]">Muito mais que um <br /><span className="gold-gradient">suplemento</span>.</h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-xl">
              Ao adquirir o tratamento hoje, você desbloqueia o acesso gratuito ao nosso **Longevita App**. Um ecossistema completo para transformar sua jornada 35+.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { t: "IA Hormonal", d: "Consultoria personalizada 24h." },
                { t: "Bio-Tracking", d: "Monitore seus sintomas e melhora." },
                { t: "Masterclasses", d: "Aulas ao vivo com especialistas." },
                { t: "Clube VIP", d: "Acesso a promoções e parcerias." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-4 h-4 rounded-full gold-bg flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">{item.t}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="ofertas" className="py-32 px-4 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-24">
            <h2 className="text-5xl md:text-7xl font-display font-bold italic mb-8">Escolha seu <span className="gold-gradient">desconto</span></h2>
            <p className="text-slate-400 text-lg uppercase tracking-[0.3em] font-bold">Oferta do dia com Frete Grátis</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 items-end">
            {OFFERS.map((offer, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className={`relative p-12 rounded-[50px] border transition-all ${offer.isPopular ? 'gold-bg text-black scale-105 z-10 shadow-gold' : 'bg-black/40 text-white border-white/5'}`}
              >
                {offer.isPopular && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] px-8 py-3 rounded-full shadow-2xl">
                    RECOMENDADO
                  </div>
                )}
                
                <h3 className="text-4xl font-display font-black mb-2 italic uppercase">{offer.quantity}</h3>
                <p className={`text-sm mb-12 opacity-60 uppercase font-bold tracking-widest`}>{offer.duration}</p>
                
                <div className="mb-14">
                  <p className="text-sm line-through opacity-40 mb-2 italic text-center">De R$ {i === 0 ? '197,00' : i === 1 ? '591,00' : '985,00'}</p>
                  <div className="flex flex-col items-center">
                    <span className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-3">{offer.price}</span>
                    <span className="text-sm font-bold opacity-80 uppercase tracking-widest italic">ou {offer.installments}</span>
                  </div>
                </div>

                <ul className="space-y-6 mb-14 text-left">
                  <li className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${offer.isPopular ? 'bg-black text-white' : 'bg-yellow-500/20 text-yellow-500'}`}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest">{offer.savings}</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${offer.isPopular ? 'bg-black text-white' : 'bg-yellow-500/20 text-yellow-500'}`}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest">Frete Grátis p/ Todo Brasil</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${offer.isPopular ? 'bg-black text-white' : 'bg-yellow-500/20 text-yellow-500'}`}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest">Acesso Vitalício ao App</span>
                  </li>
                </ul>

                <button className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all active:scale-95 ${offer.isPopular ? 'bg-black text-white hover:bg-zinc-900' : 'gold-bg text-black hover:scale-105 shadow-gold'}`}>
                  Garantir Agora
                </button>
              </motion.div>
            ))}
          </div>

          {/* Guarantee Seal */}
          <div className="mt-32 max-w-4xl mx-auto p-12 rounded-[50px] border border-white/5 bg-black/40 flex flex-col md:flex-row items-center gap-12 text-left">
             <div className="w-40 h-40 flex-shrink-0 relative">
                <ShieldCheck className="w-full h-full text-yellow-500" />
                <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full" />
             </div>
             <div>
                <h3 className="text-2xl md:text-3xl font-display font-medium mb-4 italic">Sua Satisfação é nossa <span className="gold-gradient">Garantia</span></h3>
                <p className="text-slate-400 text-base leading-relaxed font-light">
                  Se em 30 dias você não sentir uma melhora visível na sua disposição, sono e equilíbrio, devolvemos 100% do seu investimento. Sem burocracia. O risco é todo nosso.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-24 px-4 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-20 mb-20 text-center md:text-left">
            <div className="md:col-span-2 space-y-10">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full gold-bg flex items-center justify-center shadow-gold">
                  <ShieldCheck className="text-black w-8 h-8" />
                </div>
                <span className="font-display font-black tracking-tight text-white uppercase italic text-2xl">Longevita Natural</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto md:mx-0 font-light">
                A marca número 1 em longevidade feminina natural no Brasil. Ciência, natureza e tecnologia para sua melhor fase.
              </p>
              <div className="flex gap-8 justify-center md:justify-start grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                <Instagram className="w-6 h-6 cursor-pointer" />
                <Facebook className="w-6 h-6 cursor-pointer" />
                <Youtube className="w-6 h-6 cursor-pointer" />
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-white font-black uppercase tracking-[0.4em] text-[10px]">Políticas</h4>
              <nav className="flex flex-col gap-5 text-slate-500 text-sm font-medium">
                <a href="#" className="hover:text-yellow-500">Termos de Uso</a>
                <a href="#" className="hover:text-yellow-500">Privacidade</a>
                <a href="#" className="hover:text-yellow-500">Aviso Legal</a>
              </nav>
            </div>

            <div className="space-y-8">
              <h4 className="text-white font-black uppercase tracking-[0.4em] text-[10px]">Suporte</h4>
              <nav className="flex flex-col gap-5 text-slate-500 text-sm font-medium">
                <a href="#" className="hover:text-yellow-500">Central de Ajuda</a>
                <a href="#" className="hover:text-yellow-500">Rastreio</a>
                <a href="#" className="hover:text-yellow-500">Fale Conosco</a>
              </nav>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 text-center">
             <p className="text-[10px] text-slate-600 leading-relaxed uppercase tracking-[0.3em] font-bold max-w-4xl mx-auto">
              Longevita Natural é um suplemento 100% natural isento de registro conforme RDC nº 240/2018. Resultados podem variar por indivíduo. Consulte sempre seu médico.
             </p>
          </div>
        </div>
      </footer>

      {/* CTA Stick for Mobile */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 w-full p-4 z-[50] lg:hidden"
      >
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-1.5 rounded-3xl shadow-2xl">
          <a 
            href="#ofertas" 
            className="gold-bg text-black font-black uppercase tracking-widest px-8 py-5 rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(212,175,55,0.4)] active:scale-95 transition-transform"
          >
            QUERO MEU LONGEVITA
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
