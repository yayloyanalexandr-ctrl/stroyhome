import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Maximize2, BedDouble, RulerIcon, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Проект «Альпийский»',
    area: '180 м²',
    rooms: '4 комнаты',
    price: 'от 6.5 млн ₽',
    desc: 'Современный двухэтажный дом с панорамными окнами и террасой. Идеален для семьи.',
    tag: 'Хит продаж',
  },
  {
    title: 'Проект «Скандинавский»',
    area: '140 м²',
    rooms: '3 комнаты',
    price: 'от 4.8 млн ₽',
    desc: 'Уютный одноэтажный дом в скандинавском стиле с открытой планировкой.',
    tag: 'Новинка',
  },
  {
    title: 'Проект «Классик»',
    area: '220 м²',
    rooms: '5 комнат',
    price: 'от 8.2 млн ₽',
    desc: 'Просторный дом с гаражом, мансардой и большим участком для сада.',
    tag: 'Премиум',
  },
  {
    title: 'Проект «Минимал»',
    area: '100 м²',
    rooms: '2 комнаты',
    price: 'от 3.2 млн ₽',
    desc: 'Компактный и функциональный дом для небольшой семьи или молодой пары.',
    tag: 'Эконом',
  },
  {
    title: 'Проект «Барнхаус»',
    area: '160 м²',
    rooms: '3 комнаты',
    price: 'от 5.5 млн ₽',
    desc: 'Современный барнхаус со вторым светом, панорамными окнами и открытой кухней-гостиной.',
    tag: 'Популярный',
  },
  {
    title: 'Проект «Усадьба»',
    area: '280 м²',
    rooms: '6 комнат',
    price: 'от 11 млн ₽',
    desc: 'Роскошный дом для большой семьи: бассейн, сауна, гараж на 2 автомобиля.',
    tag: 'Премиум',
  },
];

export default function ProjectsSection({ projectImages }) {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 3);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">Проекты</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Наши проекты домов
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите готовый проект или закажите индивидуальное проектирование
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayed.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={projectImages[i % projectImages.length]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {project.tag}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-4 h-4" />
                      {project.area}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="w-4 h-4" />
                      {project.rooms}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{project.price}</span>
                    <Button size="sm" variant="outline" onClick={() => scrollTo('#contacts')}>
                      Подробнее
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {!showAll && projects.length > 3 && (
            <Button variant="outline" size="lg" onClick={() => setShowAll(true)}>
              Показать все проекты
            </Button>
          )}
          <Button size="lg" onClick={() => scrollTo('#contacts')} className="bg-primary hover:bg-primary/90">
            Заказать индивидуальный проект
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}