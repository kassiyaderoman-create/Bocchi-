import { useEffect, useRef, useState } from 'react';

export function Soundcheck() {
  const [note, setNote] = useState(-1);
  const audioContext = useRef();
  const noteTimer = useRef();
  const strumTimers = useRef([]);

  function clearStrum() {
    strumTimers.current.forEach(clearTimeout);
    strumTimers.current = [];
  }

  useEffect(
    () => () => {
      clearStrum();
      clearTimeout(noteTimer.current);
      audioContext.current?.close();
    },
    [],
  );

  function strum() {
    clearStrum();
    void tone(0);
    strumTimers.current = [1, 2, 3, 4, 5].map((i) =>
      setTimeout(() => tone(i), i * 65),
    );
  }
  async function tone(i) {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const ctx = audioContext.current || (audioContext.current = new AC());
      await ctx.resume();
      const oscillator = ctx.createOscillator(),
        gain = ctx.createGain();
      oscillator.type = 'triangle';
      oscillator.frequency.value = [82.41, 110, 146.83, 196, 246.94, 329.63][i];
      const now = ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.12, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.3);
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start(now);
      oscillator.stop(now + 1.35);
      oscillator.onended = () => {
        oscillator.disconnect();
        gain.disconnect();
      };
      setNote(i);
      clearTimeout(noteTimer.current);
      noteTimer.current = setTimeout(() => setNote(-1), 500);
    } catch {}
  }
  return (
    <section className="section soundcheck-section">
      <div data-reveal>
        <span className="eyebrow">05 / YOUR TURN, GUITAR HERO</span>
        <h2>
          Kichik
          <br />
          <em>soundcheck?</em>
        </h2>
        <p>
          Torlarni bosib sinab ko‘ring.
          <br />
          Oltita tor — oltita ochiq nota. Bu kichik sintezator,
          <br />
          haqiqiy gitara yozuvi emas.
        </p>
        <button className="text-link strum" onClick={strum}>
          Barcha torlarni chalish ↘
        </button>
      </div>
      <div
        className="guitar-board"
        tabIndex={0}
        role="group"
        aria-label="Gitara tovushlarini sinash. A, S, D, F, G, H klavishlari."
        onKeyDown={(e) => {
          const i = ['a', 's', 'd', 'f', 'g', 'h'].indexOf(e.key.toLowerCase());
          if (i >= 0 && !e.repeat) {
            e.preventDefault();
            tone(i);
          }
        }}
        data-reveal
      >
        <div className="board-title">
          <b>BOCCHI’S SOUNDCHECK</b>
          <span>VOLUME: CHILL</span>
        </div>
        {[
          ['E', 'A'],
          ['A', 'S'],
          ['D', 'D'],
          ['G', 'F'],
          ['B', 'G'],
          ['E', 'H'],
        ].map(([n, key], i) => (
          <button
            key={i}
            onClick={() => tone(i)}
            className={'guitar-string ' + (note === i ? 'plucked' : '')}
            style={{ '--thickness': 3 - i * 0.35 + 'px' }}
            aria-label={n + ' notasi, ' + key + ' klavishi'}
          >
            <b>{n}</b>
            <span />
            <kbd>{key}</kbd>
          </button>
        ))}
        <small>TORNI BOSING / YOKI KLAVIATURADAN A S D F G H</small>
      </div>
    </section>
  );
}
