import { useCallback, useRef, useState } from 'react';
import useReveal from '../hooks/useReveal.js';
import '../styles/beforeafter.scss';

const CASES = [
  {
    label: 'Cover-Up · Forearm',
    before:
      'https://images.unsplash.com/photo-1590246814883-57c511e76523?q=80&w=1200&auto=format&fit=crop',
    after:
      'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1200&auto=format&fit=crop',
  },
];

function BeforeAfter() {
  const headRef = useReveal();
  const sliderRef = useReveal();
  const [position, setPosition] = useState(50);
  const trackRef = useRef(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  return (
    <section className="beforeafter parent">
      <div className="cont">
        <div ref={headRef} className="section-head reveal">
          <p className="eyebrow">Before &amp; After</p>
          <h2 className="section-title">
            Same arm. <span>Different story.</span>
          </h2>
          <p className="section-subtitle">
            Drag the divider to see how a faded, unwanted piece becomes a
            fully-owned cover-up.
          </p>
        </div>

        <div ref={sliderRef} className="reveal">
          {CASES.map((item) => (
            <div
              key={item.label}
              ref={trackRef}
              className="ba-slider"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={stopDragging}
              onPointerLeave={stopDragging}
            >
              <img
                className="bg-img-cover ba-slider__after"
                src={item.after}
                alt={`After — ${item.label}`}
              />
              <div
                className="ba-slider__before"
                style={{ width: `${position}%` }}
              >
                <img className="bg-img-cover" src={item.before} alt={`Before — ${item.label}`} />
              </div>

              <div className="ba-slider__handle" style={{ left: `${position}%` }}>
                <span className="ba-slider__grip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M8 6 3 12l5 6M16 6l5 6-5 6" />
                  </svg>
                </span>
              </div>

              <span className="ba-slider__tag ba-slider__tag--before">Before</span>
              <span className="ba-slider__tag ba-slider__tag--after">After</span>
              <p className="ba-slider__caption">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;
