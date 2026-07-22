import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { PainPoints } from '@/components/PainPoints';
import { Services } from '@/components/Services';
import { Industries } from '@/components/Industries';
import { About } from '@/components/About';
import { HowItWorks } from '@/components/HowItWorks';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Set page title and meta tags
    document.title = 'BOS Automated | Make.com Automation Specialist — Sunshine Coast';
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'BOS Automated helps real estate agents and local businesses on the Sunshine Coast eliminate manual work with smart Make.com automations, CRM setup, and marketing flows.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'BOS Automated helps real estate agents and local businesses on the Sunshine Coast eliminate manual work with smart Make.com automations, CRM setup, and marketing flows.';
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'BOS Automated | Make.com Automation Specialist — Sunshine Coast' },
      { property: 'og:description', content: 'BOS Automated helps real estate agents and local businesses on the Sunshine Coast eliminate manual work with smart Make.com automations, CRM setup, and marketing flows.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'BOS Automated | Make.com Automation Specialist — Sunshine Coast' },
      { name: 'twitter:description', content: 'BOS Automated helps real estate agents and local businesses on the Sunshine Coast eliminate manual work with smart Make.com automations, CRM setup, and marketing flows.' },
    ];

    ogTags.forEach(({ property, name, content }) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (property) meta.setAttribute('property', property);
        if (name) meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    });

    // Structured data (LocalBusiness schema)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'BOS Automated',
      'description': 'Make.com automation specialist helping businesses eliminate manual work',
      'founder': {
        '@type': 'Person',
        'name': 'Summer-Louise Bevan',
      },
      'address': {
        '@type': 'PostalAddress',
        'addressRegion': 'Queensland',
        'addressLocality': 'Sunshine Coast',
        'addressCountry': 'AU',
      },
      'email': 'summer@bosautomated.com',
      'telephone': '+61473510197',
      'url': window.location.origin,
      'areaServed': {
        '@type': 'GeoCircle',
        'geoMidpoint': {
          '@type': 'GeoCoordinates',
          'latitude': -26.6835,
          'longitude': 153.0565,
        },
      },
      'serviceType': ['Business Automation', 'CRM Setup', 'Marketing Automation', 'Make.com Integration'],
    };

    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return (
    <div className="min-h-[100dvh] w-full">
      <Navigation />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <Industries />
        <About />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
