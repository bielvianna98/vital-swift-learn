import {
  Baby,
  Users,
  Wind,
  FlaskConical,
  Activity,
  Droplets,
  Stethoscope,
  Bandage,
  Syringe,
  HeartPulse,
  Heart,
  type LucideIcon,
} from "lucide-react";

export interface Procedimento {
  slug: string;
  nome: string;
  descricao: string;
  icon: LucideIcon;
  disponivel?: boolean;
}

export const procedimentos: Procedimento[] = [
  {
    slug: "desengasgo-adultos",
    nome: "Desengasgo em Adultos",
    descricao: "Manobra de Heimlich e desobstrução de vias aéreas.",
    icon: Users,
  },
  {
    slug: "desengasgo-bebes",
    nome: "Desengasgo em Bebês",
    descricao: "Conduta para obstrução de vias aéreas em lactentes.",
    icon: Baby,
    disponivel: true,
  },
  {
    slug: "aspiracao-vias-aereas",
    nome: "Aspiração de Vias Aéreas",
    descricao: "Técnica de remoção de secreções respiratórias.",
    icon: Wind,
  },
  {
    slug: "diluicao-medicamentos",
    nome: "Diluição de Medicamentos",
    descricao: "Preparo seguro de medicamentos injetáveis.",
    icon: FlaskConical,
  },
  {
    slug: "sonda-nasogastrica",
    nome: "Sonda Nasogástrica / Nasoenteral",
    descricao: "Passagem e posicionamento seguro de sondas.",
    icon: Activity,
  },
  {
    slug: "oxigenioterapia",
    nome: "Oxigenioterapia",
    descricao: "Administração de oxigênio por diferentes dispositivos.",
    icon: Droplets,
  },
  {
    slug: "cateterismo-vesical",
    nome: "Cateterismo Vesical",
    descricao: "Técnica de sondagem urinária.",
    icon: Stethoscope,
  },
  {
    slug: "feridas",
    nome: "Avaliação e Tratamento de Feridas",
    descricao: "Avaliação clínica e cuidados básicos com feridas.",
    icon: Bandage,
  },
  {
    slug: "vias-administracao",
    nome: "Vias de Administração de Medicamentos",
    descricao: "Via oral, intramuscular, intravenosa e subcutânea.",
    icon: Syringe,
  },
  {
    slug: "rcp-pediatrica",
    nome: "RCP em Bebês e Crianças",
    descricao: "Suporte básico de vida pediátrico.",
    icon: HeartPulse,
  },
  {
    slug: "rcp-adultos",
    nome: "RCP em Adultos",
    descricao: "Suporte básico de vida em adultos.",
    icon: Heart,
  },
];

export function getProcedimento(slug: string) {
  return procedimentos.find((p) => p.slug === slug);
}
