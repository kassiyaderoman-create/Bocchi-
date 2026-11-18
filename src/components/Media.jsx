import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ASSETS as A } from '../content.js';

export function PlayIcon({ pause = false }) {
  return <span aria-hidden="true">{pause ? 'Ⅱ' : '▶'}</span>;
}

export function MediaModal({ item, onClose }) {
  const ref = useRef();
  useEffect(() => {
    const last = document.activeElement;
    const el = ref.current;
    const old = document.body.style.overflow;
    el.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      el.close();
      document.body.style.overflow = old;
      last?.focus?.();
    };
  }, []);
  return createPortal(
    <dialog
      ref={ref}
      className="media-dialog"
      aria-labelledby="media-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <div className="modal-top">
        <span id="media-title">{item.title}</span>
        <button
          onClick={onClose}
          className="close-modal"
          aria-label="Oynani yopish"
        >
          ✕ <b>Yopish</b>
        </button>
      </div>
      <div className="modal-body">
        {item.image ? (
          <>
            <img src={A + item.image} alt={item.title} />
            <a className="modal-link" href={A + item.image} download>
              Rasmni yuklab olish ↓
            </a>
          </>
        ) : item.local ? (
          <video
            aria-label={item.title}
            controls
            autoPlay
            playsInline
            poster={A + 'live-poster.webp'}
            src={A + 'starry-live.mp4'}
          />
        ) : (
          <>
            <iframe
              src={
                'https://www.youtube-nocookie.com/embed/' +
                item.youtube +
                '?autoplay=1'
              }
              title={item.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <a
              className="modal-link"
              href={'https://www.youtube.com/watch?v=' + item.youtube}
              target="_blank"
              rel="noreferrer"
            >
              YouTube’da ochish ↗
            </a>
          </>
        )}
      </div>
    </dialog>,
    document.body,
  );
}
