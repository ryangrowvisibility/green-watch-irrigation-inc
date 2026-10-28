import Icon from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(647) 540-6152";
const TEL = "tel:+16475406152";
const SMS = "sms:+16475406152";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Green%20Watch%20Irrigation%20Inc.&query_place_id=ChIJoyEa9GYwWqwRdg6TMANDihU";

const services = [
  { icon: "ruler", title: "Sprinkler system design", body: "Sergio plans a layout around your actual lawn and gardens: where the heads go, how the zones split, and how to cover every corner without watering the driveway. Good design is what saves water, money and time later.", featured: false },
  { icon: "install", title: "Irrigation installation", body: "Complete in-ground sprinkler systems, usually installed in a single day. Customers say that when the crew leaves, the lawn looks like nobody worked on it at all.", featured: true },
  { icon: "wrench", title: "Repair & maintenance", body: "Heads not popping up, a zone that won’t turn on, dry patches or a leak? Sergio assesses the problem as soon as he arrives and stays on it until it’s fixed." },
  { icon: "clock", title: "Automated watering controls", body: "Systems set up to run on their own schedule, so the lawn gets the right amount of water at the right time, whether you’re home or away." },
  { icon: "calendar", title: "Seasonal start-up & service", body: "Ongoing service for existing customers’ systems through the season. Call when you need us and we call back." },
];

const reviews = [
  { name: "Shivanie B.", tag: "Local Guide", job: "Sprinkler installation", text: "Sergio, the owner, explained the whole process and was very patient with us. Top-notch work, and afterwards the lawn didn’t look like anyone had worked on it at all." },
  { name: "Ro F.", tag: "Local Guide", job: "Irrigation repair", text: "Sergio returns every phone call. He assessed the problem as soon as he arrived and stayed on it until it was fixed. Real value for the money." },
  { name: "Rita A.", tag: "", job: "New sprinkler system", text: "Professional, on time and knowledgeable. They installed the system quickly, made sure everything worked, and answered every question we had." },
  { name: "Rimin A.", tag: "Local Guide", job: "Irrigation service", text: "Best customer service around, and it was all done in one day." },
  { name: "Sarmad A.", tag: "", job: "Yard irrigation", text: "Excellent work, and the owner was nice and helpful from start to finish." },
];

const steps = [
  { title: "Call or text Sergio", body: "Tell us about your property and whether you need a new system or a repair. Sergio returns every call." },
  { title: "Walk-through & design", body: "We look at the lawn and gardens, explain the whole process and plan the zones and head layout with you." },
  { title: "Installed in a day", body: "Most installs are finished in a single day. We trench carefully and restore the turf so the lawn looks untouched." },
  { title: "Test & hand-over", body: "We run every zone, set the automatic schedule and make sure everything works before we leave." },
];

