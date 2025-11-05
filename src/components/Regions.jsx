import { MapPin } from 'lucide-react'

const regions = [
  {
    name: 'South Bali',
    highlights: 'Beaches • Sunset • Water Sports',
    places: 'Kuta, Seminyak, Canggu, Uluwatu, Nusa Dua',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Central Bali',
    highlights: 'Art • Rice Terraces • Monkey Forest',
    places: 'Ubud, Gianyar',
    image:
      'https://images.unsplash.com/photo-1558980664-10fc04a37bdb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'North Bali',
    highlights: 'Beratan Lake • Waterfalls • Dolphins',
    places: 'Bedugul, Lovina',
    image:
      'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'East Bali',
    highlights: 'Temples • Mount Agung • Nature',
    places: 'Karangasem, Besakih, Tirta Gangga',
    image:
      'https://images.unsplash.com/photo-1526417242436-5e4b4012d2e8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'West Bali',
    highlights: 'National Park • Trekking • Snorkeling',
    places: 'Negara, Pemuteran',
    image:
      'https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Nusa Islands',
    highlights: 'Iconic Beaches • Adventure',
    places: 'Nusa Penida, Nusa Lembongan',
    image:
      'https://images.unsplash.com/photo-1558980664-10fc04a37bdb?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Regions() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explore Bali by Region
          </h2>
          <p className="mt-2 text-slate-600">
            Discover curated routes and multi-day journeys across all 6 areas of the island.
          </p>
        </div>
        <a
          href="#contact"
          className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 sm:inline-block"
        >
          Get Custom Itinerary
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {regions.map((r) => (
          <article
            key={r.name}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={r.image}
                alt={r.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-sm text-white backdrop-blur">
                <MapPin className="h-4 w-4" /> {r.name}
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm font-medium text-emerald-600">{r.highlights}</p>
              <p className="mt-1 text-slate-600">{r.places}</p>
              <div className="mt-4 flex items-center justify-between">
                <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                  View Packages
                </button>
                <button className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500">
                  Customize
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
