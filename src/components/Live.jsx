import { ASSETS as A } from '../content.js';
import { PlayIcon } from './Media.jsx';

// STARRY / Sahna eskizi
//  _________________________
//    \  \     |     /  /
//     \  \    |    /  /
//      (o)   (o)   (o)
//     /|\   _/|\_  /|\
//  ___/ \___[___]__/ \___

export function Live({ show, playing, toggleMusic, audioError }) {
  return (
    <section className="live-section" id="live">
      <div className="section">
        <div className="section-heading" data-reveal>
          <div>
            <span className="eyebrow">04 / TURN IT UP</span>
            <h2>
              Bu yerda gapni
              <br />
              <em>musiqa aytadi.</em>
            </h2>
          </div>
          <p>
            STARRY sahnasidagi jonli ijro.
            <br />
            Tomosha qiling yoki shunchaki tinglang.
          </p>
        </div>
        <div className="live-layout">
          <button
            className="live-feature"
            onClick={() =>
              show({ local: true, title: 'Kessoku Band — LIVE at STARRY' })
            }
            data-reveal
          >
            <img
              src={A + 'live-poster.webp'}
              alt="STARRY sahnasidagi jonli ijro"
            />
            <span className="play-circle">▶</span>
            <span className="live-feature-title">
              <small>LIVE AT STARRY</small>
              <b>Kessoku Band, live.</b>
            </span>
            <span className="video-time">02:03</span>
          </button>
          <div className="listening-card" data-reveal>
            <span className="eyebrow">JUST PRESS PLAY</span>
            <div className={'record ' + (playing ? 'spinning' : '')}>
              <div />
              <i />
            </div>
            <h3>Live at STARRY</h3>
            <p>Kessoku Band · jonli ijro</p>
            <button className="btn pink" onClick={toggleMusic}>
              <PlayIcon pause={playing} />
              {playing ? 'Pauza' : 'Musiqani eshitish'}
              <span>♫</span>
            </button>
            {audioError && (
              <small className="audio-error" role="status">
                Ijroni boshlash uchun yana bosing.
              </small>
            )}
          </div>
        </div>
        <div className="youtube-grid">
          {[
            [
              'dlSbEP4V-gI',
              'Seishun Complex',
              'Opening · Crunchyroll rasmiy videosi',
            ],
            ['3jPFr94OxXY', 'Bocchi the Rock!', 'ANIPLUS sahifasidagi treyler'],
          ].map(([id, title, sub]) => (
            <button
              className="youtube-card"
              key={id}
              onClick={() => show({ youtube: id, title })}
              data-reveal
            >
              <div>
                <img
                  loading="lazy"
                  src={'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg'}
                  alt={title}
                />
                <span className="play-circle">▶</span>
                <small>YOUTUBE ↗</small>
              </div>
              <h3>
                {title}
                <span>↗</span>
              </h3>
              <p>{sub}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
