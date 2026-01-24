"use client";

import type { MotionValue } from "framer-motion";

import FinalLinksLayer from "./timed-layers/FinalLinksLayer";
import FormLayer from "./timed-layers/FormLayer";
import HeroLayer from "./timed-layers/HeroLayer";
import OfficeLayer from "./timed-layers/OfficeLayer";
import OrbitMailLayer from "./timed-layers/OrbitMailLayer";
import OrbitPhoneLayer from "./timed-layers/OrbitPhoneLayer";

type Props = {
  progress: MotionValue<number>;
};

export default function ContactTimedLayers({ progress }: Props) {
  return (
    <div className="relative z-30">
      <HeroLayer progress={progress} />
      <OrbitPhoneLayer progress={progress} />
      <OrbitMailLayer progress={progress} />
      <OfficeLayer progress={progress} />
      <FormLayer progress={progress} />
      <FinalLinksLayer progress={progress} />
    </div>
  );
}
