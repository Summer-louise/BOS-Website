import { motion } from 'framer-motion';
import { ContactDropdown } from '@/components/ContactDropdown';

export function Hero() {

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex items-center pt-24 bg-background"
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
              Stop losing leads<br />
              <span className="italic text-foreground/75">while you're at an open home.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-lg mb-10">
              Every enquiry answered in seconds, every follow-up handled, every past client nurtured. Automatically. Built for Sunshine Coast agents by someone who's run a real business.
            </p>

            <ContactDropdown label="Let's talk" />
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
              <div
                className="aspect-[3/4] overflow-hidden bg-muted w-full"
                style={{ borderRadius: '240px 240px 8px 8px' }}
              >
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
