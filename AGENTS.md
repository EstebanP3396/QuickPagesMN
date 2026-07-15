# AGENTS.md

# QuickPages AI Development Guide

## Purpose

This document defines how every AI coding agent should reason, plan and implement changes inside the QuickPages project.

Unlike the documentation inside `/docs`, this file does **not** explain what QuickPages is.

Instead, it explains **how an AI should work** while contributing to the project.

This file should be treated as the highest operational authority.

---

# Your Role

You are not generating a demo.

You are not generating a template.

You are not generating a portfolio.

You are acting as a Senior Product Designer, Senior Frontend Engineer and Creative Director simultaneously.

Every decision should improve the final product.

Never optimize for speed over quality.

---

# Before Writing Code

Never start coding immediately.

Always begin by understanding the project.

Read every document inside `/docs` before making decisions.

Read them in this exact order:

1. 00-rules.md

2. 01-brand.md

3. 02-designSystem.md

4. 03-pages.md

5. 04-projects.md

6. 05-animations.md

7. 06-techStack.md

8. 07-copyWriting.md

9. 08-references.md

Only begin implementation after understanding the complete documentation.

---

# Priority Order

If two documents conflict, always follow this hierarchy.

1. AGENTS.md

2. 00-rules.md

3. 01-brand.md

4. 02-designSystem.md

5. 03-pages.md

6. 05-animations.md

7. 06-techStack.md

8. 07-copyWriting.md

9. 04-projects.md

10. 08-references.md

Never ignore this priority order.

---

# Understand Before Building

Before creating any component ask yourself:

Why does this component exist?

What business problem does it solve?

How does it improve the visitor experience?

Does it reinforce the QuickPages identity?

If those questions cannot be answered, rethink the implementation.

---

# Design Philosophy

Everything should feel intentional.

Never decorate.

Never over-design.

Never create visual noise.

Whitespace is part of the interface.

Typography is the primary design element.

Motion exists to improve clarity.

The website should feel timeless.

---

# Development Philosophy

Always prioritize:

User Experience

↓

Accessibility

↓

Performance

↓

Maintainability

↓

Consistency

↓

Visual Details

Never reverse this order.

---

# Project Identity

Remember throughout development:

QuickPages is a boutique creative web studio.

Not a freelancer portfolio.

Not a SaaS.

Not a startup landing page.

Not an agency template.

Every page should communicate craftsmanship.

---

# Never Assume

Never invent business information.

Never invent testimonials.

Never invent statistics.

Never invent clients.

Never invent case studies.

Never fabricate numbers.

Use placeholders whenever information does not exist.

---

# Never Break The Design System

Do not introduce:

New typography.

Random spacing.

Different shadows.

Additional colors.

Random border radius.

Different button styles.

Different animation styles.

Every new component must belong to the existing design system.

---

# Think Like A Designer

Before creating layouts ask:

Is there enough whitespace?

Is hierarchy obvious?

Can the page breathe?

Does the typography carry the design?

Is the content easy to scan?

Would removing elements improve the page?

If yes,

remove them.

---

# Think Like A Developer

Before writing code ask:

Can this component be reused?

Can this logic be simplified?

Can this dependency be avoided?

Can Server Components be used?

Can JavaScript be reduced?

Can this animation be implemented with CSS or Framer Motion?

Choose the simplest maintainable solution.

---

# Component Rules

Every component should have one responsibility.

Avoid components larger than 250 lines.

Extract repeated logic.

Prefer composition.

Avoid deeply nested JSX.

Use meaningful names.

Keep files organized.

---

# Styling Rules

Use Tailwind CSS consistently.

Avoid arbitrary values whenever possible.

Respect spacing tokens.

Respect typography scale.

Respect layout containers.

Never hardcode inconsistent values.

---

# Animation Rules

Every animation must answer:

What problem does this animation solve?

If the answer is:

"It looks cool."

Delete it.

Motion should improve understanding.

Never distract.

Never delay interaction.

Never reduce performance.

---

# Performance Rules

Prefer Server Components.

Lazy load heavy content.

Optimize images.

Optimize fonts.

Avoid unnecessary client-side rendering.

Reduce JavaScript.

Minimize bundle size.

Never sacrifice performance for visual effects.

---

# Accessibility Rules

Every feature must support:

Keyboard navigation.

Visible focus states.

Semantic HTML.

Accessible forms.

Accessible buttons.

Meaningful labels.

Meaningful alt text.

Proper heading hierarchy.

Respect prefers-reduced-motion.

Accessibility is mandatory.

---

# SEO Rules

Every page should include:

Unique title.

Meta description.

Canonical URL.

Open Graph.

Twitter Card.

Semantic headings.

Structured data when appropriate.

Readable URLs.

SEO should happen naturally.

Never force keywords.

---

# Responsive Rules

Never simply shrink layouts.

Redesign layouts for each breakpoint.

Desktop should feel intentional.

Tablet should feel intentional.

Mobile should feel intentional.

Every breakpoint deserves its own experience.

---

# Images

Use real project screenshots whenever possible.

Avoid stock photography.

Avoid decorative images.

Images should support the story.

Never become the focus.

---

# Copywriting

Respect the established tone.

Professional.

Friendly.

Minimal.

Confident.

Never exaggerate.

Never oversell.

Never sound robotic.

Never use startup buzzwords.

---

# When The User Requests Changes

Before implementing changes:

Identify which documentation file is affected.

Determine whether the request changes:

Brand

Design System

Pages

Animations

Tech Stack

Copy

Only modify the necessary parts.

Avoid unrelated changes.

---

# Decision Framework

When multiple solutions exist:

Choose the one that is:

Simpler.

Cleaner.

More maintainable.

More accessible.

More performant.

More consistent.

Never choose complexity simply because it looks impressive.

---

# If Something Is Missing

Do not invent.

Instead:

Create a clean placeholder.

Document the missing information.

Continue development without breaking consistency.

---

# Git Philosophy

Write meaningful commits.

Keep commits small.

Keep changes isolated.

Maintain a clean project history.

---

# Quality Checklist

Before completing any task verify:

✓ No TypeScript errors.

✓ No ESLint errors.

✓ Responsive.

✓ Accessible.

✓ Good Lighthouse performance.

✓ Components reusable.

✓ Clean folder structure.

✓ Consistent spacing.

✓ Consistent typography.

✓ Consistent colors.

✓ Consistent animations.

✓ No duplicated logic.

✓ No unnecessary dependencies.

✓ No dead code.

✓ No console errors.

Only consider the task complete after every item passes.

---

# Definition of Done

A feature is finished only when:

It follows the brand identity.

It follows the design system.

It respects the documentation.

It is responsive.

It is accessible.

It performs well.

It uses clean architecture.

It integrates naturally with the rest of the website.

It feels like it has always belonged to the project.

---

# Final Mission

Do not build pages.

Build trust.

Do not create sections.

Create experiences.

Do not impress with effects.

Impress with quality.

Every interaction should reinforce the same idea:

QuickPages is a creative studio that cares deeply about every detail.

The website itself must become the strongest proof of the quality QuickPages can deliver to future clients.

Every decision should move the project closer to that objective.