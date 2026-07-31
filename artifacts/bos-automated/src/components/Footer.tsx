export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-accent border-t border-white/10 py-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-accent-foreground/60 font-light">
          <div className="flex flex-col items-center md:items-start gap-1">
            <img src="/logo-light.png" alt="BOS Automated — Business Optimisation Systems" className="h-12 w-auto opacity-90" />
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
