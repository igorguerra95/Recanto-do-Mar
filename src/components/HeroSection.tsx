import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO, CLINICAL_METRICS, HERO_CONTENT } from '../data/clinicData';
import { AnimatedCounter } from './AnimatedCounter';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  onContactClick: () => void;
}

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-coastal-canvas pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 border-b border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 clinical-grain"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Split Assimétrico 12 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-between py-2"
          >
            <div>
              {/* Kicker clínico sem cápsulas ou pontos pulsantes */}
              <motion.p
                variants={heroItemVariants}
                className="text-xs sm:text-sm font-medium text-primary tracking-wide"
              >
                {HERO_CONTENT.kicker}
              </motion.p>

              {/* Headline display 48–84px com tracking negativo */}
              <motion.h1
                variants={heroItemVariants}
                className="mt-5 font-display font-semibold text-foreground tracking-[-0.035em] leading-[0.98] text-[clamp(2.85rem,5.2vw,5.25rem)]"
              >
                {HERO_CONTENT.headline}
              </motion.h1>

              <motion.p
                variants={heroItemVariants}
                className="mt-7 max-w-2xl text-base sm:text-lg leading-[1.65] text-foreground-secondary"
              >
                {HERO_CONTENT.subheadline}
              </motion.p>
            </div>

            <motion.div
              variants={heroItemVariants}
              className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-primary px-6 py-3.5 text-sm sm:text-base font-medium text-primary-foreground shadow-clinical whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-primary-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
              >
                <span>{CLINIC_INFO.primaryCtaLabel}</span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 stroke-[1.75]" />
              </button>

              <a
                href="#especialidades"
                className="inline-flex items-center gap-2 py-2.5 text-sm sm:text-base font-medium text-foreground-secondary whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
              >
                <span>Conhecer especialidades</span>
                <ArrowDownRight aria-hidden="true" className="h-4 w-4 stroke-[1.5]" />
              </a>
            </motion.div>
          </motion.div>

          {/* Coluna Direita: Fotografia Clínica Estruturada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <figure className="relative w-full overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-elevated min-h-[360px] sm:min-h-[440px] lg:min-h-[540px]">
              <SafeImage
                src={HERO_CONTENT.image}
                alt={HERO_CONTENT.imageAlt}
                loading="eager"
                fallbackTitle="Consultório de Fisioterapia e Reabilitação"
                className="h-full w-full object-cover"
              />

              {/* Scrim de contraste medido para legenda legível */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-foreground/80 via-foreground/35 to-transparent"
              />

              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-primary-foreground">
                <p className="text-xs font-medium tracking-wide text-primary-foreground/85">
                  Massoterapia Recanto do Mar · Atendimento Individual
                </p>
                <p className="mt-1.5 text-sm sm:text-base font-medium leading-snug text-primary-foreground">
                  {HERO_CONTENT.imageCaption}
                </p>
              </figcaption>
            </figure>
          </motion.div>
        </div>

        {/* Faixa de Métricas Clínicas em 4 Colunas (abaixo do split hero) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-border bg-surface-elevated shadow-clinical divide-y sm:divide-y-0 sm:divide-x divide-border overflow-hidden"
        >
          {CLINICAL_METRICS.map((metric) => (
            <div key={metric.id} className="p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <p className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground tabular-nums">
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {metric.label}
                </p>
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {metric.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
