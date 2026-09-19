import { siteConfig } from '@/content/site';

/**
 * Formats a WhatsApp link with a prefilled message for Neha's WhatsApp (+91 9743008816)
 */
export function getWhatsAppLink(itemTitle?: string, customNote?: string): string {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  
  let text = siteConfig.defaultWhatsappMessage;
  
  if (itemTitle) {
    text = `Hi Neha! I would love to order the "${itemTitle}" cake from Cream On Top. Please share details and availability for an upcoming date.`;
  }
  
  if (customNote) {
    text += ` Note: ${customNote}`;
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}
