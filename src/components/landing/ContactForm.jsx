import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function ContactForm({ source = 'contacts' }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.ContactRequest.create({
      ...form,
      source,
    });
    setLoading(false);
    setSuccess(true);
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setSuccess(false), 4000);
  };

  if (success) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
        <p className="text-lg font-semibold text-foreground">Заявка отправлена!</p>
        <p className="text-muted-foreground mt-1">Мы свяжемся с вами в ближайшее время</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Ваше имя *</Label>
          <Input
            id="name"
            placeholder="Иван Иванов"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Телефон *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+7 (900) 123-45-67"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Сообщение <span className="text-muted-foreground font-normal">(необязательно для заполнения)</span></Label>
        <Textarea
          id="message"
          placeholder="Расскажите о вашем проекте..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="h-28"
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 h-12">
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Отправить заявку
          </>
        )}
      </Button>
    </form>
  );
}