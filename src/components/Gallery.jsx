import { useState } from 'react';
import { ASSETS as A, pictures } from '../content.js';

export function Gallery({ show }) {
  const [filter, setFilter] = useState('all');
  return (
    <section className="gallery-section" id="gallery">
      <div className="section">
        <div className="section-heading" data-reveal>
          <div>
            <span className="eyebrow">06 / ON & OFF STAGE</span>
            <h2>
              Kadrlar orasidagi
              <br />
              <em>rock ’n’ roll.</em>
            </h2>
          </div>
          <p>
            Personaj portretlari, jamoa suratlari va fan-artlar.
            <br />
            Ustiga bosing — kattaroq ko‘ring.
          </p>
        </div>
        <div
          className="gallery-filters"
          role="group"
          aria-label="Galereya filtri"
        >
          {[
            ['all', 'Hammasi'],
            ['bocchi', 'Bocchi'],
            ['nijika', 'Nijika'],
            ['ryo', 'Ryo'],
            ['kita', 'Kita'],
            ['band', 'Jamoa'],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              aria-pressed={filter === id}
              className={filter === id ? 'active' : ''}
            >
              {label}
              <small>
                {id === 'all'
                  ? pictures.length
                  : pictures.filter((p) => p.type === id).length}
              </small>
            </button>
          ))}
        </div>
        <div className="photo-grid" key={filter}>
          {pictures
            .filter((p) => filter === 'all' || filter === p.type)
            .map((p, i) => (
              <button
                className={
                  'photo-card ' +
                  (p.wide ? 'wide' : '') +
                  (p.official ? ' official' : '')
                }
                key={p.src}
                style={{
                  '--delay': Math.min(i * 50, 250) + 'ms',
                  '--photo-color': p.color,
                }}
                onClick={() => show({ image: p.src, title: p.title })}
              >
                <img loading="lazy" src={A + p.src} alt={p.title} />
                <span className="photo-open">↗</span>
                <span className="photo-caption">
                  <small>{p.tag}</small>
                  <b>{p.title}</b>
                </span>
              </button>
            ))}
        </div>
      </div>
    </section>
  );
}
