import heroClinicImg from '../assets/images/hero_recanto_mar_1795528002699.jpg';
import rpgPosturaImg from '../assets/images/especialidade_rpg_postura_1795528002565.jpg';
import pilatesClinicoImg from '../assets/images/especialidade_pilates_clinico_1795528003806.jpg';
import terapiaManualImg from '../assets/images/sobre_fisioterapia_clinica_1795528004077.jpg';
import type {
  AcademicCredential,
  ClinicalMetric,
  RecoveryTestimonial,
  SpecialtyCategory,
  SpecialtyItem,
} from '../types';

export const CLINIC_INFO = {
  brandName: 'Massoterapia Recanto do Mar',
  address: 'SEU ENDEREÇO AQUI',
  phoneDisplay: '(00) 00000-0000',
  phoneDigits: '5500000000000',
  hours: 'Não informado',
  primaryCtaLabel: 'Entrar em contato',
} as const;

export const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
] as const;

export const HERO_CONTENT = {
  kicker: 'Fisioterapia Clínica · Reabilitação Funcional · Massoterapia Terapêutica',
  headline: 'Precisão clínica para restaurar movimento, postura e alívio duradouro.',
  subheadline:
    'Na Massoterapia Recanto do Mar, cada plano terapêutico nasce de avaliação biomecânica rigorosa — integrando Reeducação Postural Global, Pilates clínico e terapia manual em ambiente silencioso e regenerativo.',
  image: heroClinicImg,
  imageAlt:
    'Sala de atendimento fisioterapêutico da Massoterapia Recanto do Mar com maca ergonômica, luz natural costeira e tons em branco gelo e azul oceano',
  imageCaption:
    'Ambiente clínico projetado para descompressão neuro-ortopédica e atendimento individualizado.',
} as const;

export const CLINICAL_METRICS: ClinicalMetric[] = [
  {
    id: 'experience',
    value: 12,
    suffix: ' anos',
    label: 'Prática clínica continuada',
    detail: 'Atuação focada em coluna, ortopedia e reabilitação funcional.',
  },
  {
    id: 'sessions',
    value: 3400,
    suffix: '+',
    label: 'Atendimentos realizados',
    detail: 'Sessões individuais conduzidas sem delegação ou rodízio de equipe.',
  },
  {
    id: 'adherence',
    value: 94,
    suffix: '%',
    label: 'Evolução funcional documentada',
    detail: 'Pacientes com redução mensurável de dor em até 8 semanas.',
  },
  {
    id: 'session-time',
    value: 50,
    suffix: ' min',
    label: 'Duração por consulta',
    detail: 'Tempo integral dedicado à escuta, palpação e progressão motora.',
  },
];

