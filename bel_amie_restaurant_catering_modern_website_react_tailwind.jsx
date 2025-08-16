import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Utensils, ShoppingBag, MapPin, Clock, ChefHat, Truck, Star, Facebook, Instagram, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/**
 * Bel‑Amie Restaurant & Catering — Single‑page Growth Site
 * Tech: React + Tailwind + shadcn/ui + Framer Motion
 * Goals: fast, responsive, conversion‑focused; clear split between Restaurant & Catering
 */

const BRAND = {
  name: "Bel‑Amie",
  city: "Paramaribo",
  country: "Suriname",
  phoneDisplay: "+597 123 456",
  phoneDial: "+597123456",
  whatsapp: "https://wa.me/597123456?text=Hi%20Bel-Amie!%20Ik%20wil%20graag%20een%20bestelling%20plaatsen.",
  email: "hello@belamie.sr",
  address: "Henck Arronstraat 10, Paramaribo, Suriname",
  maps: "https://maps.google.com/?q=Henck+Arronstraat+10+Paramaribo+Suriname",
  social: {
    facebook: "https://facebook.com/belamiecatering",
    instagram: "https://instagram.com/belamiecatering",
  },
};

const HOURS = [
  { day: "Mon–Thu", time: "10:00 – 21:00" },
  { day: "Fri–Sat", time: "10:00 – 22:00" },
  { day: "Sun", time: "12:00 – 20:00" },
];

const heroImages = [
  { src: "https://images.unsplash.com/photo-1559336197-dedb7f7e87c5?q=80&w=1600&auto=format&fit=crop", alt: "Fresh Surinamese dishes" },
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop", alt: "Catering buffet trays" },
  { src: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop", alt: "Restaurant ambiance" },
];

const restaurantMenu = [
  { name: "Bami met kip", desc: "Huisgemaakte bami, sappige kip, frisse groenten.", price: "SRD 200" },
  { name: "Moksi Alesi", desc: "Rijstmix met vlees, kruiden en groenten.", price: "SRD 210" },
  { name: "Saoto Soep", desc: "Rijke bouillon met kip, taugé en ei.", price: "SRD 95" },
  { name: "Roti kip", desc: "Kruidige kip kerrie, aardappel, kousenband.", price: "SRD 225" },
];

const cateringPackages = [
  {
    title: "Starter",
    ppl: "20–50 pers",
    price: "v.a. SRD 160 p.p.",
    features: ["2 hoofdgerechten", "1 side & salade", "Opschep‑service"],
  },
  {
    title: "Classic",
    ppl: "50–150 pers",
    price: "v.a. SRD 145 p.p.",
    features: ["3 hoofdgerechten", "2 sides + salade", "Buffetopstelling + warmhouders"],
    highlight: true,
  },
  {
    title: "Premium",
    ppl: "150+ pers",
    price: "Op maat",
    features: ["Chef on‑site", "Live station (bijv. bami/roti)", "Volledige staffing"],
  },
];

const testimonials = [
  { name: "S. Jubitana", text: "Snelle levering en iedereen was gek op de bami. We bestellen weer!", stars: 5 },
  { name: "M. Fernandes", text: "Professionele catering voor 120 gasten. Strak geregeld, smakelijk!", stars: 5 },
  { name: "A. Kromosemito", text: "Restaurant is schoon, personeel vriendelijk, porties royaal.", stars: 4 },
];

const benefits = [
  { icon: <ChefHat aria-hidden className="h-6 w-6" />, title: "Verse keuken", text: "Dagelijks vers, lokale ingrediënten, consistente kwaliteit." },
  { icon: <Truck aria-hidden className="h-6 w-6" />, title: "Betrouwbare bezorging", text: "Paramaribo en omstreken, stipt en veilig verpakt." },
  { icon: <Star aria-hidden className="h-6 w-6" />, title: "Bewezen favoriet", text: "Honderden tevreden klanten en herhaalbestellingen." },
];

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">{children}</span>
);

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm font-medium hover:opacity-80 transition-opacity">
    {children}
  </a>
);

