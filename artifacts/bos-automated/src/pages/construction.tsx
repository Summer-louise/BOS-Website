import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Phone, FolderOpen, MessageSquare, Star } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { ContactDropdown } from '@/components/ContactDropdown';

const CALENDLY = 'https://calendly.com/summer-bosautomated/30min';


const painPoints = [
  "I'm up on a roof and my phone rings. By the time I'm back on the ground and call back, they've already booked someone else.",
  "I'm on site all day and can't stop to answer every call or message. By the time I'm done, half of them have moved on.",
  "Leads come in from everywhere. Phone calls, Facebook messages, your website, referrals from mates. They all end up scattered, nothing's tracked in one place, so some just get forgotten.",
  "A quote goes out and then... nothing. No one's chasing it up, so jobs that should've been booked just go cold.",
];

const features = [
  {
    icon: Phone,
    title: 'Missed Call Text-Back',
    body: "Someone calls while you're on a roof or on site and you can't pick up? They get an instant text back so they know you got it. Instead of hanging up and calling the next trade on Google.",
  },
  {
    icon: FolderOpen,
    title: 'One Place for Every Lead',
    body: "Calls, Facebook messages, website enquiries, referrals. Everything lands in one system automatically. Nothing gets lost in a text thread or forgotten on a scrap of paper.",
  },
  {
    icon: MessageSquare,
    title: 'Automatic Follow-Up',
    body: "Sent a quote and haven't heard back? The system nudges them for you. A few days later, then again, until they book or say no. You stop losing jobs to silence.",
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
  useEffect(() => {
    const title = 'Roofing & Construction Automation — Sunshine Coast | BOS Automated';
    const description = 'Stop losing leads when you\'re on a roof. Automated missed-call text-back, lead tracking, and quote follow-up for roofing businesses on the Sunshine Coast.';
    const canonical = 'https://bosautomated.com/construction';

    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.setAttribute('href', canonical);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Simple header */}
      <header className="w-full border-b border-border/40 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex flex-col gap-0.5">
            <img src="/logo.svg" alt="BOS Automated" className="h-9 w-auto" />
            <span className="text-[8px] tracking-widest uppercase font-sans text-muted-foreground/70 leading-none">
              Business Optimisation Systems
            </span>
          </Link>
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <motion.div {...fadeUp} className="max-w-[620px]">
            <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-6 block">
              Trades &amp; Construction
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.05] mb-6">
              Don't lose leads because you were on site.
            </h1>
            <p className="text-xl text-foreground/70 font-light leading-relaxed mb-10 max-w-[560px]">
              Automation that answers, tracks, and follows up on every lead. Nothing falls through the cracks while you're busy doing the actual work.
            </p>
            <ContactDropdown />
          </motion.div>

          {/* Portrait — trust signal, not focal point */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
            className="flex-shrink-0 flex flex-col items-center gap-3 md:items-end"
          >
            <div
              className="w-36 h-36 md:w-44 md:h-44 overflow-hidden rounded-full border border-border/30"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
            >
              <img
                src="/summer.png"
                alt="Summer-Louise Bevan, BOS Automated"
                className="w-full h-full object-cover"
                style={{ objectPosition: '55% 22%', transform: 'scale(1.9)', transformOrigin: 'center 39%' }}
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground">Summer-Louise Bevan</p>
              <p className="text-xs text-muted-foreground/60 font-light">Sunshine Coast</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sound Familiar */}
      <section className="bg-muted/40 py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-4 block">
              The problem
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
                <p className="text-foreground/80 font-light leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="text-base text-foreground/60 font-light italic max-w-[600px]">
            None of this is because you're bad at your job. It's because you're doing ten jobs at once and follow-up takes a system, not more hours in the day.
          </motion.p>
        </div>
      </section>

      {/* Turn up. Do the job. Get paid. */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-4 block">
                The goal
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.05] mb-6">
                Turn up.<br />Do the job.<br />Get paid.
              </h2>
              <p className="text-lg text-foreground/70 font-light leading-relaxed">
                You got into this to build things, not to spend your evenings chasing quotes and answering texts. The admin should handle itself.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col gap-5"
            >
              {[
                { label: 'Admin sorted', body: 'Every lead, quote, and follow-up handled in the background. Nothing slips, nothing gets forgotten.' },
                { label: 'Calendar filled', body: 'Bookings come in automatically. You wake up knowing what the week looks like, not scrambling to fill it.' },
                { label: 'Less time on the phone', body: 'The system does the chasing. You talk to customers when it counts, not just to keep things moving.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-1 self-stretch bg-primary/40 flex-shrink-0 rounded-full" />
                  <div>
                    <p className="font-serif text-lg text-foreground mb-1">{item.label}</p>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Build For You */}
      <section className="bg-muted/40 py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-4 block">
              What I build for you
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.1] mb-4">
              What I build for you
            </h2>
            <p className="text-lg text-foreground/70 font-light max-w-[560px]">
              This is what automation actually looks like for a trades business. No new software to learn, no extra admin. It just runs in the background.
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
                className="bg-background border border-border/60 px-7 py-7 flex flex-col gap-4"
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
              If any of this sounds like your business, I'd like to show you what it would actually look like set up for you. No cost, no obligation, just a quick look at where the leaks are and how to plug them.
            </p>
            <ContactDropdown openUp />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
