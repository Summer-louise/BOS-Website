import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ContactDropdown } from '@/components/ContactDropdown';

export function Contact() {
  return (
    <section id="contact" className="w-full bg-accent text-accent-foreground py-32 mt-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6">
              Ready to get your time back?
            </h2>
            <p className="text-xl text-accent-foreground/70 font-light mb-3">
              Let's have a conversation about what's possible for your business.
            </p>
            <p className="text-sm text-accent-foreground/50 font-light mb-12 uppercase tracking-widest">
              No obligation. No jargon. Just a conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-10 flex-wrap items-start">
              <ContactDropdown label="Let's talk" openUp buttonClassName="inline-flex items-center gap-3 border border-accent-foreground/60 hover:border-accent-foreground text-accent-foreground font-sans font-medium text-base px-8 py-4 transition-all duration-200 hover:bg-accent-foreground/10" />

              <a 
                href="mailto:summer@bosautomated.com"
                className="group flex flex-col gap-2"
              >
                <span className="text-sm uppercase tracking-wider text-accent-foreground/50 font-sans">Email</span>
                <span className="text-xl font-serif flex items-center gap-2 group-hover:opacity-80 transition-opacity">
                  summer@bosautomated.com
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href="tel:0473510197"
                className="group flex flex-col gap-2"
              >
                <span className="text-sm uppercase tracking-wider text-accent-foreground/50 font-sans">Phone</span>
                <span className="text-xl font-serif flex items-center gap-2 group-hover:opacity-80 transition-opacity">
                  0473 510 197
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm text-accent-foreground/50 font-light uppercase tracking-widest lg:text-right"
          >
            Based on the Sunshine Coast, QLD<br />
            Working with businesses Australia-wide
          </motion.div>
        </div>
      </div>
    </section>
  );
}
