import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Maximize2, BedDouble, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'Проект 60 м²',
    area: '60 м²',
    rooms: '2-3 спальни',
    price: 'от 64 тыс ₽ за м²',
    desc: 'Уютный одноэтажный дом из кирпича. Компактная и функциональная планировка для молодой семьи.',
    tag: 'Эконом',
    images: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/2ae40fb7a_60-1.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/282b401d9_60-2.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/207c14d30_60-3.jpg',
    ],
    plans: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/b121d9cc5_602-.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/c8bd62fb5_602-3.jpg',
    ],
  },
  {
    title: 'Проект 65 м²',
    area: '65 м²',
    rooms: '2-3 спальни',
    price: 'от 63 тыс ₽ за м²',
    desc: 'Светлый дом из белого кирпича с панорамным видом. Отличный выбор для жизни у воды.',
    tag: 'Популярный',
    images: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/c3c935bd9_65-1.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/2edba92ae_65-2.jpg',
    ],
    plans: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/7c67a1549_652-2.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/f6dd58c75_652-3.jpg',
    ],
  },
  {
    title: 'Проект 70 м²',
    area: '70 м²',
    rooms: '2-3 спальни',
    price: 'от 62 тыс ₽ за м²',
    desc: 'Стильный дом из тёмного кирпича. Строгий современный дизайн с просторной гостиной.',
    tag: 'Новинка',
    images: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/bfa4eb5d6_70-1.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/830a24c33_70-2.jpg',
    ],
    plans: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/1e2c649a8_702-2.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/7c7829862_702-3.jpg',
    ],
  },
  {
    title: 'Проект 75 м²',
    area: '75 м²',
    rooms: '2-3 спальни',
    price: 'от 61 тыс ₽ за м²',
    desc: 'Яркий кирпичный дом с ночной подсветкой. Отличный вариант для семьи с детьми.',
    tag: 'Хит продаж',
    images: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/64b660820_75-1.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/b28714839_75-2.jpg',
    ],
    plans: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/05746d36b_752-2.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/b4c12edd3_752-3.jpg',
    ],
  },
  {
    title: 'Проект 80 м²',
    area: '80 м²',
    rooms: '2-3 спальни',
    price: 'от 59 тыс ₽ за м²',
    desc: 'Белый штукатурный дом в минималистичном стиле. Идеален для загородной жизни.',
    tag: 'Популярный',
    images: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/b0cf4da97_80-1.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/6dde41730_80-2.jpg',
    ],
    plans: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/e9171da03_802-2.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/17b2c2a2d_802-3.jpg',
    ],
  },
  {
    title: 'Проект 85 м²',
    area: '85 м²',
    rooms: '2-3 спальни',
    price: 'от 56 тыс ₽ за м²',
    desc: 'Просторный светлый дом с террасой и красивым ландшафтом. Уют и стиль в каждой детали.',
    tag: 'Новинка',
    images: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/800105058_85-1.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/e21e35787_85-2.jpg',
    ],
    plans: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/86c012956_85-2.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/292e164ef_85-3.jpg',
    ],
  },
  {
    title: 'Проект 90 м²',
    area: '90 м²',
    rooms: '2-3 спальни',
    price: 'от 55 тыс ₽ за м²',
    desc: 'Современный тёмный кирпич, продуманная планировка с гаражом и зоной барбекю.',
    tag: 'Популярный',
    images: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/51f9f4181_90-1.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/7b50e4b15_90-2.jpg',
    ],
    plans: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/6ac3e1946_902-2.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/90b8d6c44_902-3.jpg',
    ],
  },
  {
    title: 'Проект 98 м²',
    area: '98 м²',
    rooms: '4 комнаты',
    price: 'от 55 тыс ₽ за м²',
    desc: 'Дом с бассейном и зоной отдыха. Классический кирпич, просторная территория.',
    tag: 'Премиум',
    images: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/2f2beaea7_98-1.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/94a19637b_98-2.jpg',
    ],
    plans: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/3681f91f4_982.jpg',
    ],
  },
  {
    title: 'Проект 101 м²',
    area: '101 м²',
    rooms: '4 комнаты',
    price: 'от 55 тыс ₽ за м²',
    desc: 'Тёмный кирпичный дом с панорамными окнами и собственной парковкой. Для активной семьи.',
    tag: 'Хит продаж',
    images: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/09bf11873_101-1.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/2e6b59dcc_101-2.jpg',
    ],
    plans: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/f59555563_1012.jpg',
    ],
  },
  {
    title: 'Проект 110 м²',
    area: '110 м²',
    rooms: '4 комнаты',
    price: 'от 55 тыс ₽ за м²',
    desc: 'Роскошный мраморный дом с бассейном и ландшафтным дизайном. Вершина комфорта.',
    tag: 'Премиум',
    images: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/8c49fac25_110-1.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/2ecb9a044_110-2.jpg',
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/714878318_110-3.jpg',
    ],
    plans: [
      'https://media.base44.com/images/public/69b958ccec4c782c15841246/36126c3ab_1102.jpg',
    ],
  },
];

function ProjectCard({ project, index, onOpen }) {
  const [imgIndex, setImgIndex] = useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i - 1 + project.images.length) % project.images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i + 1) % project.images.length);
  };

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.images[imgIndex]}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {project.tag}
        </Badge>
        {project.images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${i === imgIndex ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
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
          <Button size="sm" variant="outline" onClick={() => onOpen(project)}>
            Подробнее
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const displayed = showAll ? projects : projects.slice(0, 6);

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
              <ProjectCard key={project.title} project={project} index={i} onOpen={setSelectedProject} />
            ))}
          </AnimatePresence>
        </div>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

        <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {!showAll && projects.length > 6 && (
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