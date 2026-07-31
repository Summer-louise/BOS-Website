export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-accent border-t border-white/10 py-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-accent-foreground/60 font-light">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-3">
              <img src="/icon-circles.png" alt="" className="h-10 w-auto" style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(0) brightness(2)' }} />
              <div className="flex flex-col gap-0">
                <span className="text-sm font-serif tracking-[0.2em] uppercase text-accent-foreground leading-tight">BOS Automated</span>
                <span className="text-[8px] tracking-[0.18em] uppercase font-sans text-accent-foreground/60 leading-none">Business Optimisation Systems</span>
              </div>
            </div>
          </div>
          <div>
            Sunshine Coast, QLD
          </div>
          <div>
            © {currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
}
