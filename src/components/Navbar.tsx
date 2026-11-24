import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { CLINIC_INFO, NAV_LINKS } from '../data/clinicData';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isDrawerOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDrawerOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDrawerOpen]);

  const handleNavNavigate = (href: string) => {
    setIsDrawerOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-md border-border'
            : 'bg-background/80 backdrop-blur-sm border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-16">
          {/* Zona 1: Wordmark em linha única sem subtítulos ou emblemas */}
          <a
            href="#inicio"
            className="font-display text-base sm:text-lg font-semibold tracking-tight text-foreground whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            {CLINIC_INFO.brandName}
          </a>

          {/* Zona 2: Links de navegação concisos em linha única */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground-secondary"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zona 3: Ação principal única no desktop + acionador do drawer no mobile */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onContactClick}
              className="hidden md:inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
            >
              <span>{CLINIC_INFO.primaryCtaLabel}</span>
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 stroke-[1.75]" />
            </button>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={isDrawerOpen}
              aria-controls="mobile-navigation-drawer"
              className="inline-flex md:hidden items-center justify-center min-h-[44px] min-w-[44px] rounded-lg border border-border bg-surface-elevated text-foreground transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
            >
              <Menu aria-hidden="true" className="h-5 w-5 stroke-[1.75]" />
            </button>
          </div>
        </div>
      </header>

      {/* Sheet / Drawer Mobile */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-foreground/30 backdrop-blur-xs"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-surface-elevated border-l border-border shadow-elevated flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <span className="font-display text-base font-semibold tracking-tight text-foreground">
                    {CLINIC_INFO.brandName}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsDrawerOpen(false)}
                    aria-label="Fechar menu de navegação"
                    className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg border border-border text-foreground-secondary hover:text-foreground hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                  >
                    <X aria-hidden="true" className="h-5 w-5 stroke-[1.75]" />
                  </button>
                </div>

                <nav
                  aria-label="Links do menu móvel"
                  className="mt-6 flex flex-col gap-1"
                >
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavNavigate(link.href);
                      }}
                      className="flex items-center justify-between min-h-[44px] rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-surface transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 text-muted-foreground stroke-[1.5]"
                      />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-border space-y-4">
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>{CLINIC_INFO.address}</p>
                  <p className="tabular-nums">{CLINIC_INFO.phoneDisplay}</p>
                  <p>Horário: {CLINIC_INFO.hours}</p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onContactClick();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                >
                  <span>{CLINIC_INFO.primaryCtaLabel}</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 stroke-[1.75]" />
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
