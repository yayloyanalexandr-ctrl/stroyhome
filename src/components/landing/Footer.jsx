import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const navLinks = [
{ label: 'О компании', href: '#about' },
{ label: 'Услуги', href: '#services' },
{ label: 'Проекты', href: '#projects' },
{ label: 'Отзывы', href: '#reviews' },
{ label: 'FAQ', href: '#faq' },
{ label: 'Контакты', href: '#contacts' }];


export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://media.base44.com/images/public/69b958ccec4c782c15841246/f9a0344a4_logo-c.png"
                alt="Южный Дом"
                className="w-10 h-10 object-contain"
                style={{ mixBlendMode: 'screen' }} />
              
              <span className="font-bold text-lg text-white">Южный Дом</span>
            </div>
            <p className="text-sm leading-relaxed text-white/50">Надёжный застройщик частных домов в Ростове-на-Дону. Строим дома мечты с 2015 года.

            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Навигация</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) =>
              <li key={link.href}>
                  <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-white/50 hover:text-white transition-colors">
                  
                    {link.label}
                  </button>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+79287619661" className="hover:text-white transition-colors">
                  8 (928) 761-96-61
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:domyujniy@yandex.ru" className="hover:text-white transition-colors">
                  domyujniy@yandex.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>г. Ростов-на-Дону, ул. Пушкинская д.16</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Соцсети</h4>
            <div className="space-y-2.5">
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
                ВКонтакте
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Телеграм
              </a>
              <a href="https://max.ru/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.15 14.924l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.666.662z"/></svg>
                MAX
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Южный Дом. Все права защищены.
          </p>
          <p className="text-xs text-white/30">
            ИНН 1234567890 | ОГРН 1234567890123
          </p>
        </div>
      </div>
    </footer>);

}