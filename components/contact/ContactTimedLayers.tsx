"use client";

import type { MotionValue } from "framer-motion";

import FinalLinksLayer from "./timed-layers/FinalLinksLayer";
import FormLayer from "./timed-layers/FormLayer";
import HeroLayer from "./timed-layers/HeroLayer";
import OfficeLayer from "./timed-layers/OfficeLayer";
import OrbitMailLayer from "./timed-layers/OrbitMailLayer";
import OrbitPhoneLayer from "./timed-layers/OrbitPhoneLayer";
import type { ContactPageContent } from "./ContactPage";

type Props = {
  progress: MotionValue<number>;
  content: ContactPageContent;
};

export default function ContactTimedLayers({ progress, content }: Props) {
  return (
    <div className="relative z-30">
      <HeroLayer progress={progress} content={content} />
      <OrbitPhoneLayer progress={progress} />
      <OrbitMailLayer progress={progress} />
      <OfficeLayer progress={progress} />
      <FormLayer progress={progress} content={content} />
      <FinalLinksLayer progress={progress} content={content} />
    </div>
  );
}
