import { motion } from 'framer-motion';
import { Home, Printer, HardHat } from 'lucide-react';

const industries = [
  {
    icon: Home,
    title: 'Real Estate Agents',
    status: 'primary',
    description: 'Lead management, CRM automation, vendor nurture, appraisal flows, open home coordination, and deal pipelines.',
    badge: 'Core Focus',
  },
  {
    icon: Printer,
    title: 'Print & Design',
    status: 'expanding',
    description: 'Quote automation, order workflow management, client onboarding, and project tracking systems.',
    badge: 'Expanding',
  },
  {
    icon: HardHat,
    title: 'Construction & Roofing',
    status: 'expanding',
    description: 'Job quoting, client communication flows, project milestone tracking, and supplier coordination.',
    badge: 'Expanding',
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-32 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Starting local, growing smart. Real estate is our heartland — with plans to bring the same precision to other Sunshine Coast industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative group ${
                industry.status === 'primary'
                  ? 'md:col-span-3 lg:col-span-1 lg:row-span-1'
                  : ''
              }`}
            >
              <div
                className={`h-full bg-card border rounded-2xl p-8 transition-all duration-300 ${
                  industry.status === 'primary'
                    ? 'border-primary shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20'
                    : 'border-border hover:border-accent/50 hover:shadow-xl'
                } hover:-translate-y-2`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-all ${
                      industry.status === 'primary'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground group-hover:bg-accent group-hover:text-accent-foreground'
                    }`}
                  >
                    <industry.icon size={32} strokeWidth={2} />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      industry.status === 'primary'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {industry.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display mb-4 text-foreground">
                  {industry.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>

                {industry.status === 'primary' && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Deep expertise and proven systems
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Need automation for a different industry?{' '}
            <a href="#contact" className="text-primary font-semibold hover:underline" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Let's talk
            </a>
            {' '}— if there's a repetitive process, it can be automated.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
