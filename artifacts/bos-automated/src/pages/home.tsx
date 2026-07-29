import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { WorkflowSection } from '@/components/WorkflowSection';
import { PainPoints } from '@/components/PainPoints';
import { Services } from '@/components/Services';
import { AutomationShowcase } from '@/components/AutomationShowcase';
import { Industries } from '@/components/Industries';
import { About } from '@/components/About';
import { HowItWorks } from '@/components/HowItWorks';
import { PricingModel } from '@/components/PricingModel';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    const title = 'Real Estate Automation Sunshine Coast | BOS Automated';
    const description = 'BOS Automated helps real estate agents and local businesses on the Sunshine Coast eliminate manual work with smart Make.com automations, CRM setup, and marketing flows.';
    const canonical = 'https://bosautomated.com/';

    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);

    // Open Graph
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);

    // Twitter
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.setAttribute('href', canonical);

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'BOS Automated',
      description: 'Make.com automation specialist helping businesses eliminate manual work',
      founder: {
        '@type': 'Person',
        name: 'Summer-Louise Bevan',
      },
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Queensland',
        addressLocality: 'Sunshine Coast',
        addressCountry: 'AU',
      },
      email: 'summer@bosautomated.com',
      telephone: '+61473510197',
      url: window.location.origin,
    };

    let script = document.querySelector(
      'script[type="application/ld+json"]'
    ) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 flex flex-col gap-[120px] pb-[120px]">
        <Hero />
        <WorkflowSection />
        <PainPoints />
        <Services />
        <AutomationShowcase />
        <Industries />
        <About />
        <HowItWorks />
        <PricingModel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
