import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Award, Handshake } from 'lucide-react';

const stats = [
{ value: '12+', label: 'Лет на рынке' },
{ value: '350+', label: 'Построенных домов' },
{ value: '98%', label: 'Довольных клиентов' },
{ value: '15+', label: 'Банков-партнёров' }];


const benefits = [
{ icon: Building2, title: 'Полный цикл', desc: 'От проектирования до сдачи дома — всё под нашим контролем' },
{ icon: Handshake, title: 'Работа с банками', desc: 'Помогаем с ипотекой и работаем по эскроу счетам' },
{ icon: Award, title: 'Гарантия качества', desc: 'Используем проверенные материалы и технологии' },
{ icon: Users, title: 'Профессиональная команда', desc: 'Инженеры, архитекторы и строители с многолетним опытом' }];


export default function AboutSection({ aboutImage }) {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">О компании</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">Строим надёжно с 2015 года

          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Компания «Южный Дом» — это команда профессионалов, которая помогает семьям обрести дом мечты в Ростовской области и не только

          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            
            <div className="relative rounded-2xl overflow-hidden">
              <img src={aboutImage} alt="Наша команда" className="w-full h-80 lg:h-96 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-6">
                <p className="text-white font-semibold text-lg">Наша миссия</p>
                <p className="text-white/80 text-sm">Делать качественное жильё доступным для каждой семьи</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6">
            
            <p className="text-muted-foreground leading-relaxed">За более чем 11 лет работы мы построили свыше 350 домов в Ростове-на-Дону и Ростовской области. Наша компания предоставляет полный спектр услуг — от подбора земельного участка и проектирования до строительства и ввода дома в эксплуатацию.

            </p>
            <p className="text-muted-foreground leading-relaxed">
              Мы работаем с ведущими банками страны и предлагаем строительство по эскроу счету, что обеспечивает полную финансовую защиту наших клиентов. Каждый этап строительства проходит строгий контроль качества.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {benefits.map((b, i) =>
              <div key={i} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{b.title}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{b.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center p-6 rounded-2xl bg-card border border-border">
            
              <p className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}