import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'О компании', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const handleClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const themeBtn = (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-lg transition-colors text-white/70 hover:text-white hover:bg-white/10"
      title={dark ? 'Светлая тема' : 'Тёмная тема'}
    >
      {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg shadow-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/assets/logo-c.png"
              alt="Южный Дом"
              className="w-10 h-10 object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
            <span className="font-bold text-lg tracking-tight text-white">
              Южный Дом
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors text-white/70 hover:text-white hover:bg-white/10"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+79287619661"
              className="flex items-center gap-2 text-sm font-semibold text-white"
            >
              <Phone className="w-4 h-4" />
              8 (928) 761-96-61
            </a>
            {themeBtn}
            <Button onClick={() => handleClick('#contacts')} size="sm" className="bg-primary hover:bg-primary/90">
              Оставить заявку
            </Button>
          </div>

          {/* Mobile right */}
          <div className="flex items-center gap-1 lg:hidden">
            {themeBtn}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-white"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-white/10">
                <Button onClick={() => handleClick('#contacts')} className="w-full bg-primary">
                  Оставить заявку
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}