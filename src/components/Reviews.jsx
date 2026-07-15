import useReveal from '../hooks/useReveal.js';
import '../styles/reviews.scss';

const REVIEWS = [
  {
    name: 'Maria Fontaine',
    role: 'Portrait sleeve, 4 sessions',
    quote:
      'The consultation alone felt more thorough than any studio I had been to before. The linework on my grandmother\u2019s portrait still looks sharp two years later.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Daniel Cho',
    role: 'Cover-up, forearm',
    quote:
      'I had a piece I regretted for a decade. They redesigned it entirely and it healed cleaner than my first tattoo ever did.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Priya Nair',
    role: 'Minimal line work',
    quote:
      'Booked with my partner for matching pieces. Calm studio, no pressure, and the aftercare guidance actually worked.',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop',
  },
];

function Reviews() {
  const headRef = useReveal();

  return (
    <section className="reviews parent" id="reviews">
      <div className="cont">
        <div ref={headRef} className="section-head section-head--center reveal">
          <p className="eyebrow">Client Reviews</p>
          <h2 className="section-title">
            310+ clients. <span>One consistent standard.</span>
          </h2>
        </div>

        <div className="reviews__grid">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, index }) {
  const ref = useReveal();
  return (
    <article ref={ref} className={`review-card reveal reveal-delay-${index + 1}`}>
      <div className="review-card__stars" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" fill="currentColor">
            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2Z" />
          </svg>
        ))}
      </div>
      <p className="review-card__quote">&ldquo;{review.quote}&rdquo;</p>
      <div className="review-card__author">
        <img className="bg-img-cover" src={review.avatar} alt={review.name} loading="lazy" />
        <div>
          <strong>{review.name}</strong>
          <span>{review.role}</span>
        </div>
      </div>
    </article>
  );
}

export default Reviews;
