import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, Loader2, CheckCircle, User, Phone, MessageSquare } from 'lucide-react';
import { appParams } from '@/lib/app-params';
const FUNC_URL = `${appParams.appBaseUrl}/functions/sendTelegramNotification`;

export default function ContactForm({ source = 'contacts' }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch(FUNC_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, source }),
    });
    setLoading(false);
    setSuccess(true);
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setSuccess(false), 4000);
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <p className="text-lg font-semibold text-foreground">Заявка отправлена!</p>
        <p className="text-muted-foreground mt-1 text-sm">Мы свяжемся с вами в ближайшее время</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <Input
          placeholder="Ваше имя *"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="pl-10 h-12"
        />
      </div>
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <Input
          type="tel"
          placeholder="Телефон *"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
          className="pl-10 h-12"
        />
      </div>
      <div className="relative">
        <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
        <Textarea
          placeholder="Сообщение (необязательно)..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="pl-10 h-28 resize-none"
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-semibold">
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Отправить заявку
          </>
        )}
      </Button>
    </form>
  );
}