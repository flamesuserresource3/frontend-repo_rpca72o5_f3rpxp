import { Star, Shield } from 'lucide-react'

const testimonials = [
  {
    name: 'Sophie M.',
    text:
      'The most complete Bali trip we could have hoped for. Every region felt unique and the private guide was outstanding!',
  },
  {
    name: 'Daniel & Priya',
    text:
      'Romantic, relaxed and perfectly organized. Loved the Ubud rice terraces and Nusa Penida day trip!',
  },
  {
    name: 'Kenji T.',
    text:
      'Transparent pricing and zero hassle. The team handled everything from permits to timing. 10/10.',
  },
]

const gallery = [
  'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582548813314-2f72bfbefcf9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526779480428-6cbb3d83d5fd?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546842931-886c185b4c8c?q=80&w=1600&auto=format&fit=crop',
]

export default function TestimonialsGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold">Trusted by Travelers Worldwide</h2>
          <p className="mt-2 text-slate-600">
            Real stories from guests who explored the whole island with us.
          </p>
          <div className="mt-6 flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-emerald-800">
            <Shield className="h-5 w-5" />
            <p className="text-sm">Licensed operator • Secure payments • Local experts</p>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-2 text-slate-700">“{t.text}”</p>
              <footer className="mt-2 text-sm font-semibold text-slate-900">{t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {gallery.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl">
            <img
              src={src}
              alt={`Bali gallery ${i + 1}`}
              className="h-32 w-full object-cover transition duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
