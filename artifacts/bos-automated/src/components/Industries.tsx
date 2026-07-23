import { motion } from 'framer-motion';

const industries = [
  {
    name: 'Real Estate Agents',
    description: 'Streamlining listings, viewings, and vendor nurture.',
    featured: true,
  },
  {
    name: 'Print & Design',
    description: 'Automating quoting, proofs, and approvals.',
    featured: false,
  },
  {
    name: 'Construction & Roofing',
    description: 'Connecting site visits with client communications.',
    featured: false,
  },
];

export function Industries() {
  return (
    <section id="industries" className="w-full">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-12">
            Who we work with
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col items-center max-w-[280px]"
              >
                <h3 className={`font-serif mb-3 ${ind.featured ? 'text-3xl text-foreground' : 'text-2xl text-secondary'}`}>
                  {ind.name}
                </h3>
                {ind.featured ? (
                  <div className="w-12 h-[2px] bg-primary mb-4" />
                ) : (
                  <div className="w-8 h-[1px] bg-secondary/50 mb-4" />
                )}
                <p className="text-sm text-muted-foreground font-light text-center">
                  {ind.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
