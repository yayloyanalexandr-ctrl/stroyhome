import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    name: 'Андрей и Мария Ковалёвы',
    text: 'Строили дом по проекту 90 м² в Южном Доме. Остались очень довольны! Команда работала чётко, все сроки соблюдены. Особенно порадовало, что работали по эскроу — чувствовали себя полностью защищёнными.',
    project: 'Проект 90 м², 3 спальни',
    rating: 5,
  },
  {
    name: 'Елена Новикова',
    text: 'Долго выбирали застройщика. Южный Дом помогли с ипотекой, подобрали участок и построили дом за 8 месяцев. Качество отличное, живём уже год — нареканий нет.',
    project: 'Проект 75 м², 2-3 спальни',
    rating: 5,
  },
  {
    name: 'Семья Петровых',
    text: 'Благодарим всю команду Южного Дома! Индивидуальный подход, прозрачные цены, регулярные отчёты с фото. Дом получился именно таким, каким мы его представляли.',
    project: 'Проект 110 м², 3 спальни',
    rating: 5,
  },
  {
    name: 'Дмитрий Сидоров',
    text: 'Построили дом для родителей через Южный Дом. Ребята отнеслись ответственно, все пожелания учли. Рекомендую однозначно — профессионалы своего дела.',
    project: 'Проект 60 м², 2-3 спальни',
    rating: 5,
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">Отзывы</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Что говорят наши клиенты
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-background rounded-2xl border border-border p-5 sm:p-8 lg:p-10 relative"
          >
            <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: reviews[current].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              «{reviews[current].text}»
            </p>
            <div>
              <p className="font-semibold text-foreground">{reviews[current].name}</p>
              <p className="text-muted-foreground text-sm">{reviews[current].project}</p>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? 'bg-primary w-6' : 'bg-border'
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}