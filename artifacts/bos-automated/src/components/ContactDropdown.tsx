import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CalendarDays, MapPin, Mail } from 'lucide-react';

const CALENDLY = 'https://calendly.com/summer-bosautomated/30min';

const IN_PERSON_MAILTO = `mailto:summer@bosautomated.com?subject=In-Person%20Meeting%20Request&body=Hi%20Summer%2C%0A%0AI%27d%20love%20to%20meet%20in%20person.%20To%20make%20the%20most%20of%20our%20time%2C%20here%20are%20a%20few%20quick%20details%20from%20me%3A%0A%0AMy%20Name%3A%20%0APhone%3A%20%0ABusiness%20Name%3A%20%0ASuburb%3A%20%0ARough%20budget%3A%20%0AWhat%20I%27m%20hoping%20to%20sort%20out%2Fdiscuss%3A%20%0ABest%20days%2Ftimes%20to%20meet%3A%20%0A%0ALooking%20forward%20to%20it!`;

const options = [
  { label: 'Book a call',       sub: 'Pick a time that suits you',       href: CALENDLY,                          icon: CalendarDays, external: true  },
  { label: 'Meet in person',    sub: 'In-person on the Sunshine Coast',  href: IN_PERSON_MAILTO,                  icon: MapPin,       external: false },
  { label: 'Email me directly', sub: 'summer@bosautomated.com',          href: 'mailto:summer@bosautomated.com',  icon: Mail,         external: false },
];

interface Props {
  label?: string;
  openUp?: boolean;
}

export function ContactDropdown({ label = 'Get in touch', openUp = false }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleOption = (href: string, external: boolean) => {
    setOpen(false);
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = href;
    }
  };

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(o => !o)}
        className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium text-base px-8 py-4 transition-all duration-200 hover:shadow-md"
      >
        {label}
        <ChevronDown size={16} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: openUp ? -6 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: openUp ? -6 : 6 }}
            transition={{ duration: 0.15 }}
            className={`absolute left-0 w-64 bg-background shadow-xl border border-border/60 z-50 ${openUp ? 'bottom-full mb-2' : 'top-full mt-2'}`}
          >
            {options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => handleOption(opt.href, opt.external)}
                className="w-full flex items-start gap-3 px-5 py-4 hover:bg-muted/60 transition-colors text-left border-b border-border/40 last:border-0"
              >
                <opt.icon size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-sans font-medium text-foreground">{opt.label}</p>
                  <p className="text-xs text-muted-foreground font-light">{opt.sub}</p>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
