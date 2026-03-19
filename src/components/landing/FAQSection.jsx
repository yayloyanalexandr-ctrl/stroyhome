import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Сколько стоит строительство дома?',
    a: 'Стоимость зависит от площади, материалов и сложности проекта. Цены начинаются от 55 тыс. ₽ за м² за дом площадью 100 м². Мы предоставляем подробную смету до начала строительства.',
  },
  {
    q: 'Какие материалы вы используете?',
    a: 'Мы работаем с газоблоком, кирпичом. Все материалы сертифицированы и соответствуют строительным нормам.',
  },
  {
    q: 'Что такое строительство по эскроу счету?',
    a: 'Эскроу счёт — это специальный банковский счёт, на котором хранятся ваши деньги до завершения строительства. Застройщик получает средства только после сдачи объекта, что обеспечивает полную защиту ваших вложений.',
  },
  {
    q: 'Сколько времени занимает строительство?',
    a: 'Средний срок строительства — от 4 до 10 месяцев в зависимости от проекта и погодных условий. Точные сроки указываются в договоре.',
  },
  {
    q: 'Помогаете ли вы с ипотекой?',
    a: 'Да, мы предоставляем полное ипотечное сопровождение. Сотрудничаем с 15+ банками и помогаем подобрать лучшие условия кредитования для наших клиентов.',
  },
  {
    q: 'Можно ли изменить типовой проект?',
    a: 'Конечно! Любой типовой проект можно адаптировать под ваши пожелания — изменить планировку, фасад, материалы отделки. Также мы делаем полностью индивидуальные проекты.',
  },
  {
    q: 'Какая гарантия на построенный дом?',
    a: 'Мы предоставляем гарантию от 3 до 5 лет на конструктив дома и от 1 года на отделочные работы. Всё фиксируется в договоре.',
  },
  {
    q: 'В каких районах вы строите?',
    a: 'Мы работаем по всей Ростовской области: Ростов-на-Дону, Батайск, Аксай, Новочеркасск и другие населённые пункты.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-muted-foreground text-lg">
            Ответы на популярные вопросы наших клиентов
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}