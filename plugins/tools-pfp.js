let handler = async (m, { conn }) => {
  try {
    const who = m.quoted?.sender || m.mentionedJid?.[0] || (m.fromMe ? conn.user.jid : m.sender);
    const name = await conn.getName(who);
    const pp = await conn.profilePictureUrl(who, 'image').catch(() => catalogo,);

    const userNumber = who.split('@')[0];
    const isBot = who.endsWith('g.us') || who.startsWith('status@') ? '❌' : who.includes(':') ? '❌' : '✅';
    const tag = `@${userNumber}`;

    const info = `
┏━━『 👤 *Perfil de Usuario* 』━━
┃🌐 *Nombre:* ${name}
┃🏷️ *Tag:* ${tag}
┃🖼️ *Foto de perfil...*
┗━━━━━━━━━━━━━━━━━━━
`.trim();

    await conn.sendFile(m.chat, pp, 'profile.jpg', info, m, false, { mentions: [who] });
  } catch (err) {
    console.error(err);
    await conn.reply(m.chat, '❌ No se pudo obtener la información del usuario.', m);
  }
};

handler.help = ['pfp @usuario'];
handler.tags = ['tools', 'info'];
handler.command = ['pfp', 'getpic', 'fotoperfil', 'perfil', 'verperfil'];
handler.register = true

export default handler;