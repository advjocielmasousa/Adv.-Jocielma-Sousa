"use client";

import {
  ArrowUpRight,
  Check,
  Copy,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";
import * as React from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const APP_EMAIL = "jocielmaadv.comercial@gmail.com";
const APP_PHONE = "+55 (11) 98815-7940";

export function ContactPage() {
  const socialLinks = [
    { icon: MessageCircle, href: `https://wa.me/55${APP_PHONE.replace(/\D/g, "")}`, label: "WhatsApp" },
    { icon: Mail, href: `mailto:${APP_EMAIL}`, label: "E-mail" },
    { icon: Globe, href: "#contato", label: "Instagram" },
    { icon: ArrowUpRight, href: "#contato", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen w-full bg-[#f5f0ea] text-[#171513]">
      <div className="mx-auto h-full max-w-7xl border-x border-[#e0d4c6] bg-[#f8f5f1]/90">
        <div className="flex grow flex-col justify-center px-4 pb-16 pt-20 md:px-8">
          <h1 className="text-4xl font-bold tracking-[-0.05em] md:text-5xl">Entre em contato</h1>
          <p className="mt-2 text-base text-[#4d4039]">
            Fale com a equipe de Jocielma Sousa Advocacia e agende sua conversa inicial.
          </p>
        </div>

        <BorderSeparator />

        <div className="grid md:grid-cols-3">
          <Box
            icon={Mail}
            title="E-mail"
            description="Respondemos em até 24 horas úteis."
          >
            <a
              href={`mailto:${APP_EMAIL}`}
              className="font-mono text-base font-medium tracking-wide text-[#171513] hover:underline"
            >
              {APP_EMAIL}
            </a>
            <CopyButton className="size-6" test={APP_EMAIL} />
          </Box>

          <Box
            icon={MapPin}
            title="Atendimento"
            description="Consulta presencial e online, segundo disponibilidade."
          >
            <span className="font-mono text-base font-medium tracking-wide text-[#171513]">
              São Paulo, SP — atendimento por agendamento
            </span>
          </Box>

          <Box
            icon={Phone}
            title="Telefone"
            description="Disponibilidade de segunda a sexta, das 9h às 18h."
            className="border-b-0 md:border-r-0"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-x-2">
                <a
                  href={`tel:${APP_PHONE}`}
                  className="block font-mono text-base font-medium tracking-wide text-[#171513] hover:underline"
                >
                  {APP_PHONE}
                </a>
                <CopyButton className="size-6" test={APP_PHONE} />
              </div>
            </div>
          </Box>
        </div>

        <BorderSeparator />

        <div className="relative flex h-full min-h-[260px] items-center justify-center overflow-hidden">
          <div
            className={cx(
              "absolute inset-0 size-full",
              "bg-[radial-gradient(circle,_rgba(23,21,19,0.14)_1px,transparent_1px)]",
              "bg-[size:24px_24px]",
              "[mask-image:radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_10%,_transparent_75%)]",
            )}
          />

          <div className="relative z-10 space-y-6 px-4 text-center">
            <h2 className="text-3xl font-bold tracking-[-0.05em] md:text-4xl">
              Conecte-se
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-x-2 rounded-full border border-[#d7c7a8] bg-[#fffdfb] px-4 py-2 transition hover:-translate-y-0.5 hover:bg-[#f3e8d9]"
                >
                  <link.icon className="size-4 text-[#171513]" />
                  <span className="font-mono text-sm font-medium tracking-wide text-[#171513]">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BorderSeparator() {
  return <div className="h-px w-full border-b border-[#e0d4c6]" />;
}

type ContactBox = React.ComponentProps<"div"> & {
  icon: LucideIcon;
  title: string;
  description: string;
};

function Box({ title, description, className, children, ...props }: ContactBox) {
  return (
    <div
      className={cx(
        "flex flex-col justify-between border-b border-[#e0d4c6] md:border-r md:border-b-0",
        className,
      )}
    >
      <div className="flex items-center gap-x-3 border-b border-[#e0d4c6] bg-[#f1e8dc] p-4">
        <props.icon className="size-5 text-[#171513]" strokeWidth={1.5} />
        <h2 className="text-lg font-medium tracking-wider text-[#171513]">{title}</h2>
      </div>
      <div className="flex items-center gap-x-2 p-4 py-12">{children}</div>
      <div className="border-t border-[#e0d4c6] p-4">
        <p className="text-sm text-[#4d4039]">{description}</p>
      </div>
    </div>
  );
}

type CopyButtonProps = {
  className?: string;
  test: string;
  disabled?: boolean;
};

function CopyButton({ className, test, disabled }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(test);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <button
      type="button"
      className={cx(
        "relative inline-flex items-center justify-center rounded-full border border-[#d7c7a8] bg-[#fffdfb] text-[#171513] transition hover:bg-[#f5efe8] disabled:opacity-100",
        className,
      )}
      onClick={handleCopy}
      aria-label={copied ? "Copiado" : "Copiar para a área de transferência"}
      disabled={copied || disabled}
    >
      <div
        className={cx(
          "absolute transition-all",
          copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
        )}
      >
        <Check className="size-3.5 stroke-emerald-600" aria-hidden="true" />
      </div>
      <div
        className={cx(
          "transition-all",
          copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
        )}
      >
        <Copy aria-hidden="true" className="size-3.5" />
      </div>
    </button>
  );
}
