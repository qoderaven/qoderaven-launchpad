import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Palette, Settings, Fingerprint, BarChart3, Megaphone, Shield } from "lucide-react";

const services = [
  { icon: Globe, title: "Web & Mobile Development", desc: "Custom websites, mobile apps, APIs, and scalable systems." },
  { icon: Palette, title: "UI/UX & Product Design", desc: "User research, prototyping, and intuitive digital interfaces." },
  { icon: Settings, title: "IT Consultancy", desc: "Digital transformation, cloud migration, and system architecture." },
  { icon: Fingerprint, title: "Branding & Digital Experience", desc: "Brand identity, design systems, and storytelling." },
  { icon: Shield, title: "Cybersecurity", desc: "Security audits, penetration testing, and data protection." },
  { icon: BarChart3, title: "Data Analytics", desc: "Business intelligence dashboards and predictive insights." },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, social media strategy, and growth campaigns." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-brand-blue uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-elevated p-8 border border-border group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5 group-hover:bg-brand-blue/20 transition-colors">
                <s.icon className="w-6 h-6 text-brand-blue" />
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

export default ServicesSection;
