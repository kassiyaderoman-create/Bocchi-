import { useEffect, useRef, useState } from 'react';
import { ASSETS as A, links } from './content.js';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { MemberMarquee } from './components/MemberMarquee.jsx';
import { Band } from './components/Band.jsx';
import { Story } from './components/Story.jsx';
import { Live } from './components/Live.jsx';
import { Soundcheck } from './components/Soundcheck.jsx';
import { Gallery } from './components/Gallery.jsx';
import { Faq } from './components/Faq.jsx';
import { Closing } from './components/Closing.jsx';
import { MusicBar } from './components/MusicBar.jsx';
import { Footer } from './components/Footer.jsx';
import { MediaModal } from './components/Media.jsx';

const motionPreference = '(prefers-reduced-motion: reduce)';

export function App() {
  const [selected, setSelected] = useState(0);
  const [modal, setModal] = useState(null);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('home');
  const [playing, setPlaying] = useState(false);
  const [player, setPlayer] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioError, setAudioError] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () => matchMedia(motionPreference).matches,
  );

  const cursor = useRef();
  const audio = useRef();
  const resumeMusic = useRef(false);
  const playAttempt = useRef(0);

  useEffect(() => {
    const preference = matchMedia(motionPreference);
    const change = (event) => setReducedMotion(event.matches);
    preference.addEventListener('change', change);
    return () => preference.removeEventListener('change', change);
  }, []);

  async function toggleMusic() {
    const el = audio.current;
    if (!el) return;
    setPlayer(true);
    setAudioError(false);
    if (el.paused) {
      const attempt = ++playAttempt.current;
      try {
        await el.play();
      } catch {
        if (attempt === playAttempt.current) {
          setPlaying(false);
          setAudioError(true);
        }
      }
    } else {
      playAttempt.current++;
      resumeMusic.current = false;
      el.pause();
      setPlaying(false);
    }
  }
  function closePlayer() {
    playAttempt.current++;
    resumeMusic.current = false;
    audio.current?.pause();
    setPlaying(false);
    setPlayer(false);
    setAudioError(false);
  }
  function show(item) {
    if (!item.image) {
      resumeMusic.current = !audio.current.paused;
      playAttempt.current++;
      audio.current.pause();
    }
    setModal(item);
    setMenu(false);
  }
  function close() {
    setModal(null);
    if (resumeMusic.current) {
      resumeMusic.current = false;
      void toggleMusic();
    }
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document
      .querySelectorAll('[data-reveal]')
      .forEach((el) => observer.observe(el));
    let ticking = false;
    const scroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        let current = 'home';
        for (const [id] of links)
          if (
            document.getElementById(id)?.getBoundingClientRect().top <
            innerHeight * 0.4
          )
            current = id;
        setActive(current);
        ticking = false;
      });
    };
    window.addEventListener('scroll', scroll, { passive: true });
    scroll();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scroll);
    };
  }, []);
  useEffect(() => {
    if (!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    const hide = () => {
      if (cursor.current) cursor.current.hidden = true;
      document.documentElement.classList.remove('guitar-mode');
    };
    const move = (e) => {
      if (e.target.closest('dialog,video[controls],audio,iframe')) {
        hide();
        return;
      }
      cursor.current.hidden = false;
      cursor.current.style.transform = `translate3d(${e.clientX - 36}px,${e.clientY - 6}px,0)`;
      document.documentElement.classList.add('guitar-mode');
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    return () => {
      hide();
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
    };
  }, []);
  useEffect(() => {
    if (!menu) return;
    const key = (e) => {
      if (e.key === 'Escape') setMenu(false);
    };
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  }, [menu]);
  function seek(seconds) {
    if (!Number.isFinite(audio.current.duration)) return;
    audio.current.currentTime = seconds;
    setTime(seconds);
  }

  return (
    <>
      <div ref={cursor} className="guitar-cursor" hidden aria-hidden="true">
        <img src={A + 'guitar.svg'} alt="" />
      </div>
      <audio
        ref={audio}
        src={A + 'starry-audio.m4a'}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onError={() => setAudioError(true)}
      />
      <Header
        active={active}
        menu={menu}
        setMenu={setMenu}
        playing={playing}
        toggleMusic={toggleMusic}
      />
      <main>
        <Hero show={show} reducedMotion={reducedMotion} />
        <MemberMarquee
          setSelected={setSelected}
          reducedMotion={reducedMotion}
        />
        <Band selected={selected} setSelected={setSelected} />
        <Story show={show} />
        <Live
          show={show}
          playing={playing}
          toggleMusic={toggleMusic}
          audioError={audioError}
        />
        <Soundcheck />
        <Gallery show={show} />
        <Faq />
        <Closing show={show} />
      </main>
      <Footer />
      {player && (
        <MusicBar
          time={time}
          duration={duration}
          playing={playing}
          toggleMusic={toggleMusic}
          seek={seek}
          closePlayer={closePlayer}
        />
      )}
      {modal && <MediaModal item={modal} onClose={close} />}
    </>
  );
}
