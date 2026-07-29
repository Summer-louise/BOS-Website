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
                  Mountain Juice and Coffee, Mount Coolum. Where it all started.
                </p>
              </div>
            </div>

            {/* Personal photo trio */}
            <div className="mt-3 flex items-end gap-3">

              {/* Desk + cat — landscape, slight tilt left */}
              <div
                className="flex-1 overflow-hidden"
                style={{
                  aspectRatio: '4/3',
                  transform: 'rotate(-2deg) translateY(6px)',
                  boxShadow: '0 8px 28px rgba(0,0,0,0.16)',
                  flexShrink: 0,
                  flexBasis: '42%',
                }}
              >
                <img
                  src="/summer-desk.jpg"
                  alt="Summer at her desk with her cat"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Summer cutout on terracotta arch — centre hero */}
              <div
                className="relative flex-shrink-0"
                style={{ flexBasis: '28%', alignSelf: 'flex-end' }}
              >
                {/* Terracotta arch backdrop */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '88%',
                  height: '80%',
                  borderRadius: '999px 999px 0 0',
                  background: 'hsl(18 55% 48%)',
                  zIndex: 0,
                }} />
                {/* Sage inner ring accent */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 'calc(88% + 14px)',
                  height: 'calc(80% + 10px)',
                  borderRadius: '999px 999px 0 0',
                  border: '1.5px solid hsl(128 22% 48% / 0.45)',
                  zIndex: 0,
                }} />
                <img
                  src="/summer-casual.png"
                  alt="Summer casual"
                  className="relative w-full object-contain object-bottom"
                  style={{
                    zIndex: 1,
                    filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.18))',
                  }}
                />
              </div>

              {/* Couple — portrait, slight tilt right */}
              <div
                className="overflow-hidden flex-shrink-0"
                style={{
                  flexBasis: '30%',
                  aspectRatio: '3/4',
                  transform: 'rotate(2deg) translateY(6px)',
                  boxShadow: '0 8px 28px rgba(0,0,0,0.16)',
                  outline: '3px solid hsl(42 40% 94%)',
                  outlineOffset: '-3px',
                }}
              >
                <img
                  src="/couple.jpg"
                  alt="Summer with her partner"
                  className="w-full h-full object-cover object-top"
                />
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
                I'm not a software developer who stumbled into consulting. I'm a former cafe owner from Mount Coolum who built a business from the ground up, sold it, and then spent the following two years immersed in digital marketing, CRM builds, data enrichment and refinement, and of course automation. Learning the art of turning your set-up efforts into something that works for you on autopilot.
              </p>
              <p>
                I build systems that eliminate bottlenecks most business owners do not even realise they have. Technology should make your life easier, not harder. If a system does not save you real time and real stress, it is not worth building.
              </p>
              <p>
                I genuinely care about finding solutions others do not see, and about the businesses I work with. Local knowledge, real-world experience, and a firm belief that even the smallest business deserves to run like a well-oiled machine.
              </p>
              <p>
                If you are curious about how to make technology work for you but are not sure where to start, or the whole thing feels overwhelming, just flick me an email. I am here to help. Businesses that start implementing these systems now will pull ahead of their competitors. Let me make that process easy for you.
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
