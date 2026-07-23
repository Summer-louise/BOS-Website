import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We talk through your bottlenecks, your workflow, and where you\'re losing time. No pressure, just understanding.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Your custom workflow is built in Make.com. Tailored to how you actually operate your business daily.',
  },
  {
    number: '03',
    title: 'Launch',
    description: 'Automations go live. Leads flow, follow-ups trigger, deals progress. You focus on closing.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            How it starts
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated connector line (desktop only) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-secondary/30">
            <motion.div 
              className="w-2 h-2 rounded-full bg-secondary absolute top-1/2 -translate-y-1/2"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-16 md:gap-8 justify-between">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative flex flex-col items-center text-center flex-1"
              >
                {/* Decorative background number */}
                <div className="text-[120px] font-serif leading-none text-secondary/10 absolute -top-16 select-none z-0">
                  {step.number}
                </div>
                
                <div className="relative z-10 pt-10">
                  <h3 className="text-2xl font-serif text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground font-light leading-relaxed max-w-[280px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
