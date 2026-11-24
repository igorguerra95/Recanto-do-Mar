import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
import {
  ABOUT_CONTENT,
  ACADEMIC_CREDENTIALS,
  CLINIC_INFO,
  RECOVERY_TESTIMONIALS,
  TESTIMONIALS_HEADER,
} from '../data/clinicData';
import { SafeImage } from './SafeImage';

interface AboutAndProofSectionProps {
  onContactClick: () => void;
}

export const AboutAndProofSection: React.FC<AboutAndProofSectionProps> = ({
  onContactClick,
}) => {
  return (
    <section
      id="sobre"
      className="py-20 sm:py-28 bg-surface border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Bloco 1: Formação Acadêmica e Conduta Clínica */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <figure className="overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-clinical">
              <div className="aspect-[4/3] overflow-hidden">
                <SafeImage
                  src={ABOUT_CONTENT.image}
                  alt={ABOUT_CONTENT.imageAlt}
                  fallbackTitle="Atendimento Fisioterapêutico Especializado"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="p-5 sm:p-6 border-t border-border space-y-1.5">
                <p className="text-sm font-semibold text-foreground">
                  {CLINIC_INFO.brandName}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Endereço: {CLINIC_INFO.address} · Telefone:{' '}
                  <span className="tabular-nums">{CLINIC_INFO.phoneDisplay}</span>
                </p>
              </figcaption>
            </figure>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <p className="text-xs sm:text-sm font-medium text-primary">
              {ABOUT_CONTENT.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.08] text-foreground">
              {ABOUT_CONTENT.title}
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground">
              {ABOUT_CONTENT.lead}
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground-secondary">
              {ABOUT_CONTENT.body}
            </p>

            {/* Credenciais acadêmicas com divisórias hairline limpas */}
            <div className="mt-10 border-t border-border">
              {ACADEMIC_CREDENTIALS.map((credential) => (
                <div
                  key={credential.id}
                  className="py-5 border-b border-border grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start"
                >
                  <div className="sm:col-span-4 flex items-center gap-2 text-xs font-semibold text-primary">
                    <GraduationCap
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 stroke-[1.75]"
                    />
                    <span>{credential.year}</span>
                  </div>
                  <div className="sm:col-span-8">
                    <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">
                      {credential.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      {credential.institution}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      {credential.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bloco 2: Depoimentos de Recuperação (Prova Clínica Adjacente) */}
        <div
          id="depoimentos"
          aria-label="Depoimentos de recuperação"
          className="mt-20 sm:mt-24 pt-16 sm:pt-20 border-t border-border"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          >
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-medium text-primary">
                {TESTIMONIALS_HEADER.kicker}
              </p>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] leading-[1.12] text-foreground">
                {TESTIMONIALS_HEADER.title}
              </h3>
            </div>

            <p className="max-w-md text-sm sm:text-base leading-relaxed text-foreground-secondary">
              {TESTIMONIALS_HEADER.subtitle}
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {RECOVERY_TESTIMONIALS.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: 'easeOut',
                }}
                className="flex flex-col justify-between rounded-2xl border border-border bg-surface-elevated p-6 sm:p-7 shadow-clinical transition-all duration-200 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
                    <span className="text-primary">{item.specialtyUsed}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.timeframe}</span>
                  </div>

                  <p className="mt-4 text-xs font-medium text-muted-foreground">
                    Quadro inicial: {item.beforeCondition}
                  </p>

                  <blockquote className="mt-3 text-sm sm:text-base leading-relaxed text-foreground">
                    “{item.quote}”
                  </blockquote>
                </div>

                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-xs font-semibold text-primary">
                    Desfecho funcional
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {item.outcome}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border/70">
                    <p className="text-sm font-semibold text-foreground">
                      {item.patientName}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.patientContext}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex justify-start">
            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm sm:text-base font-medium text-primary-foreground shadow-clinical whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-primary-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
            >
              <span>{CLINIC_INFO.primaryCtaLabel}</span>
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 stroke-[1.75]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
