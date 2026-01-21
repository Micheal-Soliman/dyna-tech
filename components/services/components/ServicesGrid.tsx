"use client";

import type { MotionValue } from "framer-motion";

import ServiceModuleCard, {
  type ServiceModuleWithIcon,
} from "./ServiceModuleCard";
import ServicesPowerLines from "./ServicesPowerLines";

type Props = {
  services: ServiceModuleWithIcon[];
  scrollYProgress: MotionValue<number>;
};

export default function ServicesGrid({ services, scrollYProgress }: Props) {
  return (
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="relative">
        <ServicesPowerLines scrollYProgress={scrollYProgress} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 relative border border-white/10">
          {services.map((service, index) => (
            <ServiceModuleCard
              key={service.id}
              service={service}
              index={index}
              total={services.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
