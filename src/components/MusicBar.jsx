import { ASSETS as A } from '../content.js';
import { PlayIcon } from './Media.jsx';

export function MusicBar({
  time,
  duration,
  playing,
  toggleMusic,
  seek,
  closePlayer,
}) {
  const formatTime = (n) =>
    `${Math.floor((n || 0) / 60)}:${String(Math.floor((n || 0) % 60)).padStart(2, '0')}`;
  return (
    <div className="music-bar">
      <img src={A + 'band-streetwear.jpg'} alt="Kessoku Band" />
      <div className="music-title">
        <b>Live at STARRY</b>
        <span>KESSOKU BAND</span>
      </div>
      <button
        className="player-play"
        type="button"
        onClick={toggleMusic}
        aria-label={
          playing
            ? 'Pause — musiqani pauza qilish'
            : 'Play — musiqani ijro etish'
        }
        title={playing ? 'Pause' : 'Play'}
        aria-pressed={playing}
      >
        <PlayIcon pause={playing} />
      </button>
      <span className="music-time">{formatTime(time)}</span>
      <input
        aria-label="Musiqa vaqti"
        type="range"
        min="0"
        max={duration || 0}
        disabled={duration <= 0}
        step=".1"
        value={time}
        onChange={(e) => seek(Number(e.target.value))}
      />
      <span className="music-time">{formatTime(duration)}</span>
      <button
        className="player-close"
        type="button"
        aria-label="Pleyerni yopish va musiqani pauza qilish"
        title="Yopish va pauza"
        onClick={(e) => {
          e.stopPropagation();
          closePlayer();
        }}
      >
        ✕
      </button>
    </div>
  );
}
