"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}

interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;

  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));

  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export function CircularTestimonials({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) {
  const colorName = colors.name ?? "#000";
  const colorDesignation = colors.designation ?? "#6b7280";
  const colorTestimony = colors.testimony ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<number | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex] ?? testimonials[0],
    [activeIndex, testimonials],
  );

  useEffect(() => {
    const handleResize = () => {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!autoplay) return;

    autoplayIntervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    }, 5000);

    return () => {
      if (autoplayIntervalRef.current) {
        window.clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [autoplay, testimonialsLength]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) window.clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) window.clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") handlePrev();
      if (event.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleNext, handlePrev]);

  const getImageStyle = (index: number): CSSProperties => {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: "translateX(0px) translateY(0px) scale(1) rotateY(0deg)",
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }

    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }

    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }

    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  };

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="w-full max-w-5xl px-2 py-4 md:px-6 md:py-8">
      <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[1.05fr_1.2fr]">
        <div className="rounded-[2rem] border border-[#e5d7c2] bg-[#f9f4ee] p-3 shadow-[0_18px_35px_rgba(23,21,19,0.04)] md:p-4">
          <div ref={imageContainerRef} className="relative h-72 w-full overflow-visible md:h-[23rem]">
            {testimonials.map((testimonial, index) => (
              <Image
                key={testimonial.src}
                src={testimonial.src}
                alt={testimonial.name}
                width={640}
                height={640}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="absolute inset-0 h-full w-full rounded-[1.5rem] border border-white/50 object-cover shadow-[0_20px_45px_rgba(23,21,19,0.12)]"
                data-index={index}
                style={getImageStyle(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7b2638]">
                Depoimento
              </p>
              <motion.p
                style={{ color: colorTestimony, fontSize: fontSizeQuote, lineHeight: 1.75 }}
                className="max-w-xl text-[1.05rem] leading-[1.9] md:text-[1.15rem]"
              >
                “
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut", delay: 0.025 * i }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
                ”
              </motion.p>

              <div className="mt-7 border-t border-[#e4d7c0] pt-5">
                <h3 className="font-semibold" style={{ color: colorName, fontSize: fontSizeName }}>
                  {activeTestimonial.name}
                </h3>
                <p className="mt-1" style={{ color: colorDesignation, fontSize: fontSizeDesignation }}>
                  {activeTestimonial.designation}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex gap-4 pt-2 md:pt-4">
            <button
              type="button"
              aria-label="Depoimento anterior"
              onClick={handlePrev}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9c9ae] bg-[#171513] transition-all duration-300 hover:scale-[1.02] active:scale-95 active:shadow-[0_0_20px_rgba(184,160,106,0.6)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8a06a]"
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
              }}
            >
              <ArrowLeft size={18} color={colorArrowFg} />
            </button>
            <button
              type="button"
              aria-label="Próximo depoimento"
              onClick={handleNext}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9c9ae] bg-[#171513] transition-all duration-300 hover:scale-[1.02] active:scale-95 active:shadow-[0_0_20px_rgba(184,160,106,0.6)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8a06a]"
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
              }}
            >
              <ArrowRight size={18} color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircularTestimonials;
