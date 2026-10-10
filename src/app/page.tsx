"use client";

import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { Footer } from "@/components/ui/footer-section";
import { ServiceCarousel } from "@/components/ui/service-carousel";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Direito Civil",
    description:
      "Assessoria em contratos, conflitos patrimoniais, responsabilidade civil e soluções preventivas para situações do cotidiano e dos negócios.",
    accent: "rgba(184, 160, 106, 0.12)",
  },
  {
    number: "02",
    title: "Direito de Família",
    description:
      "Acompanhamento em divórcio, guarda, convivência, planejamento familiar e conflitos afetivos com sensibilidade e rigor técnico.",
    accent: "rgba(184, 160, 106, 0.16)",
  },
  {
    number: "03",
    title: "Direito Trabalhista",
    description:
      "Orientação em rescisões, verbas, reclamações trabalhistas, negociação e defesa dos direitos do trabalho de forma clara e estratégica.",
    accent: "rgba(16, 42, 46, 0.24)",
  },
  {
    number: "04",
    title: "Consultoria Empresarial",
    description:
      "Atendimento para empresários e pequenas empresas com foco em contratos, organização jurídica e prevenção de riscos.",
    accent: "rgba(184, 160, 106, 0.1)",
  },
];

const principles = [
  "Atendimento individual, próximo e direto",
  "Estratégia jurídica orientada pela realidade do cliente",
  "Comunicação clara, respeitosa e objetiva",
  "Defesa técnica com foco em decisões inteligentes",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f2025] text-[#f5f2ea]">
      <header className="sticky top-0 z-50 border-b border-[#b8a06a]/15 bg-[#0f2025]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex shrink-0 items-center gap-3">
            <Image
              src="/logo-horizontal_transparente_champagne.png"
              alt="Jocielma Sousa Advocacia"
              width={1697}
              height={550}
              priority
              sizes="(max-width: 639px) 160px, 200px"
              className="h-[3.24rem] w-auto sm:h-[4.05rem]"
            />
          </div>

          <nav className="hidden flex-1 items-center justify-center md:flex">
            <div className="flex items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f5f2ea]/80 lg:gap-9 lg:text-[12px]">
              <a href="#sobre" className="group relative px-1 py-2 transition hover:text-[#b8a06a]">
                Sobre
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#b8a06a] transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#areas" className="group relative px-1 py-2 transition hover:text-[#b8a06a]">
                Áreas
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#b8a06a] transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#metodo" className="group relative px-1 py-2 transition hover:text-[#b8a06a]">
                Método
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#b8a06a] transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#contato" className="group relative px-1 py-2 transition hover:text-[#b8a06a]">
                Contato
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#b8a06a] transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </nav>

          <a
            href="#contato"
            className="group relative ml-auto hidden shrink-0 overflow-hidden rounded-full border border-[#b8a06a]/25 bg-white/3 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5f2ea] transition duration-300 hover:-translate-y-0.5 hover:border-[#b8a06a] hover:bg-[#b8a06a] hover:text-[#102a2e] hover:shadow-[0_0_20px_rgba(184,160,106,0.45)] active:scale-[0.97] active:bg-[#b8a06a] active:text-[#102a2e] active:shadow-[0_0_24px_rgba(184,160,106,0.7)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8a06a] md:inline-flex"
          >
            <span className="absolute inset-y-0 left-[-40%] w-[35%] -skew-x-[20deg] bg-white/12 blur-sm transition-all duration-700 group-hover:left-[110%]" />
            <span className="relative">Agendar conversa</span>
          </a>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b8a06a]/30 bg-white/5 text-[#f5f2ea] transition hover:border-[#b8a06a] active:scale-95 active:bg-[#b8a06a] active:text-[#102a2e] active:shadow-[0_0_18px_rgba(184,160,106,0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8a06a] md:hidden"
          >
            <span className="text-2xl leading-none">☰</span>
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-[#b8a06a]/15 bg-[#0a181b] md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f5f2ea]/80">
              <a href="#sobre" className="px-2 py-3 transition hover:text-[#b8a06a]" onClick={() => setMenuOpen(false)}>
                Sobre
              </a>
              <a href="#areas" className="px-2 py-3 transition hover:text-[#b8a06a]" onClick={() => setMenuOpen(false)}>
                Áreas
              </a>
              <a href="#metodo" className="px-2 py-3 transition hover:text-[#b8a06a]" onClick={() => setMenuOpen(false)}>
                Método
              </a>
              <a href="#contato" className="px-2 py-3 transition hover:text-[#b8a06a]" onClick={() => setMenuOpen(false)}>
                Contato
              </a>
              <a
                href="#contato"
                className="mt-2 inline-flex rounded-full border border-[#b8a06a]/25 bg-white/3 px-5 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5f2ea] transition hover:border-[#b8a06a] hover:bg-[#b8a06a] hover:text-[#102a2e] hover:shadow-[0_0_20px_rgba(184,160,106,0.45)] active:scale-[0.98] active:bg-[#b8a06a] active:text-[#102a2e] active:shadow-[0_0_24px_rgba(184,160,106,0.7)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8a06a]"
                onClick={() => setMenuOpen(false)}
              >
                Agendar conversa
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#0f2025] text-[#f5f2ea]">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle, rgba(184,160,106,0.18) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f2025] to-transparent" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:pt-20">
            <div className="order-2 text-left lg:order-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[#b8a06a]">
                Advocacia individual
              </p>

              <h1 className="mt-8 max-w-[760px] text-[3rem] font-medium leading-[0.9] text-[#f5f2ea] sm:text-[4.4rem] lg:text-[6rem] xl:text-[6.5rem]">
                Direito com
                <span className="mt-2 block text-[#f5f2ea]/95">clareza e estratégia.</span>
              </h1>

              <p className="mt-7 max-w-[640px] text-base leading-8 text-[#eef0ee]/78 md:text-[1.08rem] md:leading-[1.85]">
                Assessoria jurídica precisa para pessoas e negócios que buscam proteção, previsibilidade e decisões bem orientadas em momentos sensíveis.
              </p>

              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                <a
                  href="#contato"
                  className="group relative inline-flex items-center overflow-hidden rounded-full border border-[#b8a06a]/25 bg-white/3 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f5f2ea] transition duration-300 hover:-translate-y-0.5 hover:border-[#b8a06a] hover:bg-[#b8a06a] hover:text-[#102a2e] hover:shadow-[0_0_20px_rgba(184,160,106,0.45)] active:scale-[0.97] active:border-[#b8a06a] active:bg-[#b8a06a] active:text-[#102a2e] active:shadow-[0_0_24px_rgba(184,160,106,0.7)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8a06a]"
                >
                  <span className="absolute inset-y-0 left-[-40%] w-[35%] -skew-x-[20deg] bg-white/16 blur-sm transition-all duration-700 group-hover:left-[110%]" />
                  <span className="relative">Solicitar atendimento</span>
                </a>
                <a
                  href="#areas"
                  className="group relative inline-flex items-center overflow-hidden rounded-full border border-[#b8a06a]/25 bg-white/3 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f5f2ea] transition duration-300 hover:-translate-y-0.5 hover:border-[#b8a06a] hover:bg-[#b8a06a] hover:text-[#102a2e] hover:shadow-[0_0_20px_rgba(184,160,106,0.45)] active:scale-[0.97] active:border-[#b8a06a] active:bg-[#b8a06a] active:text-[#102a2e] active:shadow-[0_0_24px_rgba(184,160,106,0.7)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8a06a]"
                >
                  <span className="absolute inset-y-0 left-[-40%] w-[35%] -skew-x-[20deg] bg-[#b8a06a]/10 blur-sm transition-all duration-700 group-hover:left-[110%]" />
                  <span className="relative">Ver especialidades</span>
                </a>
              </div>

              <div className="mt-14 flex items-center gap-4 text-[9px] uppercase tracking-[0.32em] text-[#f5f2ea]/60">
                <span>Atendimento estratégico</span>
                <span className="inline-block h-px w-10 bg-[#b8a06a]" />
                <span>Atuação individual</span>
              </div>
            </div>

            <div className="relative order-1 flex items-center justify-center lg:order-2 lg:justify-end">
              <div className="relative h-[320px] w-full max-w-[430px] sm:h-[380px] md:h-[440px] lg:h-[560px] lg:max-w-[470px]">
                <div
                  className="absolute inset-0 rounded-[1.75rem] border border-[#b8a06a]/15 bg-[radial-gradient(circle_at_20%_20%,rgba(184,160,106,0.18),transparent_22%),linear-gradient(90deg,rgba(15,32,37,0.4)_0%,rgba(15,32,37,0.1)_28%,rgba(15,32,37,0)_100%)]"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-[2%] overflow-hidden rounded-[1.5rem]"
                  style={{
                    backgroundImage:
                      "url('/jocielma-hero.png')",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    filter: "grayscale(0.15) contrast(1.12) saturate(0.8) brightness(0.95)",
                    opacity: 0,
                    transform: "translate3d(18px, 18px, 0)",
                    animation: "heroImageReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                    WebkitMaskImage:
                      "linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.94) 30%, rgba(0,0,0,0.84) 60%, rgba(0,0,0,0.68) 100%)",
                    maskImage:
                      "linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.94) 30%, rgba(0,0,0,0.84) 60%, rgba(0,0,0,0.68) 100%)",
                  }}
                />
                <div className="absolute inset-x-[8%] bottom-0 top-[12%] rounded-[1.5rem] bg-[radial-gradient(circle_at_18%_28%,rgba(255,255,255,0.14),transparent_18%),linear-gradient(90deg,rgba(15,32,37,0.12),transparent_40%,rgba(15,32,37,0.25))] blur-[2px]" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-[#f5f2ea] py-20 text-[#242424]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 rounded-[2rem] border border-[#d8d3ca] bg-[#fbf9f5] p-8 shadow-[0_18px_45px_rgba(16,42,46,0.03)] md:p-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#102a2e]">
                  Sobre
                </p>
                <h3 className="mt-5 text-4xl leading-[0.95] text-[#102a2e] md:text-5xl">
                  Advocacia pensada para clareza, proteção e confiança.
                </h3>
              </div>

              <div className="space-y-5 text-lg leading-8 text-[#4c4b49]">
                <p>
                  A atuação de Jocielma Sousa combina rigor técnico, atenção ao contexto real de cada caso e comunicação direta. A advocacia individual exige proximidade, inteligência na decisão e segurança para a próxima etapa — valores que orientam cada atendimento.
                </p>
                <p>
                  A marca transmite autoridade sem rigidez, sofisticação sem artificialidade e competência sem excessos. A proposta é oferecer orientação clara, estratégica e acolhedora em momentos que exigem presença, equilíbrio e discernimento.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="areas" className="bg-[#102a2e] py-20 text-[#f5f2ea]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b8a06a]">
                Áreas de atuação
              </p>
              <h3 className="mt-5 text-4xl leading-none text-[#f5f2ea] md:text-5xl">
                Soluções jurídicas com foco em direitos, riscos e possibilidades.
              </h3>
            </div>

            <ServiceCarousel services={services} />
          </div>
        </section>

        <section id="metodo" className="bg-[#f5f2ea] py-20 text-[#242424]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#102a2e]">
                Método
              </p>
              <h3 className="mt-5 text-4xl leading-none text-[#102a2e] md:text-5xl">
                Atendimento com clareza, estratégia e atenção ao contexto real de cada caso.
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {principles.map((item, index) => (
                <ScrollReveal
                  key={item}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  viewOptions={{ amount: 0.25 }}
                >
                  <div className="h-full rounded-[1.5rem] border border-[#102a2e]/10 bg-[#fffdfb] p-6 shadow-[0_12px_30px_rgba(16,42,46,0.03)]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b8a06a]">
                      0{index + 1}
                    </p>
                    <p className="mt-5 text-lg leading-7 text-[#242424]">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f2025] py-20 text-[#f5f2ea]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b8a06a]">
                Experiência
              </p>
              <h3 className="mt-5 text-4xl leading-none text-[#f5f2ea] md:text-5xl">
                Clientes que valorizam atenção, clareza e segurança.
              </h3>
            </div>

            <div className="rounded-[2rem] border border-[#b8a06a]/15 bg-[#f9f4ee] p-4 shadow-[0_18px_45px_rgba(11,26,29,0.12)] md:p-8">
              <CircularTestimonials
                testimonials={[
                  {
                    quote:
                      "O atendimento foi acolhedor, profissional e extremamente claro. Entendi cada etapa com segurança e tranquilidade durante o processo.",
                    name: "Cliente em processo familiar",
                    designation: "Direito de Família",
                    src:
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
                  },
                  {
                    quote:
                      "A abordagem foi direta, honesta e muito bem estruturada. Sentimos que o caso foi pensado com atenção, estratégia e sensibilidade.",
                    name: "Cliente em consultoria empresarial",
                    designation: "Assessoria Empresarial",
                    src:
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
                  },
                  {
                    quote:
                      "Foi muito importante ter um acompanhamento atento e objetivo. A orientação foi decisiva para minha tomada de decisão diante da situação.",
                    name: "Cliente em questão civil",
                    designation: "Direito Civil",
                    src:
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
                  },
                ]}
                autoplay
                colors={{
                  name: "#102a2e",
                  designation: "#58666b",
                  testimony: "#242424",
                  arrowBackground: "#0f2025",
                  arrowForeground: "#f5f2ea",
                  arrowHoverBackground: "#b8a06a",
                }}
                fontSizes={{
                  name: "1.75rem",
                  designation: "0.95rem",
                  quote: "1.05rem",
                }}
              />
            </div>
          </div>
        </section>

        <section id="contato" className="bg-[#f5f2ea] py-20 text-[#242424]">
          <div className="mx-auto grid min-w-0 max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#102a2e]">
                Contato
              </p>
              <h3 className="mt-5 max-w-xl text-4xl leading-[0.95] text-[#102a2e] md:text-6xl">
                Vamos começar pelo próximo passo certo.
              </h3>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#4c4b49]">
                Se você precisa de orientação jurídica com atenção, clareza e estratégia, agende uma conversa inicial para entender sua situação e as melhores possibilidades de atuação.
              </p>
            </div>

            <div className="min-w-0 rounded-[2rem] border border-[#d7c7a8] bg-[#fffdfb] p-8 shadow-[0_18px_45px_rgba(16,42,46,0.04)]">
              <div className="space-y-6 text-[#102a2e]">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#102a2e]">WhatsApp</p>
                  <a href="https://wa.me/5511988157940" className="mt-2 block text-lg transition hover:text-[#102a2e]">(11) 98815-7940</a>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#102a2e]">E-mail</p>
                  <a href="mailto:jocielmaadv.comercial@gmail.com" className="mt-2 block break-all text-lg transition hover:text-[#102a2e]">jocielmaadv.comercial@gmail.com</a>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#102a2e]">Atendimento</p>
                  <p className="mt-2 text-lg">Agendamento por conversa inicial</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:jocielmaadv.comercial@gmail.com"
                  className="inline-flex rounded-full bg-[#102a2e] px-6 py-3 text-sm font-semibold text-[#f5f2ea] transition hover:bg-[#18363d] active:scale-[0.97] active:bg-[#b8a06a] active:text-[#102a2e] active:shadow-[0_0_22px_rgba(184,160,106,0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8a06a]"
                >
                  Enviar mensagem
                </a>
                <a
                  href="https://wa.me/5511988157940"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-[#25D366] bg-transparent px-6 py-3 text-sm font-semibold text-[#102a2e] transition hover:border-[#25D366] hover:bg-[#25D366] hover:text-[#102a2e] active:scale-[0.97] active:bg-[#25D366] active:text-[#102a2e] active:shadow-[0_0_22px_rgba(37,211,102,0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
