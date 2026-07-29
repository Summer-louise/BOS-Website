import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'What is an automation?', href: '/what-is-automation', external: true },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const [, navigate] = useLocation();

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleNavClick = (e: React.MouseEvent, link: { href: string; external?: boolean }) => {
    e.preventDefault();
    if (link.external) {
      navigate(link.href);
      setMobileMenuOpen(false);
    } else {
      scrollToSection(link.href);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border/50 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="#hero"
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img
                src="/logo.svg"
                alt="BOS Automated"
                className="h-10 w-auto"
              />
              <span className="text-[8px] tracking-widest uppercase font-sans text-muted-foreground/70 mt-0.5 leading-none">
                Business Optimisation Systems
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 h-auto text-sm font-medium transition-transform hover:scale-105"
              >
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>
                  Get in touch
                </a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -mr-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background flex flex-col px-5 pt-28 pb-10"
          >
            <div className="flex flex-col gap-8 text-2xl font-serif">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-foreground hover:text-primary transition-colors block border-b border-border/50 pb-4"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-auto">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-lg font-sans"
              >
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>
                  Get in touch
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
