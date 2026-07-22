import { motion } from 'framer-motion';
import { MessageCircle, Workflow, Rocket } from 'lucide-react';
import { WorkflowVisualization } from './WorkflowVisualization';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Discovery Call',
    description: 'We talk through your bottlenecks, your workflow, and where you\'re losing time. No sales pitch - just understanding your business.',
    color: 'hsl(var(--accent))',
  },
  {
    number: '02',
    icon: Workflow,
    title: 'Custom Automation Design',
    description: 'Summer-Louise builds your exact workflow in Make.com. Lead capture, CRM setup, follow-up sequences - tailored to how you actually work.',
    color: 'hsl(var(--primary))',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Support',
    description: 'Your automations go live. Leads get captured, follow-ups get sent, deals move forward - while you focus on what you do best. Ongoing support included.',
    color: 'hsl(var(--chart-4))',
  },
];

const processWorkflow = {
  nodes: [
    { id: 'discovery', label: 'Discovery', icon: '\u{1F4AC}', x: 150, y: 250, color: 'hsl(var(--accent))' },
    { id: 'design', label: 'Design', icon: '\u{2699}\u{FE0F}', x: 400, y: 250, color: 'hsl(var(--primary))' },
    { id: 'launch', label: 'Launch', icon: '\u{1F680}', x: 650, y: 250, color: 'hsl(var(--chart-4))' },
  ],
  connections: [
    { from: 'discovery', to: 'design' },
    { from: 'design', to: 'launch' },
  ],
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Three steps. No complexity. Just a system that works for you.
          </p>
        </motion.div>

        {/* Workflow visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16 bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50"
        >
          <WorkflowVisualization
            nodes={processWorkflow.nodes}
            connections={processWorkflow.connections}
            className="h-[300px] md:h-[400px]"
          />
        </motion.div>

        {/* Step cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative group"
            >
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent" />
              )}

              <div className="h-full bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {/* Step number */}
                <div className="text-6xl font-bold font-display text-muted/20 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon size={32} strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-bold font-display mb-4 text-foreground">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl px-8 py-6">
            <p className="text-lg font-semibold text-foreground mb-2">
              From first call to live automation: typically 2-4 weeks
            </p>
            <p className="text-muted-foreground">
              Fast, focused, and built to last.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
