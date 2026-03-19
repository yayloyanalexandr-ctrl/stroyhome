import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, KeyRound, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const advantages = [
  { icon: KeyRound, text: 'Весь спектр услуг под ключ' },
  { icon: Shield, text: 'Строительство по Эскроу счету' },
  { icon: Eye, text: 'Контроль каждого этапа' },
];

export default function HeroSection({ heroImage }) {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Современный дом" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm border border-white/10">
            Надёжный застройщик в Ростове-на-Дону
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Строим дома
            <br />
            <span className="text-primary-foreground/90">вашей мечты</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-lg">
            Полный цикл строительства частных домов — от проекта до новоселья. Работаем по эскроу счету для вашей безопасности.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-13"
              onClick={() => scrollTo('#contacts')}
            >
              Получить консультацию
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              className="bg-white/15 border border-white/40 text-white hover:bg-white/25 text-base px-8 h-13 backdrop-blur-sm"
              onClick={() => scrollTo('#projects')}
            >
              Смотреть проекты
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {advantages.map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10"
              >
                <adv.icon className="w-5 h-5 text-primary-foreground flex-shrink-0" />
                <span className="text-white/90 text-sm font-medium">{adv.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}