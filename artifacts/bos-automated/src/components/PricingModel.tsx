import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const reassurances = [
  {
    title: 'Fixed quote before work starts',
    note: 'No surprise costs, ever.',
  },
  {
    title: 'You own what I build',
    note: 'Not locked to any platform or provider.',
  },
  {
    title: 'No lock-in on support',
    note: 'Cancel the monthly plan anytime with 30 days notice.',
  },
];

export function PricingModel() {
  const CALENDLY = 'https://calendly.com/summer-bosautomated/30min';

  return (
    <section className="w-full">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground block mb-4">
            How I work
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-5">
            Simple, transparent, no surprises.
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl">
            Every project starts with a fixed fee based on scope. If you'd like ongoing support after launch, a monthly plan keeps things monitored, maintained, and improving so nothing quietly breaks.
          </p>
        </motion.div>

        {/* Two cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Card 1 */}
          <div className="border border-border/60 bg-card p-8 flex flex-col gap-4">
            <div className="w-8 h-[2px] bg-primary" />
            <h3 className="text-2xl font-serif text-foreground">The Build</h3>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              A one-time project fee, scoped to your specific automations and quoted after a short discovery conversation. No guessing. You will know the full cost before any work begins.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-border/60 bg-muted/20 p-8 flex flex-col gap-4">
            <div className="w-8 h-[2px] bg-secondary" />
            <h3 className="text-2xl font-serif text-foreground">
              Ongoing Support{' '}
              <span className="text-lg font-sans font-light text-muted-foreground italic">(optional)</span>
            </h3>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              A monthly plan covering monitoring, fixes, and small changes after launch, so your automations keep running smoothly as your business changes. Cancel anytime with 30 days notice.
            </p>
          </div>
        </motion.div>

        {/* Reassurance row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-6 mb-12 border-y border-border/40 py-8"
        >
          {reassurances.map((r, idx) => (
            <div key={idx} className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-sans font-medium text-foreground">{r.title}</p>
              <p className="text-xs text-muted-foreground font-light">{r.note}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium text-base px-8 py-4 transition-all duration-200 hover:shadow-md"
          >
            Book a discovery call
            <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
