import { useEffect, useRef, useState } from 'react';
import { ASSETS as A, members } from '../content.js';

export function MemberMarquee({ setSelected, reducedMotion }) {
  const marqueeTrack = useRef();
  const offset = useRef(0);
  const [paused, setPaused] = useState(false);
  const still = paused || reducedMotion;

  useEffect(() => {
    const track = marqueeTrack.current;
    if (still) {
      offset.current = 0;
      track.style.transform = '';
      return;
    }

    let frame;
    let previousTime;
    let width = 1;

    function measure() {
      width = track.firstElementChild.getBoundingClientRect().width || 1;
      offset.current %= width;
    }

    function advance(now) {
      if (previousTime !== undefined && !document.hidden) {
        const elapsed = Math.min(now - previousTime, 64);
        offset.current = (offset.current + elapsed * 0.045) % width;
        track.style.transform = `translate3d(${-offset.current}px, 0, 0)`;
      }
      previousTime = now;
      frame = requestAnimationFrame(advance);
    }

    measure();
    const resize = new ResizeObserver(measure);
    resize.observe(track.firstElementChild);
    frame = requestAnimationFrame(advance);

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
    };
  }, [still]);

  return (
    <div className="member-tape">
      <div
        id="member-tape"
        className={'member-marquee' + (still ? ' is-still' : '')}
        aria-label="Kessoku Band a’zolari"
      >
        <div className="marquee-track" ref={marqueeTrack}>
          {(still ? [0] : [0, 1]).map((copy) => (
            <div
              key={copy}
              className="marquee-group"
              aria-hidden={copy === 1 || undefined}
            >
              {members.map((member, index) => (
                <a
                  key={member.id}
                  href="#band"
                  onClick={() => setSelected(index)}
                  tabIndex={copy === 1 ? -1 : undefined}
                  onFocus={(event) => {
                    if (
                      event.target.matches(':focus-visible') &&
                      !reducedMotion
                    )
                      setPaused(true);
                  }}
                  style={{ '--member': member.color }}
                >
                  <span className="marquee-avatar">
                    <img src={A + member.id + '-official.webp'} alt="" />
                  </span>
                  <b>{member.name}</b>
                  <i aria-hidden="true">✦</i>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      {!reducedMotion && (
        <button
          className="marquee-toggle"
          type="button"
          aria-controls="member-tape"
          onClick={() => setPaused(!paused)}
        >
          {paused ? 'Lentani aylantirish' : 'Lentani to‘xtatish'}
        </button>
      )}
    </div>
  );
}
