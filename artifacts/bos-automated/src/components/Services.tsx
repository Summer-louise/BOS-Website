import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Service = {
  title: string;
  tagline: string;
  problem: string;
  howItWorks: string[];
  tools: string[];
  payoff: string;
};

const services: Service[] = [
  {
    title: 'Lead Capture & CRM Sync',
    tagline: 'Every enquiry and registration lands in your CRM. Automatically.',
    problem:
      'Leads come in from Eventbrite, your website, open home sign-in sheets, and word of mouth. By the time you manually enter them all, the moment has passed — and half end up missing or entered wrong.',
    howItWorks: [
      'Lead submits a form, registers for an event, or makes an enquiry',
      'System instantly checks your CRM for a matching email address',
      'Existing contact updated, or a new record created — in seconds',
      'Confirmation email sent to the lead automatically',
      'All activity logged so your pipeline is always current',
    ],
    tools: ['Airtable', 'Eventbrite', 'Google Forms', 'Brevo'],
    payoff:
      'You run a 60-person CPD session. Every attendee is in your CRM by the time you walk out the door. Zero data entry.',
  },
  {
    title: 'Targeted Email Campaigns',
    tagline: 'Filter your database, send personalised emails, log everything — no manual work.',
    problem:
      'You want to reach cold leads from 6 months ago, or everyone who attended your last event but hasn\'t listed yet. Filtering, exporting, and sending individually takes hours — so it just doesn\'t happen.',
    howItWorks: [
      'Define your criteria — by lead status, last contact date, event attendance, or any CRM field',
      'System finds every matching lead automatically',
      'Personalised email sent from your own Gmail or Outlook account',
      'Send activity logged to each lead\'s CRM record',
      'Leads marked as contacted so you never double-up',
    ],
    tools: ['Airtable', 'Gmail', 'Outlook', 'Brevo'],
    payoff:
      'After your April CPD session, every attendee receives the recording. 47 emails sent, logged, and done — in the time it takes to make a coffee.',
  },
  {
    title: 'Email Engagement Tracking',
    tagline: 'Know exactly who\'s opening your emails, logged to their record automatically.',
    problem:
      'You send campaigns but follow up blind. No idea who\'s engaged and who\'s gone cold, so you waste calls on the wrong people and miss the ones who are ready.',
    howItWorks: [
      'Lead opens or clicks a link in your email campaign',
      'Engagement event captured the moment it happens',
      'System looks up the lead in your CRM',
      'Open date, click, campaign name all logged to their contact record',
      'Warmest leads rise to the top — you know who to call first',
    ],
    tools: ['Brevo', 'Airtable', 'Custom email hooks'],
    payoff:
      'You can see that Marcus opened your last three emails and clicked the appraisal link twice. That\'s your next call.',
  },
  {
    title: 'Lead Enrichment & Database Cleaning',
    tagline: 'Fill the gaps. Remove duplicates. Walk into every conversation informed.',
    problem:
      'Half your CRM has missing phone numbers, incomplete company details, or the same contact entered three times under different spellings. Bad data means wasted effort and embarrassing double-ups.',
    howItWorks: [
      'New lead added to CRM — enrichment checks run automatically',
      'Apollo queried for phone number, LinkedIn, company, and email',
      'For builders and tradespeople: QBCC licence status and company details pulled automatically',
      'Duplicate scan checks your existing database for matches and flags them',
      'CRM updated with clean, complete data — no manual research required',
    ],
    tools: ['Apollo', 'QBCC via Apify', 'Airtable', 'Google Sheets'],
    payoff:
      'A builder enquires about selling their site. Before you call back, their licence status, company, and LinkedIn profile are already in your CRM.',
  },
  {
    title: 'Event & CPD Management',
    tagline: 'Registrations, reminders, cancellations, and post-event follow-up — all handled automatically.',
    problem:
      'Running a CPD or networking event means managing a spreadsheet, sending manual confirmations, handling cancellations one by one, then emailing the recording to 50 people. It takes more time than the event itself.',
    howItWorks: [
      'Registration: form submitted → CRM checked → record created or updated → confirmation email sent in seconds',
      'Reminders: lead added to automated reminder sequence in your email tool, timed to the event date',
      'Cancellation: detected from your spreadsheet → you\'re notified instantly → registrant gets a confirmation → records updated',
      'Post-event: recording ready → system finds all attendees → personalised email sent to each one → all logged to their records',
    ],
    tools: ['Google Sheets', 'Eventbrite', 'Airtable', 'Brevo', 'Gmail', 'Outlook'],
    payoff: 'You run the event. The admin runs itself.',
  },
  {
    title: 'Marketing List & Newsletter Automation',
    tagline: 'Opt-ins go straight to the right list. Website engagement tracked to the contact.',
    problem:
      'Leads opt in to your newsletter but you have to manually export from your CRM and import into your email tool. Someone always gets missed, added to the wrong list, or left waiting until you have time.',
    howItWorks: [
      'Lead\'s opt-in status changes in your CRM (or they fill in a form)',
      'System detects the change and checks your email marketing tool',
      'Contact added to the correct list or segment automatically',
      'Activity logged to their CRM record',
      'Nurture or newsletter sequence begins — no manual trigger needed',
    ],
    tools: ['Airtable', 'Brevo', 'Google Tag Manager'],
    payoff:
      'A lead from your open home opts in on the spot. They\'re on your next market update before you\'ve driven home.',
  },
];

