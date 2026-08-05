import "../styles/portfolio.css";

function Portfolio() {
  return (
    <>
      <section className="intro">
        <span className="eyebrow">Our work</span>

        <h1>Selected Works</h1>

        <p>
          A collection of brand identities and websites built for wellness
          practitioners, wedding professionals, and independent brands ready to
          show up with confidence online.
        </p>

        <p>
          Every project below started the same way our client relationships do
          &mdash; with a business that had a strong story but no visual language
          to match it.
        </p>
      </section>

      <section className="filters">
        <button className="filter active">All work</button>
        <button className="filter">Brand identity</button>
        <button className="filter">Website design</button>
        <button className="filter">Packaging</button>
      </section>

      <section className="grid">
        <article className="card">
          <div className="thumb"></div>

          <div className="card-body">
            <h3>Restaurant &amp; Bar</h3>

            <p className="tag">Brand identity + digital menu</p>

            <p className="desc">
              A full identity refresh for a neighborhood restaurant &mdash; new
              mark, menu system, and a digital ordering experience that matches
              the warmth of the room.
            </p>
          </div>
        </article>

        <article className="card">
          <div className="thumb"></div>

          <div className="card-body">
            <h3>Boutique Fashion Label</h3>

            <p className="tag">Packaging + website design</p>

            <p className="desc">
              Packaging and an online storefront built to feel as considered as
              the garments themselves, from unboxing through checkout.
            </p>
          </div>
        </article>

        <article className="card">
          <div className="thumb"></div>

          <div className="card-body">
            <h3>Luxury Wellness Brand</h3>

            <p className="tag">Brand identity + website design</p>

            <p className="desc">
              A calm, editorial identity for a wellness studio expanding from
              one location to a multi-city presence, with a booking-ready site
              to match.
            </p>
          </div>
        </article>

        <article className="card">
          <div className="thumb"></div>

          <div className="card-body">
            <h3>Photography Studio</h3>

            <p className="tag">Portfolio website + SEO</p>

            <p className="desc">
              A portfolio site built to let the photography lead, with an SEO
              foundation that brings in inquiries long after launch.
            </p>
          </div>
        </article>

        <article className="card">
          <div className="thumb"></div>

          <div className="card-body">
            <h3>Wedding Planning Studio</h3>

            <p className="tag">Brand identity + website design</p>

            <p className="desc">
              An elevated identity and inquiry-first website for a planner
              booking premium weddings across the region.
            </p>
          </div>
        </article>

        <article className="card">
          <div className="thumb"></div>

          <div className="card-body">
            <h3>Independent Skincare Line</h3>

            <p className="tag">Packaging + brand identity</p>

            <p className="desc">
              Shelf-ready packaging and a brand system built to hold its own
              alongside established names in the category.
            </p>
          </div>
        </article>
      </section>

      <section className="stats">
        <div className="stat">
          <div className="n">40+</div>
          <div className="l">Projects delivered</div>
        </div>

        <div className="stat">
          <div className="n">12</div>
          <div className="l">Industries served</div>
        </div>

        <div className="stat">
          <div className="n">4-6</div>
          <div className="l">Week average timeline</div>
        </div>

        <div className="stat">
          <div className="n">98%</div>
          <div className="l">Clients who refer us</div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;