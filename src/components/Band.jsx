import { ASSETS as A, members } from '../content.js';

export function Band({ selected, setSelected }) {
  const member = members[selected];
  return (
    <section className="section band-section" id="band">
      <div className="section-heading" data-reveal>
        <div>
          <span className="eyebrow">01 / MEET THE BAND</span>
          <h2>
            To‘rt xarakter.
            <br />
            <em>Bitta Kessoku Band.</em>
          </h2>
        </div>
        <p>
          Jamoada aynan <b>4 kishi</b> bor.
          <br />
          Gitara, baraban, bas va vokal — hammasi birga.
        </p>
      </div>
      <div
        className="member-selector"
        role="tablist"
        aria-label="Guruh a’zosini tanlash"
      >
        {members.map((m, i) => (
          <button
            role="tab"
            id={'tab-' + m.id}
            aria-controls="member-profile"
            aria-selected={selected === i}
            tabIndex={selected === i ? 0 : -1}
            key={m.id}
            onClick={() => setSelected(i)}
            onKeyDown={(e) => {
              if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
                e.preventDefault();
                const next =
                  e.key === 'Home'
                    ? 0
                    : e.key === 'End'
                      ? members.length - 1
                      : (selected +
                          (e.key === 'ArrowRight' ? 1 : members.length - 1)) %
                        members.length;
                setSelected(next);
                document.getElementById('tab-' + members[next].id)?.focus();
              }
            }}
            style={{ '--member': m.color }}
          >
            <img src={A + m.id + '-official.webp'} alt="" />
            <small>0{i + 1}</small>
            <b>{m.short}</b>
            <span>{m.instrument}</span>
          </button>
        ))}
      </div>
      <div
        className="member-profile"
        id="member-profile"
        role="tabpanel"
        aria-labelledby={'tab-' + member.id}
        style={{ '--member': member.color }}
      >
        <div className="member-art" key={member.id + 'art'}>
          <span className="big-index">0{selected + 1}</span>
          <span className="member-jp">{member.jp}</span>
          <img
            src={A + member.id + '-official.webp'}
            alt={member.name + ' — rasmiy personaj tasviri'}
          />
          <span className="member-stamp">
            KESSOKU
            <br />
            BAND ✦
          </span>
        </div>
        <article className="member-copy" key={member.id}>
          <span className="eyebrow">
            {member.label} / {member.instrument}
          </span>
          <h3>
            {member.name}
            <span>.</span>
          </h3>
          <p className="member-intro">{member.intro}</p>
          <p>{member.bio}</p>
          <p>{member.extra}</p>
          <dl>
            <div>
              <dt>JAMOADAGI VAZIFASI</dt>
              <dd>{member.role}</dd>
            </div>
            <div>
              <dt>OVOZ AKTRISASI</dt>
              <dd>{member.cv}</dd>
            </div>
          </dl>
          <div className="member-traits">
            {member.traits.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <a
            href="https://bocchi.rocks/tv/character/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Rasmiy personaj sahifasi ↗
          </a>
        </article>
      </div>
      <div className="roles-strip">
        {members.map((m, i) => (
          <button
            key={m.id}
            onClick={() => {
              setSelected(i);
              document
                .getElementById('member-profile')
                .scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            style={{ '--member': m.color }}
          >
            <small>0{i + 1}</small>
            <b>{m.name}</b>
            <span>{m.instrument}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
