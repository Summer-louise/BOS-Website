import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="w-full">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Two photos stacked */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col gap-4"
          >
            {/* Main portrait */}
            <div className="aspect-[4/3] relative overflow-hidden bg-muted">
              <img
                src="/summer.png"
                alt="Summer-Louise Bevan, BOS Automated"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Previous business — the trailer */}
            <div className="aspect-[16/10] relative overflow-hidden bg-muted">
              <img
                src="/trailer.jpg"
                alt="Mountain Juice and Coffee trailer — Summer-Louise's previous business in Mount Coolum"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-foreground/70">
                <p className="text-xs text-background/80 font-sans font-light tracking-wide">
                  Mountain Juice and Coffee, Mount Coolum. Where it all started.
                </p>
              </div>
            </div>

            {/* Editorial photo collage */}
            <div className="relative mt-2" style={{ height: '360px' }}>

              {/* Terracotta spotlight — large soft radial behind the cutout */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '52%',
                transform: 'translate(-50%, -50%)',
                width: '230px',
                height: '230px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, hsl(18 55% 52% / 0.28) 0%, hsl(18 55% 52% / 0.10) 55%, transparent 80%)',
                zIndex: 0,
              }} />

              {/* Outer decorative ring */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '52%',
                transform: 'translate(-50%, -50%)',
                width: '290px',
                height: '290px',
                borderRadius: '50%',
                border: '1px solid hsl(18 55% 52% / 0.18)',
                zIndex: 0,
              }} />

              {/* Inner subtle ring */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '52%',
                transform: 'translate(-50%, -50%)',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                border: '1px dashed hsl(18 55% 52% / 0.14)',
                zIndex: 0,
              }} />

              {/* Sage green accent dots */}
              <div style={{ position:'absolute', width:9, height:9, borderRadius:'50%', background:'hsl(128 22% 48% / 0.55)', top:22, left:'12%', zIndex:0 }} />
              <div style={{ position:'absolute', width:5, height:5, borderRadius:'50%', background:'hsl(128 22% 48% / 0.35)', top:52, left:'22%', zIndex:0 }} />
              <div style={{ position:'absolute', width:6, height:6, borderRadius:'50%', background:'hsl(18 55% 52% / 0.45)', top:18, right:'16%', zIndex:0 }} />
              <div style={{ position:'absolute', width:4, height:4, borderRadius:'50%', background:'hsl(18 55% 52% / 0.3)', bottom:55, right:'10%', zIndex:0 }} />
              <div style={{ position:'absolute', width:7, height:7, borderRadius:'50%', background:'hsl(128 22% 48% / 0.3)', bottom:30, left:'5%', zIndex:0 }} />

              {/* Warm stage floor arc behind Summer */}
              <div style={{
                position: 'absolute',
                left: '50%',
                bottom: -6,
                transform: 'translateX(-50%)',
                width: '170px',
                height: '85px',
                borderRadius: '85px 85px 0 0',
                background: 'hsl(18 55% 52% / 0.10)',
                zIndex: 1,
              }} />

              {/* Desk + cat — left, tilted back */}
              <div style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '48%',
                aspectRatio: '4/3',
                overflow: 'hidden',
                transform: 'rotate(-2.5deg)',
                boxShadow: '0 10px 36px rgba(0,0,0,0.18)',
                zIndex: 2,
              }}>
                <img
                  src="/summer-desk.jpg"
                  alt="Summer at her desk with her cat"
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center' }}
                />
              </div>

              {/* Summer PNG cutout — centrepiece */}
              <div style={{
                position: 'absolute',
                left: '50%',
                bottom: 0,
                transform: 'translateX(-50%)',
                width: '29%',
                zIndex: 4,
              }}>
                <img
                  src="/summer-casual.png"
                  alt="Summer casual"
                  style={{
                    width: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom',
                    filter: 'drop-shadow(0 10px 22px rgba(0,0,0,0.22))',
                  }}
                />
              </div>

              {/* Couple — right, tilted forward, with cream border frame */}
              <div style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: '43%',
                aspectRatio: '3/4',
                overflow: 'hidden',
                transform: 'rotate(2.2deg)',
                boxShadow: '0 10px 36px rgba(0,0,0,0.16)',
                zIndex: 3,
                outline: '3px solid hsl(42 40% 96%)',
                outlineOffset: '-3px',
              }}>
                <img
                  src="/couple.jpg"
                  alt="Summer with her partner"
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }}
                />
              </div>

              {/* Caption label */}
              <div style={{
                position: 'absolute',
                bottom: 8,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 5,
                background: 'hsl(20 52% 16% / 0.72)',
                backdropFilter: 'blur(4px)',
                padding: '3px 12px',
                borderRadius: '100px',
              }}>
                <span style={{
                  fontSize: '10px',
                  color: 'hsl(42 40% 92%)',
                  fontFamily: 'DM Sans, sans-serif',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}>Outside the office</span>
              </div>

            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-start lg:pt-6"
          >
            <span className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-6">
              About Summer-Louise
            </span>

            <h2 className="text-4xl md:text-5xl font-serif italic text-foreground leading-[1.1] mb-8">
              From the cafe floor to the automation studio.
            </h2>

            <div className="space-y-6 text-lg text-foreground font-light leading-relaxed mb-10">
              <p>
                I'm not a software developer who stumbled into consulting. I'm a former cafe owner from Mount Coolum who built a business from the ground up, sold it, and then spent the following two years immersed in digital marketing, CRM builds, data enrichment and refinement, and of course automation. Learning the art of turning your set-up efforts into something that works for you on autopilot.
              </p>
              <p>
                I build systems that eliminate bottlenecks most business owners do not even realise they have. Technology should make your life easier, not harder. If a system does not save you real time and real stress, it is not worth building.
              </p>
              <p>
                I genuinely care about finding solutions others do not see, and about the businesses I work with. Local knowledge, real-world experience, and a firm belief that even the smallest business deserves to run like a well-oiled machine.
              </p>
              <p>
                If you are curious about how to make technology work for you but are not sure where to start, or the whole thing feels overwhelming, just flick me an email. I am here to help. Businesses that start implementing these systems now will pull ahead of their competitors. Let me make that process easy for you.
              </p>
            </div>

            <span className="inline-block px-4 py-2 bg-muted/50 text-muted-foreground border border-border/50 rounded-full text-xs font-sans uppercase tracking-wide">
              Sunshine Coast, QLD
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
