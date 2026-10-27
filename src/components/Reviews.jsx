import useReveal from "../hooks/useReveal.js";
import "../styles/reviews.scss";

const REVIEWS = [
  {
    name: "— R. MALHOTRA",
    role: "COVER-UP CLIENT",
    quote:
      "The consultation was thoughtful, and the artist took time to understand what I wanted to cover up. We discussed the design carefully, and I’m really happy with the direction of the final artwork.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "— A. FERNANDES",
    role: "PIERCING CLIENT",
    quote:
      "The piercing process was explained clearly from start to finish. I appreciated the attention to hygiene, the patience in answering my questions, and the aftercare instructions.",
  },
  {
    name: "— S. IYER",
    role: "REALISM CLIENT",
    quote:
      "I wanted a detailed black-and-grey tattoo based on a reference photo. The design discussion helped me get clear on what I wanted, and I loved seeing the artwork come together.",
  },
  {
    name: "— A. DESHMUKH",
    role: "FINE-LINE TATTOO CLIENT",
    quote:
      "I wanted something minimal with a personal meaning. The design was discussed in detail, and the final concept felt true to what I had imagined.",
  },
  {
    name: "— K. SHAH",
    role: "CUSTOM TATTOO CLIENT",
    quote:
      "I came in with a few reference images and a rough idea. The consultation helped bring everything together into a design that suited my style and preferred placement.",
  },
  {
    name: "— P. JOSHI",
    role: "TATTOO CLIENT",
    quote:
      "The team took time to discuss the size, placement, and design before getting started. I appreciated being able to ask questions and understand the process beforehand.",
  },
];

function Reviews() {
  const headRef = useReveal();

  return (
    <section className="reviews parent" id="reviews">
      <div className="cont">
        <div ref={headRef} className="section-head section-head--center reveal">
          <p className="eyebrow">CLIENT WORDS</p>
          <h2 className="section-title">What Clients Say About Inkfly Tattoo</h2>
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
    <article
      ref={ref}
      className={`review-card reveal reveal-delay-${index + 1}`}
    >
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
