import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, MessageCircle, Youtube, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { navItems, footerKeywords } from '@/content/menu';
import { WaxSeal } from '@/components/common/WaxSeal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sand/30 border-t border-sand/60 text-espresso pt-16 pb-12 relative overflow-hidden">
      {/* Background subtle watermark */}
      <div className="absolute right-10 bottom-10 opacity-5 pointer-events-none font-serif text-[180px] leading-none select-none">
        COT
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-mocha/10">
          
          {/* Brand info */}
          <div className="md:col-span-4 space-y-4">
            <NavLink to="/" className="inline-block group">
              <span className="font-serif text-2xl md:text-3xl tracking-wide text-espresso font-medium block">
                Cream On Top
              </span>
              <span className="text-[10px] font-sans tracking-widest-custom uppercase text-mocha/70 font-semibold block">
                BY NEHA GUPTA
              </span>
            </NavLink>
            <p className="font-script text-mocha text-2xl pt-2">
              {siteConfig.scriptTagline}
            </p>
            <div className="space-y-2 text-xs font-sans text-mocha/80 pt-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-bronze" />
                <span>{siteConfig.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-bronze" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-bronze transition-colors">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-[11px] font-sans tracking-widest-custom uppercase text-mocha font-semibold">
              EXPLORE
            </h5>
            <ul className="space-y-2 text-xs font-sans">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className="text-mocha/80 hover:text-bronze transition-colors tracking-wider inline-block"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bronze font-semibold hover:underline tracking-wider inline-block"
                >
                  Order Custom Cake
                </a>
              </li>
            </ul>
          </div>

          {/* Keywords vertical column */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-[11px] font-sans tracking-widest-custom uppercase text-mocha font-semibold">
              OUR ESSENCE
            </h5>
            <ul className="space-y-1.5 text-[10px] font-sans tracking-widest text-mocha/70 uppercase">
              {footerKeywords.map((kw, i) => (
                <li key={i}>{kw}</li>
              ))}
            </ul>
          </div>

          {/* Socials & Wax Seal */}
          <div className="md:col-span-2 flex flex-col items-start md:items-end justify-between space-y-6">
            <WaxSeal size="md" />
            
            <div className="flex items-center space-x-4 text-mocha">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-mocha/20 flex items-center justify-center hover:bg-bronze hover:text-cream hover:border-bronze transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full border border-mocha/20 flex items-center justify-center hover:bg-bronze hover:text-cream hover:border-bronze transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-mocha/20 flex items-center justify-center hover:bg-bronze hover:text-cream hover:border-bronze transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-mocha/60 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} Cream On Top by Neha Gupta. All rights reserved.</p>
          <p className="font-mono text-[10px]">Crafted with love in Bengaluru</p>
        </div>
      </div>
    </footer>
  );
};
