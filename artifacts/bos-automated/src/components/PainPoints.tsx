import { motion } from 'framer-motion';

const painPoints = [
  {
    title: 'Leads falling through the cracks',
    description: 'REA, Domain, Facebook, your website. They all come in to different places and nothing talks to each other.',
  },
  {
    title: 'No system for cold leads',
    description: 'Leads from 6 to 12 months ago that went quiet. No re-engagement system. Lost opportunity, every time.',
  },
  {
    title: 'Copy-paste follow-up, every single day',
    description: 'You send the same email 50 times a week. Same SMS. Same message. And it\'s you doing it, not a system.',
  },
  {
    title: 'Manual open home coordination',
    description: 'Scheduling inspections, sending reminders, chasing confirmations. All done by hand.',
  },
  {
    title: 'Proposals built from scratch, every time',
    description: 'Building quotes and contracts manually when 80% of it is the same information, reformatted.',
  },
  {
    title: 'Admin eating your most valuable hours',
    description: 'The work that grows your business gets pushed aside by tasks a computer should handle.',
  },
];

export function PainPoints() {
  return (
    <section id="pain-points" className="w-full">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif italic text-foreground mb-6">
            Sound familiar?
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            You did not get into real estate to spend your day on admin. These problems are costing you listings, revenue, and your time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className="bg-card/50 border-l-[3px] border-l-primary p-8 rounded-r-sm shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            >
              <h3 className="text-lg font-sans font-medium text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
