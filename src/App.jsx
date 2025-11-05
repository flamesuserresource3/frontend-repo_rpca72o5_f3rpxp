import Hero from './components/Hero'
import Regions from './components/Regions'
import DayTours from './components/DayTours'
import TestimonialsGallery from './components/TestimonialsGallery'
import { Phone } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="text-lg font-extrabold tracking-tight">
            <span className="text-emerald-600">Melali</span> To Bali
          </a>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#regions" className="hover:text-emerald-600">Tour Packages</a>
            <a href="#daytours" className="hover:text-emerald-600">Day Tours</a>
            <a href="#testimonials" className="hover:text-emerald-600">Testimonials</a>
            <a href="#contact" className="hover:text-emerald-600">Contact & Booking</a>
          </nav>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            <Phone className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </header>

      {/* Hero with search */}
      <Hero />

      {/* Regions */}
      <div id="regions">
        <Regions />
      </div>

      {/* Day tours */}
      <div id="daytours">
        <DayTours />
      </div>

      {/* Testimonials & Gallery */}
      <div id="testimonials">
        <TestimonialsGallery />
      </div>

      {/* Contact & Booking CTA */}
      <section id="contact" className="bg-gradient-to-br from-emerald-50 to-sky-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="text-2xl font-bold sm:text-3xl">Ready to plan your Complete Bali Escape?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Tell us your dates, interests, and budget. We’ll craft a transparent, sustainable, and unforgettable private tour across all 6 regions.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-500"
            >
              <Phone className="h-5 w-5" /> Chat & Book on WhatsApp
            </a>
            <a
              href="#regions"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:bg-white"
            >
              Explore Packages
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-600">
        <div className="mx-auto max-w-7xl px-6">
          <p>
            © {new Date().getFullYear()} Melali To Bali — Premium Private Tours • Sustainable & Culturally Respectful Travel
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
