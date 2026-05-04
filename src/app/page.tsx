import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Symptoms } from "@/components/sections/symptoms";
import { Solution } from "@/components/sections/solution";
import { Integrations } from "@/components/sections/integrations";
import { Maturity } from "@/components/sections/maturity";
import { Closer } from "@/components/sections/closer";
import { ContactForm } from "@/components/sections/contact-form";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Symptoms />
        <Solution />
        <Integrations />
        <Maturity />
        <Closer />
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  );
}
