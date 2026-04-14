import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, phone, message, source } = await req.json();

    const apiKey = Deno.env.get('RESEND_API_KEY');

    const body = `
<h2>Новая заявка с сайта!</h2>
<p><b>Имя:</b> ${name}</p>
<p><b>Телефон:</b> ${phone}</p>
<p><b>Источник:</b> ${source || '—'}</p>
${message ? `<p><b>Сообщение:</b><br>${message}</p>` : ''}
    `.trim();

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'yayloyanalexandr@gmail.com',
        subject: `Новая заявка с сайта — ${source || 'форма'}`,
        html: body,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return Response.json({ error: result }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});