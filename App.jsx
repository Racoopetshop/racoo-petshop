import React, { useState } from 'react';
import { ArrowRight, Sparkles, Heart, ShieldCheck, Leaf, MapPin, Phone, Menu, X, Instagram, Star, Quote } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 🖼️ SUSTITUYE AQUÍ TUS ENLACES DE IMÁGENES REALES
  const IMAGENES = {
    // Si tienes el link de tu logo, pégalo aquí. Si no, usa el avatar por defecto.
    logo: "https://i.postimg.cc/MZjF14p9/751447743-122101589271404328-3490054746355691907-n.jpg", 
    
    // Foto principal del Hero (Banner de inicio)
    hero: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=900&q=85", 
    
    // Fotos del catálogo
    alimentos: "https://i.postimg.cc/PJkzWS6q/unnamed.webp",
    accesorios: "https://i.postimg.cc/PJ4ZmTpM/unnamed-(1).webp",
    higiene: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80"
  };

  // ⭐️ RESEÑAS DE CLIENTES REALES (Puedes editar los textos y nombres)
  const RESENAS = [
    {
      nombre: "Angel",
      comentario: "Super cute store and very friendly!! Will be back for sure hopefully with our dogs next time :) food, treats and pet accessories",
      estrellas: 5
    },
    {
      nombre: "WmWMARIANOWmW Delgado",
      comentario: "Me encantó!
La atención es increíble y la ubicación es súper accesible así como los precios!
Lo mejor es que tienen descuentos a locales! 100% recomendado!!!",
      estrellas: 5
    },
    {
      nombre: "Eric Zink",
      comentario: "What an amazing addition to Bucerias. Owners are super pet friendly and knowledgeable. Great assortment of treats and necessities",
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
      
      {/* HEADER CON LOGO */}
      <nav className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E7DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo de Racoo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('inicio')}>
              <img 
                src={IMAGENES.logo} 
                alt="Racoo Petshop Logo" 
                className="w-11 h-11 rounded-full object-cover border-2 border-[#C85A32]"
              />
              <span className="font-extrabold text-2xl tracking-tight text-[#2B382A]">
                Racoo <span className="text-[#C85A32]">Petshop</span>
              </span>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
              <button onClick={() => setActiveTab('inicio')} className={activeTab === 'inicio' ? 'text-[#C85A32] underline decoration-2 underline-offset-4' : 'text-[#4A5D45]'}>Inicio</button>
              <button onClick={() => setActiveTab('catalogo')} className={activeTab === 'catalogo' ? 'text-[#C85A32] underline decoration-2 underline-offset-4' : 'text-[#4A5D45]'}>Catálogo</button>
              <button onClick={() => setActiveTab('delicias')} className={`${activeTab === 'delicias' ? 'text-[#C85A32] underline decoration-2 underline-offset-4' : 'text-[#4A5D45]'} flex items-center gap-1`}>
                <Sparkles className="w-4 h-4 text-[#C85A32]" /> Delicias Bar
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-[#4A5D45]">Contacto</button>
            </div>

            <a href="https://wa.me/5213221234567" target="_blank" rel="noreferrer" className="hidden md:block bg-[#2B382A] text-white px-5 py-2.5 rounded-xl font-bold text-sm">
              Hacer Pedido 💬
            </a>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#2B382A]">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* VISTA DE INICIO */}
      {activeTab === 'inicio' && (
        <main>
          {/* HERO BANNER */}
          <section className="relative overflow-hidden pt-8 pb-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE3D9] text-[#2B382A] text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse"></span>
                    <span>Petshop & Delicias Bar en Bucerías, Nayarit</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B382A] tracking-tight">
                    Bienestar, nutrición y amor para tu <span className="text-[#C85A32]">compañero de vida</span>
                  </h1>

                  <p className="text-lg text-[#4A5D45]">
                    Alimentos holísticos, accesorios confortables y nuestro famoso <strong className="text-[#2B382A]">Delicias Bar</strong> con premios 100% naturales a granel.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button onClick={() => setActiveTab('catalogo')} className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#C85A32] text-white font-bold shadow-md">
                      <span>Ver Catálogo</span> <ArrowRight className="w-5 h-5" />
                    </button>
                    <button onClick={() => setActiveTab('delicias')} className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FAF0EB] text-[#C85A32] border-2 border-[#E7BFB0] font-bold">
                      <Sparkles className="w-5 h-5" /> <span>Explorar Delicias Bar</span>
                    </button>
                  </div>
                </div>

                {/* Foto Principal Estilo Instagram */}
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
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* SECCIÓN DE RESEÑAS / TESTIMONIOS */}
          <section className="py-16 bg-[#EAE3D9]/30 border-y border-[#E7DFD5]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center space-y-2 mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">Comunidad Racoo</span>
                <h2 className="text-3xl font-extrabold text-[#2B382A]">Lo que dicen nuestras familias pet lovers 🐾</h2>
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

      {/* CATÁLOGOS CON IMÁGENES REEMPLAZABLES */}
      {activeTab === 'catalogo' && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-8">Catálogo de Productos</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border overflow-hidden">
              <img src={IMAGENES.alimentos} alt="Alimentos" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl">Alimentos Premium & Holísticos</h3>
                <p className="text-sm text-gray-600 mt-2">Marcas seleccionadas para perros y gatos.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border overflow-hidden">
              <img src={IMAGENES.accesorios} alt="Accesorios" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl">Accesorios & Juguetes</h3>
                <p className="text-sm text-gray-600 mt-2">Pecheras, correas y juguetes interactivos.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border overflow-hidden">
              <img src={IMAGENES.higiene} alt="Higiene" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl">Cuidado e Higiene</h3>
                <p className="text-sm text-gray-600 mt-2">Champús naturales y suplementos de salud.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer id="contacto" className="bg-[#2B382A] text-white py-8 mt-16 text-center text-xs">
        <p>Racoo Petshop — Bucerías, Nayarit. WhatsApp: +52 (322) 123-4567</p>
      </footer>

    </div>
  );
}
