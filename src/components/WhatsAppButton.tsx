import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const WhatsAppButton: React.FC = () => {
  const defaultMessage = encodeURIComponent(
    'Olá, gostaria de entrar em contato para agendar uma avaliação na Massoterapia Recanto do Mar.'
  );
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneDigits}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-5 right-5 z-30 group flex items-center gap-3">
      <span
        aria-hidden="true"
        className="hidden sm:inline-block rounded-lg border border-border bg-surface-elevated px-3 py-1.5 text-xs font-medium text-foreground shadow-clinical opacity-0 translate-x-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
      >
        WhatsApp · {CLINIC_INFO.phoneDisplay}
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Entrar em contato via WhatsApp pelo número ${CLINIC_INFO.phoneDisplay}`}
        className="relative inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated transition-transform duration-200 hover:scale-105 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {/* Pulse discreto solicitado para o botão WhatsApp */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-ocean/50 animate-ping [animation-duration:2.8s]"
        />
        <MessageCircle aria-hidden="true" className="relative h-6 w-6 stroke-[1.75]" />
      </a>
    </div>
  );
};
