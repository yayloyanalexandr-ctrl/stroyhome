import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
  { icon: MapPin, label: 'Адрес', value: 'г. Ростов-на-Дону, ул. Пушкинская д.16' },
  { icon: Phone, label: 'Телефон', value: '8 (928) 761-96-61', href: 'tel:+79287619661' },
  { icon: Mail, label: 'Email', value: 'domyujniy@yandex.ru', href: 'mailto:domyujniy@yandex.ru' },
  { icon: Clock, label: 'Режим работы', value: 'Ежедневно с 10:00 до 19:00' },
];

const socials = [
  {
    label: 'ВКонтакте',
    href: 'https://vk.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C5.077 11.6 4.49 9.985 4.49 9.56c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V11.6c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.483-.085.728-.61.728z"/>
      </svg>
    ),
  },
  {
    label: 'Телеграм',
    href: 'https://t.me/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    label: 'MAX',
    href: 'https://max.ru/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.15 14.924l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.666.662z"/>
      </svg>
    ),
  },
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
          <div className="lg:col-span-3 bg-background rounded-2xl border border-border p-5 sm:p-8">
            <h3 className="text-xl font-bold text-foreground mb-2">Оставить заявку</h3>
            <p className="text-muted-foreground text-sm mb-6">Заполните форму — мы свяжемся с вами в удобное время</p>
            <ContactForm source="contacts" />
          </div>

          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex gap-4 items-start"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{info.label}</p>
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
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
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