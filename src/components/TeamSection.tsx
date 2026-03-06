import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  { name: "Fred Amuzu", role: "CEO", initials: "FA" },
  { name: "Prosper Nsohlebna Atiah", role: "Product & UI/UX Lead", initials: "PA" },
  { name: "Justice Ayamdoo", role: "CTO", initials: "JA" },
  { name: "Umusalma Yakubu", role: "Operations Lead", initials: "UY" },
  { name: "Eugene Acheampong", role: "Marketing & Communications Lead", initials: "EA" },
];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-brand-blue uppercase tracking-widest mb-3">Our People</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">The Founding Team</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-elevated p-6 border border-border text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-brand-gradient mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-105 transition-transform">
                {member.initials}
              </div>
              <h3 className="font-semibold text-foreground text-base">{member.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
