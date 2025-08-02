import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) {
  return m.reply(`⚠️🐭 *¡Pika Pika! Contenido Bloqueado*\n\n🔞 El contenido *NSFW* está *desactivado* en este grupo.\n\n🧠 Un *administrador* puede activar el modo travieso con:\n👉 *${usedPrefix}nsfw on*\n\n⚡¡Pikachu solo obedece si el líder lo permite!`);
}
  try {
    const res = await fetch('https://g-mini-ia.vercel.app/api/nsfw');
    const json = await res.json();

    if (!json || !json.url) {
      return conn.reply(m.chat, '⚠️ No se encontró contenido NSFW por ahora.', m);
    }

    const image = json.url;
    const title = json.type;

    await conn.sendFile(m.chat, image, 'nsfw.jpg', `🔞 Tipo: *${title}*`, m);
  } catch (e) {
    console.error(e);
    conn.reply(m.chat, '❌ Hubo un error al obtener el contenido NSFW.', m);
  }
};

handler.command = ['nsfw2'];
handler.tags = ['nsfw'];
handler.help = ['nsfw2'];
handler.register = true

export default handler;