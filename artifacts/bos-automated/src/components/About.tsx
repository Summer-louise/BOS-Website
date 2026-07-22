import { motion } from 'framer-motion';
import { Heart, Sparkles, MapPin } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 border border-border/50">
                <Avatar className="w-48 h-48 mx-auto mb-6 ring-4 ring-background shadow-2xl">
                  <AvatarFallback className="text-4xl font-bold font-display bg-gradient-to-br from-primary to-accent text-white">
                    SLB
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold font-display mb-1">Summer-Louise Bevan</h3>
                  <p className="text-muted-foreground mb-4">Founder, BOS Automated</p>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border text-sm">
                    <MapPin size={16} className="text-primary" />
                    <span className="font-medium">Sunshine Coast, QLD</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              <Heart size={16} />
              <span>Real solutions, real person</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
              Not a tech agency.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                A local expert who gets it.
              </span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Summer-Louise isn't a software developer who stumbled into consulting. She's a former cafe owner from Mount Coolum who ran a real business — dealing with suppliers, staff rosters, inventory chaos, and customer flow — and discovered a passion for making messy operations <em>work</em>.
              </p>

              <p>
                After 2-3 years deep in Make.com automations, she's built systems that eliminate bottlenecks most business owners don't even realise they have. She doesn't sell you a template and disappear. She builds something that fits how <em>you</em> actually work.
              </p>

              <p className="flex items-start gap-3 pt-2">
                <Sparkles size={24} className="text-accent flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-foreground">Her philosophy:</strong> Technology should make your life easier, not harder. If a system doesn't save you real time and real stress, it's not worth building. She's not here to impress you with complexity — she's here to give you your time back.
                </span>
              </p>
            </div>

            <div className="mt-8 p-6 bg-card border border-border rounded-2xl">
              <p className="text-foreground font-semibold mb-2">
                "I love finding solutions people didn't know were possible."
              </p>
              <p className="text-sm text-muted-foreground">
                That's the energy Summer-Louise brings. Not corporate, not transactional — just someone who genuinely cares about making your business run better.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
