import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const options = [
  {
    label: 'I can come to you',
    sub: 'In-person on the Sunshine Coast',
    href: '#contact',
  },
  {
    label: 'Virtual discussion',
    sub: 'Video call, wherever you are',
    href: '#contact',
  },
  {
    label: 'Email me directly',
    sub: 'summer@bosautomated.com',
    href: 'mailto:summer@bosautomated.com',
  },
];

export function Hero() {
  const [open, setOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleOption = (href: string) => {
    setOpen(false);
    if (href.startsWith('#')) {
      const el = document.getElementById(href.replace('#', ''));
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex items-center pt-24 bg-background overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex flex-col items-start"
          >
            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-serif leading-[1.05] text-foreground mb-6">
              Your business,<br />
              <span className="italic text-foreground/75">running itself.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-lg mb-10">
              Smart digital automations tailored and built for you, so you can spend your time on higher priorities.
            </p>

            {/* Dropdown CTA */}
            <div ref={dropRef} className="relative">
              <button
                onClick={() => setOpen(v => !v)}
                className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium text-base px-8 py-4 rounded-none transition-all duration-200 hover:shadow-md"
              >
                Let's talk
                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block text-xs"
                >
                  ▾
                </motion.span>
              </button>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full mt-2 w-72 bg-background border border-border shadow-lg z-50"
                  >
                    {options.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => handleOption(opt.href)}
                        className="w-full text-left px-5 py-4 hover:bg-muted/60 transition-colors border-b border-border/50 last:border-b-0 group"
                      >
                        <div className="text-sm font-sans font-medium text-foreground group-hover:text-primary transition-colors">
                          {opt.label}
                        </div>
                        <div className="text-xs text-muted-foreground font-light mt-0.5">
                          {opt.sub}
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: Summer's portrait */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 1.1, ease: 'easeOut' }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full max-w-[460px]">
              {/* Photo */}
              <div className="aspect-[3/4] overflow-hidden bg-muted w-full">
                <img
                  src="/summer.png"
                  alt="Summer-Louise Bevan, BOS Automated"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Caption strip */}
              <div className="mt-4 flex flex-col gap-0.5">
                <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground">
                  Summer-Louise Bevan
                </p>
                <p className="text-sm font-serif italic text-foreground/70">
                  Sunshine Coast Automation Specialist
                </p>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-secondary/30 -z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
