import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'О компании', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://media.base44.com/images/public/69b958ccec4c782c15841246/f9a0344a4_logo-c.png"
                alt="Южный Дом"
                className="w-10 h-10 object-contain brightness-0 invert"
              />
              <span className="font-bold text-lg text-background">Южный Дом</span>
            </div>
            <p className="text-sm leading-relaxed text-background/60">
              Надёжный застройщик частных домов в Ростове-на-Дону. Строим дома мечты с 2012 года.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Навигация</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+78001234567" className="hover:text-background transition-colors">
                  8 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@domstroy61.ru" className="hover:text-background transition-colors">
                  info@domstroy61.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>г. Ростов-на-Дону, ул. Пушкинская д.16</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Соцсети</h4>
            <a
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              ВКонтакте
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Южный Дом. Все права защищены.
          </p>
          <p className="text-xs text-background/40">
            ИНН 1234567890 | ОГРН 1234567890123
          </p>
        </div>
      </div>
    </footer>
  );
}