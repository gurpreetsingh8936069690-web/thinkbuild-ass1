import React from 'react';
import { WhatsAppIcon } from './BrandIcons';

export default function WhatsAppFloatingButton() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
      <a
        href="https://chat.whatsapp.com/Kw2YbntkWMqG66MVI9xSJq?mode=ac_t"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join The Consistent Academy WhatsApp Community"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <WhatsAppIcon className="w-5 h-5 text-white" />
        <span className="hidden sm:inline-block">WhatsApp Community</span>
        
        {/* Tooltip for small screens */}
        <span className="sr-only">Join The Consistent Academy on WhatsApp</span>
      </a>
    </aside>
  );
}
