import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WorkflowVisualization } from './WorkflowVisualization';

export function Hero() {
  const heroWorkflow = {
    nodes: [
      { id: 'lead', label: 'Lead In', icon: '\u{1F4EC}', x: 100, y: 250, color: 'hsl(var(--accent))' },
      { id: 'capture', label: 'CRM Capture', icon: '\u{1F4BE}', x: 250, y: 150, color: 'hsl(var(--primary))' },
      { id: 'follow', label: 'Auto Follow-up', icon: '\u{1F4E7}', x: 400, y: 150, color: 'hsl(var(--chart-4))' },
      { id: 'appt', label: 'Appointment', icon: '\u{1F4C5}', x: 550, y: 250, color: 'hsl(var(--accent))' },
      { id: 'deal', label: 'Deal Closed', icon: '\u{2713}', x: 700, y: 250, color: 'hsl(var(--primary))' },
    ],
    connections: [
      { from: 'lead', to: 'capture' },
      { from: 'capture', to: 'follow' },
      { from: 'follow', to: 'appt' },
      { from: 'appt', to: 'deal' },
    ],
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background pt-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold font-display">
                Sunshine Coast Automation Specialist
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.1] mb-6"
            >
              Your business,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                running itself
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Stop drowning in admin. BOS Automated builds intelligent Make.com workflows that capture leads, nurture clients, and close deals while you focus on what actually matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all group"
                data-testid="button-hero-cta"
              >
                Get Your Time Back
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-base px-8 py-6 rounded-xl font-semibold"
                data-testid="button-hero-learn-more"
              >
                How It Works
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 pt-8 border-t border-border/50"
            >
              <p className="text-sm text-muted-foreground mb-3">Trusted by real estate agents across the Sunshine Coast</p>
              <div className="flex items-center gap-6 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold font-display text-foreground">10+</div>
                  <div className="text-xs text-muted-foreground">Hours Saved Weekly</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold font-display text-foreground">100%</div>
                  <div className="text-xs text-muted-foreground">Lead Capture Rate</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold font-display text-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground">Automated Follow-up</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Workflow Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-2xl">
              <WorkflowVisualization
                nodes={heroWorkflow.nodes}
                connections={heroWorkflow.connections}
                className="h-[400px] md:h-[500px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
