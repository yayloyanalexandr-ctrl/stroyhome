import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Ruler, MapPin, Landmark, HardHat, FileCheck, PaintBucket,
  Wrench, TreePine, ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Ruler,
    title: 'Проектирование домов',
    desc: 'Индивидуальные и типовые проекты, учитывающие все пожелания заказчика, особенности участка и строительные нормы.',
  },
  {
    icon: MapPin,
    title: 'Поиск земельных участков',
    desc: 'Подберём оптимальный участок для ИЖС с учётом инфраструктуры, коммуникаций и вашего бюджета.',
  },
  {
    icon: Landmark,
    title: 'Ипотечное сопровождение',
    desc: 'Полное сопровождение по получению ипотеки. Работаем с 15+ банками для лучших условий.',
  },
  {
    icon: HardHat,
    title: 'Строительство под ключ',
    desc: 'Полный цикл строительных работ — от фундамента до кровли с контролем на каждом этапе.',
  },
  {
    icon: FileCheck,
    title: 'Работа по Эскроу счету',
    desc: 'Гарантия сохранности ваших средств. Деньги переводятся застройщику только после сдачи дома.',
  },
  {
    icon: PaintBucket,
    title: 'Внутренняя отделка',
    desc: 'Чистовая и черновая отделка, дизайн интерьера, установка сантехники и электрики.',
  },
  {
    icon: Wrench,
    title: 'Инженерные коммуникации',
    desc: 'Подключение и монтаж всех инженерных систем: водоснабжение, канализация, отопление, электричество.',
  },
  {
    icon: TreePine,
    title: 'Благоустройство участка',
    desc: 'Ландшафтный дизайн, укладка дорожек, установка заборов, освещение территории.',
  },
];

export default function ServicesSection() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">Услуги</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Полный спектр услуг
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            От идеи до новоселья — мы берём на себя все этапы строительства вашего дома
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" onClick={() => scrollTo('#contacts')} className="bg-primary hover:bg-primary/90">
            Заказать услугу
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}