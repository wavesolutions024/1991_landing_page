import useReveal from '../hooks/useReveal.js';
import '../styles/gallery.scss';

const GALLERY_ITEMS = [
  {
    img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=900&auto=format&fit=crop',
    tall: true,
  },
  { img: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop' },
  { img: 'https://images.unsplash.com/photo-1590246814883-57c511e76523?q=80&w=800&auto=format&fit=crop' },
  {
    img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=900&auto=format&fit=crop',
    tall: true,
  },
  { img: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?q=80&w=800&auto=format&fit=crop' },
  { img: 'https://images.unsplash.com/photo-1542728928-1413d1894ed1?q=80&w=800&auto=format&fit=crop' },
  {
    img: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?q=80&w=900&auto=format&fit=crop',
    tall: true,
  },
  { img: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=800&auto=format&fit=crop' },
];

function Gallery() {
  const headRef = useReveal();

  return (
    <section className="gallery parent" id="gallery">
      <div className="cont">
        <div ref={headRef} className="section-head reveal">
          <p className="eyebrow">Recent Work</p>
          <h2 className="section-title">
            A studio wall, <span>digitized.</span>
          </h2>
        </div>
      </div>

      <div className="gallery__masonry">
        {GALLERY_ITEMS.map((item, i) => (
          <GalleryItem key={item.img} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

function GalleryItem({ item, index }) {
  const ref = useReveal();
  return (
    <figure
      ref={ref}
      className={`gallery__item ${item.tall ? 'gallery__item--tall' : ''} reveal-fade reveal-delay-${(index % 4) + 1}`}
    >
      <img
        className="bg-img-cover"
        src={item.img}
        alt="Detail shot of a realistic tattoo piece from the Obscura Ink portfolio"
        loading="lazy"
      />
    </figure>
  );
}

export default Gallery;
