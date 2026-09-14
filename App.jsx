import React from 'react';
import { ArrowRight, Sparkles, Heart, ShieldCheck, Leaf } from 'lucide-react';

const HeroBanner = ({ onExploreCatalog, onExploreDeliciasBar }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE3D9] text-[#2B382A] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse"></span>
              <span>Petshop & Delicias Bar en Bucerías, Nayarit</span>
            </div>

            {/* Slogan */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B382A] tracking-tight leading-[1.12]">
              Bienestar, nutrición y amor para tu{' '}
              <span className="text-[#C85A32] relative inline-block">
                compañero de vida
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#C85A32]/30 -z-10"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0 7 C 20 0, 40 8, 60 2 C 80 -4, 95 6, 100 4" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#4A5D45] leading-relaxed max-w-2xl font-normal">
              Una cuidada selección de alimentos holísticos, accesorios confortables y nuestro famoso{' '}
              <strong className="text-[#2B382A] font-semibold">Delicias Bar</strong> con premios 100% naturales a granel para consentir a tus perros y gatos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreCatalog}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#C85A32] hover:bg-[#B64522] text-white text-base font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Ver Catálogo</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreDeliciasBar}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FAF0EB] hover:bg-[#F5E2D8] text-[#C85A32] border-2 border-[#E7BFB0] text-base font-bold transition-all"
              >
                <Sparkles className="w-5 h-5 text-[#C85A32]" />
                <span>Explorar Delicias Bar</span>
              </button>
            </div>

            {/* Highlights Pillars */}
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
                <span>Pre-pedido por WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card (Instagram Style Frame) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#EAE3D9] via-[#FAF0EB] to-[#FAF7F2] rounded-3xl transform rotate-1 -z-10"></div>

            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E7DFD5] shadow-xl space-y-3">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-[#E7DFD5] bg-[#FAF7F2] shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=150&q=80"
                      alt="Racoo Petshop Logo"
                      className="w-full h-full object-cover"
                    />
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
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85"
                  alt="Mascota feliz"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute bottom-3 left-3 right-3 bg-[#FAF7F2]/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#E7DFD5] flex items-center justify-between text-xs shadow-md">
                  <div>
                    <p className="font-bold text-[#2B382A]">Delicias Bar en Vivo 🥩</p>
                    <p className="text-[11px] text-[#5A6B56]">Snacks deshidratados sin químicos</p>
                  </div>
                  <button
                    onClick={onExploreDeliciasBar}
                    className="bg-[#C85A32] text-white text-[11px] font-bold px-2.5 py-1 rounded-md hover:bg-[#B64522] transition-colors"
                  >
                    Ver Premios
                  </button>
                </div>
              </div>

              <div className="px-1 pt-1 text-xs text-[#3D4C3A]">
                <p>
                  <strong className="text-[#2B382A]">racoo_petshop</strong> Tu mascota merece lo mejor 🌿 Visítanos en Las Palmas 8 o haz tu pre-pedido con entrega local en Bucerías.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans">
      <HeroBanner 
        onExploreCatalog={() => alert("Próximamente: Catálogo de productos")}
        onExploreDeliciasBar={() => alert("Próximamente: Delicias Bar")}
      />
    </div>
  );
}
