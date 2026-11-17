# BOCCHI THE ROCK! — Kessoku Band Fan Club

Independent Uzbek fan website, built with React and Vite. Start with `npm install` then `npm run dev`. Production: `npm run build`, output: dist.

## Features

- Navbar uses the final user-attached wide Bocchi image.
- Animated guitar cursor drawn as a native SVG UI icon.
- Four Kessoku Band profiles, switchable tabs and keyboard navigation.
- User-uploaded full STARRY performance, music player and official YouTube embeds.
- Seven-image filterable gallery. All attached JPEGs are preserved unchanged.
- Responsive navigation, mobile menu, scroll reveals, hover transitions and native accessible media dialogs.
- Mini soundcheck produces synthesized open-string guitar notes with Web Audio; it is not a recording of an actual guitar.
- Reduced-motion support and visible keyboard focus.

## Media

The uploaded video is actually 1920x1080 at 60 FPS. The full website copy remains 1920x1080 and was compressed to 30 FPS for transfer size; its 123-second duration and audio are preserved. The hero uses an 18-second muted 720p preview. Music is extracted from the same uploaded clip. No native 4K quality claim is made.

## Sources and ownership

Character facts and credits: https://bocchi.rocks/tv/character/ ; https://www.aniplus-asia.com/show/bocchi-the-rock/ ; https://www.aniplex.co.jp/lineup/bocchi/ .

Official character art is from the anime's official character pages. Opening video: Crunchyroll, https://www.youtube.com/watch?v=dlSbEP4V-gI . Trailer is the video embedded on ANIPLUS' title page: https://www.youtube.com/watch?v=3jPFr94OxXY .

Fan-art and user-provided media belong to their respective owners. © Aki Hamaji / Houbunsha, Aniplex. This is an independent fan project, not an official website.

Update: seamless portrait marquee featuring all four members, expanded gallery with separate Nijika/Ryo/Kita portraits and per-member filters. The mini-player close control explicitly pauses audio, hides the player and cancels pending playback; the play/pause and close hit areas are enlarged.

The member portrait tape now advances automatically using requestAnimationFrame at 45px/s, wraps seamlessly, remeasures on resize, and has no manual horizontal scrollbar. Explicit user request enables this tape even when system animation preferences disable other decorative animations. Background tabs do not accumulate animation jumps.
