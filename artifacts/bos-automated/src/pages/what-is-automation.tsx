import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'Do I need to be technical to use this?',
    a: 'Not at all. You describe what you want to happen ("when someone fills in my contact form, I want it to go into my spreadsheet and send them a welcome email"). Summer builds it. You use it.',
  },
  {
    q: 'Does it replace my existing tools?',
    a: 'No. Automations connect the tools you already use, your email, your CRM, your forms, your calendar, and make them talk to each other. Nothing gets replaced unless you want it to.',
  },
  {
    q: 'What if something goes wrong?',
    a: 'Make.com logs every run. If a step fails, you get notified. Summer also builds in error handling so that edge cases are caught before they become problems.',
  },
  {
    q: 'Is this only for big businesses?',
    a: 'The opposite, actually. Larger businesses already have whole IT departments. Automations are most valuable for small business owners who are wearing every hat themselves and losing hours to repetitive admin.',
  },
  {
    q: 'How long does it take to set up?',
    a: 'A single automation can be live in a day. A full suite of connected workflows typically takes a few weeks, depending on complexity and how many tools are involved.',
  },
];

const examples = [
  {
    before: 'Someone fills in your contact form on your website.',
    after: 'Their details land in your CRM, a welcome email goes out from your address, and a reminder pops up in your calendar for tomorrow morning.',
    label: 'Lead capture',
  },
  {
    before: 'You finish a CPD session with 40 attendees.',
    after: 'Every attendee is added to your database, tagged as "CPD: July", and receives the recording link, while you\'re still packing up the room.',
    label: 'Event follow-up',
  },
  {
    before: 'A prospect from six months ago goes quiet.',
    after: 'At the 3-month and 6-month mark, a personalised check-in email goes out automatically. If they click, you get notified.',
    label: 'Lead nurture',
  },
];

export default function WhatIsAutomation() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 py-4">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between">
          <button onClick={() => navigate('/')}>
            <img src="/logo.svg" alt="BOS Automated" className="h-10 w-auto" />
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={15} strokeWidth={1.5} />
            Back to main site
          </button>
        </div>
      </div>

      <div className="max-w-[780px] mx-auto px-5 md:px-8 pt-36 pb-32">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground block mb-6">
            Plain-language explainer
          </span>
          <h1 className="text-5xl md:text-6xl font-serif leading-[1.08] text-foreground mb-8">
            What is a digital automation?
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            If you have ever wished a repetitive task would just do itself, that is exactly what an automation does.
          </p>
        </motion.div>

        {/* Core explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-10 mb-24"
        >
          <div className="prose-like space-y-6 text-lg text-foreground font-light leading-relaxed">
            <p>
              Think of a digital automation as a set of instructions that runs in the background of your business, invisibly, instantly, and without you lifting a finger.
            </p>
            <p>
              It works like this: <span className="font-medium text-foreground">when something happens</span> (a new lead enquires, someone fills in a form, a date arrives), the automation <span className="font-medium text-foreground">does something in response</span> (sends an email, updates a spreadsheet, adds a record to your CRM, creates a calendar event).
            </p>
            <p>
              You set the rules once. After that, it runs on its own, every time, without fail, even while you are asleep or with a client.
            </p>
          </div>

          {/* Pull quote */}
          <div className="border-l-[3px] border-l-primary pl-8 py-2 my-10">
            <p className="text-2xl font-serif italic text-foreground/80 leading-snug">
              "It is like having a highly organised assistant who never forgets, never gets tired, and handles the same task the same way every single time."
            </p>
          </div>

          <div className="prose-like space-y-6 text-lg text-foreground font-light leading-relaxed">
            <p>
              The tools your business already uses, your email, your calendar, your spreadsheets, your CRM, your forms, do not naturally talk to each other. Automations are the connections between them. They pass information from one tool to the next so you do not have to do it by hand.
            </p>
            <p>
              No code. No technical knowledge needed on your end. You describe what you want to happen, and it gets built for you.
            </p>
          </div>
        </motion.div>

        {/* Before / After examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
            What it looks like in real life
          </h2>
          <p className="text-base text-muted-foreground font-light mb-12">
            Here are three examples of what happens without an automation, and what happens with one.
          </p>

          <div className="space-y-6">
            {examples.map((ex, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="border border-border/60 rounded-sm overflow-hidden"
              >
                <div className="px-5 py-2 bg-muted/40 border-b border-border/40">
                  <span className="text-xs font-sans uppercase tracking-widest text-muted-foreground">{ex.label}</span>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/50">
                  <div className="px-6 py-6">
                    <p className="text-[10px] font-sans uppercase tracking-widest text-muted-foreground mb-3">Without automation</p>
                    <p className="text-base text-foreground font-light leading-relaxed">{ex.before}</p>
                    <p className="text-sm text-muted-foreground font-light mt-3 italic">You do the rest manually.</p>
                  </div>
                  <div className="px-6 py-6 bg-primary/[0.03]">
                    <p className="text-[10px] font-sans uppercase tracking-widest text-primary/70 mb-3">With automation</p>
                    <p className="text-base text-foreground font-light leading-relaxed">{ex.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12">
            Common questions
          </h2>

          <div className="space-y-0 divide-y divide-border/50">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.07, duration: 0.5 }}
                className="py-8"
              >
                <h3 className="text-lg font-sans font-medium text-foreground mb-3">{faq.q}</h3>
                <p className="text-base text-muted-foreground font-light leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="bg-accent text-accent-foreground px-10 py-12 rounded-sm"
        >
          <h2 className="text-3xl md:text-4xl font-serif leading-snug mb-4">
            Sounds useful?
          </h2>
          <p className="text-lg text-accent-foreground/70 font-light mb-8 max-w-xl">
            You do not need to know exactly what you need. A 20-minute conversation is enough to figure out where automation can save you the most time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium text-base px-8 py-4 transition-all duration-200 hover:shadow-md w-fit"
            >
              See what I build
              <ArrowRight size={16} />
            </button>
            <a
              href="mailto:summer@bosautomated.com"
              className="flex items-center gap-3 text-accent-foreground hover:text-accent-foreground/80 font-sans font-medium text-base px-8 py-4 border border-accent-foreground/20 hover:border-accent-foreground/40 transition-all duration-200 w-fit"
            >
              Email Summer directly
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
