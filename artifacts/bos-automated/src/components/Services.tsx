import { motion } from 'framer-motion';
import { Database, Send, Megaphone, FileCheck, Users, Calendar, RotateCcw, Workflow } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Lead Capture & CRM Setup',
    description: 'Unify every lead source into one clean system. REA, Domain, Facebook, website — all feeding one CRM that actually works.',
    color: 'hsl(var(--primary))',
  },
  {
    icon: Send,
    title: 'Automated Follow-up Sequences',
    description: 'Multi-channel drip campaigns that nurture leads via email and SMS without you lifting a finger. Personal, timely, automatic.',
    color: 'hsl(var(--accent))',
  },
  {
    icon: Megaphone,
    title: 'Marketing Flows & Outreach',
    description: 'Triggered campaigns that respond to buyer behaviour. Just listed a property? Your database gets notified. Lead went cold? Re-engage automatically.',
    color: 'hsl(var(--chart-4))',
  },
  {
    icon: FileCheck,
    title: 'Quote & Proposal Automation',
    description: 'Generate contracts, proposals, and vendor kits from templates with smart data merge. Stop rebuilding the same documents.',
    color: 'hsl(var(--primary))',
  },
  {
    icon: Users,
    title: 'Vendor & Buyer Nurture Pipelines',
    description: 'Set-and-forget workflows that keep appraisals warm, follow up with buyers, and move people through your funnel.',
    color: 'hsl(var(--accent))',
  },
  {
    icon: Calendar,
    title: 'Appointment & Open Home Automation',
    description: 'Scheduling, reminders, confirmations, feedback requests — all handled automatically. You just show up.',
    color: 'hsl(var(--chart-4))',
  },
  {
    icon: RotateCcw,
    title: 'Cold Lead Re-engagement',
    description: 'Automatically surface and re-activate leads from 6–12 months ago with targeted campaigns. Turn dead leads into warm opportunities.',
    color: 'hsl(var(--primary))',
  },
  {
    icon: Workflow,
    title: 'Full Business Workflow Design',
    description: 'Custom end-to-end automation built around how your agency actually works. Not a template — a system designed for you.',
    color: 'hsl(var(--accent))',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
            What BOS Automated{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              can build for you
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            These aren't off-the-shelf solutions. Every automation is custom-built for your business, your leads, your workflow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl text-white transition-transform group-hover:scale-110"
                style={{ backgroundColor: service.color }}
              >
                <service.icon size={28} strokeWidth={2} />
              </div>
              
              <h3 className="text-lg font-bold font-display mb-3 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Node-style connector dot */}
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
