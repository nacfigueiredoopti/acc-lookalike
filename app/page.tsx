import TopBanner from "@/components/TopBanner";
import Image from "next/image";

type Section = {
  id: string;
  src: string;
  alt: string;
  priority?: boolean;
};

const SECTIONS: Section[] = [
  { id: "hero", src: "/screenshots/01-page.jpg", alt: "Hero", priority: true },

  // add more as needed
];

export default function HomePage() {
  return (
    <main className="w-full">
      <Header />
      <div className="mx-auto w-full">
        {SECTIONS.map((s) => (
          <section key={s.id} className="w-full">
            {/* 
              Use a large width/height ratio so Next/Image can optimize properly.
              If your screenshots aren’t exactly 16:9, set real dimensions here.
            */}
            <Image
              src={s.src}
              alt={s.alt}
              width={1920}
              height={1080}
              priority={s.priority}
              className="w-full h-auto block"
            />
          </section>
        ))}
      </div>
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Use a neutral wordmark instead of any trademarked logo */}
        <div className="font-semibold tracking-wide">Demo Site</div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#hero" className="opacity-80 hover:opacity-100">
            Hero
          </a>
          <a href="#s2" className="opacity-80 hover:opacity-100">
            Section 2
          </a>
          <a href="#s3" className="opacity-80 hover:opacity-100">
            Section 3
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/70">
        Internal demo. Screenshots for layout reference only. No affiliation.
      </div>
    </footer>
  );
}
