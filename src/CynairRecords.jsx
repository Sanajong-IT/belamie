import React, { useMemo, useState } from "react";
import { Play, Music2, Youtube, Instagram, Mail, ArrowRight, Calendar, Users, Disc3, Sparkles, ExternalLink, AlignLeft, Music, Languages } from "lucide-react";

const translations = {
  en: {
    nav: { artists: "Artists", releases: "Releases", videos: "Videos", about: "About", contact: "Contact" },
    cta: { bookings: "Bookings", listenLatest: "Listen to Latest", bookingsPress: "Bookings & Press" },
    hero: {
      title: "Cynair Records",
      desc: "An independent label engineering sound with attitude. We develop artists, craft releases, and build worlds around music.",
      badge: "New single out now",
      single: "\"Night School\" — Nefo"
    },
    nefo: {
      featured: "Featured Artist",
      role: "Hip-hop / Rap",
      title: "Nefo",
      bio: "Nefo builds bridges between boom bap and modern trap. Smart punchlines, compact stories, and choruses you want to shout along. In the studio he loves analog color; on stage, raw energy. Cynair supports with a long-term vision: content, live shows, and releases that strengthen each other.",
      city: "City: Ede, NL",
      themes: "Themes: humor, ambition, family, street observations",
      fans: "For fans of: J Cole, SFB, Ares",
      listen: "Listen to latest track"
    },
    artists: {
      heading: "Artists",
      desc: "We sign curious creators and amplify their signal. Meet the roster.",
      profile: "Profile"
    },
    releases: {
      heading: "Latest Releases",
      desc: "Fresh drops from the Cynair ecosystem. Stream everywhere."
    },
    videos: {
      heading: "Videos",
      desc: "Studio snippets, official videos, and tour recaps.",
      v1: "Nefo – Official Video",
      v2: "Cynair Live"
    },
    about: {
      heading: "About Cynair",
      desc: "Founded to blend artistry with engineering, Cynair Records focuses on long-term artist development, data-driven release strategy, and beautifully weird storytelling. We believe in creative ownership, transparent deals, and making songs that outlive the timeline."
    },
    contact: {
      heading: "Contact & Demos",
      desc: "For bookings, press, or demo submissions, reach out. We read everything.",
      name: "Your Name",
      email: "Email",
      message: "Message / Private link",
      send: "Send",
      consent: "By sending, you agree to be contacted back by Cynair Records."
    },
    socials: { youtube: "YouTube", spotify: "Spotify", instagram: "Instagram" }
  },
  nl: {
    nav: { artists: "Artiesten", releases: "Releases", videos: "Video’s", about: "Over", contact: "Contact" },
    cta: { bookings: "Boekingen", listenLatest: "Luister nieuwste", bookingsPress: "Boekingen & Pers" },
    hero: {
      title: "Cynair Records",
      desc: "Een onafhankelijk label dat sound met attitude engineert. We ontwikkelen artiesten, bouwen releases en creëren werelden rondom muziek.",
      badge: "Nieuwe single nu uit",
      single: "\"Night School\" — Nefo"
    },
    nefo: {
      featured: "Uitgelichte Artiest",
      role: "Hip-hop / Rap",
      title: "Nefo",
      bio: "Nefo bouwt bruggen tussen boombap en moderne trap. Slimme punchlines, compacte verhalen en refreinen die je wilt meeschreeuwen. In de studio houdt hij van analoge kleur; op het podium van rauwe energie. Cynair begeleidt met lange-termijnvisie: content, liveshows en releases die elkaar versterken.",
      city: "Stad: Ede, NL",
      themes: "Thema’s: humor, ambitie, familie, straatobservaties",
      fans: "Voor fans van: J Cole, SFB, Ares",
      listen: "Luister nieuwste track"
    },
    artists: {
      heading: "Artiesten",
      desc: "We tekenen nieuwsgierige makers en versterken hun signaal. Ontmoet de roster.",
      profile: "Profiel"
    },
    releases: {
      heading: "Nieuwste Releases",
      desc: "Verse drops uit het Cynair-ecosysteem. Overal te streamen."
    },
    videos: {
      heading: "Video’s",
      desc: "Studio snippets, officiële video’s en tour recaps.",
      v1: "Nefo – Officiële Video",
      v2: "Cynair Live"
    },
    about: {
      heading: "Over Cynair",
      desc: "Opgericht om kunst en engineering te verbinden. Cynair focust op langetermijn artiestontwikkeling, data-gedreven release-strategie en prachtig eigenzinnige storytelling. Creatief eigenaarschap, transparante deals en songs die langer meegaan dan de tijdlijn."
    },
    contact: {
      heading: "Contact & Demo’s",
      desc: "Voor boekingen, pers of demo’s: stuur een bericht. We lezen alles.",
      name: "Naam",
      email: "E-mail",
      message: "Bericht / Private link",
      send: "Versturen",
      consent: "Door te verzenden ga je ermee akkoord dat Cynair Records contact opneemt."
    },
    socials: { youtube: "YouTube", spotify: "Spotify", instagram: "Instagram" }
  }
};

