import fetch from 'node-fetch';

var handler = async (m, { conn, args }) => {
    if (!args[0]) {
        return conn.reply(m.chat, `Por favor, envía un enlace de TikTok para obtener la miniatura.`, m, fake);
    }

    try {
        await conn.reply(m.chat, `Obteniendo la miniatura del video...`, m, fake);

        const tiktokData = await tiktokdl(args[0]);

        if (!tiktokData || !tiktokData.thumbnail) {
            return conn.reply(m.chat, "No se pudo obtener la miniatura del video.", m, fake);
        }

        const thumbnailURL = tiktokData.thumbnail;
        const { title, author } = tiktokData;

        const info = `
📄 *Título:* ${title || 'No disponible'}
👤 *Autor:* ${author || 'Desconocido'}
🖼️ *Miniatura del video:*
`.trim();

        await conn.sendFile(m.chat, thumbnailURL, 'thumbnail.jpg', info, m);
    } catch (error1) {
        console.error(error1);
        return conn.reply(m.chat, `Ocurrió un error al obtener la miniatura: ${error1.message}`, m, fake);
    }
};

handler.help = ['tiktokimg'].map(v => v + ' <link>');
handler.tags = ['descargas'];
handler.command = ['tiktokimg', 'ttimg', 'ttthumbnail'];
handler.register = true;
handler.group = true;

export default handler;

async function tiktokdl(url) {
    let api = `https://g-mini-ia.vercel.app/api/tiktok?url=${encodeURIComponent(url)}`;
    let res = await fetch(api);
    if (!res.ok) throw new Error(`Respuesta inválida de la API`);
    let json = await res.json();
    return json;
}