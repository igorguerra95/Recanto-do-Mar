import type { ReactNode } from 'react';

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export type SpecialtyCategory =
  | 'todas'
  | 'postura'
  | 'movimento'
  | 'terapia-manual';

export interface ClinicalMetric {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  detail: string;
}

export interface SpecialtyItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: Exclude<SpecialtyCategory, 'todas'>;
  categoryLabel: string;
  duration: string;
  modality: string;
  summary: string;
  indications: string[];
  protocol: string;
  image?: string;
  imageAlt?: string;
  featuredSpan?: boolean;
}

export interface AcademicCredential {
  id: string;
  year: string;
  title: string;
  institution: string;
  focus: string;
}

export interface RecoveryTestimonial {
  id: string;
  patientName: string;
  patientContext: string;
  specialtyUsed: string;
  timeframe: string;
  beforeCondition: string;
  quote: string;
  outcome: string;
}

export interface BookingPayload {
  name: string;
  phone: string;
  email: string;
  specialty: string;
  preferredDate: string;
  shift: 'Manhã' | 'Tarde' | 'A combinar';
  notes: string;
}
