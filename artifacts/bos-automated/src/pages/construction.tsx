import { motion } from 'framer-motion';
import { ArrowRight, Phone, FolderOpen, MessageSquare, Star } from 'lucide-react';
import { Footer } from '@/components/Footer';

const CALENDLY = 'https://calendly.com/summer-bosautomated/30min';

const painPoints = [
  "You're up on a roof, your phone rings, and you can't answer it. By the time you're down and call back, they've already booked the next guy on the list.",
  "Leads come in from everywhere — phone calls, Facebook messages, your website, referrals from mates — and they all end up scattered. Nothing's tracked in one place, so some just get forgotten.",
  "A quote goes out and then... nothing. No one's chasing it up, so jobs that should've been booked just go cold.",
  "Word travels fast on the Sunshine Coast. Even when the work is great, if people feel like they got left on read, that's the story that gets told.",
];

const features = [
  {
    icon: Phone,
    title: 'Missed Call Text-Back',
    body: "Someone calls while you're on a roof and you can't pick up? They get an instant text back so they know you got it and haven't been ignored — instead of hanging up and calling the next roofer on Google.",
  },
  {
    icon: FolderOpen,
    title: 'One Place for Every Lead',
    body: "Calls, Facebook messages, website enquiries, referrals — everything lands in one system automatically. Nothing gets lost in a text thread or forgotten on a scrap of paper.",
  },
  {
    icon: MessageSquare,
    title: 'Automatic Follow-Up',
    body: "Sent a quote and haven't heard back? The system nudges them for you — a few days later, then again — until they book or say no. You stop losing jobs to silence.",
  },
  {
    icon: Star,
    title: 'Review Requests, Sent Automatically',
    body: "After a job's done, a review request goes out on its own. More good reviews, less admin, and it directly fixes the \"can I trust this roofer\" question before it's even asked.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, ease: 'easeOut' },
};

export default function Construction() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Simple header */}
      <header className="w-full border-b border-border/40 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <img src="/logo.svg" alt="BOS Automated" className="h-9 w-auto" />
            <span className="text-[8px] tracking-widest uppercase font-sans text-muted-foreground/70 leading-none">
              Business Optimisation Systems
            </span>
          </div>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-200"
          >
            Book a Call
            <ArrowRight size={14} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <motion.div {...fadeUp} className="max-w-[720px]">
          <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-6 block">
            Roofing &amp; Construction
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.05] mb-6">
            Don't lose leads because you were on a roof.
          </h1>
          <p className="text-xl text-foreground/70 font-light leading-relaxed mb-10 max-w-[560px]">
            Automation that answers, tracks, and follows up on every lead — so nothing falls through the cracks while you're busy doing the actual work.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium text-base px-8 py-4 transition-all duration-200 hover:shadow-md"
          >
            Book a Call
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </section>

      {/* Sound Familiar */}
      <section className="bg-muted/40 py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-4 block">
              Sound familiar?
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.1] mb-4">
              Sound familiar?
            </h2>
            <p className="text-lg text-foreground/70 font-light max-w-[540px]">
              Talk to any roofing business on the Coast and you'll hear some version of this:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.08 }}
                className="bg-background border border-border/60 px-7 py-6"
              >
                <p className="text-foreground/80 font-light leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="text-base text-foreground/60 font-light italic max-w-[600px]">
            None of this is because you're bad at your job. It's because you're doing ten jobs at once and follow-up takes a system, not more hours in the day.
          </motion.p>
        </div>
      </section>

      {/* What I Build For You */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-4 block">
              What I build for you
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.1] mb-4">
              What I build for you
            </h2>
            <p className="text-lg text-foreground/70 font-light max-w-[560px]">
              This is what automation actually looks like for a roofing business — no new software to learn, no extra admin. It just runs in the background.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.08 }}
                className="border border-border/60 px-7 py-7 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <f.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-foreground mb-2">{f.title}</h3>
                  <p className="text-foreground/70 font-light leading-relaxed">{f.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-24" style={{ backgroundColor: 'hsl(152 28% 17%)' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <motion.div {...fadeUp} className="max-w-[620px]">
            <h2 className="text-4xl md:text-5xl font-serif text-background leading-[1.1] mb-6">
              This is the exact kind of thing I build.
            </h2>
            <p className="text-lg text-background/70 font-light leading-relaxed mb-10">
              If any of this sounds like your business, I'd like to show you what it would actually look like set up for you — no cost, no obligation, just a quick look at where the leaks are and how to plug them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium text-base px-8 py-4 transition-all duration-200 hover:shadow-md"
              >
                Book a Call
                <ArrowRight size={16} />
              </a>
              <a
                href="mailto:summer@bosautomated.com"
                className="inline-flex items-center gap-3 text-background/80 hover:text-background font-sans font-medium text-base px-8 py-4 border border-background/20 hover:border-background/40 transition-all duration-200"
              >
                Reply to my email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
