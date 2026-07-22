import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
              Ready to get{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                your time back?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's have a chat about your business. No obligations, no pressure — just an honest conversation about whether automation makes sense for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-2xl"
          >
            <div className="grid sm:grid-cols-3 gap-8 mb-10">
              <a
                href="mailto:summer@bosautomated.com"
                className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-primary/5 transition-colors"
                data-testid="link-contact-email"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Mail size={24} />
                </div>
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  summer@bosautomated.com
                </div>
              </a>

              <a
                href="tel:0473510197"
                className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-accent/5 transition-colors"
                data-testid="link-contact-phone"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <Phone size={24} />
                </div>
                <div className="text-sm text-muted-foreground mb-1">Phone</div>
                <div className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  0473 510 197
                </div>
              </a>

              <div className="flex flex-col items-center text-center p-6">
                <div className="w-14 h-14 rounded-full bg-muted text-foreground flex items-center justify-center mb-4">
                  <MapPin size={24} />
                </div>
                <div className="text-sm text-muted-foreground mb-1">Location</div>
                <div className="font-semibold text-foreground">
                  Sunshine Coast, QLD
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all group"
                  data-testid="button-contact-email-cta"
                >
                  <a href="mailto:summer@bosautomated.com">
                    Send an Email
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 rounded-xl font-semibold"
                  data-testid="button-contact-phone-cta"
                >
                  <a href="tel:0473510197">Call Now</a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            <p>Sunshine Coast referrals welcome. Word-of-mouth is how we grow.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
