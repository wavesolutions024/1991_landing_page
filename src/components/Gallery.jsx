import useReveal from '../hooks/useReveal.js';
import '../styles/gallery.scss';
import img1 from "../assets/imag1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
import img5 from "../assets/image5.png";
import img6 from "../assets/image6.png";
import img7 from "../assets/image7.png";
import img8 from "../assets/image8.png";
import img9 from "../assets/image9.png";


const GALLERY_ITEMS = [
  {
    img: img1,
    tall: true,
  },
  { img: img2 },
  { img: img3 },
  {
    img: img4,
    tall: true,
  },
  { img: img5 },
  { img: img6 },
  {
    img: img7,
    tall: true,
  },
  { img: img8 },
  { img: img9 },
];

function Gallery() {
  const headRef = useReveal();

  return (
    <section className="gallery parent" id="gallery">
      <div className="cont">
        <div ref={headRef} className="section-head reveal">
          <p className="eyebrow">GALLERY</p>
          <h2 className="section-title">Recent work.</h2>
          <p className="section-subtitle">
            A small selection from the studio floor — full portfolio
            available on request during your consultation.
          </p>
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
