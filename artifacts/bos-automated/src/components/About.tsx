import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="w-full">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Two photos stacked */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col gap-4"
          >
            {/* Main portrait */}
            <div className="aspect-[4/3] relative overflow-hidden bg-muted">
              <img
                src="/summer.png"
                alt="Summer-Louise Bevan, BOS Automated"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Previous business — the trailer */}
            <div className="aspect-[16/10] relative overflow-hidden bg-muted">
              <img
                src="/trailer.jpg"
                alt="Mountain Juice and Coffee trailer — Summer-Louise's previous business in Mount Coolum"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-foreground/70">
                <p className="text-xs text-background/80 font-sans font-light tracking-wide">
                  Mountain Juice and Coffee, Mount Coolum — where it all started.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-start lg:pt-6"
          >
            <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-6">
              About Summer-Louise
            </span>

            <h2 className="text-4xl md:text-5xl font-serif italic text-foreground leading-[1.1] mb-8">
              From the cafe floor to the automation studio.
            </h2>

            <div className="space-y-6 text-lg text-foreground font-light leading-relaxed mb-10">
              <p>
                I'm not a software developer who stumbled into consulting. I'm a former cafe owner from Mount Coolum who ran a real business — dealing with suppliers, staff rosters, inventory chaos, and customer flow — and discovered a passion for making messy operations simple.
              </p>
              <p>
                After years deep in Make.com automations, I build systems that eliminate bottlenecks most business owners do not even realise they have. Technology should make your life easier, not harder. If a system does not save you real time and stress, it is not worth building.
              </p>
              <p>
                I genuinely care about finding solutions others do not see, and about the businesses I work with. Local knowledge, real-world experience, and a belief that even the smallest business deserves to run like a well-oiled machine.
              </p>
            </div>

            <span className="inline-block px-4 py-2 bg-muted/50 text-muted-foreground border border-border/50 rounded-full text-xs font-sans uppercase tracking-wide">
              Sunshine Coast, QLD
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
