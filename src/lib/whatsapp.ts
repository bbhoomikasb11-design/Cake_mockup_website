import { siteConfig } from '@/content/site';

export interface OrderFormDetails {
  name: string;
  occasion?: string;
  eventDate: string;
  weight?: string;
  flavour?: string;
  themeIdea?: string;
  cakeMessage?: string;
  deliveryOption?: string;
  deliveryArea?: string;
  notes?: string;
  cakeReference?: string;
}

/**
 * Builds the structured WhatsApp order message matching the client's booking format
 */
export function buildOrderWhatsAppMessage(details: OrderFormDetails): string {
  const lines: string[] = [
    "Hi Cream On Top! I'd like to place a cake order 🎂",
    `Name: ${details.name || 'Not provided'}`,
    `Occasion: ${details.occasion || 'Special Celebration'}`,
    `Date needed: ${details.eventDate || 'To be discussed'}`,
    `Desired weight: ${details.weight || 'Standard'}`,
    `Preferred flavour: ${details.flavour || 'Not sure yet'}`,
    `Cake idea / theme: ${details.themeIdea || details.cakeReference || 'Custom design'}`,
    `Writing / Name on cake: ${details.cakeMessage || 'None'}`,
    `Delivery/Pickup: ${details.deliveryOption || 'Pickup'}${details.deliveryArea ? ` (${details.deliveryArea})` : ''}`,
    `Notes: ${details.notes || 'None'}`,
    "",
    "(Sent from the website)",
  ];

  return lines.join('\n');
}

/**
 * Generates the WhatsApp URL with mobile deep-link handling
 */
export function getWhatsAppOrderUrl(messageText: string): string {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(messageText);
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}

/**
 * Fallback quick WhatsApp link
 */
export function getWhatsAppLink(itemTitle?: string, customNote?: string): string {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  let text = siteConfig.defaultWhatsappMessage;
  
  if (itemTitle) {
    text = `Hi Neha! I would love to order the "${itemTitle}" cake from Cream On Top. Please share availability and pricing for an upcoming date.`;
  }
  
  if (customNote) {
    text += ` Note: ${customNote}`;
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}
