import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Lightbulb, Layers, Cpu } from "lucide-react";

const points = [
  { icon: MapPin, label: "Ghana-based technology startup" },
  { icon: Lightbulb, label: "Focused on innovation in Africa" },
  { icon: Layers, label: "Design-driven engineering approach" },
  { icon: Cpu, label: "Scalable and intelligent systems" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-brand-blue uppercase tracking-widest mb-3">About Us</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Technology That <span className="text-gradient">Inspires Progress</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              QodeRaven is a Ghanaian technology startup based in Accra, founded in 2025 by five innovators. We build intelligent, scalable, and user-centered digital solutions that help businesses adopt technology and grow sustainably.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our vision is to become Africa's leading hub for intelligent and innovative digital solutions — bridging innovation with real-world impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {points.map((p, i) => (
              <div key={i} className="card-elevated p-6 border border-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <p.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <p className="text-sm font-medium text-foreground">{p.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
