import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Utensils, ShoppingBag, MapPin, Clock, ChefHat, Truck, Star, Facebook, Instagram, Mail, Menu } from "lucide-react";

const BRAND = {
  name: "Bel‑Amie",
  city: "Paramaribo",
  country: "Suriname",
  phoneDisplay: "+597 123 456",
  phoneDial: "+597123456",
  whatsapp: "https://wa.me/597123456?text=Hi%20Bel-Amie!%20Ik%20wil%20graag%20een%20bestelling%20plaatsen.",
  email: "hello@belamie.catering",
  address: "Henck Arronstraat 10, Paramaribo, Suriname",
  maps: "https://maps.google.com/?q=Henck+Arronstraat+10+Paramaribo+Suriname",
  social: { facebook: "https://facebook.com/belamiecatering", instagram: "https://instagram.com/belamiecatering" },
  siteUrl: "https://www.belamie.catering",
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
  { title: "Starter", ppl: "20–50 pers", price: "v.a. SRD 160 p.p.", features: ["2 hoofdgerechten", "1 side & salade", "Opschep‑service"] },
  { title: "Classic", ppl: "50–150 pers", price: "v.a. SRD 145 p.p.", features: ["3 hoofdgerechten", "2 sides + salade", "Buffetopstelling + warmhouders"], highlight: true },
  { title: "Premium", ppl: "150+ pers", price: "Op maat", features: ["Chef on‑site", "Live station (bijv. bami/roti)", "Volledige staffing"] },
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
const Badge = ({ children }) => <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">{children}</span>;
const NavLink = ({ href, children }) => <a href={href} className="text-sm font-medium hover:opacity-80 transition-opacity">{children}</a>;
const Card = ({ className = "", children }) => <div className={`rounded-2xl border bg-white shadow-sm ${className}`}>{children}</div>;
const CardHeader = ({ children, className = "" }) => <div className={`p-4 border-b ${className}`}>{children}</div>;
const CardTitle = ({ children, className = "" }) => <div className={`text-lg font-semibold ${className}`}>{children}</div>;
const CardContent = ({ children, className = "" }) => <div className={`p-4 ${className}`}>{children}</div>;
const Button = ({ href, children, variant = "primary", size = "md", className = "" }) => {
  const sizes = { sm:"px-3 py-2 text-sm", md:"px-4 py-2", lg:"px-5 py-3 text-base" };
  const variants = { primary:"bg-gray-900 text-white hover:opacity-90", secondary:"bg-gray-100 text-gray-900 hover:bg-gray-200" };
  const cls = `inline-flex items-center justify-center rounded-xl font-medium transition ${sizes[size]} ${variants[variant]} ${className}`;
  return href ? (<a href={href} className={cls}>{children}</a>) : (<button className={cls}>{children}</button>);
};

export default function HomePage(){
  return(<>
    <Head>
      <title>Bel‑Amie Restaurant & Catering | Paramaribo</title>
      <meta name="description" content="Bel‑Amie serveert verse Surinaamse gerechten en verzorgt professionele catering in Paramaribo. Ontdek ons restaurantmenu en cateringpakketten."/>
      <meta property="og:title" content="Bel‑Amie Restaurant & Catering"/>
      <meta property="og:description" content="Surinaamse gerechten en professionele catering in Paramaribo."/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={BRAND.siteUrl}/>
      <meta property="og:image" content="/og-image.jpg"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="theme-color" content="#111827"/>
      <link rel="canonical" href={BRAND.siteUrl}/>
      <link rel="icon" href="/icon-192.png"/>
      <link rel="apple-touch-icon" href="/icon-192.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <meta name="robots" content="index, follow"/>
    </Head>

    <div className="min-h-screen bg-white text-gray-900 antialiased">
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
            <Button href={BRAND.whatsapp}><MessageSquare className="mr-2 h-4 w-4" /> Bestel nu</Button>
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
              <Button href={BRAND.whatsapp} size="lg"><MessageSquare className="h-5 w-5 mr-2"/> Bestel via WhatsApp</Button>
              <Button href="#catering" variant="secondary" size="lg"><ShoppingBag className="h-5 w-5 mr-2"/> Bekijk cateringpakketten</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {heroImages.map((img, i) => (
              <motion.img key={i} src={img.src} alt={img.alt} loading="lazy"
                className={`h-40 sm:h-56 lg:h-64 w-full object-cover rounded-2xl shadow ${i===1?"row-span-2 lg:h-full":""}`}
                initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} viewport={{once:true, amount:0.4}} transition={{duration:0.4, delay: i*0.1}} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  </>)
}