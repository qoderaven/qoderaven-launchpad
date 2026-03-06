import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-violet/5 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/3 blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--brand-blue) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--brand-blue) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-xs font-medium text-brand-blue">Building Africa's Digital Future</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-hero-foreground leading-[1.05] mb-6">
            Beyond Code,{" "}
            <br className="hidden md:block" />
            <span className="text-gradient">Towards Tomorrow</span>
          </h1>

          <p className="text-lg md:text-xl text-hero-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            QodeRaven builds intelligent digital products that help African businesses innovate, scale, and thrive.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-brand-gradient text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity glow"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="border border-hero-foreground/20 text-hero-foreground/80 px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-hero-foreground/5 transition-colors"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
