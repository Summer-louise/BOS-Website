import { motion } from 'framer-motion';
import { WorkflowVisualization } from './WorkflowVisualization';

export function WorkflowSection() {
  return (
    <section className="w-full">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground block mb-4">
            How automation changes your day
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground max-w-xl">
            Same situation. Completely different outcome.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <WorkflowVisualization />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 text-center font-serif italic text-lg text-muted-foreground"
        >
          And that's just the tip of the iceberg.
        </motion.p>
      </div>
    </section>
  );
}
