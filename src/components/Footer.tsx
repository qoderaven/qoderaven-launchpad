const footerLinks = {
  "Quick Links": ["Home", "Services", "About", "Team", "Contact"],
  Services: ["Web Development", "UI/UX Design", "IT Consultancy", "Cybersecurity", "Data Analytics"],
};

const Footer = () => {
  return (
    <footer className="bg-hero border-t border-brand-blue/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-hero-foreground mb-4">
              Qode<span className="text-gradient">Raven</span>
            </h3>
            <p className="text-hero-foreground/50 text-sm leading-relaxed max-w-md">
              QodeRaven is a Ghanaian technology startup building intelligent, scalable, and user-centered digital solutions for businesses across Africa.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-hero-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-hero-foreground/40 hover:text-hero-foreground/70 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-hero-foreground/10 pt-8 text-center">
          <p className="text-sm text-hero-foreground/30">© 2026 QodeRaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
