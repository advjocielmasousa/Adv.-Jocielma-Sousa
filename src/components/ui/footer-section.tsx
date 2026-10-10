"use client";

import {
  ArrowUpRight,
  Globe,
  Mail,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import Image from "next/image";

const APP_EMAIL = "jocielmaadv.comercial@gmail.com";
const APP_PHONE = "+55 (11) 98815-7940";

interface FooterLink {
  title: string;
  href: string;
  icon?: LucideIcon;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Navegação",
    links: [
      { title: "Sobre", href: "#sobre" },
      { title: "Áreas", href: "#areas" },
      { title: "Método", href: "#metodo" },
      { title: "Contato", href: "#contato" },
    ],
  },
  {
    label: "Atendimento",
    links: [
      { title: "Civil", href: "#areas" },
      { title: "Familiar", href: "#areas" },
      { title: "Trabalhista", href: "#areas" },
      { title: "Empresarial", href: "#areas" },
    ],
  },
  {
    label: "Contato",
    links: [
      { title: "WhatsApp", href: `https://wa.me/55${APP_PHONE.replace(/\D/g, "")}`, icon: MessageCircle },
      { title: "E-mail", href: `mailto:${APP_EMAIL}` },
      { title: "Agendamento", href: "#contato" },
      { title: "Localização", href: "#contato" },
    ],
  },
  {
    label: "Redes",
    links: [
      { title: "Instagram", href: "#contato", icon: Globe },
      { title: "YouTube", href: "#contato", icon: ArrowUpRight },
      { title: "LinkedIn", href: "#contato", icon: MessageCircle },
      { title: "E-mail", href: `mailto:${APP_EMAIL}`, icon: Mail },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full border-t border-[#d7c7a8] bg-[#f5f0ea] px-6 py-12 lg:px-8 lg:py-16">
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 rounded-full bg-[#171513]/20 blur-sm" />

      <div className="mx-auto w-full max-w-7xl">
        <FooterContainer className="flex justify-center">
          <Image
            src="/logo-vertical-preto.png"
            alt="Logo Jocielma Sousa Advocacia"
            width={1520}
            height={1137}
            className="h-[7.2rem] w-auto object-contain"
          />
        </FooterContainer>

        <div className="mt-[3.6rem] grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerLinks.map((section) => (
            <FooterContainer key={section.label}>
              <div className="mb-4 text-center md:mb-0">
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#171513]">
                  {section.label}
                </h3>
                <ul className="mt-4 flex flex-col items-center gap-2.5 text-sm text-[#4d4039]">
                  {section.links.map((link) => (
                    <li key={`${section.label}-${link.title}-${link.href}`}>
                      <a
                        href={link.href}
                        className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-[#7b2638]"
                      >
                        {link.icon ? <link.icon className="h-4 w-4" /> : null}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FooterContainer>
          ))}
        </div>

        <p className="mt-10 border-t border-[#d7c7a8] pt-6 text-center text-sm text-[#4d4039]">
          © 2026 Jocielma Sousa. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  className?: ComponentProps<"div">["className"];
  children: ReactNode;
};

function FooterContainer({ className, children }: ViewAnimationProps) {
  return <div className={className}>{children}</div>;
}
