import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-hero relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-hero-foreground mb-6">
            Let's Build the Future <span className="text-gradient">Together</span>
          </h2>
          <p className="text-lg text-hero-foreground/60 mb-10 leading-relaxed">
            Partner with QodeRaven to build scalable digital products and transform your ideas into reality.
          </p>
          <a
            href="mailto:hello@qoderaven.com"
            className="inline-block bg-brand-gradient text-primary-foreground px-10 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity glow"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
