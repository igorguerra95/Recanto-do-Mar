import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import {
  CLINIC_INFO,
  SPECIALTIES,
  SPECIALTY_CATEGORIES,
} from '../data/clinicData';
import type { SpecialtyCategory } from '../types';
import { SafeImage } from './SafeImage';

interface SpecialtiesSectionProps {
  onSelectSpecialty: (specialtyTitle: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialty,
}) => {
  const [activeCategory, setActiveCategory] =
    useState<SpecialtyCategory>('todas');

  const filteredSpecialties =
    activeCategory === 'todas'
      ? SPECIALTIES
      : SPECIALTIES.filter((item) => item.category === activeCategory);

  return (
    <section
      id="especialidades"
      className="py-20 sm:py-28 bg-background border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção + Controles Interativos de Filtro */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-medium text-primary">
              Especialidades Clínicas · Reabilitação Integrada
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.08] text-foreground">
              Intervenções fisioterapêuticas estruturadas para cada fase da recuperação.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base leading-relaxed text-foreground-secondary">
              Do alinhamento postural profundo ao fortalecimento clínico sem sobrecarga, cada conduta respeita a biomecânica e o limiar de dor do paciente.
            </p>
          </div>
        </motion.div>

        {/* Controles segmentados interativos */}
        <div
          role="tablist"
          aria-label="Filtrar especialidades por área clínica"
          className="mt-10 inline-flex flex-wrap items-center gap-1.5 rounded-xl border border-border bg-surface p-1.5"
        >
          {SPECIALTY_CATEGORIES.map((category) => {
            const isSelected = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer ${
                  isSelected
                    ? 'bg-surface-elevated text-foreground shadow-clinical'
                    : 'text-foreground-secondary hover:text-foreground'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Grid Bento Assimétrico de 12 Colunas */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7">
          {filteredSpecialties.map((item) => {
            const spanClass =
              activeCategory === 'todas' && item.featuredSpan
                ? 'lg:col-span-7'
                : activeCategory === 'todas'
                  ? 'lg:col-span-5'
                  : 'lg:col-span-6';

            return (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`${spanClass} group flex flex-col justify-between rounded-2xl border border-border bg-surface-elevated p-6 sm:p-8 shadow-clinical transition-all duration-200 hover:-translate-y-1 hover:shadow-elevated`}
              >
                <div>
                  {item.image && (
                    <div className="mb-6 overflow-hidden rounded-xl border border-border aspect-[4/3] bg-surface">
                      <SafeImage
                        src={item.image}
                        alt={item.imageAlt ?? item.title}
                        fallbackTitle={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                  )}

                  {/* Metadados sem caixas/pílulas, com separador tipográfico */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
                    <span className="text-primary">{item.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{item.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.modality}</span>
                  </div>

                  <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                    {item.number}. {item.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground-secondary">
                    {item.summary}
                  </p>

                  {/* Indicações clínicas com divisória hairline */}
                  <div className="mt-6 pt-5 border-t border-border">
                    <p className="text-xs font-semibold text-foreground">
                      Principais indicações clínicas
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {item.indications.map((indication) => (
                        <li
                          key={indication}
                          className="flex items-start gap-2.5 text-sm text-foreground-secondary"
                        >
                          <Check
                            aria-hidden="true"
                            className="mt-0.5 h-4 w-4 shrink-0 text-primary stroke-[2]"
                          />
                          <span>{indication}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs leading-relaxed text-muted-foreground max-w-md">
                    {item.protocol}
                  </p>

                  <button
                    type="button"
                    onClick={() => onSelectSpecialty(item.shortTitle)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-4 py-2.5 text-sm font-medium text-foreground whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                  >
                    <span>{CLINIC_INFO.primaryCtaLabel}</span>
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4 stroke-[1.75]" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
