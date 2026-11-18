import { ASSETS as A } from '../content.js';
import { PlayIcon } from './Media.jsx';

export function Closing({ show }) {
  return (
    <section className="closing">
      <img
        src={A + 'band-sunset.jpg'}
        alt="Kessoku Band birga tushgan fan-art surati"
      />
      <div />
      <span className="eyebrow" data-reveal>
        KEEP YOUR OWN RHYTHM.
      </span>
      <h2 data-reveal>
        Sokin bo‘lish mumkin.
        <br />
        <em>Ovozsiz qolish shart emas.</em>
      </h2>
      <button
        className="btn yellow"
        onClick={() =>
          show({ local: true, title: 'Kessoku Band — LIVE at STARRY' })
        }
        data-reveal
      >
        <PlayIcon />
        Yana bir marta live!<span>↗</span>
      </button>
    </section>
  );
}
