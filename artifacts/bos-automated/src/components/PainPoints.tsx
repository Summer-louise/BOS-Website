import { motion } from 'framer-motion';
import { AlertCircle, Database, Mail, FileText, Users, Calendar, Clock, TrendingDown } from 'lucide-react';

const painPoints = [
  {
    icon: Database,
    title: 'Leads falling through the cracks',
    description: 'REA, Domain, Facebook, your website — they all come in different places and nothing talks to each other.',
  },
  {
    icon: Mail,
    title: 'Copy-paste follow-up hell',
    description: 'You send the same email 50 times a day. Same SMS. Same DM. It never ends.',
  },
  {
    icon: Users,
    title: 'No vendor nurture system',
    description: 'Appraisal requests sit unanswered. Vendors go cold. You lose listings to agents who followed up faster.',
  },
  {
    icon: FileText,
    title: 'Proposals from scratch, every time',
    description: 'Building quotes and contracts manually when 80% of it is the same information, reformatted.',
  },
  {
    icon: AlertCircle,
    title: 'CRM chaos (or no CRM at all)',
    description: 'Half your data is in spreadsheets, half in your inbox, half in your head. Nothing is accurate.',
  },
  {
    icon: Calendar,
    title: 'Manual open home coordination',
    description: 'Scheduling inspections, sending reminders, chasing confirmations — all done by hand.',
  },
  {
    icon: TrendingDown,
    title: 'Cold leads just… sit there',
    description: 'Leads from 6–12 months ago that went quiet. No re-engagement system. Lost opportunity.',
  },
  {
    icon: Clock,
    title: 'Admin eating your day',
    description: 'The work that makes you money — client calls, site visits, negotiations — gets pushed aside by tasks a computer should handle.',
  },
];

export function PainPoints() {
  return (
    <section id="pain-points" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
            Real estate agents are{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-destructive to-primary">
              drowning in admin
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            You didn't get into real estate to spend your day copying and pasting. These problems are costing you listings, revenue, and your sanity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative bg-card hover:bg-card/80 border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Connecting line visual (subtle) */}
              {idx % 4 !== 3 && idx < painPoints.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-accent/20 group-hover:bg-accent/40 transition-colors" />
              )}
              
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <point.icon size={24} />
              </div>
              
              <h3 className="text-lg font-bold font-display mb-2 text-foreground">
                {point.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-primary/5 border border-primary/20 rounded-2xl px-8 py-6">
            <p className="text-lg font-semibold text-foreground mb-2">
              Every hour spent on admin is an hour not spent closing deals.
            </p>
            <p className="text-muted-foreground">
              BOS Automated builds the systems that fix these problems — permanently.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
