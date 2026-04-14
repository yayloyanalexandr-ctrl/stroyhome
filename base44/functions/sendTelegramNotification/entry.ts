import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, phone, message, source } = await req.json();

    const subject = `Новая заявка с сайта — ${source || 'форма'}`;
    const body = `
Новая заявка с сайта!

Имя: ${name}
Телефон: ${phone}
Источник: ${source || '—'}
${message ? `\nСообщение:\n${message}` : ''}
    `.trim();

    await base44.integrations.Core.SendEmail({
      to: 'Igrickog@yandex.ru',
      subject,
      body,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});