import { ASSETS as A } from '../content.js';
import { PlayIcon } from './Media.jsx';

export function Hero({ show, reducedMotion }) {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <div className="eyebrow hero-eyebrow">
          <span />
          INTROVERT SOUL. ROCKSTAR SOUND.
        </div>
        <h1>
          BOCCHI
          <br />
          THE <em>ROCK!</em>
          <span className="hand-star">✦</span>
        </h1>
        <div className="jp-label">ぼっち・ざ・ろっく！</div>
        <p>
          Ba’zan eng baland ovoz
          <br />
          eng sokin odamdan chiqadi.
        </p>
        <div className="hero-actions">
          <button
            className="btn dark"
            onClick={() =>
              show({ local: true, title: 'Kessoku Band — LIVE at STARRY' })
            }
          >
            <PlayIcon /> Live’ni ko‘rish <span>↗</span>
          </button>
          <a className="text-link" href="#band">
            Jamoa bilan tanishish ↓
          </a>
        </div>
        <div className="hero-bottom">
          <span>
            SOLO GITARADAN
            <br />
            <b>BIRGALIKDAGI SAHNAGACHA.</b>
          </span>
          <div className="tiny-colors">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="hero-stage">
        <div className="stage-bar">
          <span>
            <i /> LIVE AT STARRY
          </span>
          <span>VOL. 01 / FAN ARCHIVE</span>
        </div>
        <button
          className="stage-screen"
          onClick={() =>
            show({ local: true, title: 'LIVE at STARRY — to‘liq video' })
          }
          aria-label="STARRY jonli videosini ochish"
        >
          {reducedMotion ? (
            <img src={A + 'live-poster.webp'} alt="" />
          ) : (
            <video
              autoPlay
              muted
              playsInline
              loop
              poster={A + 'live-poster.webp'}
              src={A + 'stage-loop.mp4'}
            />
          )}
          <span className="stage-play">▶</span>
          <span className="stage-screen-caption">TURN THE VOLUME UP ↗</span>
        </button>
        <div className="stage-foot">
          <span>結束バンド</span>
          <b>LOUDER TOGETHER.</b>
        </div>
        <div className="ticket">
          <b>4</b>
          <span>
            A’ZO
            <br />
            BITTA JAMOA.
          </span>
        </div>
        <div className="stage-star" aria-hidden="true">
          ✳
        </div>
      </div>
    </section>
  );
}
