import { ASSETS as A } from '../content.js';

// Kessoku Band / Jamoa eskizi
//   .---.    /\ .---.     .---.     .---._
//  / /// \   \// //  \   / /// \   / //\  )
// | |. . |    | ^ ^ |)   \|- - |   | ^ ^|/
// | | _ /|     \ U /      \ - /     \ U /
//  Hitori      Nijika       Ryo       Kita

export function Story({ show }) {
  return (
    <>
      {' '}
      <section className="story-section" id="story">
        <div className="section story-inner">
          <div className="story-collage" data-reveal>
            <button
              className="collage-main"
              onClick={() =>
                show({ image: 'band-walk.jpg', title: 'Kessoku Band — birga' })
              }
            >
              <img
                src={A + 'band-walk.jpg'}
                alt="Kessoku Band to‘rt a’zosi birga"
              />
              <span>4 FRIENDS. 1 SOUND.</span>
            </button>
            <button
              className="collage-sticker"
              onClick={() =>
                show({
                  image: 'bocchi-sticker.jpg',
                  title: 'Bocchi — fan edit',
                })
              }
            >
              <img
                src={A + 'bocchi-sticker.jpg'}
                alt="Gitara ko‘targan Bocchi fan editi"
              />
            </button>
            <span className="collage-note">
              small steps,
              <br />
              BIG SOUND!
            </span>
          </div>
          <div className="story-copy" data-reveal>
            <span className="eyebrow">02 / A LITTLE MORE THAN MUSIC</span>
            <h2>
              Xonadagi orzudan
              <br />
              <em>STARRY sahnasigacha.</em>
            </h2>
            <p>
              Hitori Gotoh uchun odamlar bilan gaplashish oson emas. Gitara esa
              unga o‘zini ifoda etish yo‘lini beradi. Yolg‘iz mashqlar bilan
              boshlangan kunlar Nijika bilan uchrashuvdan so‘ng o‘zgaradi.
            </p>
            <p>
              <b>Bocchi the Rock!</b> — shunchaki guruh tuzish haqida emas. Bu
              qo‘rquv bilan ham bir qadam tashlash, o‘zingga mos odamlarni
              topish va turlicha bo‘la turib birga ishlash haqidagi musiqiy
              komediya.
            </p>
            <div className="story-facts">
              <div>
                <b>2022</b>
                <span>TV ANIME</span>
              </div>
              <div>
                <b>12</b>
                <span>1-MAVSUM QISMLARI</span>
              </div>
              <div>
                <b>04</b>
                <span>GURUH A’ZOSI</span>
              </div>
            </div>
            <a
              href="https://www.aniplus-asia.com/show/bocchi-the-rock/"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Anime haqida ko‘proq ↗
            </a>
          </div>
        </div>
      </section>
      <section className="section world-section">
        <div className="section-heading" data-reveal>
          <div>
            <span className="eyebrow">03 / INSIDE THEIR WORLD</span>
            <h2>
              Ularning olamiga
              <br />
              <em>bir qadam yaqinroq.</em>
            </h2>
          </div>
          <p>
            Jamoa nomi, sevimli sahna va
            <br />
            musiqa ortidagi odamlar.
          </p>
        </div>
        <div className="world-cards">
          {[
            [
              '01',
              'Kessoku Band',
              'TO‘RTLIK BIRLASHGANDA',
              'Anime ichidagi to‘rt qizdan iborat rock guruh. Har bir a’zo o‘ziga xos, lekin sahnada ularning vazifalari bir-birini to‘ldiradi.',
            ],
            [
              '02',
              'STARRY',
              'KICHIK SAHNA. KATTA ORZU.',
              'Guruh faoliyati bilan bog‘liq jonli musiqa klubi. Mashqlar, tanishuvlar va ilk chiqishlar uchun muhim uchrashuv nuqtasi.',
            ],
            [
              '03',
              'CloverWorks',
              'KADR ORTIDAGI IJODKORLAR',
              'Anime Aki Hamaji mangasiga asoslangan. TV talqinining rejissyori — Keiichiro Saito, animatsiya studiyasi — CloverWorks.',
            ],
          ].map(([n, title, tag, body]) => (
            <article key={n} data-reveal>
              <div className="world-card-top">
                <span>{n} / FILE</span>
                <b>✦</b>
              </div>
              <h3>{title}</h3>
              <small>{tag}</small>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="journey" data-reveal>
          <span className="eyebrow">
            SPOYLERSIZ / BOCCHI’NING BIRINCHI QADAMLARI
          </span>
          <ol>
            {[
              ['Yolg‘iz mashq', 'Gitara orqali o‘z ovozini topish.'],
              [
                'Kutilmagan taklif',
                'Nijika bilan uchrashib, guruhga yaqinlashish.',
              ],
              [
                'Birgalikdagi ovoz',
                'Har xil xarakterlar bilan bir ritmda ishlash.',
              ],
              ['Sahnaga qadam', 'Hayajon bo‘lsa ham, ijroni boshlash.'],
            ].map(([title, body], i) => (
              <li key={title}>
                <span>0{i + 1}</span>
                <b>{title}</b>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
