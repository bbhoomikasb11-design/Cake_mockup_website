import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, Send, Sparkles, CheckCircle2, MessageCircle, Mail, Clock } from 'lucide-react';
import { useOrder } from '@/context/OrderContext';
import { menuFlavours, occasionOptions, weightOptions } from '@/content/menu';
import { siteConfig } from '@/content/site';
import { buildOrderWhatsAppMessage, getWhatsAppOrderUrl, OrderFormDetails } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { WaxSeal } from '@/components/common/WaxSeal';

export const OrderDrawer: React.FC = () => {
  const { isOpen, initialData, closeOrder } = useOrder();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Form State
  const [name, setName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [occasion, setOccasion] = useState('Birthday');
  const [weight, setWeight] = useState<number>(1);
  const [flavour, setFlavour] = useState('Chocolate Truffle');
  const [themeIdea, setThemeIdea] = useState('');
  const [cakeMessage, setCakeMessage] = useState('');
  const [deliveryOption, setDeliveryOption] = useState<'Pickup' | 'Delivery'>('Pickup');
  const [deliveryArea, setDeliveryArea] = useState('');
  const [notes, setNotes] = useState('');

  // UI State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isShortNotice, setIsShortNotice] = useState(false);

  // Populate initial data when opened
  useEffect(() => {
    if (isOpen) {
      if (initialData.cakeName) {
        setThemeIdea(`Design reference: ${initialData.cakeName}`);
      }
      if (initialData.flavour) {
        setFlavour(initialData.flavour);
      }
      setIsSubmitted(false);
    }
  }, [isOpen, initialData]);

  // Check 7-day advance notice requirement
  useEffect(() => {
    if (!eventDate) {
      setIsShortNotice(false);
      return;
    }
    const selected = new Date(eventDate);
    const today = new Date();
    const diffTime = selected.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setIsShortNotice(diffDays < 7 && diffDays >= 0);
  }, [eventDate]);

  // Keyboard accessibility: Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeOrder();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeOrder]);

  // Indicative Price Calculation
  const selectedFlavourObj = menuFlavours.find(
    (f) => f.name.toLowerCase() === flavour.toLowerCase()
  );
  const indicativePrice = selectedFlavourObj && weight
    ? selectedFlavourObj.pricePerKg * weight
    : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !eventDate) return;

    const orderDetails: OrderFormDetails = {
      name,
      occasion,
      eventDate,
      weight: `${weight} kg`,
      flavour,
      themeIdea,
      cakeMessage,
      deliveryOption,
      deliveryArea: deliveryOption === 'Delivery' ? deliveryArea : undefined,
      notes,
      cakeReference: initialData.cakeName,
    };

    const whatsappMessage = buildOrderWhatsAppMessage(orderDetails);
    const whatsappUrl = getWhatsAppOrderUrl(whatsappMessage);

    trackEvent('whatsapp_order_sent', {
      cake_name: initialData.cakeName || 'custom',
      flavour,
      weight,
      occasion,
      is_short_notice: isShortNotice,
    });

    // Open WhatsApp in new tab / app
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Transition to confirmation screen
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeOrder}
          className="absolute inset-0 bg-espresso/80 backdrop-blur-md"
        />

        {/* Slide-over Container */}
        <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="w-screen max-w-xl bg-cocoa text-cream shadow-2xl overflow-y-auto flex flex-col justify-between p-6 sm:p-10 border-l border-bronze/30"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-sand/20 pb-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-blush font-semibold">
                  BESPOKE ORDER INQUIRY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-cream font-medium">
                  {isSubmitted ? 'Almost There!' : 'Design Your Cake'}
                </h2>
              </div>

              <button
                onClick={closeOrder}
                className="w-10 h-10 rounded-full border border-sand/30 bg-espresso/40 flex items-center justify-center text-cream hover:bg-bronze hover:border-bronze transition-colors"
                aria-label="Close order panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="py-6 space-y-6">
                
                {/* Pre-fill Reference Notice if opened from a specific cake */}
                {initialData.cakeName && (
                  <div className="bg-espresso/70 p-4 rounded-2xl border border-bronze/40 flex items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono uppercase text-blush tracking-wider">
                        SELECTED INSPIRATION:
                      </span>
                      <p className="font-serif text-lg text-cream">{initialData.cakeName}</p>
                    </div>
                    <Sparkles className="w-5 h-5 text-bronze flex-shrink-0" />
                  </div>
                )}

                {/* 1. Name & Event Date (Required) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-sans tracking-wide text-sand font-medium">
                      Your Name <span className="text-rose">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-espresso/60 border border-sand/30 rounded-xl px-4 py-2.5 text-xs text-cream focus:outline-none focus:border-bronze transition-colors placeholder:text-sand/30 font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-sans tracking-wide text-sand font-medium">
                      Celebration Date <span className="text-rose">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full bg-espresso/60 border border-sand/30 rounded-xl px-4 py-2.5 text-xs text-cream focus:outline-none focus:border-bronze transition-colors font-sans"
                      />
                    </div>
                  </div>
                </div>

                {/* Short Notice 7-day Alert */}
                {isShortNotice && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 bg-burgundy/40 border border-rose/40 rounded-xl flex items-start gap-3 text-xs text-sand font-sans"
                  >
                    <AlertTriangle className="w-4 h-4 text-rose flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      We recommend ordering at least a week in advance. Send it anyway and we'll do our best to accommodate!
                    </p>
                  </motion.div>
                )}

                {/* 2. Occasion Chips */}
                <div className="space-y-2">
                  <label className="text-xs font-sans tracking-wide text-sand font-medium">
                    Event Occasion
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {occasionOptions.map((occ) => (
                      <button
                        type="button"
                        key={occ}
                        onClick={() => setOccasion(occ)}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-sans transition-all ${
                          occasion === occ
                            ? 'bg-bronze text-cream font-medium shadow-sm'
                            : 'bg-espresso/50 text-sand/80 border border-sand/20 hover:border-sand/60'
                        }`}
                      >
                        {occ}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Preferred Weight */}
                <div className="space-y-2">
                  <label className="text-xs font-sans tracking-wide text-sand font-medium">
                    Desired Weight
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {weightOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt.label}
                        onClick={() => setWeight(opt.value)}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-sans transition-all ${
                          weight === opt.value
                            ? 'bg-bronze text-cream font-medium shadow-sm'
                            : 'bg-espresso/50 text-sand/80 border border-sand/20 hover:border-sand/60'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Flavour Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-sans tracking-wide text-sand font-medium">
                    Preferred Gateaux Flavour
                  </label>
                  <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto pr-1">
                    {menuFlavours.map((flv) => (
                      <button
                        type="button"
                        key={flv.name}
                        onClick={() => setFlavour(flv.name)}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-sans transition-all ${
                          flavour === flv.name
                            ? 'bg-bronze text-cream font-medium shadow-sm'
                            : 'bg-espresso/50 text-sand/80 border border-sand/20 hover:border-sand/60'
                        }`}
                      >
                        <span>{flv.name}</span>
                        <span className="opacity-70 ml-1 text-[9px] font-mono">₹{flv.pricePerKg}/kg</span>
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setFlavour('Not sure yet')}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-sans transition-all ${
                        flavour === 'Not sure yet'
                          ? 'bg-bronze text-cream font-medium'
                          : 'bg-espresso/50 text-sand/80 border border-sand/20'
                      }`}
                    >
                      Not sure yet
                    </button>
                  </div>
                </div>

                {/* Indicative Estimate Card */}
                {indicativePrice && (
                  <div className="bg-espresso/80 p-4 rounded-2xl border border-bronze/40 space-y-1">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10px] font-mono uppercase text-blush tracking-wider">
                        INDICATIVE CAKE BASE:
                      </span>
                      <span className="font-serif text-xl text-cream font-semibold">
                        ₹{indicativePrice}
                      </span>
                    </div>
                    <p className="text-[10px] font-sans text-sand/70 leading-normal">
                      Based on base rate ₹{selectedFlavourObj?.pricePerKg}/kg × {weight} kg. Custom design, flowers, and packing charges are confirmed on WhatsApp.
                    </p>
                  </div>
                )}

                {/* 5. Theme / Message / Delivery */}
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-sans tracking-wide text-sand font-medium">
                      Theme or Design Vision
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Pastel floral tier, Fairytale theme, Minimal gold accents..."
                      value={themeIdea}
                      onChange={(e) => setThemeIdea(e.target.value)}
                      className="w-full bg-espresso/60 border border-sand/30 rounded-xl px-4 py-2.5 text-xs text-cream focus:outline-none focus:border-bronze transition-colors placeholder:text-sand/30 font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-sans tracking-wide text-sand font-medium">
                      Message on Cake
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Happy 1st Birthday Aadhya"
                      value={cakeMessage}
                      onChange={(e) => setCakeMessage(e.target.value)}
                      className="w-full bg-espresso/60 border border-sand/30 rounded-xl px-4 py-2.5 text-xs text-cream focus:outline-none focus:border-bronze transition-colors placeholder:text-sand/30 font-sans"
                    />
                  </div>

                  {/* Delivery / Pickup Radio & Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans tracking-wide text-sand font-medium">
                        Pickup or Delivery
                      </label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setDeliveryOption('Pickup')}
                          className={`flex-1 py-2 rounded-xl text-xs font-sans transition-all ${
                            deliveryOption === 'Pickup'
                              ? 'bg-bronze text-cream font-medium'
                              : 'bg-espresso/50 text-sand/80 border border-sand/20'
                          }`}
                        >
                          Studio Pickup
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeliveryOption('Delivery')}
                          className={`flex-1 py-2 rounded-xl text-xs font-sans transition-all ${
                            deliveryOption === 'Delivery'
                              ? 'bg-bronze text-cream font-medium'
                              : 'bg-espresso/50 text-sand/80 border border-sand/20'
                          }`}
                        >
                          Delivery (Bangalore)
                        </button>
                      </div>
                    </div>

                    {deliveryOption === 'Delivery' && (
                      <div className="space-y-1.5">
                        <label className="text-xs font-sans tracking-wide text-sand font-medium">
                          Delivery Area
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Indiranagar, Whitefield..."
                          value={deliveryArea}
                          onChange={(e) => setDeliveryArea(e.target.value)}
                          className="w-full bg-espresso/60 border border-sand/30 rounded-xl px-4 py-2 text-xs text-cream focus:outline-none focus:border-bronze transition-colors placeholder:text-sand/30 font-sans"
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-sans tracking-wide text-sand font-medium">
                      Special Notes / Dietary Preferences
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Eggless preference, less sweetness, specific color palette..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-espresso/60 border border-sand/30 rounded-xl px-4 py-2 text-xs text-cream focus:outline-none focus:border-bronze transition-colors placeholder:text-sand/30 font-sans resize-none"
                    />
                  </div>
                </div>

                {/* Primary WhatsApp Action */}
                <div className="pt-4 border-t border-sand/20">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-bronze text-cream hover:bg-mocha transition-all duration-300 font-sans text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2.5 shadow-lg hover:shadow-glow-bronze active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </button>
                </div>

              </form>
            ) : (
              /* Post-Submission Confirmation Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 space-y-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-bronze/20 border border-bronze mx-auto flex items-center justify-center text-bronze">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-3xl text-cream font-medium">
                    Order Details Sent!
                  </h3>
                  <p className="font-sans text-xs text-sand/90 leading-relaxed max-w-sm mx-auto">
                    <strong>Almost there!</strong> Attach your reference pictures in the WhatsApp chat. Once you receive your pricing, complete the payment and share the screenshot to confirm your order.
                  </p>
                </div>

                {/* Next Steps Card */}
                <div className="bg-espresso/80 p-6 rounded-2xl border border-sand/20 text-left space-y-3 max-w-md mx-auto">
                  <div className="flex items-center gap-2 text-xs font-sans text-sand font-semibold">
                    <Clock className="w-4 h-4 text-bronze" />
                    <span>How Your Order is Confirmed:</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-1.5 text-xs font-sans text-sand/80 leading-relaxed">
                    <li>Share reference photos in the chat.</li>
                    <li>Neha confirms availability and provides the final quote.</li>
                    <li>Complete payment and share the screenshot to lock in your date.</li>
                  </ol>
                </div>

                {/* Secondary Fallback Actions */}
                <div className="pt-6 border-t border-sand/20 space-y-3 max-w-sm mx-auto">
                  <a
                    href={siteConfig.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-full border border-sand/30 bg-espresso/50 hover:bg-bronze hover:border-bronze text-cream text-xs font-sans uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Prefer to chat? Message us on WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="w-full py-2.5 px-4 rounded-full border border-sand/20 hover:border-sand/60 text-sand/80 text-xs font-sans uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email us at {siteConfig.email}</span>
                  </a>
                </div>

                <div className="pt-4 flex justify-center">
                  <WaxSeal size="md" />
                </div>
              </motion.div>
            )}

            {/* Footer */}
            <div className="pt-4 border-t border-sand/20 text-center text-[10px] font-sans text-sand/50">
              Cream On Top by Neha Gupta • Bengaluru
            </div>

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