function ServiceRow({ service, idx, isOpen, onToggle }: {
  service: Service;
  idx: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full text-left flex flex-col md:flex-row md:items-baseline py-8 group transition-colors hover:bg-muted/20 px-0"
      >
        <div className={`text-3xl font-serif w-20 flex-shrink-0 mb-2 md:mb-0 transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-secondary/30 group-hover:text-secondary'}`}>
          {String(idx + 1).padStart(2, '0')}.
        </div>
        <div className="flex-1 md:pr-12">
          <h3 className="text-xl font-sans font-medium text-foreground mb-1.5">
            {service.title}
          </h3>
          <p className="text-base text-muted-foreground font-light leading-relaxed">
            {service.tagline}
          </p>
        </div>
        <div className={`flex-shrink-0 mt-4 md:mt-0 md:pl-6 text-2xl transition-transform duration-300 text-muted-foreground ${isOpen ? 'rotate-45' : ''}`}>
          +
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="md:pl-20 pb-10 grid md:grid-cols-2 gap-8">
              {/* Problem */}
              <div className="bg-primary/6 border-l-2 border-primary/40 px-6 py-5">
                <p className="text-xs uppercase tracking-widest font-sans text-primary/70 mb-3">The problem</p>
                <p className="text-sm text-foreground font-light leading-relaxed">{service.problem}</p>
              </div>

              {/* How it works */}
              <div>
                <p className="text-xs uppercase tracking-widest font-sans text-muted-foreground mb-4">How it works</p>
                <ol className="space-y-2.5">
                  {service.howItWorks.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm font-light text-foreground leading-relaxed">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 text-secondary text-[10px] font-medium flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tools + payoff — full width */}
              <div className="md:col-span-2 flex flex-col md:flex-row gap-6 items-start md:items-end">
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest font-sans text-muted-foreground mb-3">Tools used</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map(t => (
                      <span key={t} className="px-3 py-1 text-xs font-sans bg-muted text-muted-foreground rounded-full border border-border/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-1 md:border-l md:border-border/40 md:pl-6">
                  <p className="text-xs uppercase tracking-widest font-sans text-muted-foreground mb-2">Real-world outcome</p>
                  <p className="text-sm font-serif italic text-foreground/80 leading-relaxed">"{service.payoff}"</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="services" className="w-full">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground block mb-4">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-5">
            What I build for you.
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl">
            Click any service to see exactly what the automation does, how it works step by step, and what it means for your day-to-day as an agent.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service, idx) => (
            <ServiceRow
              key={idx}
              service={service}
              idx={idx}
              isOpen={openIdx === idx}
              onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
