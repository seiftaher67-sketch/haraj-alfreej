# TODO: Animate Category Buttons to Move from Right to Left Interlaced

## Task Breakdown
- [x] Modify `src/pages/Home.js` to wrap category buttons in a scrolling container and duplicate the categories for seamless animation.
- [x] Add CSS animation in `src/pages/design.css` for infinite marquee effect moving from right to left.
- [x] Test the animation to ensure it moves smoothly and interlaced (overlapping) as requested.

## Notes
- Categories: ['شاحنات','سيارات','مقطورات','قطع غيار']
- Use duplicate list for seamless loop.
- Animation: TranslateX from 0 to -50% over 10 seconds, linear infinite.
- Ensure RTL direction is respected (right to left movement).

---

# TODO: Make "يجري الآن مزايدات" Button Blink Every Two Seconds

## Task Breakdown
- [x] Add CSS keyframes for blinking animation (opacity toggle every 2 seconds).
- [x] Ensure the button in `src/pages/Home.js` uses the `animate-blink-red` class.
- [x] Test the blinking animation.

## Notes
- Animation: Opacity 1 for 1s, opacity 0 for 1s, repeat every 2 seconds.

---

# TODO: Animate Car Logos to Move from Right to Left Interlaced

## Task Breakdown
- [x] Modify `src/pages/Home.js` to display multiple car logos in a scrolling container with duplication for seamless animation.
- [x] Add CSS animation in `src/pages/design.css` for marquee effect moving from right to left.
- [x] Test the animation to ensure logos move smoothly and interlaced.

## Notes
- Logos: ['/assets/images/images/p1.jpeg', '/assets/images/images/p2.jpeg']
- Duplicate the list for seamless loop.
- Animation: TranslateX from 0 to -50% over 10 seconds, linear infinite.
