"use client";

import { motion } from "motion/react";

export type ServiceItem = {
  number: string;
  title: string;
  description: string;
  accent: string;
};

export function ServiceCarousel({ services }: { services: ServiceItem[] }) {
  return (
    <div className="w-full">
      <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b8a06a]">
        Áreas de atuação
      </div>

      <div
        className="grid gap-4 pb-2 md:grid-cols-2 md:gap-6 xl:grid-cols-4"
      >
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="group h-full min-w-0 rounded-[1.8rem] border border-[#e8d8c0] bg-[#fffdfb] p-6 shadow-[0_10px_20px_rgba(23,21,19,0.02)] transition-all duration-300 hover:shadow-[0_18px_35px_rgba(23,21,19,0.08)]"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#7b2638]">
                {service.number}
              </span>
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full text-lg font-semibold text-[#7b2638]"
                style={{ backgroundColor: service.accent }}
              >
                {service.title.charAt(0)}
              </div>
            </div>

            <h4 className="text-3xl leading-none text-[#171513] md:text-[2.15rem]">
              {service.title}
            </h4>

            <p className="mt-5 text-base leading-7 text-[#50463f] md:text-lg">
              {service.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
