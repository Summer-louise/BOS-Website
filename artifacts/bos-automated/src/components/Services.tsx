import { motion } from 'framer-motion';

const services = [
  {
    title: 'Lead capture & CRM setup',
    description: 'Unify every lead source into one clean system that actually works.',
  },
  {
    title: 'Automated follow-up sequences',
    description: 'Multi-channel drip campaigns that nurture leads without you lifting a finger.',
  },
  {
    title: 'Marketing & outreach flows',
    description: 'Triggered campaigns that respond intelligently to buyer behaviour.',
  },
  {
    title: 'Quote and proposal automation',
    description: 'Generate contracts and vendor kits from templates with smart data merge.',
  },
  {
    title: 'Vendor & buyer nurture pipelines',
    description: 'Set-and-forget workflows that keep appraisals warm and move people through your funnel.',
  },
  {
    title: 'Appointment & open home automation',
    description: 'Scheduling, reminders, and feedback requests handled automatically.',
  },
  {
    title: 'Cold lead re-engagement',
    description: 'Automatically surface and activate leads from 6–12 months ago.',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            What we build for you
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-baseline py-8 border-b border-border/60 last:border-b-0 group"
            >
              <div className="text-3xl font-serif text-secondary/30 w-20 flex-shrink-0 mb-2 md:mb-0 transition-colors group-hover:text-secondary">
                {String(idx + 1).padStart(2, '0')}.
              </div>
              <div className="flex-1 md:pr-12">
                <h3 className="text-xl font-sans font-medium text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
