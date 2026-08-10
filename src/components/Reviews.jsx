import useReveal from '../hooks/useReveal.js';
import '../styles/reviews.scss';

const REVIEWS = [
  {
    name: '— R. MALHOTRA',
    role: 'COVER-UP CLIENT',
    quote:
      'Booked a consultation expecting a sales pitch, got an actual design conversation instead. The cover-up completely erased fifteen years of regret.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: '— A. FERNANDES',
    role: 'PIERCING CLIENT',
    quote:
      'My septum was pierced by someone who explained every step before doing it. No piercing gun, no rush, healed clean in six weeks.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: '— S. IYER',
    role: 'REALISM CLIENT',
    quote:
      'The realism work on my forearm looks more like the reference photo than I thought possible. Worth every appointment it took to get booked.',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop',
  },
];

function Reviews() {
  const headRef = useReveal();

  return (
    <section className="reviews parent" id="reviews">
      <div className="cont">
        <div ref={headRef} className="section-head section-head--center reveal">
          <p className="eyebrow">CLIENT WORDS</p>
          <h2 className="section-title">
            From people in the chair.
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
        {/* <img className="bg-img-cover" src={review.avatar} alt={review.name} loading="lazy" /> */}
        <div>
          <strong>{review.name}</strong>
          <span>{review.role}</span>
        </div>
      </div>
    </article>
  );
}

export default Reviews;
