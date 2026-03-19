import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
  { icon: Phone, label: 'Телефон', value: '8 (928) 761-96-61', href: 'tel:+79287619661' },
  { icon: Mail, label: 'Email', value: 'domyujniy@yandex.ru', href: 'mailto:domyujniy@yandex.ru' },
  { icon: MapPin, label: 'Адрес', value: 'г. Ростов-на-Дону, ул. Пушкинская д.16' },
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
      <svg viewBox="0 0 100 100" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="maxGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4FC3F7"/>
            <stop offset="50%" stopColor="#7C4DFF"/>
            <stop offset="100%" stopColor="#CE93D8"/>
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="22" fill="url(#maxGrad)"/>
        <path d="M50 18C32.3 18 18 32.3 18 50c0 5.8 1.6 11.2 4.4 15.8L18 82l16.8-4.3C39.2 80.4 44.4 82 50 82c17.7 0 32-14.3 32-32S67.7 18 50 18zm0 8c13.3 0 24 10.7 24 24S63.3 74 50 74c-4.7 0-9.1-1.3-12.8-3.7l-1-.6-9.9 2.5 2.6-9.6-.7-1C26.4 58.7 26 54.4 26 50c0-13.3 10.7-24 24-24z" fill="white"/>
        <circle cx="50" cy="50" r="10" fill="url(#maxGrad)"/>
      </svg>
    ),
  },
];

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">Контакты</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Оставьте заявку и мы перезвоним вам в течение 15 минут
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Форма */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl border border-border p-8 shadow-sm"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground">Оставить заявку</h3>
              <p className="text-muted-foreground text-sm mt-1">Мы свяжемся с вами в удобное время</p>
            </div>
            <ContactForm source="contacts" />
          </motion.div>

          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Карточки контактов */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="bg-card rounded-2xl border border-border p-5 flex gap-4 items-start hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="font-semibold text-foreground hover:text-primary transition-colors text-sm leading-tight break-all">
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground text-sm leading-tight">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Соцсети */}
            <div className="bg-card rounded-2xl border border-border p-5">
              <p className="text-sm font-semibold text-foreground mb-4">Мы в соцсетях</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Карта */}
            <div className="rounded-2xl overflow-hidden border border-border flex-1 min-h-[180px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=39.702005%2C47.222133&z=17&pt=39.702005%2C47.222133,pm2rdm&text=%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+16%2C+%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 180 }}
                loading="lazy"
                title="Яндекс Карта"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}