import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const { name, phone, message, source } = await req.json();

    const base44 = createClientFromRequest(req);

    // Сохраняем заявку в базу через service role
    try {
      await base44.asServiceRole.entities.ContactRequest.create({
        name,
        phone,
        message: message || '',
        source: source?.startsWith('consultation') ? 'consultation' : (source || 'contacts'),
        status: 'new',
      });
    } catch (dbErr) {
      console.log('DB save error (non-critical):', dbErr.message);
    }

    const token = Deno.env.get('VK_TOKEN');
    const peerId = Deno.env.get('VK_PEER_ID');

    const text = `🏠 Новая заявка с сайта!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📍 Источник: ${source || '—'}${message ? `\n💬 Сообщение: ${message}` : ''}`;

    const randomId = Math.floor(Math.random() * 1000000);

    const params = new URLSearchParams({
      peer_id: peerId,
      message: text,
      random_id: randomId.toString(),
      access_token: token,
      v: '5.131',
    });

    const response = await fetch(`https://api.vk.com/method/messages.send?${params.toString()}`);
    const result = await response.json();

    console.log('VK response:', JSON.stringify(result));

    if (result.error) {
      console.log('VK error:', JSON.stringify(result.error));
      return Response.json({ error: result.error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});