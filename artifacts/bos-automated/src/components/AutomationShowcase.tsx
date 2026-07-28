import { motion } from 'framer-motion';

const flows = [
  {
    src: '/automations/flow-1.png?v=3',
    label: 'Lead capture & multi-branch routing',
    desc: 'Each lead source triggers its own path — personalised follow-up sent automatically based on origin.',
  },
  {
    src: '/automations/flow-2.png?v=3',
    label: 'Automated email campaign',
    desc: 'Scheduled outreach triggered by lead status, with activity logging on every send.',
  },
  {
    src: '/automations/flow-3.png?v=3',
    label: 'Webhook & router flow',
    desc: 'Inbound data filtered, parsed, and distributed across multiple downstream systems.',
  },
  {
    src: '/automations/flow-4.png?v=3',
    label: 'Event & calendar management',
    desc: 'Attendee data synced from a spreadsheet, calendar invites created, confirmation emails sent.',
  },
  {
    src: '/automations/flow-5.png?v=3',
    label: 'Multi-segment campaign automation',
    desc: 'Separate campaign logic runs in parallel — each audience segment handled with its own rules.',
  },
  {
    src: '/automations/flow-6.png?v=3',
    label: 'Marketing list & newsletter dispatch',
    desc: 'One trigger fans out to every subscriber, with individual tracking and unsubscribe handling.',
  },
];

export function AutomationShowcase() {
  return (
    <section id="work" className="w-full">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground block mb-4">
            Real work
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground max-w-xl">
            Automations built for real businesses.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground font-light max-w-2xl">
            Every flow below is built and tested — the kind of automation that saves real business owners hours each week.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {flows.map((flow, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.7 }}
              className="flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden bg-[#f0eff4] border border-border/60 shadow-sm">
                <img
                  src={flow.src}
                  alt={`Make.com automation: ${flow.label}`}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-[1.06]"
                />
              </div>
              <div className="pt-4">
                <h3 className="text-sm font-sans font-medium text-foreground mb-1">
                  {flow.label}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {flow.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
