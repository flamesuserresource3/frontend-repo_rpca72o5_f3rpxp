import { Calendar } from 'lucide-react'

const activities = [
  {
    name: 'ATV Jungle Ride',
    desc: 'Thrilling off-road adventure through Bali’s tropical landscapes.',
    image:
      'https://images.unsplash.com/photo-1520975922313-029a16f7b3f6?q=80&w=1600&auto=format&fit=crop',
    duration: '2-3 hours',
  },
  {
    name: 'Ayung River Rafting',
    desc: 'White-water fun with rainforest views and hidden waterfalls.',
    image:
      'https://images.unsplash.com/photo-1536619918636-4823e52159de?q=80&w=1600&auto=format&fit=crop',
    duration: '4-5 hours',
  },
  {
    name: 'Traditional Cooking Class',
    desc: 'Learn Balinese recipes with market visit and spice workshop.',
    image:
      'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
    duration: '3-4 hours',
  },
  {
    name: 'Uluwatu Sunset & Kecak',
    desc: 'Clifftop temple views followed by the iconic Kecak dance.',
    image:
      'https://images.unsplash.com/photo-1574866935540-1f8e85c2e8e1?q=80&w=1600&auto=format&fit=crop',
    duration: 'Half Day',
  },
]

export default function DayTours() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Day Tours & Activities
          </h2>
          <p className="mt-2 text-slate-600">
            Short excursions you can add to any itinerary.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a) => (
            <article
              key={a.name}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={a.image}
                  alt={a.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{a.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{a.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">
                    <Calendar className="h-3.5 w-3.5" /> {a.duration}
                  </span>
                  <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                    Quick Book
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