export const SPECIALTY_CATEGORIES: {
  id: SpecialtyCategory;
  label: string;
}[] = [
  { id: 'todas', label: 'Todas as especialidades' },
  { id: 'postura', label: 'Postura e Coluna' },
  { id: 'movimento', label: 'Movimento e Força' },
  { id: 'terapia-manual', label: 'Terapia Manual' },
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: 'rpg',
    number: '01',
    title: 'RPG — Reeducação Postural Global',
    shortTitle: 'RPG (Reeducação Postural Global)',
    category: 'postura',
    categoryLabel: 'Postura e Coluna',
    duration: '50 minutos',
    modality: 'Atendimento individual',
    summary:
      'Correção progressiva das cadeias musculares encurtadas por meio de posturas sustentadas, respiração diafragmática e tração axial manual.',
    indications: [
      'Hérnias e protusões discais lombares ou cervicais',
      'Escoliose, hipercifose e desalinhamento escapular',
      'Cervicalgias tensionais associadas ao trabalho prolongado',
    ],
    protocol:
      'Mapeamento estático-dinâmico na primeira sessão seguido de progressão postural semanal sem sobrecarga articular.',
    image: rpgPosturaImg,
    imageAlt:
      'Fisioterapeuta avaliando alinhamento postural da coluna vertebral em sessão de Reeducação Postural Global',
    featuredSpan: true,
  },
  {
    id: 'pilates-clinico',
    number: '02',
    title: 'Pilates Clínico Individualizado',
    shortTitle: 'Pilates Clínico',
    category: 'movimento',
    categoryLabel: 'Movimento e Força',
    duration: '50 minutos',
    modality: 'Estúdio equipado',
    summary:
      'Reabilitação ativa guiada em aparelhos com resistência calibrada por molas para reconstruir estabilidade lombo-pélvica e controle motor fino.',
    indications: [
      'Instabilidade lombar crônica e pós-alta ortopédica',
      'Disfunções de quadril, joelho e cintura escapular',
      'Prevenção de recidivas em praticantes de corrida e natação',
    ],
    protocol:
      'Exercícios prescritos conforme diagnóstico fisioterapêutico, com ajuste contínuo de amplitude e carga.',
    image: pilatesClinicoImg,
    imageAlt:
      'Estúdio clínico de Pilates com aparelhos Reformer em madeira clara, estofado azul oceano e iluminação natural',
    featuredSpan: false,
  },
  {
    id: 'reabilitacao-ortopedica',
    number: '03',
    title: 'Reabilitação Ortopédica e Pós-Operatória',
    shortTitle: 'Reabilitação Ortopédica',
    category: 'movimento',
    categoryLabel: 'Movimento e Força',
    duration: '50 minutos',
    modality: 'Protocolo baseado em evidências',
    summary:
      'Condução estruturada do retorno funcional após cirurgias articulares, entorses ligamentares, tendinopatias e síndromes compressivas.',
    indications: [
      'Pós-operatório de ombro, joelho e coluna vertebral',
      'Tendinopatias do manguito rotador, calcâneo e patelar',
      'Recuperação de amplitude de movimento e propriocepção',
    ],
    protocol:
      'Critérios objetivos de força, simetria e controle álgico a cada fase de cicatrização tecidual.',
    featuredSpan: false,
  },
  {
    id: 'massoterapia-clinica',
    number: '04',
    title: 'Massoterapia Clínica e Liberação Miofascial',
    shortTitle: 'Massoterapia Clínica',
    category: 'terapia-manual',
    categoryLabel: 'Terapia Manual',
    duration: '50 minutos',
    modality: 'Terapia manual de precisão',
    summary:
      'Técnicas manuais profundas voltadas à desativação de pontos-gatilho miofasciais, restauração do deslizamento tecidual e regulação do tônus muscular.',
    indications: [
      'Contraturas paravertebrais e síndrome miofascial crônica',
      'Sobrecarga muscular por estresse físico ou postural',
      'Auxílio na recuperação tecidual entre ciclos de treino',
    ],
    protocol:
      'Integração entre palpação anatômica direcionada, mobilização fascial lenta e orientações de autocuidado.',
    image: terapiaManualImg,
    imageAlt:
      'Fisioterapeuta aplicando técnica manual de liberação miofascial na região escapular em consultório iluminado',
    featuredSpan: true,
  },
];

export const ABOUT_CONTENT = {
  kicker: 'Formação Acadêmica · Conduta Baseada em Evidências',
  title: 'Rigor anatômico aliado a uma escuta clínica serena.',
  lead: 'A Massoterapia Recanto do Mar foi estruturada para oferecer atendimento fisioterapêutico sem pressa, com raciocínio diagnóstico individual e ambiente planejado para favorecer a regulação do sistema nervoso.',
  body: 'Cada consulta começa com anamnese detalhada, testes ortopédicos específicos e leitura postural completa. A partir dos achados físicos, combinamos recursos de terapia manual, RPG e cinesioterapia clínica para tratar a origem mecânica da dor — evitando abordagens padronizadas ou alívios meramente temporários.',
  image: terapiaManualImg,
  imageAlt:
    'Atendimento fisioterapêutico manual individualizado na Massoterapia Recanto do Mar',
};

