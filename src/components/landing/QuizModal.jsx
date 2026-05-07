import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, CheckCircle2, Home, Layers, MapPin, Wallet, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { appParams } from '@/lib/app-params';

const FUNC_URL = `${appParams.appBaseUrl}/functions/sendTelegramNotification`;

const steps = [
  {
    id: 'type',
    question: 'Какой дом вы планируете построить?',
    icon: Home,
    options: ['Небольшой дом от 60м² до 80м²', 'Дом от 80м² до 90м²', 'От 90м² до 110м²', 'Более 110м²'],
  },
  {
    id: 'payment',
    question: 'Какой вид расчёта вы планируете?',
    icon: Wallet,
    options: ['Наличный расчёт', 'Ипотека'],
  },
  {
    id: 'location',
    question: 'Где планируете строить?',
    icon: MapPin,
    options: ['Ростов-на-Дону', 'Пригород Ростова', 'Другой город области', 'Нужна помощь в подборе участка'],
  },
];

export default function QuizModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [contact, setContact] = useState({ name: '', phone: '' });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('quiz_shown')) return;
    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem('quiz_shown', '1');
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    setDismissed(true);
  };

  const selectOption = (option) => {
    const currentStep = steps[step];
    setAnswers((prev) => ({ ...prev, [currentStep.id]: option }));
    if (step < steps.length - 1) {
      setStep((s) => s + 1);
    } else {
      setStep(steps.length); // go to contact form
    }
  };

  const handleSubmit = async () => {
    if (!contact.name || !contact.phone) return;
    setLoading(true);
    const summaryLines = steps.map((s) => `${s.question}: ${answers[s.id] || '—'}`).join('\n');
    const message = `Результаты квиза:\n${summaryLines}`;
    await fetch(FUNC_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: contact.name,
        phone: contact.phone,
        message,
        source: 'consultation (квиз)',
      }),
    });
    setLoading(false);
    setDone(true);
  };

  const progress = Math.round((step / steps.length) * 100);
  const currentStepData = steps[step];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="relative bg-primary px-6 pt-6 pb-8">
              <button
                onClick={close}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <p className="text-white/80 text-xs font-semibold uppercase tracking-wide mb-1">
                Бесплатная консультация
              </p>
              <h2 className="text-white text-xl font-bold">
                Подберём идеальный проект для вас
              </h2>
              {!done && (
                <div className="mt-4">
                  <div className="flex justify-between text-white/70 text-xs mb-1">
                    <span>Прогресс</span>
                    <span>{step < steps.length ? `${step + 1} из ${steps.length}` : 'Финал'}</span>
                  </div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white rounded-full"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="px-6 py-6">
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Заявка отправлена!</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Наш менеджер свяжется с вами в ближайшее время и подберёт лучшее предложение
                    </p>
                    <Button onClick={close} className="bg-primary hover:bg-primary/90 w-full">
                      Закрыть
                    </Button>
                  </motion.div>
                ) : step < steps.length ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <currentStepData.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{currentStepData.question}</h3>
                    </div>
                    <div className="space-y-2">
                      {currentStepData.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => selectOption(opt)}
                          className="w-full text-left px-4 py-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 text-foreground text-sm font-medium transition-all group flex items-center justify-between"
                        >
                          {opt}
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">Менеджер свяжется с вами</h3>
                    </div>
                    <div className="space-y-3 mb-5">
                      <Input
                        placeholder="Ваше имя"
                        value={contact.name}
                        onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))}
                      />
                      <Input
                        placeholder="Телефон"
                        type="tel"
                        value={contact.phone}
                        onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))}
                      />
                    </div>
                    <Button
                      onClick={handleSubmit}
                      disabled={!contact.name || !contact.phone || loading}
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      {loading ? 'Отправляем...' : 'Отправить заявку'}
                    </Button>
                    <p className="text-center text-muted-foreground text-xs mt-3">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}