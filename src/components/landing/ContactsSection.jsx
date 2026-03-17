import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
  { icon: MapPin, label: 'Адрес', value: 'г. Ростов-на-Дону, ул. Пушкинская д.16' },
  { icon: Phone, label: 'Телефон', value: '8 (800) 123-45-67', href: 'tel:+78001234567' },
  { icon: Mail, label: 'Email', value: 'info@domstroy61.ru', href: 'mailto:info@domstroy61.ru' },
  { icon: Clock, label: 'Режим работы', value: 'Пн-Пт: 9:00 — 18:00, Сб: 10:00 — 15:00' },
];

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">Контакты</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Оставьте заявку и мы перезвоним вам в течение 15 минут
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 bg-background rounded-2xl border border-border p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Оставить заявку</h3>
            <ContactForm source="contacts" />
          </div>

          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="font-medium text-foreground hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="pt-4 border-t border-border">
              <p className="text-sm font-semibold text-foreground mb-3">Мы в соцсетях</p>
              <div className="flex gap-3">
                <a
                  href="https://vk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border h-48 lg:h-56">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=39.6%2C47.2%2C39.8%2C47.3&layer=mapnik&marker=47.235714%2C39.701505"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Карта"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}