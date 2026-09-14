import React, { useState } from 'react';
import { ArrowRight, Sparkles, Heart, ShieldCheck, Leaf, ShoppingBag, Phone, MapPin, Menu, X, Instagram } from 'lucide-react';

export default function App() {
  // Estado para la pestaña activa ("inicio", "catalogo", "delicias", "contacto")
  const [activeTab, setActiveTab] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función para hacer scroll suave a secciones
  const scrollToSection = (id) => {
    setActiveTab('inicio');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B382A] font-sans">
      
      {/* 1. BARRA DE NAVEGACIÓN (HEADER) */}
      <nav className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E7DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('inicio')}>
              <div className="w-10 h-10 rounded-full bg-[#C85A32] flex items-center justify-center text-white font-bold text-xl">
                🐾
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-[#2B382A]">
                Racoo <span className="text-[#C85A32]">Petshop</span>
              </span>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
              <button 
                onClick={() => setActiveTab('inicio')} 
                className={`${activeTab === 'inicio' ? 'text-[#C85A32] underline decoration-2 underline-offset-4' : 'text-[#4A5D45] hover:text-[#2B382A]'}`}
              >
                Inicio
              </button>
              <button 
                onClick={() => setActiveTab('catalogo')} 
                className={`${activeTab === 'catalogo' ? 'text-[#C85A32] underline decoration-2 underline-offset-4' : 'text-[#4A5D45] hover:text-[#2B382A]'}`}
              >
                Catálogo Generales
              </button>
              <button 
                onClick={() => setActiveTab('delicias')} 
                className={`${activeTab === 'delicias' ? 'text-[#C85A32] underline decoration-2 underline-offset-4' : 'text-[#4A5D45] hover:text-[#2B382A]'} flex items-center gap-1.5`}
              >
                <Sparkles className="w-4 h-4 text-[#C85A32]" />
                Delicias Bar
              </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="text-[#4A5D45] hover:text-[#2B382A]"
              >
                Contacto & Ubicación
              </button>
            </div>

            {/* Botón WhatsApp rápido */}
            <div className="hidden md:flex items-center">
              <a 
                href="https://wa.me/5213221234567?text=Hola%20Racoo%20Petshop,%20quisiera%20más%20información" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#2B382A] hover:bg-[#1f291f] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all"
              >
                Hacer Pedido 💬
              </a>
            </div>

            {/* Botón Menú Móvil */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#2B382A] p-2">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú Desplegable Móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-[#E7DFD5] px-4 pt-2 pb-6 space-y-3">
            <button onClick={() => { setActiveTab('inicio'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-semibold">Inicio</button>
            <button onClick={() => { setActiveTab('catalogo'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-semibold">Catálogo Generales</button>
            <button onClick={() => { setActiveTab('delicias'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-semibold text-[#C85A32]">Delicias Bar ✨</button>
            <button onClick={() => { scrollToSection('contacto'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-semibold">Contacto</button>
          </div>
        )}
      </nav>

      {/* 2. VISTA DE INICIO */}
      {activeTab === 'inicio' && (
        <main>
          {/* HERO BANNER */}
          <section className="relative overflow-hidden pt-8 pb-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Contenido Texto */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE3D9] text-[#2B382A] text-xs font-semibold tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse"></span>
                    <span>Petshop & Delicias Bar en Bucerías, Nayarit</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B382A] tracking-tight leading-[1.12]">
                    Bienestar, nutrición y amor para tu{' '}
                    <span className="text-[#C85A32] relative inline-block">
                      compañero de vida
                      <svg className="absolute -bottom-2 left-0 w-full text-[#C85A32]/30 -z-10" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                        <path d="M0 7 C 20 0, 40 8, 60 2 C 80 -4, 95 6, 100 4" stroke="currentColor" strokeWidth="4" fill="none" />
                      </svg>
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl text-[#4A5D45] leading-relaxed max-w-2xl font-normal">
                    Una cuidada selección de alimentos holísticos, accesorios confortables y nuestro famoso <strong className="text-[#2B382A] font-semibold">Delicias Bar</strong> con premios 100% naturales a granel para consentir a tus perros y gatos.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <button
                      onClick={() => setActiveTab('catalogo')}
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#C85A32] hover:bg-[#B64522] text-white text-base font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Ver Catálogo</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => setActiveTab('delicias')}
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FAF0EB] hover:bg-[#F5E2D8] text-[#C85A32] border-2 border-[#E7BFB0] text-base font-bold transition-all shadow-xs"
                    >
                      <Sparkles className="w-5 h-5 text-[#C85A32]" />
                      <span>Explorar Delicias Bar</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[#E7DFD5]">
                    <div className="flex items-center gap-2.5 text-xs text-[#3D4C3A] font-semibold">
                      <div className="w-8 h-8 rounded-lg bg-[#EAE3D9] flex items-center justify-center text-[#2B382A] shrink-0">
                        <Leaf className="w-4 h-4 text-[#2B382A]" />
                      </div>
                      <span>100% Naturales a Granel</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-[#3D4C3A] font-semibold">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF0EB] flex items-center justify-center text-[#C85A32] shrink-0">
                        <Heart className="w-4 h-4 text-[#C85A32]" />
                      </div>
                      <span>Atención Cercana & Calidad</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-[#3D4C3A] font-semibold col-span-2 sm:col-span-1">
                      <div className="w-8 h-8 rounded-lg bg-[#EAE3D9] flex items-center justify-center text-[#2B382A] shrink-0">
                        <ShieldCheck className="w-4 h-4 text-[#2B382A]" />
                      </div>
                      <span>Pre-pedido ágil por WhatsApp</span>
                    </div>
                  </div>
                </div>

                {/* Tarjeta Visual Estilo Instagram */}
                <div className="lg:col-span-5 relative">
                  <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E7DFD5] shadow-xl space-y-3">
                    <div className="flex items-center justify-between px-1">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full overflow-hidden border border-[#E7DFD5] bg-[#FAF7F2] shrink-0 flex items-center justify-center bg-[#C85A32] text-white font-bold">
                          🐾
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#2B382A]">racoo_petshop</p>
                          <p className="text-[10px] text-[#5A6B56]">Golden Zone, Bucerías</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold bg-[#2B382A]/10 text-[#2B382A] px-2.5 py-1 rounded-full">
                        Pet Friendly 🐾
                      </span>
                    </div>

                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-square bg-[#EAE3D9]">
                      <img
                        src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=900&q=85"
                        alt="Mascota feliz"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-3 left-3 right-3 bg-[#FAF7F2]/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#E7DFD5] flex items-center justify-between text-xs shadow-md">
                        <div>
                          <p className="font-bold text-[#2B382A]">Delicias Bar en Vivo 🥩</p>
                          <p className="text-[11px] text-[#5A6B56]">Snacks deshidratados sin químicos</p>
                        </div>
                        <button
                          onClick={() => setActiveTab('delicias')}
                          className="bg-[#C85A32] text-white text-[11px] font-bold px-2.5 py-1 rounded-md hover:bg-[#B64522] transition-colors"
                        >
                          Ver Premios
                        </button>
                      </div>
                    </div>

                    <div className="px-1 pt-1 text-xs text-[#3D4C3A]">
                      <p>
                        <strong className="text-[#2B382A]">racoo_petshop</strong> Tu mascota merece lo mejor de la naturaleza 🌿 Visítanos en Bucerías o haz tu pre-pedido con entrega local.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* SECCIÓN DE BIENVENIDA / DESTACADOS */}
          <section className="py-16 bg-[#EAE3D9]/40 border-y border-[#E7DFD5]">
            <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
              <h2 className="text-3xl font-extrabold text-[#2B382A]">¿Por qué elegir Racoo Petshop?</h2>
              <p className="max-w-2xl mx-auto text-[#4A5D45]">Ofrecemos alternativas saludables para la nutrición de tus consentidos, combinando alimentos de alta calidad con snacks 100% naturales.</p>
              
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E7DFD5] shadow-sm text-left space-y-2">
                  <div className="text-2xl">🥩</div>
                  <h3 className="font-bold text-lg text-[#2B382A]">Delicias Bar</h3>
                  <p className="text-sm text-[#4A5D45]">Premios naturales deshidratados a granel. Compra exactamente la cantidad que necesitas.</p>
                </div>
                <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E7DFD5] shadow-sm text-left space-y-2">
                  <div className="text-2xl">🌿</div>
                  <h3 className="font-bold text-lg text-[#2B382A]">Nutrición Holística</h3>
                  <p className="text-sm text-[#4A5D45]">Marcas seleccionadas para el cuidado integral y la salud intestinal de perros y gatos.</p>
                </div>
                <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E7DFD5] shadow-sm text-left space-y-2">
                  <div className="text-2xl">📍</div>
                  <h3 className="font-bold text-lg text-[#2B382A]">Atención Local</h3>
                  <p className="text-sm text-[#4A5D45]">Ubicados en la Zona Dorada de Bucerías, con atención cercana y entregas en la zona.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* 3. VISTA DE CATÁLOGO GENERAL */}
      {activeTab === 'catalogo' && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center space-y-3 mb-12">
            <h1 className="text-4xl font-extrabold text-[#2B382A]">Catálogo de Productos</h1>
            <p className="text-[#4A5D45] max-w-xl mx-auto">Explora nuestras categorías de alimentos, accesorios y cuidado general.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80" alt="Alimentos" className="h-48 w-full object-cover" />
              <div className="p-6 space-y-2">
                <h3 className="font-bold text-xl text-[#2B382A]">Alimentos Premium & Holísticos</h3>
                <p className="text-sm text-[#4A5D45]">Croquetas y alimento húmedo sin granos para todas las etapas de vida.</p>
                <a href="https://wa.me/5213221234567?text=Hola,%20busco%20información%20sobre%20alimentos" target="_blank" rel="noreferrer" className="inline-block pt-2 text-[#C85A32] font-bold text-sm hover:underline">Consultar por WhatsApp →</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80" alt="Accesorios" className="h-48 w-full object-cover" />
              <div className="p-6 space-y-2">
                <h3 className="font-bold text-xl text-[#2B382A]">Accesorios & Juguetes</h3>
                <p className="text-sm text-[#4A5D45]">Correas, pecheras ergonómicas y juguetes interactivos para estimulación mental.</p>
                <a href="https://wa.me/5213221234567?text=Hola,%20busco%20información%20sobre%20accesorios" target="_blank" rel="noreferrer" className="inline-block pt-2 text-[#C85A32] font-bold text-sm hover:underline">Consultar por WhatsApp →</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80" alt="Higiene" className="h-48 w-full object-cover" />
              <div className="p-6 space-y-2">
                <h3 className="font-bold text-xl text-[#2B382A]">Cuidado e Higiene</h3>
                <p className="text-sm text-[#4A5D45]">Champús naturales, cepillos, bálsamos para huellitas y complementos de salud.</p>
                <a href="https://wa.me/5213221234567?text=Hola,%20busco%20información%20sobre%20productos%20de%20higiene" target="_blank" rel="noreferrer" className="inline-block pt-2 text-[#C85A32] font-bold text-sm hover:underline">Consultar por WhatsApp →</a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. VISTA DE DELICIAS BAR */}
      {activeTab === 'delicias' && (
        <section className="max-w-7xl mx-auto px-4 py-12 space-y-8">
          <div className="bg-[#FAF0EB] border border-[#E7BFB0] p-8 rounded-3xl text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C85A32] text-white text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" /> Exclusivo de Racoo
            </span>
            <h1 className="text-4xl font-extrabold text-[#2B382A]">Delicias Bar 🥩</h1>
            <p className="text-[#4A5D45] max-w-2xl mx-auto font-medium">
              Premios 100% naturales deshidratados a granel. Sin conservadores, colorantes ni sal añadida. ¡Llévate la variedad y cantidad que tu mascota prefiera!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { nombre: 'Hígado Deshidratado', desc: 'Rico en hierro y proteína pura.', emoji: '🍖' },
              { nombre: 'Orejas de Cerdo', desc: 'Ideal para la limpieza dental y masticación prolongada.', emoji: '🥓' },
              { nombre: 'Tiras de Pollo Natural', desc: 'Snack ligero bajo en grasa.', emoji: '🍗' },
              { nombre: 'Premios de Pescado', desc: 'Fuente natural de Omega 3 para un pelo brillante.', emoji: '🐟' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-[#E7DFD5] shadow-xs hover:border-[#C85A32] transition-all space-y-3">
                <div className="text-4xl">{item.emoji}</div>
                <h3 className="font-bold text-lg text-[#2B382A]">{item.nombre}</h3>
                <p className="text-xs text-[#4A5D45]">{item.desc}</p>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-xs font-semibold bg-[#EAE3D9] px-2 py-1 rounded-md text-[#2B382A]">Venta a granel</span>
                  <a 
                    href={`https://wa.me/5213221234567?text=Hola,%20me%20interesa%20pedir%20${encodeURIComponent(item.nombre)}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs font-bold text-[#C85A32] hover:underline"
                  >
                    Pedir 💬
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. SECCIÓN DE CONTACTO Y PIE DE PÁGINA */}
      <footer id="contacto" className="bg-[#2B382A] text-white pt-12 pb-8 border-t border-[#3D4C3A] mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 pb-8 border-b border-[#3D4C3A]">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold tracking-tight">Racoo <span className="text-[#C85A32]">Petshop</span></h3>
            <p className="text-sm text-[#EAE3D9]/80 leading-relaxed">
              Tu tienda de confianza en Bucerías para la nutrición, bienestar y consentir a tus mascotas.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-base text-[#EAE3D9]">Ubicación & Contacto</h4>
            <div className="space-y-2 text-sm text-[#EAE3D9]/80">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C85A32]" />
                <span>Golden Zone, Bucerías, Nayarit, México</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C85A32]" />
                <span>WhatsApp: +52 (322) 123-4567</span>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-base text-[#EAE3D9]">Síguenos</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[#3D4C3A] flex items-center justify-center hover:bg-[#C85A32] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-6 text-center text-xs text-[#EAE3D9]/60">
          <p>© {new Date().getFullYear()} Racoo Petshop. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
