async function handler(m, { conn, orgs, participants, groupMetadata }) {
  let group = m.chat;
  let totalMembers = participants.length;
  let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group);
  conn.reply(m.chat, `*⚡🌩️──『 𝑳𝑰𝑵𝑲  』──🌩️⚡*

📛 *Grupo:* ${groupMetadata.subject}
👥 *Estudiantes:* ${totalMembers}

🔗 *Enlace Mágico:*
${link}

🐭 ¡Enlace NO APTO PARA MUGGLES! ⚡`,  m, { detectLink: true });
}

handler.help = ['link'];
handler.tags = ['grupo'];
handler.command = ['link', 'enlace'];
handler.group = true;

export default handler;
