import React from 'react';
import { CLINIC_INFO, NAV_LINKS } from '../data/clinicData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-border">
          <div className="md:col-span-5 space-y-3">
            <p className="font-display text-lg font-semibold tracking-tight text-foreground">
              {CLINIC_INFO.brandName}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Fisioterapia clínica especializada em Reeducação Postural Global, Pilates terapêutico, reabilitação ortopédica e massoterapia de precisão.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-foreground">Navegação</p>
            <ul className="space-y-2 text-sm text-foreground-secondary">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2.5 text-sm text-foreground-secondary">
            <p className="text-xs font-semibold text-foreground">
              Informações da Clínica
            </p>
            <p>Endereço: {CLINIC_INFO.address}</p>
            <p className="tabular-nums">Telefone: {CLINIC_INFO.phoneDisplay}</p>
            <p>Horário: {CLINIC_INFO.hours}</p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {currentYear} {CLINIC_INFO.brandName}. Todos os direitos reservados.
          </p>
          <p>Fisioterapia Clínica e Reabilitação Corporal</p>
        </div>
      </div>
    </footer>
  );
};
