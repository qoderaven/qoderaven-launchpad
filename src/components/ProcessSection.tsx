import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  { icon: Search, label: "Discovery", desc: "Understanding your goals, users, and market." },
  { icon: PenTool, label: "Strategy & Design", desc: "Wireframes, prototypes, and visual design." },
  { icon: Code2, label: "Development", desc: "Clean, scalable code and architecture." },
  { icon: TestTube, label: "Testing", desc: "Quality assurance and performance checks." },
  { icon: Rocket, label: "Launch & Support", desc: "Deployment, monitoring, and ongoing care." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-brand-blue uppercase tracking-widest mb-3">How We Work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our Process</h2>
        </motion.div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative z-10 flex flex-col items-center text-center flex-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7 text-brand-blue" />
              </div>
              <span className="text-xs font-bold text-brand-blue mb-1">0{i + 1}</span>
              <h3 className="font-semibold text-foreground text-sm mb-1">{step.label}</h3>
              <p className="text-xs text-muted-foreground max-w-[140px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
