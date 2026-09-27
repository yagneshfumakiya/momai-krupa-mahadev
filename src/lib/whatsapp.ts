/**
 * Generates a pre-filled WhatsApp click-to-chat URL
 * @param phone Phone number without + symbol (e.g. "918141306110")
 * @param service Optional service name to include in enquiry
 * @param userDetails Optional details from form
 */
export function getWhatsAppLink(
  phone: string = '918141306110',
  service?: string,
  name?: string,
  city?: string,
  date?: string,
  message?: string
): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const formattedPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;

  let text = `॥ Shree Ganeshay Namah ॥\n\nNamaste Dhaval Maharaj,\n\nI would like to enquire about your Vedic & Sanatan Seva services.`;

  if (service) {
    text += `\n\n📌 Service requested: *${service}*`;
  }
  if (name) {
    text += `\n👤 Name: ${name}`;
  }
  if (city) {
    text += `\n📍 Location/City: ${city}`;
  }
  if (date) {
    text += `\n📅 Preferred Date: ${date}`;
  }
  if (message) {
    text += `\n💬 Ceremony Details: ${message}`;
  }

  text += `\n\nPlease share details and guidance for the vidhi. Thank you!`;

  return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(text)}`;
}

export const PRIMARY_PHONE = '8141306110';
export const SECONDARY_PHONE = '8200206189';
export const PRIMARY_WHATSAPP_LINK = getWhatsAppLink('918141306110');
export const SECONDARY_WHATSAPP_LINK = getWhatsAppLink('918200206189');
