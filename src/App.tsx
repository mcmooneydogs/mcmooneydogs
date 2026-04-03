/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dog, 
  Info, 
  ShoppingBag, 
  Mail, 
  ChevronDown, 
  CheckCircle2, 
  Heart, 
  ShieldCheck, 
  PawPrint,
  Menu,
  X,
  Instagram,
  Facebook,
  Phone
} from 'lucide-react';
import { DogProfile, FAQItem, Step } from './types';
import logo from '/assets/mcmooneylogo.png';
import katy from '/assets/katy.jpeg';
import saskia from '/assets/saskia.jpeg';
import dog1 from '/assets/15.svg';
import dog2 from '/assets/16.svg';
import dog3 from '/assets/hondje (1).jpg';
import dog4 from '/assets/hondje (2).jpg';
import dog5 from '/assets/hondje (3).jpg';
import dog6 from '/assets/hondje (4).jpg';
import dog7 from '/assets/hondje (5).jpg';
import dog8 from '/assets/Ontwerp zonder titel (27).jpg';
import FormfacadeEmbed from "@formfacade/embed-react";

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: <Dog className="w-4 h-4" /> },
  { id: 'current', label: 'Huidige Nesten', icon: <PawPrint className="w-4 h-4" /> },
  { id: 'about', label: 'Over Ons', icon: <Heart className="w-4 h-4" /> },
  { id: 'info', label: 'Informatie', icon: <Info className="w-4 h-4" /> },
  { id: 'dogs', label: 'Onze Honden', icon: <PawPrint className="w-4 h-4" /> },
  { id: 'purchase', label: 'Puppy Kopen', icon: <ShoppingBag className="w-4 h-4" /> },
  { id: 'faq', label: 'FAQ', icon: <ShieldCheck className="w-4 h-4" /> },
  { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
];

const BREEDING_DOGS: DogProfile[] = [
  {
    id: '1',
    name: 'Katy',
    gender: 'Teef',
    temperament: 'Zachtaardig, intelligent en zeer mensgericht.',
    dnaStatus: 'Vrij van alle erfelijke aandoeningen (DNA getest).',
    image: katy,
    description: ''
  }
];

const FAQS: FAQItem[] = [
  {
    question: "Wat is het verschil tussen een Cobberdog en een Labradoodle?",
    answer: "De Australian Cobberdog is een erkend ras in ontwikkeling met een eigen stamboek (MDBA). Waar 'Labradoodle' vaak een verzamelnaam is voor diverse kruisingen, heeft de Cobberdog een voorspelbaar temperament, vacht en gezondheidsprofiel, specifiek gefokt voor therapie- en assistentiedoeleinden."
  },
  {
    question: "Zijn Cobberdogs geschikt voor mensen met allergieën?",
    answer: "Ja, Australian Cobberdogs staan bekend om hun hypoallergene vacht die niet verhaart. Hoewel geen enkele hond 100% allergievrij is voor iedereen, reageren de meeste mensen met een hondenallergie niet op dit ras."
  },
  {
    question: "Hoe groot wordt een Australian Cobberdog?",
    answer: "Ze komen in drie maten: Miniature (35-42 cm), Medium (42-50 cm) en Standard (50-61 cm). Het gewicht varieert per maat van ongeveer 7 tot 30 kg."
  }
];