export default function CynairRecords() {
  const [lang, setLang] = useState("nl");
  const t = useMemo(() => translations[lang], [lang]);

  const navItems = useMemo(() => [
    { href: "#artists", label: t.nav.artists },
    { href: "#releases", label: t.nav.releases },
    { href: "#videos", label: t.nav.videos },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ], [t]);

  const socials = useMemo(() => [
    { href: "https://youtube.com/", label: t.socials.youtube, Icon: Youtube },
    { href: "https://open.spotify.com/", label: t.socials.spotify, Icon: Music },
    { href: "https://instagram.com/", label: t.socials.instagram, Icon: Instagram },
  ], [t]);

  const releases = [
    {
      title: "Nefo – Night School",
      cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1200&auto=format&fit=crop",
      date: "2025-07-26",
      links: { spotify: "#", youtube: "#" },
    },
    {
      title: "Cyn T – Ghost Garden (EP)",
      cover: "https://images.unsplash.com/photo-1475724017904-b712052c192a?q=80&w=1200&auto=format&fit=crop",
      date: "2025-06-14",
      links: { spotify: "#", youtube: "#" },
    },
    {
      title: "Airwave – Liminal",
      cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop",
      date: "2025-05-03",
      links: { spotify: "#", youtube: "#" },
    },
  ];

  const artists = [
    {
      name: "Nefo",
      role: t.nefo.role,
      img: "https://images.unsplash.com/photo-1513825323965-57c73a47a35c?q=80&w=1600&auto=format&fit=crop",
      blurb:
        "Nefo is a wordplay gymnast from Ede: razor delivery, sly humor, and hooks that lodge themselves in short-term memory and refuse to leave.",
      profileUrl: "#nefo",
      spotifyUrl: "https://open.spotify.com/artist/",
      youtubeUrl: "https://youtube.com/@nefo"
    },
    {
      name: "Cyn T",
      role: "Alt-R&B",
      img: "https://images.unsplash.com/photo-1508215312-6eb65b4a97f3?q=80&w=1200&auto=format&fit=crop",
      blurb:
        "Velvet vocals over glitch-kissed beats. Night-drive music for bright minds."
    },
    {
      name: "Airwave",
      role: "Electronic",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
      blurb:
        "Synths with teeth. Wide-angle drops and cinematic rises."
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-fuchsia-500/40 selection:text-white">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="relative">
                <span className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-fuchsia-600 via-purple-600 to-blue-600 opacity-40 blur-sm group-hover:opacity-60 transition" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 ring-1 ring-white/10">
                  <Music2 className="h-5 w-5" />
                </div>
              </div>
              <div className="leading-tight">
                <p className="text-sm text-neutral-400">Record Label</p>
                <p className="font-semibold tracking-wide">Cynair</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-2 sm:gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-neutral-300 hover:text-white transition">
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20 transition"
              >
                {t.cta.bookings} <ArrowRight className="h-4 w-4" />
              </a>
              <button
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/20 transition"
                onClick={() => setLang((prev) => (prev === "en" ? "nl" : "en"))}
                aria-label="Toggle language"
                title="Toggle language"
              >
                <Languages className="h-4 w-4" /> {lang.toUpperCase()}
              </button>
            </nav>
            <button className="md:hidden inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm">
              <AlignLeft className="h-4 w-4" /> Menu
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
          <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-600/40 via-purple-600/30 to-blue-600/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-blue-300 bg-clip-text text-transparent">{t.hero.title}</span>
              </h1>
              <p className="mt-6 max-w-xl text-base sm:text-lg text-neutral-300">
                {t.hero.desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#releases"
                  className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-200 transition"
                >
                  <Play className="h-4 w-4" /> {t.cta.listenLatest}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/20 transition"
                >
                  <Mail className="h-4 w-4" /> {t.cta.bookingsPress}
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4">
                {socials.map(({ href, label, Icon }) => (
                  <a key={label} href={href} aria-label={label} className="group inline-flex">
                    <span className="sr-only">{label}</span>
                    <Icon className="h-6 w-6 text-neutral-300 group-hover:text-white transition" />
                  </a>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1600&auto=format&fit=crop"
                  alt="Studio session at Cynair"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block">
                <div className="rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10 backdrop-blur">
                  <p className="flex items-center gap-2 text-sm text-neutral-200"><Sparkles className="h-4 w-4" /> {t.hero.badge}</p>
                  <p className="mt-1 font-semibold">{t.hero.single}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nefo" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1520975932065-79f2d6014d1b?q=80&w=1600&auto=format&fit=crop"
                alt="Nefo performing live"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <span className="rounded-full bg-white/10 px-3 py-1">{t.nefo.featured}</span>
                <span className="rounded-full bg-white/5 px-3 py-1">{t.nefo.role}</span>
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">{t.nefo.title}</h2>
              <p className="mt-4 text-neutral-300">
                {t.nefo.bio}
              </p>
              <ul className="mt-4 space-y-2 text-neutral-300 text-sm list-disc list-inside">
                <li>{t.nefo.city}</li>
                <li>{t.nefo.themes}</li>
                <li>{t.nefo.fans}</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#releases" className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-4 py-2 text-sm font-semibold hover:bg-neutral-200 transition">
                  <Play className="h-4 w-4" /> {t.nefo.listen}
                </a>
                <a href="https://open.spotify.com/artist/" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition">
                  <Music className="h-4 w-4" /> Spotify
                </a>
                <a href="https://youtube.com/@nefo" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition">
                  <Youtube className="h-4 w-4" /> YouTube
                </a>
              </div>
              <div className="mt-8 grid gap-6">
                <div className="aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <iframe
                    title="Nefo – Spotify Embed"
                    className="h-full w-full"
                    src="https://open.spotify.com/embed/track/11dFghVXANMlKmJXsNCbNl"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/aDj5sO6DfJs"
                    title={t.videos.v1}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="artists" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-fuchsia-400" />
            <h2 className="text-2xl sm:text-3xl font-bold">{t.artists.heading}</h2>
          </div>
          <p className="mt-3 max-w-2xl text-neutral-300">{t.artists.desc}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {artists.map((a) => (
              <article key={a.name} className="group overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img src={a.img} alt={a.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{a.name}</h3>
                  <p className="text-sm text-neutral-400">{a.role}</p>
                  <p className="mt-3 text-sm text-neutral-300">{a.blurb}</p>
                  <div className="mt-4 flex gap-3">
                    <a href={a.profileUrl || "#"} className="inline-flex items-center gap-1 text-sm text-fuchsia-300 hover:text-fuchsia-200">
                      <ExternalLink className="h-4 w-4" /> {t.artists.profile}
                    </a>
                    <a href={a.spotifyUrl || "#"} className="inline-flex items-center gap-1 text-sm text-fuchsia-300 hover:text-fuchsia-200">
                      <Music className="h-4 w-4" /> Spotify
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="releases" className="py-20 sm:py-24 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Disc3 className="h-5 w-5 text-purple-300" />
            <h2 className="text-2xl sm:text-3xl font-bold">{t.releases.heading}</h2>
          </div>
          <p className="mt-3 max-w-2xl text-neutral-300">{t.releases.desc}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {releases.map((r) => (
              <article key={r.title} className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
                <div className="aspect-square w-full overflow-hidden">
                  <img src={r.cover} alt={r.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <p className="text-sm text-neutral-400 flex items-center gap-2"><Calendar className="h-4 w-4" /> {r.date}</p>
                  <div className="mt-4 flex gap-3">
                    <a href={r.links.spotify} className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-4 py-2 text-sm font-semibold hover:bg-neutral-200 transition">
                      <Music className="h-4 w-4" /> Spotify
                    </a>
                    <a href={r.links.youtube} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition">
                      <Youtube className="h-4 w-4" /> YouTube
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Youtube className="h-5 w-5 text-red-300" />
            <h2 className="text-2xl sm:text-3xl font-bold">{t.videos.heading}</h2>
          </div>
          <p className="mt-3 max-w-2xl text-neutral-300">{t.videos.desc}</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="aspect-video overflow-hidden rounded-3xl ring-1 ring-white/10">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/aDj5sO6DfJs"
                title={t.videos.v1}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-3xl ring-1 ring-white/10">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/aqz-KE-bpKQ"
                title={t.videos.v2}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">{t.about.heading}</h2>
          <p className="mt-4 text-neutral-300">
            {t.about.desc}
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">{t.contact.heading}</h2>
              <p className="mt-3 text-neutral-300">{t.contact.desc}</p>
              <div className="mt-6 space-y-3 text-sm text-neutral-300">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@cynairrecords.com</p>
                <p className="flex items-center gap-2"><Instagram className="h-4 w-4" /> @cynairrecords</p>
              </div>
              <div className="mt-8 flex gap-4">
                {socials.map(({ href, label, Icon }) => (
                  <a key={label} href={href} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition">
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="grid gap-4">
                <label className="text-sm">
                  <span className="text-neutral-300">{t.contact.name}</span>
                  <input className="mt-1 w-full rounded-xl bg-neutral-900 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder={t.contact.name} />
                </label>
                <label className="text-sm">
                  <span className="text-neutral-300">{t.contact.email}</span>
                  <input type="email" className="mt-1 w-full rounded-xl bg-neutral-900 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="you@example.com" />
                </label>
                <label className="text-sm">
                  <span className="text-neutral-300">{t.contact.message}</span>
                  <textarea rows={5} className="mt-1 w-full rounded-xl bg-neutral-900 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Say hi, share links…" />
                </label>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-200 transition">
                  {t.contact.send} <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-neutral-400">{t.contact.consent}</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Cynair Records. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href} aria-label={label} className="group inline-flex">
                  <Icon className="h-5 w-5 text-neutral-400 group-hover:text-white transition" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
