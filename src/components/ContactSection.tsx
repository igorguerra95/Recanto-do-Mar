import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import {
  CLINIC_INFO,
  SHIFT_OPTIONS,
  SPECIALTIES,
} from '../data/clinicData';
import type { BookingPayload } from '../types';

interface ContactSectionProps {
  selectedSpecialty: string;
}

const SPECIALTY_CHOICES = [
  'Avaliação Fisioterapêutica Inicial',
  ...SPECIALTIES.map((s) => s.shortTitle),
];

function formatBrazilPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedSpecialty,
}) => {
  const todayIso = new Date().toISOString().split('T')[0];

  const [form, setForm] = useState<BookingPayload>({
    name: '',
    phone: '',
    email: '',
    specialty: selectedSpecialty || SPECIALTY_CHOICES[0],
    preferredDate: '',
    shift: 'Manhã',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingPayload, string>>>({});
  const [submittedData, setSubmittedData] = useState<BookingPayload | null>(null);

  useEffect(() => {
    if (selectedSpecialty) {
      setForm((prev) => ({ ...prev, specialty: selectedSpecialty }));
      setSubmittedData(null);
    }
  }, [selectedSpecialty]);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof BookingPayload, string>> = {};

    if (form.name.trim().length < 3) {
      nextErrors.name = 'Informe seu nome completo.';
    }

    const phoneDigits = form.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      nextErrors.phone = 'Informe um telefone ou WhatsApp válido com DDD.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      nextErrors.email = 'Informe um endereço de e-mail válido.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmittedData(form);
  };

  const buildWhatsAppLink = (payload?: BookingPayload) => {
    const text = payload
      ? `Olá, gostaria de entrar em contato para agendar na Massoterapia Recanto do Mar.\n\nNome: ${payload.name}\nEspecialidade: ${payload.specialty}\nTurno preferencial: ${payload.shift}${payload.preferredDate ? `\nData sugerida: ${payload.preferredDate}` : ''}${payload.notes ? `\nObservações: ${payload.notes}` : ''}`
      : 'Olá, gostaria de entrar em contato para agendar um atendimento na Massoterapia Recanto do Mar.';
    return `https://wa.me/${CLINIC_INFO.phoneDigits}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="contato"
      className="py-20 sm:py-28 bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Coluna Esquerda: Dados Institucionais e Fluxo de Atendimento */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <p className="text-xs sm:text-sm font-medium text-primary">
                Agendamento Online · Atendimento Direto
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.08] text-foreground">
                Solicite sua avaliação clínica.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground-secondary">
                Preencha o formulário ao lado com a especialidade desejada e sua disponibilidade de turno, ou utilize o contato direto via WhatsApp.
              </p>
            </div>

            {/* Informações oficiais de contato */}
            <div className="rounded-2xl border border-border bg-surface-elevated p-6 shadow-clinical divide-y divide-border">
              <div className="pb-4 flex items-start gap-3.5">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary stroke-[1.75]"
                />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">
                    Endereço da clínica
                  </p>
                  <p className="mt-1 text-sm sm:text-base font-medium text-foreground">
                    {CLINIC_INFO.address}
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-start gap-3.5">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary stroke-[1.75]"
                />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">
                    Telefone e WhatsApp
                  </p>
                  <a
                    href={`tel:${CLINIC_INFO.phoneDigits}`}
                    className="mt-1 inline-block text-sm sm:text-base font-medium text-foreground tabular-nums hover:text-primary transition-colors"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="pt-4 flex items-start gap-3.5">
                <Clock
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary stroke-[1.75]"
                />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">
                    Horário de funcionamento
                  </p>
                  <p className="mt-1 text-sm sm:text-base font-medium text-foreground">
                    {CLINIC_INFO.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Etapas do agendamento */}
            <div className="space-y-3 border-t border-border pt-6">
              <p className="text-xs font-semibold text-foreground">
                Como funciona o retorno de agenda
              </p>
              <ol className="space-y-2 text-sm text-foreground-secondary">
                <li>01. Envio da especialidade e turno de preferência.</li>
                <li>02. Confirmação direta do horário disponível pelo WhatsApp ou e-mail.</li>
                <li>03. Primeira consulta com avaliação postural e plano terapêutico.</li>
              </ol>
            </div>
          </motion.div>

          {/* Coluna Direita: Formulário de Agendamento Online */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-border bg-surface-elevated p-6 sm:p-8 lg:p-10 shadow-elevated">
              {submittedData ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="space-y-6 py-4"
                >
                  <div className="inline-flex items-center gap-2 rounded-lg bg-success-surface px-3.5 py-2 text-xs sm:text-sm font-medium text-success">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0" />
                    <span>Solicitação de agendamento registrada</span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                      Recebemos seus dados, {submittedData.name.split(' ')[0]}.
                    </h3>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground-secondary">
                      Confira o resumo da sua solicitação abaixo. Para agilizar a confirmação imediata do horário, você também pode encaminhar estes dados diretamente pelo WhatsApp.
                    </p>
                  </div>

                  <dl className="rounded-xl border border-border bg-surface p-5 space-y-3 text-sm">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                      <dt className="text-muted-foreground">Especialidade</dt>
                      <dd className="font-medium text-foreground">
                        {submittedData.specialty}
                      </dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pt-3 border-t border-border">
                      <dt className="text-muted-foreground">Turno preferencial</dt>
                      <dd className="font-medium text-foreground">
                        {submittedData.shift}
                        {submittedData.preferredDate
                          ? ` · ${submittedData.preferredDate}`
                          : ''}
                      </dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pt-3 border-t border-border">
                      <dt className="text-muted-foreground">Contato</dt>
                      <dd className="font-medium text-foreground tabular-nums">
                        {submittedData.phone} · {submittedData.email}
                      </dd>
                    </div>
                  </dl>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={buildWhatsAppLink(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm sm:text-base font-medium text-primary-foreground shadow-clinical whitespace-nowrap shrink-0 transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <MessageCircle aria-hidden="true" className="h-4 w-4 stroke-[1.75]" />
                      <span>Confirmar pelo WhatsApp</span>
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4 stroke-[1.75]" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="rounded-lg border border-border-strong px-5 py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors cursor-pointer"
                    >
                      Editar solicitação
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                      Agendamento Online
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Selecione a especialidade e informe seus dados para retorno.
                    </p>
                  </div>

                  {/* Seleção rápida de especialidade */}
                  <div>
                    <label
                      htmlFor="booking-specialty"
                      className="block text-xs font-semibold text-foreground mb-2"
                    >
                      Especialidade pretendida
                    </label>
                    <select
                      id="booking-specialty"
                      value={form.specialty}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, specialty: e.target.value }))
                      }
                      className="w-full rounded-lg border border-border-strong bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
                    >
                      {SPECIALTY_CHOICES.map((choice) => (
                        <option key={choice} value={choice}>
                          {choice}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Nome e Telefone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="booking-name"
                        className="block text-xs font-semibold text-foreground mb-2"
                      >
                        Nome completo
                      </label>
                      <input
                        id="booking-name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Seu nome completo"
                        value={form.name}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, name: e.target.value }));
                          if (errors.name) {
                            setErrors((prev) => ({ ...prev, name: undefined }));
                          }
                        }}
                        aria-invalid={Boolean(errors.name)}
                        className="w-full rounded-lg border border-border-strong bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
                      />
                      {errors.name && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-danger">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="booking-phone"
                        className="block text-xs font-semibold text-foreground mb-2"
                      >
                        Telefone / WhatsApp
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="(00) 00000-0000"
                        value={form.phone}
                        onChange={(e) => {
                          const formatted = formatBrazilPhone(e.target.value);
                          setForm((prev) => ({ ...prev, phone: formatted }));
                          if (errors.phone) {
                            setErrors((prev) => ({ ...prev, phone: undefined }));
                          }
                        }}
                        aria-invalid={Boolean(errors.phone)}
                        className="w-full rounded-lg border border-border-strong bg-background px-3.5 py-2.5 text-sm text-foreground tabular-nums placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
                      />
                      {errors.phone && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-danger">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* E-mail e Data Sugerida */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="booking-email"
                        className="block text-xs font-semibold text-foreground mb-2"
                      >
                        E-mail
                      </label>
                      <input
                        id="booking-email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="seuemail@exemplo.com.br"
                        value={form.email}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, email: e.target.value }));
                          if (errors.email) {
                            setErrors((prev) => ({ ...prev, email: undefined }));
                          }
                        }}
                        aria-invalid={Boolean(errors.email)}
                        className="w-full rounded-lg border border-border-strong bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
                      />
                      {errors.email && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-danger">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="booking-date"
                        className="block text-xs font-semibold text-foreground mb-2"
                      >
                        Data sugerida (opcional)
                      </label>
                      <div className="relative">
                        <Calendar
                          aria-hidden="true"
                          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                        />
                        <input
                          id="booking-date"
                          type="date"
                          min={todayIso}
                          value={form.preferredDate}
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              preferredDate: e.target.value,
                            }))
                          }
                          className="w-full rounded-lg border border-border-strong bg-background pl-9 pr-3.5 py-2.5 text-sm text-foreground tabular-nums focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Turno Preferencial (Segmented Control) */}
                  <div>
                    <span className="block text-xs font-semibold text-foreground mb-2">
                      Turno preferencial
                    </span>
                    <div
                      role="group"
                      aria-label="Seleção de turno preferencial"
                      className="grid grid-cols-3 gap-2 rounded-xl border border-border bg-surface p-1"
                    >
                      {SHIFT_OPTIONS.map((shift) => {
                        const active = form.shift === shift;
                        return (
                          <button
                            key={shift}
                            type="button"
                            onClick={() =>
                              setForm((prev) => ({ ...prev, shift }))
                            }
                            className={`rounded-lg py-2 px-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer ${
                              active
                                ? 'bg-surface-elevated text-foreground shadow-clinical'
                                : 'text-foreground-secondary hover:text-foreground'
                            }`}
                          >
                            {shift}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Observações clínicas */}
                  <div>
                    <label
                      htmlFor="booking-notes"
                      className="block text-xs font-semibold text-foreground mb-2"
                    >
                      Breve relato ou objetivo (opcional)
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={3}
                      placeholder="Ex.: dor lombar há 3 meses, pós-operatório de joelho, melhora postural..."
                      value={form.notes}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, notes: e.target.value }))
                      }
                      className="w-full rounded-lg border border-border-strong bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm sm:text-base font-medium text-primary-foreground shadow-clinical whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
                    >
                      <span>{CLINIC_INFO.primaryCtaLabel}</span>
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4 stroke-[1.75]" />
                    </button>

                    <a
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-foreground-secondary hover:text-primary transition-colors whitespace-nowrap"
                    >
                      <MessageCircle aria-hidden="true" className="h-4 w-4 stroke-[1.75]" />
                      <span>Atendimento direto no WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
