import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PenTool, Smartphone, Brain, Cloud, Globe2 } from "lucide-react";

const strengths = [
  { icon: PenTool, title: "Design + Engineering", desc: "We combine beautiful design with robust engineering for end-to-end excellence." },
  { icon: Smartphone, title: "Mobile-First Architecture", desc: "Every solution is built mobile-first for the widest reach across Africa." },
  { icon: Brain, title: "AI-Ready Systems", desc: "Future-proof architectures that integrate machine learning and intelligent automation." },
  { icon: Cloud, title: "Scalable Cloud Solutions", desc: "Cloud-native infrastructure that grows seamlessly with your business." },
  { icon: Globe2, title: "Local Expertise, Global Standards", desc: "Deep understanding of African markets paired with world-class quality." },
];

const WhyChooseUs = () => {
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
          <p className="text-sm font-semibold text-brand-blue uppercase tracking-widest mb-3">Why QodeRaven</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Why Choose Us</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`card-elevated p-8 border border-border ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-violet/10 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-brand-violet" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
