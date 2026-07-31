export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-accent border-t border-white/10 py-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-accent-foreground/60 font-light">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-4">
              <img
                src="/icon-footer.png"
                alt=""
                className="h-12 w-auto opacity-80"
              />
              <div className="flex flex-col gap-1">
                <span className="text-base font-serif tracking-[0.22em] uppercase text-accent-foreground leading-tight">BOS Automated</span>
                <div className="h-px w-full bg-accent-foreground/30" />
                <span className="text-[8px] tracking-[0.22em] uppercase font-sans text-accent-foreground/60 leading-none">Business Optimisation Systems</span>
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
