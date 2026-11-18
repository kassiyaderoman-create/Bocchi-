import { useState } from 'react';
import { faq } from '../content.js';

export function Faq() {
  const [openFAQ, setOpenFAQ] = useState(0);
  return (
    <section className="section faq-section">
      <div data-reveal>
        <span className="eyebrow">07 / BACKSTAGE NOTES</span>
        <h2>
          “Bular kim?”
          <br />
          <em>Hammasi shu yerda.</em>
        </h2>
        <p>Anime va jamoa haqida tezkor javoblar.</p>
      </div>
      <div className="faq-list">
        {faq.map(([q, a], i) => (
          <div
            key={q}
            className={'faq-item ' + (openFAQ === i ? 'open' : '')}
            data-reveal
          >
            <button
              aria-expanded={openFAQ === i}
              aria-controls={'answer-' + i}
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
            >
              <small>0{i + 1}</small>
              {q}
              <span>{openFAQ === i ? '−' : '+'}</span>
            </button>
            <div
              id={'answer-' + i}
              className="faq-answer"
              inert={openFAQ !== i ? true : undefined}
            >
              <div>
                <p>{a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
