//© código creado por Deylin
//https://github.com/Deylin-eliac
//➤  no quites creditos

import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

async function obtenerPais(numero) {
  try {
    let number = numero.replace("@s.whatsapp.net", "");
    const res = await fetch(`https://g-mini-ia.vercel.app/api/infonumero?numero=${number}`);
    const data = await res.json();

    if (data && data.pais) return data.pais;
    if (data && data.bandera && data.nombre) return `${data.bandera} ${data.nombre}`;

    return "🌐 Desconocido";
  } catch (e) {
    return "🌐 Desconocido";
  }
}

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return;
//  if (m.chat === "120363402481697721@g.us") return;

  const who = m.messageStubParameters?.[0];
  if (!who) return;

  const taguser = `@${who.split("@")[0]}`;
  const chat = global.db?.data?.chats?.[m.chat] || {};
  const totalMembers = participants.length;
  const date = new Date().toLocaleString("es-ES", { timeZone: "America/Mexico_City" });

  const pais = await obtenerPais(who);
  let ppUser = 'https://qu.ax/jnHyG.jpg';

  try {
    ppUser = await conn.profilePictureUrl(who, 'image');
  } catch (e) {}

  const frasesBienvenida = [
    "¡Bienvenid@ a Hogwarts!.",
    "¡Un estudiante llegado al grupo!",
    "Una aventura magica te espera ⚡",
    "¡Esperamos que la pases increible!",
    "Que empiece la aventura en Hogwarts!"
  ];
  const frasesDespedida = [
    "Sabiamos que eras muggle.",
    "Otro estudiante deja Hogwarts... ¡Buena suerte!",
    "¡Hasta la próxima, no olvides tu varita!",
    "El grupo se queda con menos muggles",
    "Avada Kedavra 🪄🥺"
  ];

  const fraseRandomBienvenida = frasesBienvenida[Math.floor(Math.random() * frasesBienvenida.length)];
  const fraseRandomDespedida = frasesDespedida[Math.floor(Math.random() * frasesDespedida.length)];

  if (chat.welcome) {
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      const bienvenida = `
*⚡─『 𝑩𝑰𝑬𝑵𝑽𝑬𝑵𝑰𝑫𝑶/𝑨 』─🧃*
👤 *Usuario:* ${taguser}
🌍 *País:* ${pais}
💬 *Grupo:* *${groupMetadata.subject}*
👥 *Miembros:* *${totalMembers + 1}*
📅 *Fecha:* *${date}*
⚡ *Mensaje:* ${fraseRandomBienvenida}`.trim();

      await conn.sendMessage(m.chat, {
        image: { url: ppUser },
        caption: bienvenida,
        mentions: [who]
      });
    }

    if (
      m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE ||
      m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE
    ) {
      const despedida = `
*⚡──『 𝑫𝑬𝑺𝑷𝑬𝑫𝑰𝑫𝑨 』──🧃*
👤 *Usuario:* ${taguser}
🌍 *País:* ${pais}
💬 *Grupo:* *${groupMetadata.subject}*
👥 *Miembros:* *${totalMembers - 1}*
📅 *Fecha:* *${date}*
⚡ *Mensaje:* ${fraseRandomDespedida}`.trim();

      await conn.sendMessage(m.chat, {
        image: { url: ppUser },
        caption: despedida,
        mentions: [who]
      });
    }
  }
}
