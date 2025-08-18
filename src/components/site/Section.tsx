// src/components/site/Section.tsx
import { ReactNode } from "react";
import { Container } from "@/components/site/Container";

type Props = {
  id?: string;
  "aria-label"?: string;
  bgImage?: string;         // z.B. "/img/optimized/pattern-bg.jpg"
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  "aria-label": ariaLabel,
  bgImage,
  className = "",
  children,
}: Props) {
  return (
    <section id={id} aria-label={ariaLabel} className={`relative isolate py-10 sm:py-14 ${className}`}>
      {bgImage && (
        <>
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${bgImage})` }}
            aria-hidden
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/30 to-black/50" aria-hidden />
        </>
      )}
      <Container>{children}</Container>
    </section>
  );
}
