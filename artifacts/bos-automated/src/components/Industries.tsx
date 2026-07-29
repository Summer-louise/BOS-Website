import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const industries = [
  {
    name: 'Real Estate Agents',
    description: 'Instant lead response, CRM sync, appraisal follow-up, open home automation, and vendor nurture. Every part of the pipeline, running without you.',
    link: null,
  },
  {
    name: 'Construction & Roofing',
    description: 'Lead capture, follow-up nurturing, job scheduling, and quoting — from first enquiry through to site visit and approval.',
    link: '/construction',
  },
];

export function Industries() {
  return (
    <section id="industries" className="w-full">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-12">
            Who I work with
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-24">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="flex flex-col items-center max-w-[320px]"
              >
                {ind.link ? (
                  <Link href={ind.link} className="group font-serif text-2xl text-foreground mb-3 inline-flex items-center gap-2 hover:text-primary transition-colors duration-200">
                    {ind.name}
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                ) : (
                  <h3 className="font-serif text-2xl text-foreground mb-3">
                    {ind.name}
                  </h3>
                )}
                <div className="w-10 h-[1.5px] bg-primary/50 mb-4" />
                <p className="text-sm text-muted-foreground font-light text-center leading-relaxed">
                  {ind.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