export const ACADEMIC_CREDENTIALS: AcademicCredential[] = [
  {
    id: 'graduacao',
    year: 'Formação Base',
    title: 'Bacharelado em Fisioterapia',
    institution: 'Formação Superior Reconhecida pelo MEC',
    focus: 'Semiologia musculoesquelética, cinesiologia aplicada e fisiologia da dor.',
  },
  {
    id: 'rpg-formacao',
    year: 'Especialização',
    title: 'Formação Completa em Reeducação Postural Global (RPG)',
    institution: 'Capacitação Clínica em Cadeias Musculares',
    focus: 'Reorganização postural estática e dinâmica aplicada à coluna vertebral e articulações.',
  },
  {
    id: 'ortopedia-pilates',
    year: 'Pós-Graduação',
    title: 'Fisioterapia Ortopédica, Traumatológica e Pilates Clínico',
    institution: 'Aprimoramento em Reabilitação Funcional',
    focus: 'Prescrição de controle motor, reabilitação pós-operatória e terapia manual miofascial.',
  },
];

export const TESTIMONIALS_HEADER = {
  kicker: 'Depoimentos de Recuperação · Resultados Reais',
  title: 'Evolução clínica sentida na rotina de quem voltou a se mover sem receio.',
  subtitle:
    'Relatos de pacientes acompanhados em ciclos completos de reabilitação postural, controle motor e terapia manual.',
};

export const RECOVERY_TESTIMONIALS: RecoveryTestimonial[] = [
  {
    id: 'dep-1',
    patientName: 'Helena Vasconcelos',
    patientContext: 'Arquiteta · Lombalgia por protusão discal L4–L5',
    specialtyUsed: 'RPG e Estabilização Segmentar',
    timeframe: '10 semanas de acompanhamento',
    beforeCondition: 'Crises recorrentes ao permanecer sentada por mais de 40 minutos',
    quote:
      'Cheguei à clínica evitando até dirigir por receio de travar a lombar. A avaliação inicial explicou com clareza a origem da sobrecarga e, progressivamente, recuperei confiança para trabalhar e caminhar sem dor irradiada.',
    outcome: 'Retorno integral à rotina de trabalho e caminhadas diárias de 5 km.',
  },
  {
    id: 'dep-2',
    patientName: 'Eduardo Mendonça',
    patientContext: 'Engenheiro Civil · Pós-operatório de ombro direito',
    specialtyUsed: 'Reabilitação Ortopédica e Pilates Clínico',
    timeframe: '14 semanas de reabilitação',
    beforeCondition: 'Limitação severa de elevação do braço e dor noturna persistente',
    quote:
      'O diferencial foi o acompanhamento individual do início ao fim de cada sessão. Cada ganho de amplitude foi medido e respeitado no meu ritmo, sem pressa nem protocolos genéricos.',
    outcome: 'Recuperação completa da elevação funcional e retomada da natação.',
  },
  {
    id: 'dep-3',
    patientName: 'Camila Ferreira Nogueira',
    patientContext: 'Docente Universitária · Cervicalgia tensional e cefaleia',
    specialtyUsed: 'Massoterapia Clínica e RPG',
    timeframe: '6 semanas de tratamento',
    beforeCondition: 'Rigidez cervical diária e limitação na rotação do pescoço',
    quote:
      'O ambiente calmo já desacelera o corpo assim que entramos, mas é a precisão da terapia manual combinada aos ajustes posturais que sustenta o resultado semana após semana.',
    outcome: 'Alívio sustentado da tensão cervical e redução expressiva das crises.',
  },
];

export const SHIFT_OPTIONS: ('Manhã' | 'Tarde' | 'A combinar')[] = [
  'Manhã',
  'Tarde',
  'A combinar',
];
