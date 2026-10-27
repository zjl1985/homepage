import { ProgrammeWork } from "@/components/programme-work";
import { Approach } from "@/components/approach";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HumanSide } from "@/components/human-side";

import { site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  sameAs: site.links.map((l) => l.href),
};

export default function Home() {
  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <ProgrammeWork />
      <Approach />
      <HumanSide />
      <Footer />
    </main>
  );
}
