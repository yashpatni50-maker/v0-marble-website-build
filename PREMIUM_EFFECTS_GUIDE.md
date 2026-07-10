# Premium Effects & Animations Guide for Marble Website

## Vercel AI Prompts for Premium Enhancements

Use these carefully crafted prompts with Vercel AI to generate additional premium animations and effects for your marble website. These prompts are designed to maintain the luxury aesthetic while adding sophisticated interactions.

---

## Prompt 1: Add Advanced Scroll Animations

**Use this when you want to add scroll-triggered animations across all pages:**

```
I have a luxury marble website built with Next.js 16 and Tailwind CSS. I want to add sophisticated scroll animations to make the page more premium and engaging.

Please help me:
1. Create scroll-triggered animations that fade in elements as they appear in the viewport
2. Add parallax effects to sections with background images or videos
3. Implement staggered animations for lists and grids
4. Add counter animations for statistics that count up when visible
5. Create smooth transitions between sections with 3D perspective effects
6. Add animated underlines and borders that animate on scroll

Requirements:
- Use Intersection Observer API for performance
- Keep animations smooth and under 60fps
- Use cubic-bezier timing for premium feel
- Make it mobile-optimized with reduced motion on small screens
- Use the existing color scheme: oklch(0.80 0.12 70) for gold accents

The site has sections for hero, collections, about, testimonials, and CTA. Please ensure each section gets appropriate scroll animations that enhance the luxury aesthetic.
```

---

## Prompt 2: Implement Magnetic Hover Effects

**Use this for interactive, modern hover effects on buttons and cards:**

```
I'm building a luxury marble business website with Next.js 16. I want to add modern, smooth hover effects that feel premium and sophisticated.

Please add:
1. Magnetic hover effects on buttons - elements should gently move towards the cursor
2. Advanced card hover effects with 3D tilt and glow
3. Text shadow and glow effects on hover
4. Animated icon rotations and scale transforms
5. Ripple effect on click for buttons
6. Smooth gradient animations on hover states

Technical requirements:
- Use React hooks (useState, useEffect) for interactivity
- Use CSS transitions and transforms for performance
- Add easing functions: cubic-bezier(0.34, 1.56, 0.64, 1) for spring effect
- Include mobile touch support (no hover effects on mobile)
- Keep animations at 300-500ms duration for premium feel

Color scheme:
- Primary gold: oklch(0.80 0.12 70)
- Dark backgrounds: oklch(0.12 0.01 0)
- Use rgba for overlay effects

Apply these to all interactive elements: buttons, cards, links, and form inputs.
```

---

## Prompt 3: Create Floating & Floating Element Animations

**Use this to add ambient animations that create luxury atmosphere:**

```
I need to add atmospheric, floating animations to my luxury website to create a premium ambiance.

Please implement:
1. Floating particles or orbs that move smoothly in the background
2. Gently floating icons and elements
3. Animated gradient backgrounds that shift colors
4. Breathing animations on badges and highlights
5. Animated light reflections and shimmer effects
6. SVG-based animated elements (gold leaf, marble texture elements)
7. Animated blurred circles that float behind content

Requirements:
- Use keyframe animations for smooth infinite loops
- Apply easing: ease-in-out for natural motion
- Use blur and opacity for depth
- Color scheme: gold accents (oklch(0.80 0.12 70)) with transparency
- Performance: use will-change and GPU acceleration
- Keep animations looping at 6-10 seconds per cycle

Place animations in:
- Hero section background
- Between sections as dividers
- Behind text blocks
- In card backgrounds

Make it subtle but noticeable - these should enhance the luxury feel.
```

---

## Prompt 4: Add Page Transition & Loading Effects

**Use this for smooth transitions between pages:**