const PURCHASE_STEPS: Step[] = [
  { title: "Aanmeldformulier", description: "Vul ons uitgebreide intakeformulier in zodat we een goed beeld krijgen van uw gezinssituatie." },
  { title: "Kennismaking & Acceptatie", description: "Na beoordeling volgt een gesprek om te kijken of er een match is met onze fokfilosofie." },
  { title: "Reservering & Aanbetaling", description: "Bij een positieve match kunt u een plekje op de wachtlijst reserveren middels een aanbetaling." },
  { title: "Updates & Voortgang", description: "Wij houden u wekelijks op de hoogte van de dracht en de eerste weken van de puppy's." },
  { title: "De Grote Dag", description: "Na 8-9 weken mag de pup mee naar huis, volledig gevaccineerd, gechipt en met een puppypakket." }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
  
    setIsMenuOpen(false); // close mobile menu first
    setActiveTab(id);
  
    if (element) {
      setTimeout(() => {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 200); // wait for mobile menu animation
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-olive/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img
            src={logo}
            alt="Logo"
            className="w-1/8 h-auto" // Adjusted size here
              />
            <span className="serif text-2xl font-semibold tracking-tight">McMooney</span>
          </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-brand-olive ${
                    activeTab === item.id ? 'text-brand-olive border-b-2 border-brand-olive' : 'text-brand-ink/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-cream border-t border-brand-olive/10 overflow-hidden z-50"
            >
              <div className="px-4 py-6 space-y-4">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-3 w-full text-left text-lg font-medium text-brand-ink/80"
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://picsum.photos/seed/cobberdog-hero/1920/1080?blur=2"
              alt="Hero"
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/20 to-brand-cream"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="uppercase tracking-[0.3em] text-sm font-semibold text-brand-olive mb-4 block">Welkom bij</span>
              <h1 className="serif text-6xl md:text-8xl font-bold mb-6 leading-tight">
                McMooney
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-brand-ink/80 mb-4">
                Australian Cobberdogs
              </h2>
              <p className="text-lg md:text-xl text-brand-ink/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Wij fokken met passie en zorg de perfecte gezinshond: intelligent, hypoallergeen en bovenal een vriend voor het leven.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('current')}
                  className="bg-brand-olive text-white px-8 py-4 rounded-full font-medium hover:bg-brand-olive/90 transition-all shadow-lg hover:shadow-xl"
                >
                  Bekijk Beschikbare Pups
                </button>
                <button 
                  onClick={() => scrollToSection('info')}
                  className="border border-brand-olive text-brand-olive px-8 py-4 rounded-full font-medium hover:bg-brand-olive/5 transition-all"
                >
                  Leer meer over het ras
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Current Litters */}
<section id="current" className="py-24 px-4 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="serif text-4xl font-bold mb-6">Huidige & Aankomende Nesten</h2>

        <div className="bg-brand-cream p-8 rounded-3xl border border-brand-olive/10 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-semibold text-brand-olive">Nu Beschikbaar</span>
          </div>

          <p className="text-brand-ink/80 italic mb-4"></p>

          <button
            onClick={() => scrollToSection('purchase')}
            className="text-brand-olive font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            Aanvraag <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <img src={dog1} alt="Puppy" onClick={() => setSelectedImage(dog1)} className="w-full aspect-square object-cover rounded-[2rem] shadow-2xl cursor-pointer" />
          <img src={dog2} alt="Puppy" onClick={() => setSelectedImage(dog2)} className="w-full aspect-square object-cover rounded-[2rem] shadow-2xl cursor-pointer" />
          <img src={dog3} alt="Puppy" onClick={() => setSelectedImage(dog3)} className="w-full aspect-square object-cover rounded-[2rem] shadow-2xl cursor-pointer" />
          <img src={dog4} alt="Puppy" onClick={() => setSelectedImage(dog4)} className="w-full aspect-square object-cover rounded-[2rem] shadow-2xl cursor-pointer" />
          <img src={dog5} alt="Puppy" onClick={() => setSelectedImage(dog5)} className="w-full aspect-square object-cover rounded-[2rem] shadow-2xl cursor-pointer" />
          <img src={dog6} alt="Puppy" onClick={() => setSelectedImage(dog6)} className="w-full aspect-square object-cover rounded-[2rem] shadow-2xl cursor-pointer" />
          <img src={dog7} alt="Puppy" onClick={() => setSelectedImage(dog7)} className="w-full aspect-square object-cover rounded-[2rem] shadow-2xl cursor-pointer" />
          <img src={dog8} alt="Puppy" onClick={() => setSelectedImage(dog8)} className="w-full aspect-square object-cover rounded-[2rem] shadow-2xl cursor-pointer" />
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/* About Us */}
<section id="about" className="py-24 px-4 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="serif text-4xl font-bold mb-6">Over Ons</h2>

        <p className="text-brand-ink/70 leading-relaxed mb-6">
        Mijn naam is Saskia en ik woon in Amsterdam. Honden zijn al mijn hele leven een belangrijk onderdeel van mijn gezin. Zeven jaar geleden maakte ik kennis met de Australian Cobberdog – en dat was liefde op het eerste gezicht.

Mijn eerste Cobberdog, Anna, heb ik met veel toewijding opgeleid tot psychosociale hulphond. Dit prachtige ras staat bekend om zijn zachtaardige karakter, intelligentie en sterke mensgerichtheid. Daardoor is de Australian Cobberdog uitermate geschikt als hulphond, maar ook als trouwe gezinshond en echte knuffelmaatje.

Drie jaar geleden hebben wij ons gezin uitgebreid met onze tweede Cobberdog, Katy. Katy is ontzettend slim, gevoelig en leergierig. Ze heeft een stabiel en liefdevol karakter en luistert uitzonderlijk goed. Dit jaar heeft zij haar eerste nestje pups gekregen – een bijzondere mijlpaal waar wij enorm trots op zijn.
Ons gezin werd nog completer toen wij Lily adopteerden, een Nepalese straathond die wij vanuit Nepal naar Nederland hebben gehaald. Ze is een onmisbaar deel van onze familie geworden.

        </p>

        <p className="text-brand-ink/70 leading-relaxed">
        Met veel zorg, aandacht en liefde zetten wij ons in voor het verantwoord fokken van sociale, gezonde en evenwichtige Australian Cobberdogs die een waardevolle aanvulling zijn voor ieder gezin.

        </p>
      </motion.div>

      {/* Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="aspect-[4/5] w-full rounded-[2rem] bg-brand-cream border border-brand-olive/10 flex items-center justify-center shadow-xl">
         <img src={saskia} alt="Saskia" className="w-full h-full object-cover rounded-[2rem]" referrerPolicy="no-referrer" />
        </div>
      </motion.div>

    </div>
  </div>
</section>

        {/* Information Section */}
        <section id="info" className="py-24 px-4 bg-brand-cream">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="serif text-5xl font-bold mb-4">Puppy Guide & Verzorging</h2>
              <p className="text-brand-ink/60 max-w-2xl mx-auto">Alles wat u moet weten over de dagelijkse zorg voor uw nieuwe huisgenoot.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Voeding", 
                  icon: <ShoppingBag className="w-8 h-8" />, 
                  text: "Wij adviseren een dieet van hoogwaardige ruwe voeding (KVV) of kwalitatieve brokken zonder granen voor een optimale groei en glanzende vacht." 
                },
                { 
                  title: "Training", 
                  icon: <Dog className="w-8 h-8" />, 
                  text: "De Cobberdog is zeer intelligent. Begin direct met benchtraining en positieve bekrachtiging voor een stabiele en gehoorzame hond." 
                },
                { 
                  title: "Vachtverzorging", 
                  icon: <ShieldCheck className="w-8 h-8" />, 
                  text: "De hypoallergene vacht verhaart niet, maar vraagt wel om regelmatige borstelbeurten en een bezoek aan de trimmer elke 8-10 weken." 
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-3xl shadow-sm border border-brand-olive/5"
                >
                  <div className="text-brand-olive mb-6">{item.icon}</div>
                  <h3 className="serif text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-brand-ink/70 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Breeding Dogs */}
        <section id="dogs" className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="serif text-5xl font-bold mb-4">Onze Fokhonden</h2>
              <p className="text-brand-ink/60 max-w-2xl mx-auto">Maak kennis met de trotse ouders van onze toekomstige nestjes.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {BREEDING_DOGS.map((dog) => (
                <motion.div
                  key={dog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-[4/5]">
                    <img
                      src={dog.image}
                      alt={dog.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-brand-olive">
                      {dog.gender}
                    </div>
                  </div>
                  <h3 className="serif text-3xl font-bold mb-2">{dog.name}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-brand-olive mt-1 shrink-0" />
                      <p className="text-brand-ink/70"><span className="font-semibold text-brand-ink">Temperament:</span> {dog.temperament}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-brand-olive mt-1 shrink-0" />
                      <p className="text-brand-ink/70"><span className="font-semibold text-brand-ink">Gezondheid:</span> {dog.dnaStatus}</p>
                    </div>
                    <p className="text-brand-ink/60 italic mt-4">"{dog.description}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Purchase Process */}
        <section id="purchase" className="py-24 px-4 bg-brand-olive text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="serif text-5xl font-bold mb-8">Het Puppy Aankoopproces</h2>
                <div className="space-y-8">
                  {PURCHASE_STEPS.map((step, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                        <p className="text-white/70 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white text-brand-ink p-12 rounded-[2rem] shadow-2xl">
                <h3 className="serif text-3xl font-bold mb-6">Wat is inbegrepen?</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Officieel MDBA Stamboom",
                    "Europees Paspoort",
                    "Eerste vaccinaties & ontworming",
                    "Microchip & registratie",
                    "Uitgebreid Puppy Guide handboek",
                    "Levenslange ondersteuning & advies",
                    "Puppypakket met voer & speeltjes"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-olive" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-brand-olive/10 pt-8">
                  <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-brand-olive text-white py-4 rounded-full font-bold hover:bg-brand-olive/90 transition-all">
                    Nu Aanmelden voor Wachtlijst
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 px-4 bg-brand-cream">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="serif text-5xl font-bold mb-4">Veelgestelde Vragen</h2>
              <p className="text-brand-ink/60">Heeft u nog vragen? Hier vindt u de antwoorden op de meest gestelde vragen.</p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-2xl border border-brand-olive/10 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-brand-ink">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="p-6 pt-0 text-brand-ink/70 leading-relaxed border-t border-brand-olive/5">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="serif text-5xl font-bold mb-6">Neem Contact Op</h2>
                <p className="text-brand-ink/70 mb-10 leading-relaxed">
                  Heeft u vragen over onze honden, de planning van nestjes of wilt u gewoon meer informatie? We horen graag van u!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-olive">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-ink/60">Email ons op</p>
                      <p className="font-bold">info@mcmooneydogs.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-olive">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-ink/60">Bel ons op</p>
                      <p className="font-bold">+31 (0)6-83254144</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    
                  </div>
                </div>
              </div>

              <FormfacadeEmbed
formFacadeURL="https://formfacade.com/include/114125766646019097680/form/1FAIpQLSduwZNqalFRoIPyDhU8LaYafBGYAwZSjbHvA6OQC_kmcrJOaQ/classic.js/?div=ff-compose"
onSubmitForm={() => console.log('Form submitted')}
/>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-ink text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <PawPrint className="w-8 h-8 text-brand-cream" />
                <span className="serif text-2xl font-semibold tracking-tight">McMooney</span>
              </div>
              <p className="text-white/60 max-w-sm leading-relaxed">
                Toegewijde fokkers van de Australian Cobberdog in Nederland. Wij streven naar de hoogste standaard in gezondheid en karakter.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-white/40">Navigatie</h4>
              <ul className="space-y-4">
                {NAV_ITEMS.map(item => (
                  <li key={item.id}>
                    <button onClick={() => scrollToSection(item.id)} className="text-white/60 hover:text-white transition-colors">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-white/40">Social Media</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6 text-white/40 text-sm">
            <p>© {new Date().getFullYear()} McMooney. Alle rechten voorbehouden.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacybeleid</a>
              <a href="#" className="hover:text-white transition-colors">Algemene Voorwaarden</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Lightbox overlay */}
      <AnimatePresence>
      {selectedImage && (
  <motion.div
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999] p-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedImage(null)}
  >
    <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
      >
        <X className="w-5 h-5 text-brand-ink" />
      </button>
      <motion.img
        src={selectedImage}
        alt="Enlarged puppy"
        className="w-full max-h-[90vh] object-contain rounded-3xl shadow-2xl bg-white"
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.85 }}
      />
    </div>
  </motion.div>
)}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton phoneNumber="31683254144" />
    </div>


  );
}

function WhatsAppButton({ phoneNumber }: { phoneNumber: string }) {
  const [open, setOpen] = useState(false);

  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();
  const isOpen = day >= 0 && day <= 6 && hour >= 9 && hour < 20;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl w-72 overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">McMooney Cobberdogs</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-white' : 'bg-white/40'}`}></span>
                  <span className="text-white/90 text-xs">{isOpen ? 'Nu beschikbaar' : 'Momenteel gesloten'}</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto text-white/70 hover:text-white transition-colors"
                aria-label="Sluiten"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 py-4">
              <p className="text-brand-ink/80 text-sm leading-relaxed mb-4">
                Stel uw vraag via WhatsApp. We reageren zo snel mogelijk!
              </p>
              <div className="bg-gray-50 rounded-xl px-4 py-3 mb-4 text-xs text-brand-ink/60 space-y-1">
                <p className="font-semibold text-brand-ink/80 mb-1">Openingstijden</p>
                <p>Maandag – vrijdag: 09:00 – 20:00</p>
                <p>Weekend: 10:00 – 17:00</p>
              </div>
              <a
                href={`https://wa.me/${phoneNumber}?text=Hallo%2C%20ik%20heb%20interesse%20in%20een%20Australian%20Cobberdog.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 rounded-xl transition-colors text-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Start gesprek
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white pl-4 pr-5 py-3 rounded-full shadow-lg transition-colors"
        aria-label="WhatsApp contact"
      >
        <WhatsAppIcon className="w-5 h-5" />
        <span className="font-semibold text-sm">WhatsApp</span>
      </motion.button>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}
