# QuickPages AI Documentation

# 05-animations.md

## Purpose

This document defines the motion language of QuickPages.

Animations are not decorative.

They are part of the user experience.

Motion should guide attention, communicate hierarchy and reinforce the premium identity of the studio.

Every animation must have a purpose.

If an animation does not improve the experience, it should not exist.

---

# Motion Philosophy

Motion should feel:

Elegant.

Natural.

Intentional.

Calm.

Refined.

Confident.

Never flashy.

Never distracting.

Never exaggerated.

The visitor should notice the quality of the experience rather than the animations themselves.

---

# Animation Stack

Primary Library

Framer Motion

Secondary Library

GSAP

Only use GSAP when Framer Motion cannot achieve the desired result efficiently.

Smooth Scrolling

Lenis

Never implement multiple scrolling libraries.

---

# Animation Principles

Every animation should:

Guide the eye.

Improve readability.

Provide feedback.

Create rhythm.

Reduce abrupt changes.

Support storytelling.

Animations should never exist only because they look impressive.

---

# Timing

Micro Interactions

150–250ms

Small Reveals

300–500ms

Section Reveals

500–700ms

Page Transitions

600–900ms

Hero Entrance

800–1200ms

Avoid animations longer than necessary.

---

# Easing

Use smooth easing curves.

Preferred easing:

easeOut

easeInOut

Custom cubic-bezier when necessary.

Avoid linear animations.

Avoid bouncing effects.

Avoid elastic motion.

---

# Initial Page Load

When the website loads:

Background appears.

↓

Navigation fades in.

↓

Hero title reveals.

↓

Description fades.

↓

Buttons appear.

↓

Hero visual enters.

Everything should happen sequentially.

Never all at once.

The entire sequence should feel calm.

---

# Hero Animations

Heading

Mask reveal.

Small upward movement.

Fade.

Paragraph

Fade.

Delay after title.

Buttons

Fade.

Small upward motion.

Sequential appearance.

Hero Image

Scale from 98%.

Fade.

Small blur removal.

---

# Scroll Behavior

Smooth scrolling must feel native.

Scrolling should never lag.

Never create scroll-jacking.

Scrolling should simply feel more fluid than default browser behavior.

---

# Section Reveal

Every section should animate only once.

Avoid repeated animations while scrolling back.

Reveal sequence:

Section title

↓

Supporting text

↓

Visual element

↓

Cards

↓

Buttons

---

# Text Reveal

Titles should use:

Mask reveal.

Fade.

TranslateY.

Maximum movement:

30px.

Never animate every individual letter.

Never create chaotic typography.

---

# Paragraph Reveal

Fade.

TranslateY.

Very subtle.

Reading should never be interrupted.

---

# Image Reveal

Images should:

Fade.

Scale slightly.

Remove blur progressively.

Maintain aspect ratio.

Never rotate.

Never spin.

---

# Cards

Cards should reveal one after another.

Small delay.

Consistent rhythm.

Hover adds slight elevation.

Very small scale.

Never bounce.

---

# Buttons

Hover

Scale 1.02

Small shadow increase.

Arrow movement.

Smooth transition.

Click

Tiny scale down.

Immediate return.

---

# Navigation

Transparent at top.

Blur after scrolling.

Smooth color transition.

Current section indicator.

Navigation links animate subtly on hover.

---

# Mobile Navigation

Fullscreen overlay.

Fade background.

Menu items appear sequentially.

Close animation mirrors opening.

Avoid slide menus from the side.

The menu should feel premium.

---

# Links

Hover

Underline animation.

Opacity transition.

Small horizontal movement optional.

Never use abrupt color changes.

---

# Service Cards

Reveal while entering viewport.

Hover:

Slight lift.

Small shadow.

Border color transition.

Nothing excessive.

---

# Project Cards

Hover

Scale to 1.01

Image zoom

1.03

Content remains stable.

Buttons appear slightly brighter.

Projects should always remain readable.

---

# FAQ

Accordion animation:

Height transition.

Opacity transition.

Icon rotation.

Smooth timing.

Only one answer expanded at a time.

---

# Forms

Input focus

Border transition.

Background transition.

Focus ring.

Submit button

Small hover.

Loading state.

Success animation.

Never abrupt changes.

---

# Icons

Icons may move subtly.

Maximum translation:

4px

Maximum rotation:

5°

Icons should support interactions.

Never become decorative.

---

# Dividers

Fade into view.

Never slide aggressively.

---

# Page Transitions

Transitions between pages should feel cinematic.

Use:

Fade.

Opacity.

Blur.

Mask.

Small movement.

Avoid:

Large slides.

Zoom transitions.

Rotations.

Flips.

---

# Scroll Storytelling

Scrolling should feel like reading a magazine.

Each section prepares the next.

The visitor should naturally continue scrolling.

Avoid sudden visual interruptions.

---

# Hover Philosophy

Hover should confirm interactivity.

Not entertain.

Users should immediately understand that an element can be clicked.

---

# Cursor

Default cursor is preferred.

If implementing a custom cursor:

Keep it minimal.

Respect accessibility.

Never hide the native cursor unnecessarily.

Never use oversized cursor effects.

---

# Loading States

Use subtle placeholders.

Prefer fades over skeleton screens.

Loading should feel intentional.

Avoid excessive spinners.

---

# Success States

Successful actions should receive immediate feedback.

Examples:

Button confirmation.

Form success message.

Small check animation.

Nothing dramatic.

---

# Error States

Friendly.

Clear.

Helpful.

Explain the problem.

Suggest the next step.

Avoid technical jargon.

---

# Motion Consistency

All animations must feel related.

Timing.

Distance.

Opacity.

Scale.

Everything should follow the same visual language.

Do not mix animation styles.

---

# Performance Rules

Prefer transform and opacity animations.

Avoid animating:

Width.

Height.

Top.

Left.

Heavy box shadows.

Avoid unnecessary re-renders.

Keep animations GPU-friendly.

---

# Accessibility

Respect prefers-reduced-motion.

When reduced motion is enabled:

Disable decorative animations.

Maintain essential transitions.

Preserve usability.

Accessibility always has higher priority than aesthetics.

---

# Success Criteria

Motion should make the experience feel:

Premium.

Fluid.

Modern.

Intentional.

Professional.

Visitors should finish navigating without remembering individual animations.

Instead, they should remember how smooth and enjoyable the experience felt.

That is the objective of QuickPages' motion system.