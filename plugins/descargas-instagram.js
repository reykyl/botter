import { igdl } from 'ruhend-scraper';

const handler = async (m, { args, conn }) => {
  if (!args[0]) {
    return conn.reply(m.chat, `${emojis} Necesitas enviar un enlace de *Instagram*.`, m, fake);
  }

  try {
    await m.react(rwait);
    const res = await igdl(args[0]);
    const data = res.data;

    if (!data || data.length === 0) {
      await m.react(error);
      return conn.reply(m.chat, `${emojis} No encontró ningún archivo... prueba con otro link.`, m, fake);
    }

    for (let media of data) {
      await conn.sendFile(
        m.chat,
        media.url,
        'instagram.mp4',
        `
⚡─────『 *Resultado* 』─────⚡

📷 *Instagram Downloader*
🔗 *Link:* ${args[0]}

─────────────────────────
`.trim(),
        m
      );
    }

    await m.react(done);
  } catch (e) {
    await m.react(error);
    return conn.reply(m.chat, `${emojis} ocurrió un error.`, m, fake);
  }
};

handler.command = ['instagram', 'ig'];
handler.tags = ['descargas'];
handler.help = ['instagram', 'ig'];
handler.register = true
handler.group = true;

export default handler;