```
I have a Next.js 16 luxury website with multiple pages (home, about, products, contact). I want smooth page transitions and premium loading states.

Please create:
1. Fade and slide transitions between pages
2. Loading skeleton screens that match the design
3. Premium loading spinners with gold accents
4. Progress bars for page navigation
5. Staggered content reveals after page load
6. Smooth scroll-to-top animations
7. Page transition animations that don't feel abrupt

Technical details:
- Use Next.js App Router patterns
- Use layout animations with proper key props
- Implement skeleton loaders with shimmer effect
- Add 300-400ms transition duration
- Use the gold color: oklch(0.80 0.12 70)
- Ensure accessibility with prefers-reduced-motion

Make transitions feel natural and luxury - not jarring or distracting.
```

---

## Prompt 5: Enhance Typography with Premium Text Animations

**Use this for sophisticated text effects:**

```
I want to add premium text animations to my website headings and copy for a luxury feel.

Please implement:
1. Text reveal animations - letters fade in sequentially
2. Gradient text animations with flowing colors
3. Animated underlines that draw themselves
4. Staggered letter animations on page load
5. Text glow effects on hover
6. Animated strikethrough and highlighting
7. Premium typewriter effects for key messages

Requirements:
- Use clip-path or mask animations for reveals
- Gold color scheme: oklch(0.80 0.12 70)
- Timing: 50-100ms stagger between letters
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
- Apply to: headings, badges, CTA text, testimonials

The headings are using Playfair Display (serif) for luxury feel. Make sure animations complement this elegant font.
```

---

## Prompt 6: Create Responsive Mobile Animations

**Use this to ensure perfect animations on mobile:**

```
I need to optimize my website animations for mobile and tablet devices while maintaining premium quality.

Please:
1. Reduce animation complexity on mobile (smaller devices)
2. Disable hover effects on touch devices
3. Optimize parallax to work smoothly on mobile
4. Create mobile-specific animations for touch interactions
5. Reduce animation duration slightly on mobile (200-300ms)
6. Implement prefers-reduced-motion for accessibility
7. Optimize performance for slower devices
8. Add touch feedback animations instead of hover

Requirements:
- Use media queries: max-width: 768px, 640px, 480px
- Use @media (hover: hover) for hover-based effects
- Use @media (prefers-reduced-motion: reduce)
- Maintain 60fps on mobile devices
- Test on real devices: iPhone, Android, tablets
- Use will-change sparingly

Keep the luxury feel on all screen sizes - don't strip away animations, just simplify them appropriately.
```

---

## Prompt 7: Add 3D & Perspective Effects

**Use this for advanced 3D visual enhancements:**

```
I want to add subtle 3D and perspective effects to make my luxury website stand out.

Please implement:
1. 3D card flip animations on hover
2. 3D tilt effects based on mouse position
3. Perspective transforms for depth
4. Layered parallax with different speeds
5. 3D rotation animations for images
6. Depth-based shadows and layering
7. CSS 3D transforms for sophisticated effects

Technical requirements:
- Use CSS 3D transforms and perspective
- Keep perspective value around 1000px
- Use transform-origin strategically
- Add subtle shadows for depth
- Performance: use will-change for transformed elements
- Fallback for browsers without 3D support
- Mobile: disable 3D on touch devices

Color and lighting:
- Use gold glow: oklch(0.80 0.12 70)
- Add depth with shadows
- Use rgba for overlay effects

Make it sophisticated, not gimmicky. The 3D should enhance the marble luxury aesthetic.
```

---

## Prompt 8: Implement Advanced Form & Input Animations

**Use this for interactive form elements:**

```
I need premium animations for all form inputs and interactive elements on my contact and product pages.

Please add:
1. Animated floating labels that move up on focus
2. Underline animations that grow from center on focus
3. Icon animations that rotate on input interaction
4. Validation animations with checkmarks and error states
5. Button animations for loading and success states
6. Input field glow effects on focus
7. Smooth select dropdown animations
8. Animated required field indicators

Requirements:
- Use smooth 200-300ms transitions
- Gold accent color: oklch(0.80 0.12 70)
- Error color: oklch(0.577 0.245 27.325)
- Success animations with checkmark
- Loading spinner in button
- Keyboard accessibility maintained
- Touch-friendly on mobile

The form should feel responsive and premium - every interaction should feel intentional and smooth.
```

---

## Prompt 9: Create Parallax Scrolling Effects

