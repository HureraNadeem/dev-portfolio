/**
 * Drawn in the flat style of the Undraw artwork used on the other pages, from
 * the same palette (#313638 body text, #fca311 accent, #E6E6E6 shading), so the
 * 404 reads as part of the site rather than something borrowed from elsewhere.
 *
 * The swing is CSS keyframes rather than a Lottie runtime or an animated GIF:
 * no dependency, a couple of KB, crisp at any size, and it honours
 * prefers-reduced-motion. Styles live in globals.css under
 * `.notfound-illustration`.
 *
 * Decorative — the <h1> beside it already says the page is hanging around — so
 * it is hidden from assistive tech instead of repeating that in an alt text.
 */
export default function NotFoundIllustration() {
  return (
    <svg viewBox="0 0 480 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      {/* Floor, far below the dangling feet, to sell the height. */}
      <ellipse className="notfound-shadow" cx="238" cy="356" rx="78" ry="13" fill="#E6E6E6" />

      {/* The bar stays put; only the figure below it swings. */}
      <rect x="52" y="56" width="376" height="14" rx="7" fill="#313638" />

      <g className="notfound-swing">
        <rect x="194" y="164" width="58" height="82" rx="29" fill="#fca311" />

        <path d="M214 240 L206 300" stroke="#313638" strokeWidth="14" strokeLinecap="round" fill="none" />
        <path d="M234 240 L246 302" stroke="#313638" strokeWidth="14" strokeLinecap="round" fill="none" />
        <ellipse cx="203" cy="306" rx="13" ry="8" fill="#313638" />
        <ellipse cx="249" cy="308" rx="13" ry="8" fill="#313638" />

        {/* Free arm, hanging as uselessly as the page it illustrates. */}
        <path d="M202 184 L184 232" stroke="#313638" strokeWidth="13" strokeLinecap="round" fill="none" />

        <circle cx="221" cy="140" r="27" fill="#E8B89B" />

        {/* Gripping arm last so it sits in front of the head and body. */}
        <path d="M243 178 L250 70" stroke="#313638" strokeWidth="13" strokeLinecap="round" fill="none" />
        <circle cx="250" cy="63" r="13" fill="#313638" />
      </g>
    </svg>
  )
}