const faqs = [
  { q: "How long does a sprinkler installation take?", a: "Most residential systems are installed in one day. Customers regularly mention the job being done in a day, with the lawn looking untouched afterwards." },
  { q: "Will installing a system wreck my lawn?", a: "No. Our installs are known for leaving the lawn looking like nobody worked on it. We put the turf back neatly as we go." },
  { q: "Do you repair systems you didn’t install?", a: "Yes. Call with what’s going wrong (a dead zone, a broken head, low pressure, a leak). Sergio will assess it on arrival and work until it’s fixed." },
  { q: "Which areas do you serve?", a: "Toronto and the Greater Toronto Area. If you’re not sure whether you’re in range, call or text and ask." },
  { q: "What are your hours?", a: "Our Google listing shows 8 a.m. to 8 p.m., seven days a week. If we miss your call, we’ll call you back." },
  { q: "How does an automated system save money?", a: "A properly designed system waters each zone only as long as it needs, on a set schedule, so you stop over-watering and stop dragging hoses around. That saves water, money and your time." },
];

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="flex text-star" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Green Watch Irrigation Inc.",
  telephone: "+1-647-540-6152",
  description: "Design, installation and service of automated lawn sprinkler systems in Toronto and the GTA.",
  areaServed: ["Toronto, ON", "Greater Toronto Area, ON"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: 5, reviewCount: 18 },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "08:00", closes: "20:00" }],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />

      <div className="hidden bg-brand-dark text-[15px] text-white/90 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Serving Toronto &amp; the GTA</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Open 7 days, 8 a.m. – 8 p.m.</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white"><Icon name="drop" className="h-5 w-5" /></span>
            <span className="leading-tight">
              <span className="block font-head text-lg font-bold text-ink">Green Watch</span>
              <span className="block text-[13px] font-semibold text-muted">Irrigation Inc.</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[16px] font-semibold text-ink/80 lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#area" className="hover:text-brand">Service area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-bold text-brand hover:text-brand-dark md:block">{PHONE}</a>
            <a href={TEL} className="btn hidden rounded-lg bg-cta px-5 py-3 font-bold text-white hover:bg-cta-dark focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-cta sm:inline-flex">Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn grid h-12 w-12 place-items-center rounded-lg bg-cta text-white sm:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="top" className="pb-20 md:pb-0">
        <section className="bg-mist">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[1.15fr_0.85fr] md:px-6 md:py-24">
            <div>
              <h1 className="text-[clamp(2.3rem,5.2vw,3.75rem)] font-bold text-ink">
                Lawn Sprinkler &amp; Irrigation Installation in <span className="text-brand">Toronto and the GTA</span>
              </h1>
              <p className="mt-6 max-w-[56ch] text-xl text-muted">
                Owner Sergio designs, installs and repairs automated sprinkler systems that save you water, money and time. Most installs are done in a day, and the lawn looks untouched when we leave.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn inline-flex min-h-[54px] items-center justify-center gap-2 rounded-lg bg-cta px-7 text-lg font-bold text-white shadow-md hover:bg-cta-dark focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-cta">
                  <Icon name="phone" className="h-5 w-5" /> Call {PHONE}
                </a>
                <a href={SMS} className="btn inline-flex min-h-[54px] items-center justify-center gap-2 rounded-lg border-2 border-brand bg-white px-7 text-lg font-bold text-brand hover:bg-brand-soft">
                  <Icon name="text" className="h-5 w-5" /> Text us
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[16px] font-medium text-ink/80">
                <Stars />
                <span><strong className="text-ink">5.0</strong> · 18 Google reviews</span>
                <span aria-hidden="true" className="text-line">|</span>
                <span>Owner-operated</span>
                <span aria-hidden="true" className="text-line">|</span>
                <span>Incorporated business</span>
              </div>
            </div>
            <div className="space-y-4">
              <figure className="rounded-2xl border border-line bg-white p-7 shadow-xl">
                <Stars />
                <blockquote className="mt-4 font-head text-xl leading-snug text-ink">“Top-notch work, and afterwards the lawn didn’t look like anyone had worked on it at all.”</blockquote>
                <figcaption className="mt-4 text-[15px] font-semibold text-muted">Shivanie B. · sprinkler installation · Google review</figcaption>
              </figure>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-brand p-5 text-white">
                  <p className="font-head text-4xl font-bold">1 day</p>
                  <p className="mt-1 text-[15px] text-white/85">typical install time</p>
                </div>
                <div className="rounded-2xl bg-brand-dark p-5 text-white">
                  <p className="font-head text-4xl font-bold">7 days</p>
                  <p className="mt-1 text-[15px] text-white/85">a week, 8 a.m. – 8 p.m.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Why customers trust us" className="bg-brand text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              ["thumb", "5.0 on Google", "18 reviews"],
              ["phone", "Returns every call", "Customers say so"],
              ["drop", "Saves water", "Automated schedules"],
              ["check", "Clean installs", "Lawn left untouched"],
            ].map(([icon, title, sub]) => (
              <div key={title} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15"><Icon name={icon} className="h-5 w-5" /></span>
                <span className="leading-tight"><span className="block font-bold">{title}</span><span className="text-[15px] text-white/80">{sub}</span></span>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <h2 className="text-3xl font-bold md:text-[2.6rem]">Sprinkler &amp; irrigation services</h2>
              <p className="mt-4 text-lg text-muted">From a brand-new system to a zone that stopped working, one company handles the whole job, start to finish.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className={`reveal lift rounded-2xl border bg-white p-6 ${s.featured ? "border-brand ring-2 ring-brand sm:col-span-2 lg:col-span-1" : "border-line"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-brand px-3 py-1 text-[13px] font-bold text-white">Our specialty</span>}
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.body}</p>
                  <a href={TEL} className="mt-4 inline-flex items-center gap-1.5 font-bold text-brand hover:text-brand-dark">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
              <div className="reveal flex flex-col justify-between rounded-2xl bg-mist p-6">
                <p className="font-head text-xl font-bold">Not sure what you need?</p>
                <p className="mt-2 text-muted">Describe what your lawn is doing and Sergio will tell you whether it’s a quick repair or time for a new system.</p>
                <a href={SMS} className="btn mt-5 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-white px-5 font-bold text-brand ring-1 ring-line hover:bg-brand-soft"><Icon name="text" className="h-5 w-5" /> Text a question</a>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-mist py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-bold md:text-[2.6rem]">Rated 5.0 from 18 Google reviews</h2>
                <p className="mt-4 max-w-2xl text-lg text-muted">Customers keep naming the same things: Sergio picks up the phone, explains everything, and leaves the yard clean.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-bold text-brand hover:text-brand-dark">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r, i) => (
                <figure key={r.name} className={`reveal rounded-2xl border border-line bg-white p-6 ${i < 2 ? "lg:col-span-1" : ""}`}>
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 text-ink">“{r.text}”</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft font-head font-bold text-brand">{r.name[0]}</span>
                    <span className="leading-tight"><span className="block font-bold">{r.name}{r.tag && <span className="font-normal text-muted"> · {r.tag}</span>}</span><span className="text-sm text-muted">{r.job} · Google review</span></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-6">
            <div className="reveal">
              <h2 className="text-3xl font-bold md:text-[2.6rem]">Why homeowners call Green Watch</h2>
              <div className="mt-5 space-y-4 text-lg text-muted">
                <p>Green Watch Irrigation is a GTA company that does one thing well: automated lawn sprinkler systems. We design them, install them and keep them running.</p>
                <p>Owner Sergio is on the job himself. He takes the time to walk you through how the system works, from the layout to the controller, and he’s patient with questions. When something goes wrong, he returns your call and stays on site until the problem is solved.</p>
                <p>Many of our customers found us through friends and neighbours, and we’d like to keep earning those referrals one tidy install at a time.</p>
              </div>
            </div>
            <ul className="reveal grid content-start gap-4 sm:grid-cols-2">
              {[
                ["phone", "Returns every call", "No chasing us down for a callback."],
                ["users", "Patient explanations", "You’ll know exactly how your system works."],
                ["check", "Leaves no trace", "Turf restored so the lawn looks untouched."],
                ["tag", "Real value", "Fair pricing customers call money well spent."],
              ].map(([icon, t, s]) => (
                <li key={t} className="rounded-2xl border border-line bg-white p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-soft text-brand"><Icon name={icon} className="h-5 w-5" /></span>
                  <p className="mt-3 font-bold text-ink">{t}</p>
                  <p className="mt-1 text-[16px] text-muted">{s}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-mist py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <h2 className="reveal text-3xl font-bold md:text-[2.6rem]">How it works</h2>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal relative rounded-2xl border border-line bg-white p-6 pt-8">
                  <span className="absolute -top-5 left-6 grid h-10 w-10 place-items-center rounded-full bg-brand font-head text-lg font-bold text-white">{i + 1}</span>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:px-6">
            <div className="reveal">
              <h2 className="text-3xl font-bold md:text-[2.6rem]">Service area</h2>
              <p className="mt-4 text-lg text-muted">We install and service sprinkler systems across Toronto and the Greater Toronto Area. Call or text with your address to confirm we cover your street.</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {["Toronto", "Greater Toronto Area"].map((a) => (
                  <li key={a} className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 font-semibold"><Icon name="pin" className="h-4 w-4 text-brand" /> {a}</li>
                ))}
              </ul>
              <p className="mt-6 flex items-center gap-2 font-semibold"><Icon name="clock" className="h-5 w-5 text-brand" /> Monday to Sunday, 8 a.m. – 8 p.m.</p>
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-line">
              <iframe title="Map of Toronto and the GTA" src="https://maps.google.com/maps?q=Toronto,%20ON&z=9&output=embed" loading="lazy" className="h-[360px] w-full" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        <section id="faq" className="bg-mist py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <h2 className="reveal text-3xl font-bold md:text-[2.6rem]">Questions we hear a lot</h2>
            <div className="reveal mt-8 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl border border-line bg-white px-5 py-4">
                  <summary className="flex items-center justify-between gap-6 text-lg font-bold">
                    {f.q}
                    <span className="chev text-brand"><Icon name="chevron" className="h-5 w-5" /></span>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-dark text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="text-3xl font-bold md:text-[2.6rem]">Stop dragging the hose around</h2>
              <p className="mt-3 max-w-xl text-lg text-white/85">Call or text Sergio at {PHONE} about a new sprinkler system or a repair. Open 7 days, 8 a.m. to 8 p.m.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={TEL} className="btn inline-flex min-h-[54px] items-center justify-center gap-2 rounded-lg bg-cta px-7 text-lg font-bold text-white hover:bg-cta-dark"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
              <a href={SMS} className="btn inline-flex min-h-[54px] items-center justify-center gap-2 rounded-lg bg-white px-7 text-lg font-bold text-brand-dark hover:bg-brand-soft"><Icon name="text" className="h-5 w-5" /> Text us</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-6">
          <div>
            <p className="font-head text-xl font-bold">Green Watch Irrigation Inc.</p>
            <p className="mt-2 text-muted">Lawn sprinkler design, installation and repair in Toronto and the GTA.</p>
            <p className="mt-4"><a href={TEL} className="font-bold text-brand">{PHONE}</a></p>
            <p className="mt-1 text-[16px] text-muted">Open 7 days · 8 a.m. – 8 p.m.</p>
          </div>
          <div>
            <p className="font-bold">Services</p>
            <ul className="mt-3 space-y-1.5 text-muted">{services.map((s) => <li key={s.title}>{s.title}</li>)}</ul>
          </div>
          <div>
            <p className="font-bold">Service area</p>
            <p className="mt-3 text-muted">Toronto and the Greater Toronto Area, Ontario</p>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 font-bold text-brand">Find us on Google <Icon name="arrow" className="h-4 w-4" /></a>
          </div>
        </div>
        <p className="border-t border-line py-5 text-center text-sm text-muted">© 2026 Green Watch Irrigation Inc.</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-paper p-2 md:hidden">
        <a href={TEL} className="btn flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-cta font-bold text-white"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn flex min-h-[48px] items-center justify-center gap-2 rounded-lg border-2 border-brand font-bold text-brand"><Icon name="text" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
