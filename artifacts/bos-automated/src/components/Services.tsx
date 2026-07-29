import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';

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
    title: 'Instant Lead Response',
    tagline: 'Every enquiry gets a reply in seconds, even when your hands are full.',
    problem:
      'A buyer enquires on REA while you\'re mid-inspection. You see it two hours later. By then they\'ve enquired on three other listings, and one of those agents already called them back. You didn\'t lose that lead because you\'re bad at your job. You lost it because you were doing your job. Speed is everything, and you can\'t be on the phone while you\'re selling a house.',
    howItWorks: [
      'An enquiry comes in from REA, Domain, Facebook, your website, or a missed call',
      'The lead gets an instant, personalised text and email in your name, within seconds',
      'They\'re told you\'ve got them and exactly what happens next, so they stop shopping around',
      'The lead lands in your CRM and calendar at the same moment, logged and impossible to miss',
      'A follow-up task is created and assigned, so nobody slips through while you\'re busy',
    ],
    tools: ['REA / Domain', 'Facebook', 'Your Website', 'SMS', 'Your CRM', 'Gmail / Outlook'],
    payoff:
      'You\'re standing in someone\'s kitchen at a 10am open. A buyer enquires on your beachfront listing. Before you\'ve shaken the next inspector\'s hand, they\'ve had a warm reply from you and booked a callback. You never touched your phone.',
  },
  {
    title: 'Lead Capture & CRM Sync',
    tagline: 'Every enquiry and registration lands in your CRM. Automatically.',
    problem:
      'Leads come in from realestate.com.au and Domain enquiries, your website contact form, open home sign-in sheets, and phone calls. By the time someone gets around to entering them all into the CRM, the hot ones have gone cold, several end up missing or entered wrong, duplicated, or logged under the wrong contact.',
    howItWorks: [
      'Lead submits a portal enquiry, website form, or open home sign-in',
      'System instantly checks your CRM (VaultRE, AgentBox, Rex, or similar) for a matching contact',
      'Existing contact updated, or a new record created, in seconds',
      'Lead auto-tagged as buyer, seller, or renter enquiry, and assigned to the right agent',
      'Confirmation email or SMS sent automatically',
      'All activity logged so your pipeline is always current',
    ],
    tools: ['REA / Domain', 'VaultRE / AgentBox / Rex', 'Email', 'SMS'],
    payoff:
      'You run a Saturday open home with 40 walk-throughs. By the time you\'re back at the office, every visitor is in your CRM, tagged buyer or renter, with a follow-up email already sent. Zero data entry.',
  },
  {
    title: 'Seller Lead & Appraisal Follow-Up',
    tagline: 'Instant response to appraisal requests. Automatic nurture for sellers who aren\'t ready yet.',
    problem:
      'An appraisal request comes in at 9pm on a Friday. By the time someone calls back Monday, that seller has already booked with a competitor. The window closes fast, and no one was watching.',
    howItWorks: [
      'Seller submits an appraisal request via website form, portal enquiry, or Facebook ad',
      'They receive an instant personalised reply with a local market snapshot and a booking link',
      'Anyone who isn\'t ready to sell yet drops into an automatic drip sequence',
      'Sequences include local sold prices and market update nudges to keep them warm until they are',
      'Nothing sits in an inbox going cold',
    ],
    tools: ['REA / Domain', 'Facebook', 'Your Website', 'Your CRM', 'Email', 'SMS'],
    payoff:
      'An appraisal request arrives Friday evening. By Monday morning, the seller has already had a personalised reply, a local market update, and a booking link. You\'re ahead before the week begins.',
  },
  {
    title: 'Rental Portfolio Admin Automation',
    tagline: 'Less time chasing arrears and triaging maintenance. More time growing the rent roll.',
    problem:
      'Your property managers spend their day chasing arrears, triaging maintenance requests, and manually booking inspections, instead of growing the rent roll. It\'s reactive work that eats the whole day.',
    howItWorks: [
      'Tenants submit maintenance requests through a bot that triages urgency automatically',
      'Routine jobs route straight to the right tradesperson with no human in the middle',
      'Arrears reminders go out on a set schedule before it becomes an awkward phone call',
      'Inspection and lease-renewal dates trigger their own reminder sequences well in advance',
      'Everything syncs back to whatever your team is already running (PropertyMe, PropertyTree, Console)',
    ],
    tools: ['PropertyMe / PropertyTree / Console', 'SMS', 'Email', 'Your CRM'],
    payoff:
      'Your property managers stop firefighting and start focusing on what actually grows the business.',
  },
  {
    title: 'Lead Enrichment & Database Cleaning',
    tagline: 'Fill the gaps. Remove duplicates. Walk into every conversation informed.',
    problem:
      'Half your CRM has missing phone numbers, incomplete details, or the same contact entered three times under different spellings. Bad data means wasted effort and embarrassing double-ups.',
    howItWorks: [
      'New lead added to CRM, enrichment checks run automatically',
      'Phone number, company, and online profile details pulled from enrichment sources',
      'Duplicate scan checks your existing database for matches and flags them',
      'CRM updated with clean, complete data with no manual research required',
    ],
    tools: ['Your CRM', 'Data enrichment tool', 'Spreadsheet'],
    payoff:
      'A prospective vendor enquires. Before you call back, their details are already verified and complete in your CRM.',
  },
  {
    title: 'Event & Open Home Management',
    tagline: 'Registrations, reminders, cancellations, and post-event follow-up. All handled automatically.',
    problem:
      'Running an open home or information night means managing a spreadsheet, sending manual confirmations, handling cancellations one by one, then following up with 50 people after. It takes more time than the event itself.',
    howItWorks: [
      'Registration: form submitted, CRM checked, record created or updated, confirmation sent in seconds',
      'Reminders: attendee added to an automated reminder sequence timed to the event date',
      'Cancellation: detected automatically, registrant gets a confirmation, records updated',
      'Post-event: system finds all attendees and sends a personalised follow-up to each one, all logged',
    ],
    tools: ['Registration form', 'Your CRM', 'Email platform', 'Gmail / Outlook'],
    payoff: 'You run the event. The admin runs itself.',
  },
  {
    title: 'Marketing List & Newsletter Automation',
    tagline: 'Opt-ins go straight to the right list. Leads nurtured from the moment they raise their hand.',
    problem:
      'Leads opt in to your market updates, but sorting them by hand means a seller ends up on the buyer alerts list, a landlord gets sent listings emails instead of rent roll updates, and some people wait days before anyone gets around to adding them at all.',
    howItWorks: [
      'Lead opts in via a website form, portal enquiry, or a box ticked in your CRM',
      'System detects the opt-in and matches them in your email platform',
      'Contact added to the correct list (buyer alerts, seller updates, or landlord/investor news) automatically',
      'Activity logged to their CRM record',
      'Nurture or newsletter sequence begins with no manual trigger needed',
    ],
    tools: ['Your CRM (VaultRE, AgentBox, Rex...)', 'Mailchimp / Brevo / ActiveCampaign', 'Your website forms'],
    payoff:
      'A lead from your open home opts in on the spot. They\'re on your next buyer alert before you\'ve driven home.',
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
          <p className="text-sm text-muted-foreground font-light max-w-2xl mt-3">
            You don't need to own or learn any of these tools. I handle everything, you just get the result.
          </p>
          <Link
            href="/construction"
            className="inline-flex items-center gap-1.5 mt-5 text-xs font-sans text-muted-foreground/60 hover:text-primary border border-border/40 hover:border-primary/30 px-3 py-1.5 rounded-full transition-all duration-200"
          >
            <span>In construction or trades?</span>
            <span className="text-[10px]">→</span>
          </Link>
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