**Use this for immersive parallax backgrounds:**

```
I want to add sophisticated parallax scrolling to my website for a more immersive experience.

Please implement:
1. Parallax backgrounds at different scroll speeds
2. Foreground elements moving faster than background
3. Zoom parallax effects
4. Horizontal parallax for side-by-side sections
5. Text parallax effects
6. Image reveal parallax on scroll
7. Nested parallax layers for depth

Technical details:
- Use scroll event listener with RAF (requestAnimationFrame)
- Calculate parallax using: transform translateY(scrollY * 0.5)
- Different multipliers for different elements: 0.3, 0.5, 0.7, 1
- Optimize performance with GPU acceleration
- Mobile: use reduced parallax on touch devices
- Use IntersectionObserver for efficiency

Maintain luxury aesthetic with:
- Gold color accents: oklch(0.80 0.12 70)
- Smooth blur transitions
- Premium easing functions
- Consistent with marble/stone imagery

Create depth and immersion without being distracting.
```

---

## Prompt 10: Add Interactive Storytelling Elements

**Use this to make your content engaging and interactive:**

```
I want to add interactive storytelling elements to my about and process pages to engage visitors.

Please create:
1. Timeline animations with connecting lines
2. Number counting animations (counter effects)
3. Animated progress bars
4. Interactive step indicators
5. Expandable sections with smooth animations
6. Animated testimonial carousels
7. Image gallery with transition animations
8. Animated before/after sliders for marble projects

Requirements:
- Use React hooks for interactivity
- Implement IntersectionObserver for triggers
- Number counter should count from 0 to final value on view
- Smooth duration: 2-3 seconds for counters
- Timeline arrows and connections should animate
- All interactions should feel premium
- Mobile-optimized touch interactions

Color scheme:
- Primary: oklch(0.80 0.12 70) - gold
- Background: oklch(0.12 0.01 0) - dark
- Accents: oklch(0.95 0.001 0) - light

These storytelling elements should help visitors understand your process and value proposition while maintaining luxury aesthetic.
```

---

## How to Use These Prompts

1. **Copy the prompt text** - Select and copy the entire prompt
2. **Go to Vercel AI** - Open the Vercel AI tool in v0
3. **Paste the prompt** - Include it in your request to AI
4. **Specify your needs** - Add any custom requirements or modifications
5. **Review the output** - The AI will generate components with these effects
6. **Test on mobile** - Verify animations work well on all screen sizes
7. **Integrate into your site** - Add the components to your pages

---

## Best Practices for Premium Animations

### Duration Guidelines
- **Micro-interactions**: 200-300ms
- **Page transitions**: 300-500ms
- **Scroll animations**: 600-800ms
- **Loading states**: Infinite loops with 1-3s cycle

### Performance Tips
1. Use CSS animations over JavaScript when possible
2. Use `transform` and `opacity` for GPU acceleration
3. Use `will-change` sparingly
4. Test with DevTools Performance tab
5. Target 60fps animations
6. Use `prefers-reduced-motion` for accessibility

### Mobile Optimization
1. Disable hover effects on touch devices
2. Use `@media (hover: hover)` for hover-based effects
3. Reduce animation duration on mobile by 30-50%
4. Test on real mobile devices
5. Use touch-friendly interactions

### Accessibility
1. Respect `prefers-reduced-motion` setting
2. Ensure animations don't interfere with readability
3. Provide keyboard alternatives
4. Test with screen readers
5. Don't rely on animation alone for important content

---

## Current Website Features

Your marble website has:
- **Hero Section**: Video background with parallax (enhanced)
- **Color Scheme**: Gold accents (oklch(0.80 0.12 70))
- **Typography**: Playfair Display (serif) for headings
- **Framework**: Next.js 16 with Tailwind CSS v4
- **Animations**: Foundation animations already in place (fadeInUp, float, etc.)

Each of these prompts builds on this foundation to create a truly premium experience.

---

## Questions?

If you need specific animations for particular sections or interactions, describe them in detail and use the same structured approach as these prompts for best results.
