import { Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">BOS Automated</h3>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Make.com automation specialist helping Sunshine Coast businesses eliminate manual work and reclaim their time.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:summer@bosautomated.com"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                <Mail size={16} />
                <span>summer@bosautomated.com</span>
              </a>
              <a
                href="tel:0473510197"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                <Phone size={16} />
                <span>0473 510 197</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Industries', href: '#industries' },
                { label: 'About', href: '#about' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const id = link.href.replace('#', '');
                    const element = document.getElementById(id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-secondary-foreground/70 hover:text-secondary-foreground transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/50">
          <p>© {currentYear} BOS Automated. Sunshine Coast, Queensland, Australia.</p>
        </div>
      </div>
    </footer>
  );
}
