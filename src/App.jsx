import React, { useState } from 'react';
import { ArrowRight, Sparkles, Heart, ShieldCheck, Leaf, MapPin, Phone, Menu, X, Instagram, Star, Quote, Globe } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('es');

  const IMAGENES = {
    logo: "https://i.postimg.cc/MZjF14p9/751447743-122101589271404328-3490054746355691907-n.jpg", 
    hero: "https://i.postimg.cc/PJkzWS6q/unnamed.webp", 
    alimentos: "https://i.postimg.cc/PJkzWS6q/unnamed.webp",
    accesorios: "https://i.postimg.cc/PJ4ZmTpM/unnamed-(1).webp",
    higiene: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80"
  };

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
      deliciasDesc: "Premios 100% naturales deshidratados a granel. Sin conservadores, colorantes ni sal añadida.",
      bulkSale: "Venta a granel",
      btnOrder: "Pedir 💬",
      catTitle: "Catálogo de Productos",
      catSubtitle: "Explora nuestras categorías de alimentos, accesorios y cuidado general.",
      cat1Title: "Alimentos Premium & Holísticos",
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
      deliciasDesc: "100% natural dehydrated bulk treats. No preservatives, dyes, or added salt.",
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

  const RESENAS = [
    {
      nombre: "WmWMARIANOWmW Delgado",
      mascota: lang === 'es' ? "Cliente en Google Maps" : "Google Maps Reviewer",
      comentario: lang === 'es' ? "Me encantó! La atención es increíble y la ubicación es súper accesible así como los precios! Lo mejor es que tienen descuentos a locales! 100% recomendado!!!" : "I loved it! The attention is incredible and the location is super accessible as well as the prices! 100% recommended!!!",
      estrellas: 5
    },
    {
      nombre: "Valeria M.",
      mascota: lang === 'es' ? "Dueña de Bruno 🐶" : "Bruno's Owner 🐶",
      comentario: lang === 'es' ? "Excelente atención y los premios del Delicias Bar le encantan a mi perrito. La mejor petshop de Bucerías." : "Great service and my dog loves the treats from the Delicias Bar. The best pet shop in Bucerias.",
      estrellas: 5
    },
    {
      nombre: "Sarah Jenkins",
      mascota: lang === 'es' ? "Dueña de Luna 🐕" : "Luna's Owner 🐕",
      comentario: "Super Pet Friendly! Love coming here during our walks in the Golden Zone. The natural snacks are top quality.",
      estrellas: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B382A] font-sans">
      <nav className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E7DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('inicio')}>
              <img src={IMAGENES.logo} alt="Racoo Logo" className="w-11 h-11 rounded-full object-cover border-2 border-[#C85A32]" />
              <span className="font-extrabold text-2xl tracking-tight text-[#2B382A]">
                Racoo <span className="text-[#C85A32]">Petshop</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-7 font-semibold text-sm">
              <button onClick={() => setActiveTab('inicio')} className={activeTab === 'inicio' ? 'text-[#C85A32] underline decoration-2 underline-offset-4' : 'text-[#4A5D45]'}>{t.navInicio}</button>
              <button onClick={() => setActiveTab('catalogo')} className={activeTab === 'catalogo' ? 'text-[#C85A32] underline decoration-2 underline-offset-4' : 'text-[#4A5D45]'}>{t.navCatalogo}</button>
              <button onClick={() => setActiveTab('delicias')} className={`${activeTab === 'delicias' ? 'text-[#C85A32] underline decoration-2 underline-offset-4' : 'text-[#4A5D45]'} flex items-center gap-1`}>
                <Sparkles className="w-4 h-4 text-[#C85A32]" /> {t.navDelicias}
              </button>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E7DFD5] bg-white text-xs font-bold text-[#2B382A]">
                <Globe className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>{lang === 'es' ? 'EN' : 'ES'}</span>
              </button>
              <a href="https://wa.me/5213221234567" target="_blank" rel="noreferrer" className="bg-[#2B382A] text-white px-5 py-2.5 rounded-xl font-bold text-sm">
                {t.btnPedido}
              </a>
            </div>
          </div>
        </div>
      </nav>

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
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B382A]">
                    {t.heroTitle1}<span className="text-[#C85A32]">{t.heroTitle2}</span>
                  </h1>
                  <p className="text-lg text-[#4A5D45]">{t.heroDesc}</p>
                  <div className="flex gap-4 pt-2">
                    <button onClick={() => setActiveTab('catalogo')} className="px-7 py-4 rounded-xl bg-[#C85A32] text-white font-bold">{t.btnVerCatalogo}</button>
                    <button onClick={() => setActiveTab('delicias')} className="px-6 py-4 rounded-xl bg-[#FAF0EB] text-[#C85A32] border border-[#E7BFB0] font-bold">{t.btnExplorarDelicias}</button>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <img src={IMAGENES.hero} alt="Mascota Racoo" className="w-full rounded-2xl border border-[#E7DFD5] shadow-xl" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#EAE3D9]/30 border-y border-[#E7DFD5]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center space-y-2 mb-12">
                <h2 className="text-3xl font-extrabold text-[#2B382A]">{t.reviewsTitle}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {RESENAS.map((r, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-[#E7DFD5]">
                    <p className="text-sm text-[#4A5D45] italic">"{r.comentario}"</p>
                    <p className="font-bold text-xs text-[#2B382A] mt-4">{r.nombre}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {activeTab === 'catalogo' && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-extrabold text-[#2B382A] text-center mb-8">{t.catTitle}</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden"><img src={IMAGENES.alimentos} className="h-48 w-full object-cover" /><div className="p-6"><h3 className="font-bold text-xl">{t.cat1Title}</h3></div></div>
            <div className="bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden"><img src={IMAGENES.accesorios} className="h-48 w-full object-cover" /><div className="p-6"><h3 className="font-bold text-xl">{t.cat2Title}</h3></div></div>
            <div className="bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden"><img src={IMAGENES.higiene} className="h-48 w-full object-cover" /><div className="p-6"><h3 className="font-bold text-xl">{t.cat3Title}</h3></div></div>
          </div>
        </section>
      )}

      {activeTab === 'delicias' && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-extrabold text-[#2B382A] text-center mb-8">{t.deliciasTitle}</h1>
          <p className="text-center text-[#4A5D45] mb-8">{t.deliciasDesc}</p>
        </section>
      )}
    </div>
  );
}
