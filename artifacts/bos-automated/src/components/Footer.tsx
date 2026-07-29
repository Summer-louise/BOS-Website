export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-border/50 py-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-light">
          <div className="flex flex-col items-center md:items-start gap-1">
            <img src="/logo.svg" alt="BOS Automated" className="h-8 w-auto" />
            <span className="text-[9px] tracking-widest uppercase font-sans text-muted-foreground/60 leading-none">
              Business Optimisation Systems ~ Automated
            </span>
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
