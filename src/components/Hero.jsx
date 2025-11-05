import { Search, MessageCircle, Shield } from 'lucide-react'

const regions = [
  'South Bali',
  'Central Bali',
  'North Bali',
  'East Bali',
  'West Bali',
  'Nusa Islands',
]

export default function Hero() {
  const onSearch = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = Object.fromEntries(formData.entries())
    console.log('Search query:', query)
    alert(`Searching packages for ${query.region || 'All Regions'} • ${query.duration} days • up to $${query.price}`)
  }

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2000&auto=format&fit=crop')",
        }}
      />
      {/* Gradient overlay to improve text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <Shield className="h-4 w-4 text-emerald-300" />
            Premium Private Tours • Transparent Pricing
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl">
            Melali To Bali
          </h1>
          <p className="mt-4 text-lg text-white/90 sm:text-xl">
            Complete Bali Island Exploration — from sunset beaches to emerald rice terraces and sacred temples. Design your perfect adventure across all 6 regions.
          </p>

          {/* Search bar */}
          <form
            onSubmit={onSearch}
            className="mt-8 grid w-full grid-cols-1 gap-3 rounded-xl bg-white p-3 text-slate-900 shadow-xl sm:grid-cols-5"
          >
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-slate-500">Destination / Region</label>
              <select
                name="region"
                className="mt-1 w-full rounded-lg border border-slate-200 p-2.5 focus:border-emerald-500 focus:outline-none"
                defaultValue=""
              >
                <option value="">All Regions</option>
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500">Duration</label>
              <select
                name="duration"
                className="mt-1 w-full rounded-lg border border-slate-200 p-2.5 focus:border-emerald-500 focus:outline-none"
                defaultValue="3"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((d) => (
                  <option key={d} value={d}>
                    {d} days
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500">Price Range (Max)</label>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-slate-400 text-sm">$</span>
                <input
                  type="number"
                  name="price"
                  min="100"
                  step="50"
                  defaultValue={500}
                  className="w-full rounded-lg border border-slate-200 p-2.5 focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-white transition hover:bg-emerald-500 sm:self-end"
            >
              <Search className="h-5 w-5" /> Find Your Package
            </button>
          </form>

          {/* Quick WhatsApp */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            <MessageCircle className="h-4 w-4" /> Live Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
