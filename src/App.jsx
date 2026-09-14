import React, { useState } from 'react';
import { ArrowRight, Sparkles, Heart, ShieldCheck, Leaf, MapPin, Phone, Menu, X, Instagram, Star, Quote, Globe } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('es'); // 'es' para Español, 'en' para Inglés

  // 🖼️ ENLACES DE IMÁGENES (Sustituye con tus links de Drive o ImgBB)
  const IMAGENES = {
    logo: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn1O6a-PGXmGZ-Pt--k-YDEvdgXoypkDPgB14bNg9LWiMWgRA8j-i0ShFr4SpQRu5a-sKFltLPCo7rXVIAxHrIDp3LwMcYkQAmgfQmR1uISD2h4-OCNRbJnIANoyjNY5DpSg28V7iWh3vM=s1360-w1360-h1020-rw", 
    hero: "https://i.postimg.cc/PJkzWS6q/unnamed.webp", 
    alimentos: "https://i.postimg.cc/PJkzWS6q/unnamed.webp",
    accesorios: "https://i.postimg.cc/PJ4ZmTpM/unnamed-(1).webp",
    higiene: "https://i.postimg.cc/PJ4ZmTpM/unnamed-(1).webp"
  };

  // 🌐 DICCIONARIO DE TEXTOS MULTI-IDIOMA
  const t = {
    es: {
      navInicio: "Inicio",
      navCatalogo: "Catálogo",
      navDelicias: "Delicias Bar",
      navContacto: "Contacto",
      btnPedido: "Hacer Pedido 💬",
      badgeLocation: "Petshop & Delicias Bar en Bucerías, Nayarit",
      heroTitle1: "Bienestar, nutrición y amor para tu ",
      heroTitle2: "compañero de vida",
      heroDesc: "Una cuidada selección de alimentos holísticos, accesorios confortables y nuestro famoso Delicias Bar con premios 100% naturales a granel.",
      btnVerCatalogo: "Ver Catálogo",
      btnExplorarDelicias: "Explorar Delicias Bar",
      pillar1: "100% Naturales a Granel",
      pillar2: "Atención Cercana & Calidad",
      pillar3: "Pre-pedido ágil por WhatsApp",
      liveBadge: "Delicias Bar en Vivo 🥩",
      liveDesc: "Snacks deshidratados sin químicos",
      btnVerPremios: "Ver Premios",
      instaCaption: "Tu mascota merece lo mejor de la naturaleza 🌿 Visítanos en Bucerías o haz tu pre-pedido con entrega local.",
      reviewsTag: "Comunidad Racoo",
      reviewsTitle: "Lo que dicen nuestras familias pet lovers 🐾",
      deliciasTag: "Exclusivo de Racoo",
      deliciasTitle: "Delicias Bar 🥩",
      deliciasDesc: "Premios 100% naturales deshidratados a granel. Sin conservadores, colorantes ni sal añadida. ¡Llévate la variedad y cantidad que tu mascota prefiera!",
      bulkSale: "Venta a granel",
      btnOrder: "Pedir 💬",
      catTitle: "Catálogo de Productos",
      catSubtitle: "Explora nuestras categorías de alimentos, accesorios y cuidado general.",
      cat1Title: "Alimentos Premium",
      cat1Desc: "Croquetas y alimento húmedo sin granos para todas las etapas de vida.",
      cat2Title: "Accesorios & Juguetes",
      cat2Desc: "Correas, pecheras ergonómicas y juguetes interactivos.",
      cat3Title: "Cuidado e Higiene",
      cat3Desc: "Champús naturales, cepillos y complementos de salud.",
      btnConsult: "Consultar por WhatsApp →",
      footerDesc: "Tu tienda de confianza en Bucerías para la nutrición, bienestar y consentir a tus mascotas."
    },
    en: {
      navInicio: "Home",
      navCatalogo: "Catalog",
      navDelicias: "Delicias Bar",
      navContacto: "Contact",
      btnPedido: "Order Now 💬",
      badgeLocation: "Petshop & Delicias Bar in Bucerias, Nayarit",
      heroTitle1: "Wellness, nutrition, and love for your ",
      heroTitle2: "life companion",
      heroDesc: "A curated selection of holistic foods, comfortable accessories, and our famous Delicias Bar with 100% natural bulk treats.",
      btnVerCatalogo: "View Catalog",
      btnExplorarDelicias: "Explore Delicias Bar",
      pillar1: "100% Natural Bulk Treats",
      pillar2: "Personalized Care & Quality",
      pillar3: "Quick Order via WhatsApp",
      liveBadge: "Live Delicias Bar 🥩",
      liveDesc: "Chemical-free dehydrated snacks",
      btnVerPremios: "See Treats",
      instaCaption: "Your pet deserves the best of nature 🌿 Visit us in Bucerias or place a pre-order with local delivery.",
      reviewsTag: "Racoo Community",
      reviewsTitle: "What our pet lover families say 🐾",
      deliciasTag: "Racoo Exclusive",
      deliciasTitle: "Delicias Bar 🥩",
      deliciasDesc: "100% natural dehydrated bulk treats. No preservatives, dyes, or added salt. Grab the exact variety and amount your pet loves!",
      bulkSale: "Bulk sale",
      btnOrder: "Order 💬",
      catTitle: "Product Catalog",
      catSubtitle: "Explore our selection of food, accessories, and general care.",
      cat1Title: "Premium & Holistic Food",
      cat1Desc: "Grain-free kibble and wet food for all life stages.",
      cat2Title: "Accessories & Toys",
      cat2Desc: "Leashes, ergonomic harnesses, and interactive toys.",
      cat3Title: "Grooming & Health",
      cat3Desc: "Natural shampoos, brushes, and health supplements.",
      btnConsult: "Inquire via WhatsApp →",
      footerDesc: "Your trusted pet shop in Bucerias for nutrition, wellness, and pampering your pets."
    }
  }[lang];

  // ⭐️ RESEÑAS CON TEXTO SEGÚN IDIOMA
  const RESENAS = [
    {
      nombre: "Eric Zink",
      comentario: lang === 'es' ? "Excelente atención y los premios del Delicias Bar le encantan a mi perrito. La mejor petshop de Bucerías." : "What an amazing addition to Bucerias. Owners are super pet friendly and knowledgeable. Great assortment of treats and necessities.": 5
    },
    {
      nombre: "Carlos R.",
      mascota: lang === 'es' ? "Dueño de Michi 🐱" : "Michi's Owner 🐱",
      comentario: lang === 'es' ? "Encontré alimento holístico de alta calidad que no conseguía en otros lados. El servicio por WhatsApp es super rápido." : "Found high-quality holistic food that I couldn't find anywhere else. WhatsApp service is super fast.",
      estrellas: 5
    },
    {
      nombre: "Sarah Jenkins",
      mascota: lang === 'es' ? "Dueña de Luna 🐕" : "Luna's Owner 🐕",
      comentario: "Super Pet Friendly! Love coming here during our walks in the Golden Zone. The natural snacks are top quality.",
      estrellas: 5
    }
  ];

  const scrollToSection = (id) => {
    setActiveTab('inicio');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B382A] font-sans">
      
      {/* HEADER CON BOTÓN DE IDIOMA */}
      <nav className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E7DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('inicio')}>
              <img src={IMAGENES.logo} alt="Racoo Logo" className="w-11 h-11 rounded-full object-cover border-2 border-[#C85A32]" />
              <span className="font-extrabold text-2xl tracking-tight text-[#2B382A]">
                Racoo <span className="text-[#C85A32]">Petshop</span>
              </span>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center gap-7 font-semibold text-sm">
              <button onClick={() => setActiveTab('inicio')} className={activeTab === 'inicio' ? 'text-[#C85A32] underline decoration-2 underline-offset-4' : 'text-[#4A5D45]'}>{t.navInicio}</button>
              <button onClick={() => setActiveTab('catalogo')} className={activeTab === 'catalogo' ? 'text-[#C85A32] underline decoration-2 underline-offset-4' : 'text-[#4A5D45]'}>{t.navCatalogo}</button>
              <button onClick={() => setActiveTab('delicias')} className={`${activeTab === 'delicias' ? 'text-[#C85A32] underline decoration-2 underline-offset-4' : 'text-[#4A5D45]'} flex items-center gap-1`}>
                <Sparkles className="w-4 h-4 text-[#C85A32]" /> {t.navDelicias}
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-[#4A5D45]">{t.navContacto}</button>
            </div>

            {/* Selector de Idioma + Botón WhatsApp */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E7DFD5] bg-white text-xs font-bold text-[#2B382A] hover:border-[#C85A32] transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>{lang === 'es' ? 'EN' : 'ES'}</span>
              </button>

              <a href="https://wa.me/5213221234567" target="_blank" rel="noreferrer" className="bg-[#2B382A] text-white px-5 py-2.5 rounded-xl font-bold text-sm">
                {t.btnPedido}
              </a>
            </div>

            {/* Botón Móvil */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="px-2.5 py-1 rounded-md border border-[#E7DFD5] bg-white text-xs font-bold"
              >
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#2B382A] p-1">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú Móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-[#E7DFD5] px-4 pt-2 pb-6 space-y-3 font-semibold">
            <button onClick={() => { setActiveTab('inicio'); setMobileMenuOpen(false); }} className="block w-full text-left py-1">{t.navInicio}</button>
            <button onClick={() => { setActiveTab('catalogo'); setMobileMenuOpen(false); }} className="block w-full text-left py-1">{t.navCatalogo}</button>
            <button onClick={() => { setActiveTab('delicias'); setMobileMenuOpen(false); }} className="block w-full text-left py-1 text-[#C85A32]">{t.navDelicias} ✨</button>
            <button onClick={() => { scrollToSection('contacto'); setMobileMenuOpen(false); }} className="block w-full text-left py-1">{t.navContacto}</button>
          </div>
        )}
      </nav>

      {/* VISTA DE INICIO */}
      {activeTab === 'inicio' && (
        <main>
          <section className="relative overflow-hidden pt-8 pb-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE3D9] text-[#2B382A] text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse"></span>
                    <span>{t.badgeLocation}</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B382A] tracking-tight">
                    {t.heroTitle1}<span className="text-[#C85A32]">{t.heroTitle2}</span>
                  </h1>

                  <p className="text-lg text-[#4A5D45] leading-relaxed max-w-2xl">{t.heroDesc}</p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button onClick={() => setActiveTab('catalogo')} className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#C85A32] text-white font-bold shadow-md">
                      <span>{t.btnVerCatalogo}</span> <ArrowRight className="w-5 h-5" />
                    </button>
                    <button onClick={() => setActiveTab('delicias')} className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FAF0EB] text-[#C85A32] border-2 border-[#E7BFB0] font-bold">
                      <Sparkles className="w-5 h-5" /> <span>{t.btnExplorarDelicias}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[#E7DFD5]">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#3D4C3A]">
                      <Leaf className="w-4 h-4 text-[#2B382A]" /> <span>{t.pillar1}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#3D4C3A]">
                      <Heart className="w-4 h-4 text-[#C85A32]" /> <span>{t.pillar2}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#3D4C3A] col-span-2 sm:col-span-1">
                      <ShieldCheck className="w-4 h-4 text-[#2B382A]" /> <span>{t.pillar3}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E7DFD5] shadow-xl space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img src={IMAGENES.logo} alt="Logo" className="w-9 h-9 rounded-full object-cover border border-[#E7DFD5]" />
                        <div>
                          <p className="text-xs font-bold text-[#2B382A]">racoo_petshop</p>
                          <p className="text-[10px] text-[#5A6B56]">Golden Zone, Bucerías</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold bg-[#2B382A]/10 text-[#2B382A] px-2.5 py-1 rounded-full">Pet Friendly 🐾</span>
                    </div>

                    <div className="relative rounded-xl overflow-hidden aspect-square bg-[#EAE3D9]">
                      <img src={IMAGENES.hero} alt="Mascota Racoo" className="w-full h-full object-cover" />
                      <div className="absolute bottom-3 left-3 right-3 bg-[#FAF7F2]/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#E7DFD5] flex items-center justify-between text-xs shadow-md">
                        <div>
                          <p className="font-bold text-[#2B382A]">{t.liveBadge}</p>
                          <p className="text-[11px] text-[#5A6B56]">{t.liveDesc}</p>
                        </div>
                        <button onClick={() => setActiveTab('delicias')} className="bg-[#C85A32] text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                          {t.btnVerPremios}
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-[#3D4C3A] pt-1"><strong className="text-[#2B382A]">racoo_petshop</strong> {t.instaCaption}</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* RESEÑAS MULTI-IDIOMA */}
          <section className="py-16 bg-[#EAE3D9]/30 border-y border-[#E7DFD5]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center space-y-2 mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">{t.reviewsTag}</span>
                <h2 className="text-3xl font-extrabold text-[#2B382A]">{t.reviewsTitle}</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {RESENAS.map((resena, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E7DFD5] shadow-sm flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex text-amber-500 gap-1">
                        {[...Array(resena.estrellas)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-sm text-[#4A5D45] italic">"{resena.comentario}"</p>
                    </div>
                    <div className="pt-2 border-t border-[#E7DFD5]/60 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-xs text-[#2B382A]">{resena.nombre}</p>
                        <p className="text-[10px] text-[#5A6B56]">{resena.mascota}</p>
                      </div>
                      <Quote className="w-5 h-5 text-[#C85A32]/20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* CATÁLOGOS */}
      {activeTab === 'catalogo' && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center space-y-2 mb-12">
            <h1 className="text-4xl font-extrabold text-[#2B382A]">{t.catTitle}</h1>
            <p className="text-[#4A5D45] max-w-xl mx-auto">{t.catSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden shadow-sm">
              <img src={IMAGENES.alimentos} alt="Alimentos" className="h-48 w-full object-cover" />
              <div className="p-6 space-y-2">
                <h3 className="font-bold text-xl text-[#2B382A]">{t.cat1Title}</h3>
                <p className="text-sm text-[#4A5D45]">{t.cat1Desc}</p>
                <a href="https://wa.me/5213221234567" target="_blank" rel="noreferrer" className="inline-block pt-2 text-[#C85A32] font-bold text-sm">{t.btnConsult}</a>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden shadow-sm">
              <img src={IMAGENES.accesorios} alt="Accesorios" className="h-48 w-full object-cover" />
              <div className="p-6 space-y-2">
                <h3 className="font-bold text-xl text-[#2B382A]">{t.cat2Title}</h3>
                <p className="text-sm text-[#4A5D45]">{t.cat2Desc}</p>
                <a href="https://wa.me/5213221234567" target="_blank" rel="noreferrer" className="inline-block pt-2 text-[#C85A32] font-bold text-sm">{t.btnConsult}</a>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden shadow-sm">
              <img src={IMAGENES.higiene} alt="Higiene" className="h-48 w-full object-cover" />
              <div className="p-6 space-y-2">
                <h3 className="font-bold text-xl text-[#2B382A]">{t.cat3Title}</h3>
                <p className="text-sm text-[#4A5D45]">{t.cat3Desc}</p>
                <a href="https://wa.me/5213221234567" target="_blank" rel="noreferrer" className="inline-block pt-2 text-[#C85A32] font-bold text-sm">{t.btnConsult}</a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DELICIAS BAR */}
      {activeTab === 'delicias' && (
        <section className="max-w-7xl mx-auto px-4 py-12 space-y-8">
          <div className="bg-[#FAF0EB] border border-[#E7BFB0] p-8 rounded-3xl text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C85A32] text-white text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" /> {t.deliciasTag}
            </span>
            <h1 className="text-4xl font-extrabold text-[#2B382A]">{t.deliciasTitle}</h1>
            <p className="text-[#4A5D45] max-w-2xl mx-auto font-medium">{t.deliciasDesc}</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { nombre: lang === 'es' ? 'Hígado Deshidratado' : 'Dehydrated Liver', desc: lang === 'es' ? 'Rico en hierro y proteína pura.' : 'Rich in iron and pure protein.', emoji: '🍖' },
              { nombre: lang === 'es' ? 'Orejas de Cerdo' : 'Pig Ears', desc: lang === 'es' ? 'Ideal para la limpieza dental.' : 'Great for dental cleaning.', emoji: '🥓' },
              { nombre: lang === 'es' ? 'Tiras de Pollo' : 'Chicken Strips', desc: lang === 'es' ? 'Snack ligero bajo en grasa.' : 'Light low-fat snack.', emoji: '🍗' },
              { nombre: lang === 'es' ? 'Premios de Pescado' : 'Fish Treats', desc: lang === 'es' ? 'Fuente natural de Omega 3.' : 'Natural source of Omega 3.', emoji: '🐟' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-[#E7DFD5] shadow-xs space-y-3">
                <div className="text-4xl">{item.emoji}</div>
                <h3 className="font-bold text-lg text-[#2B382A]">{item.nombre}</h3>
                <p className="text-xs text-[#4A5D45]">{item.desc}</p>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-xs font-semibold bg-[#EAE3D9] px-2 py-1 rounded-md">{t.bulkSale}</span>
                  <a href={`https://wa.me/5213221234567?text=${encodeURIComponent(item.nombre)}`} target="_blank" rel="noreferrer" className="text-xs font-bold text-[#C85A32]">{t.btnOrder}</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer id="contacto" className="bg-[#2B382A] text-white pt-12 pb-8 border-t border-[#3D4C3A] mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 pb-8 border-b border-[#3D4C3A]">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold tracking-tight">Racoo <span className="text-[#C85A32]">Petshop</span></h3>
            <p className="text-sm text-[#EAE3D9]/80 leading-relaxed">{t.footerDesc}</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-base text-[#EAE3D9]">Ubicación & Contacto</h4>
            <div className="space-y-2 text-sm text-[#EAE3D9]/80">
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#C85A32]" /> Golden Zone, Bucerías, Nayarit, México</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#C85A32]" /> WhatsApp: +52 (322) 123-4567</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-base text-[#EAE3D9]">Síguenos</h4>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[#3D4C3A] flex items-center justify-center hover:bg-[#C85A32] transition-colors inline-flex">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-6 text-center text-xs text-[#EAE3D9]/60">
          <p>© {new Date().getFullYear()} Racoo Petshop. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
