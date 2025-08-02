//Hola Deylin, lo Modifique un poco,
//estaba re masiado lento.
//Attm: Angel


import axios from 'axios';

const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
  if (usedPrefix.toLowerCase() === 'a') return;

  const customEmoji = global.db?.data?.chats?.[m.chat]?.customEmoji || '🧃';
  m.react(customEmoji);

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    return;
  }

  const mensaje = args.join` `;
  const info = mensaje ? `╰➤ ✉️ *Mensaje:* ${mensaje}` : "╰➤ ⚠️ *Invocación general*";

  let texto = `

╭══ LLAMADO A TODOS ══⬣
│  🧃 Total: ${participants.length}
│  ⚡ Grupo: ${await conn.getName(m.chat)}
${info}
╰═══⬣\n`;

  for (const miembro of participants) {
    const number = miembro.id.split('@')[0];
    let flag = "🌐";
    try {
      const res = await axios.get(`https://g-mini-ia.vercel.app/api/infonumero?numero=${number}`);
      flag = res.data.bandera || "🌐";
    } catch (e) {
      console.log(`❌ Error obteniendo bandera de ${number}:`, e);
    }
    texto += `┃ ${flag} @${number}\n`;
  }

  texto += `╰══⬣\n✨ *Harry Botter* ⚔️`;

  conn.sendMessage(m.chat, {
    text: texto.trim(),
    mentions: participants.map(p => p.id)
  }, { quoted: m });
};

handler.help = ['todos <mensaje>'];
handler.tags = ['grupo'];
handler.command = ['tagall', 'todos'];
handler.register = true
handler.admin = true;
handler.group = true;

export default handler;