export default function BelAmieSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Utensils className="h-6 w-6" aria-hidden />
            <span className="font-semibold tracking-tight">{BRAND.name} • {BRAND.city}</span>
            <Badge>Restaurant</Badge>
            <Badge>Catering</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#restaurant">Restaurant</NavLink>
            <NavLink href="#catering">Catering</NavLink>
            <NavLink href="#menu">Menu</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <Button asChild>
              <a href={BRAND.whatsapp} aria-label="Bestel via WhatsApp" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-4 w-4" /> Bestel nu
              </a>
            </Button>
          </nav>
          <div className="md:hidden">
            <details>
              <summary className="list-none inline-flex items-center gap-2 cursor-pointer px-3 py-2 rounded-xl border">
                <Menu className="h-5 w-5" /> Menu
              </summary>
              <div className="mt-2 grid gap-2 bg-white p-3 rounded-xl border">
                <a className="py-1" href="#restaurant">Restaurant</a>
                <a className="py-1" href="#catering">Catering</a>
                <a className="py-1" href="#menu">Menu</a>
                <a className="py-1" href="#reviews">Reviews</a>
                <a className="py-1" href="#contact">Contact</a>
                <a className="py-1" href={BRAND.whatsapp}>Bestel nu</a>
              </div>
            </details>
          </div>
        </Section>
      </div>

      {/* Hero */}
      <Section className="py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Verse smaken uit {BRAND.city}. <span className="text-gray-500">Catering die scoort.</span>
            </motion.h1>
            <p className="mt-4 text-lg text-gray-600">
              {BRAND.name} serveert favoriete Surinaamse gerechten én verzorgt complete catering — van 20 tot 500+ personen. Snel, smakelijk, zonder stress.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={BRAND.whatsapp}><MessageSquare className="h-5 w-5 mr-2"/> Bestel via WhatsApp</a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#catering"><ShoppingBag className="h-5 w-5 mr-2"/> Bekijk cateringpakketten</a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> {BRAND.phoneDisplay}</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/> {BRAND.address}</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4"/> Dagelijks geopend</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {heroImages.map((img, i) => (
              <motion.img
                key={i}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`h-40 sm:h-56 lg:h-64 w-full object-cover rounded-2xl shadow ${i===1?"row-span-2 lg:h-full":""}`}
                initial={{opacity:0, scale:0.98}}
                whileInView={{opacity:1, scale:1}}
                viewport={{once:true, amount:0.4}}
                transition={{duration:0.4, delay: i*0.1}}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="py-6 lg:py-10">
        <div className="grid sm:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-5 flex items-start gap-3">
                <div className="p-2 rounded-xl border">{b.icon}</div>
                <div>
                  <div className="font-semibold">{b.title}</div>
                  <p className="text-sm text-gray-600">{b.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Restaurant Section */}
      <Section id="restaurant" className="py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Badge>Restaurant</Badge>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight">Kom langs voor je favorieten</h2>
            <p className="mt-3 text-gray-600">Eten ter plekke of snel afhalen. Bestellen kan via WhatsApp — we zetten het klaar wanneer jij komt.</p>
            <div className="mt-6 grid gap-3">
              {HOURS.map((h, i) => (
                <div key={i} className="flex justify-between border rounded-xl p-3">
                  <span className="font-medium">{h.day}</span>
                  <span className="text-gray-600">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Utensils className="h-5 w-5"/> Populaire gerechten</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {restaurantMenu.map((item, i) => (
                <div key={i} className="flex items-start justify-between border-b pb-3">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                  <div className="font-semibold whitespace-nowrap">{item.price}</div>
                </div>
              ))}
              <div className="pt-2">
                <Button asChild variant="secondary">
                  <a href="#menu">Bekijk volledig menu</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Catering Section */}
      <Section id="catering" className="py-12 lg:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Badge>Catering</Badge>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight">Catering die meegroeit met je event</h2>
          <p className="mt-3 text-gray-600">Bedrijfsfeest, bruiloft of buurt‑borrel — kies een pakket en we regelen de rest. Volume‑korting vanaf 50 personen.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cateringPackages.map((p, i) => (
            <Card key={i} className={`rounded-2xl ${p.highlight ? "border-2" : ""}`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{p.title}</span>
                  <Badge>{p.ppl}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2">
                <div className="text-2xl font-extrabold">{p.price}</div>
                <ul className="text-sm text-gray-700 list-disc ml-5">
                  {p.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <Button asChild className="mt-3">
                  <a href={`${BRAND.whatsapp}&text=${encodeURIComponent("Info over "+p.title+" cateringpakket")}`}>Vraag beschikbaarheid</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center text-sm text-gray-600">
          Grote groepen? We maken graag een voorstel op maat (menu, dieetwensen, personeel, materialen).
        </div>
      </Section>

      {/* Menu Gallery */}
      <Section id="menu" className="py-12 lg:py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Menu & Favorieten</h2>
            <p className="text-gray-600 mt-2">Een frisse mix van Surinaamse klassiekers en publieksfavorieten.</p>
          </div>
          <Button asChild variant="secondary"><a href={BRAND.whatsapp}>Bestel nu</a></Button>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {["Bami", "Roti", "Moksi Alesi", "Saoto", "BBQ", "Vegetarisch"].map((label, i) => (
            <Card key={i} className="group rounded-2xl overflow-hidden">
              <img
                src={`https://source.unsplash.com/random/800x600?food,${encodeURIComponent(label)}`}
                alt={`${label} gerecht`}
                loading="lazy"
                className="h-44 w-full object-cover group-hover:scale-[1.02] transition-transform"
              />
              <CardContent className="p-4">
                <div className="font-semibold">{label}</div>
                <p className="text-sm text-gray-600">Vraag naar varianten en pakketten.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section id="reviews" className="py-12 lg:py-16">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Wat klanten zeggen</h2>
          <p className="text-gray-600 mt-2">Echte reviews van bestellingen en events.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-5">
                <div className="flex items-center gap-1 text-yellow-500" aria-label={`${t.stars} van 5 sterren`}>
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className={`h-4 w-4 ${k < t.stars ? "fill-current" : "opacity-25"}`} />
                  ))}
                </div>
                <p className="mt-3 text-gray-700">“{t.text}”</p>
                <div className="mt-4 text-sm font-medium">{t.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact / CTA */}
      <Section id="contact" className="py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Neem contact op</h2>
            <p className="text-gray-600 mt-2">We reageren snel op WhatsApp en e‑mail. Voor grote events maken we binnen 24 uur een voorstel.</p>
            <div className="mt-6 grid gap-3 text-sm">
              <a className="inline-flex items-center gap-2" href={BRAND.whatsapp}><MessageSquare className="h-4 w-4"/> WhatsApp {BRAND.phoneDisplay}</a>
              <a className="inline-flex items-center gap-2" href={`tel:${BRAND.phoneDial}`}><Phone className="h-4 w-4"/> Bel {BRAND.phoneDisplay}</a>
              <a className="inline-flex items-center gap-2" href={`mailto:${BRAND.email}`}><Mail className="h-4 w-4"/> {BRAND.email}</a>
              <a className="inline-flex items-center gap-2" href={BRAND.maps}><MapPin className="h-4 w-4"/> {BRAND.address}</a>
            </div>
            <div className="mt-6 flex gap-3">
              <Button asChild><a href={BRAND.whatsapp}>Plan een proeverij</a></Button>
              <Button asChild variant="secondary"><a href="#catering">Catering aanvragen</a></Button>
            </div>
          </div>
          <div>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Veelgestelde vragen</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="q1">
                    <AccordionTrigger>Leveren jullie buiten Paramaribo?</AccordionTrigger>
                    <AccordionContent>Ja, in overleg. We rekenen een kilometervergoeding en plannen extra tijd voor opbouw.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q2">
                    <AccordionTrigger>Kunnen jullie dieetwensen meenemen?</AccordionTrigger>
                    <AccordionContent>We bieden vegetarische/halal opties en houden rekening met allergenen. Geef dit door bij je aanvraag.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q3">
                    <AccordionTrigger>Hoe werkt bestellen voor groepen?</AccordionTrigger>
                    <AccordionContent>Vanaf 20 personen adviseren we een pakket. Boven 50 personen geldt volume‑korting. We helpen met portie‑inschatting en logistiek.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t mt-10">
        <Section className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} {BRAND.name} — {BRAND.city}, {BRAND.country}</div>
          <div className="flex items-center gap-4">
            <a href={BRAND.social.facebook} aria-label="Facebook"><Facebook className="h-5 w-5"/></a>
            <a href={BRAND.social.instagram} aria-label="Instagram"><Instagram className="h-5 w-5"/></a>
          </div>
        </Section>
      </footer>

      {/* JSON‑LD (copy into <Head> in Next.js for SEO) */}
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: BRAND.name,
        address: BRAND.address,
        telephone: BRAND.phoneDial,
        servesCuisine: ["Surinamese", "Indonesian", "Caribbean"],
        areaServed: ["Paramaribo", "Wanica"],
        url: "https://belamie.sr",
        sameAs: [BRAND.social.facebook, BRAND.social.instagram],
        openingHours: HOURS.map(h => `${h.day} ${h.time}`)
      }) }} />
    </div>
  );
}
