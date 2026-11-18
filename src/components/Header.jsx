import { ASSETS as A, links } from '../content.js';

export function Header({ active, menu, setMenu, playing, toggleMusic }) {
  return (
    <>
      {' '}
      <header className="navbar">
        <a href="#home" className="brand" onClick={() => setMenu(false)}>
          <img className="nav-portrait" src={A + 'nav-bocchi.jpg'} alt="" />
          <span>
            BOCCHI<span className="brand-pink">.ROCKS</span>
            <small>KESSOKU BAND FAN CLUB</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Asosiy menyu">
          {links.map(([id, title]) => (
            <a
              key={id}
              href={'#' + id}
              className={active === id ? 'active' : ''}
              aria-current={active === id ? 'location' : undefined}
            >
              {title}
            </a>
          ))}
        </nav>
        <div className="nav-buttons">
          <button
            className={'sound-button ' + (playing ? 'on' : '')}
            onClick={toggleMusic}
            aria-pressed={playing}
            aria-label={playing ? 'Musiqani to‘xtatish' : 'Musiqani yoqish'}
          >
            <span className="eq" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>MUSIC</span>
          </button>
          <button
            className={'menu-button ' + (menu ? 'open' : '')}
            aria-controls="mobile-nav"
            aria-expanded={menu}
            aria-label={menu ? 'Menyuni yopish' : 'Menyuni ochish'}
            onClick={() => setMenu(!menu)}
          >
            <i />
            <i />
          </button>
        </div>
      </header>
      <div
        id="mobile-nav"
        className={'mobile-nav ' + (menu ? 'open' : '')}
        inert={!menu ? true : undefined}
      >
        <span className="eyebrow">CHOOSE YOUR NEXT TRACK</span>
        {links.map(([id, title], i) => (
          <a key={id} href={'#' + id} onClick={() => setMenu(false)}>
            <small>0{i + 1}</small>
            {title}
            <span>↗</span>
          </a>
        ))}
      </div>
      {menu && (
        <button
          className="menu-backdrop"
          aria-label="Menyuni yopish"
          onClick={() => setMenu(false)}
        />
      )}
    </>
  );
}
