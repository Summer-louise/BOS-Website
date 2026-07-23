export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-border/50 py-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-light">
          <div className="font-serif italic text-base text-foreground">
            BOS Automated
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
