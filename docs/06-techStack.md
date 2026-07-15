# QuickPages AI Documentation

# 06-techStack.md

## Purpose

This document defines the technical architecture, development standards and engineering practices for the QuickPages website.

Technology should never be the focus of the user experience.

Its purpose is to support speed, reliability, scalability and maintainability.

Every technical decision should contribute to a better product.

---

# Core Stack

Framework

Next.js 15 (App Router)

Language

TypeScript

Styling

Tailwind CSS

Animations

Framer Motion

GSAP (only when necessary)

Smooth Scrolling

Lenis

Icons

Lucide React

Fonts

next/font

Images

next/image

Deployment

Vercel

Package Manager

pnpm

Linting

ESLint

Formatting

Prettier

Version Control

Git

GitHub

---

# Development Principles

Write code that is:

Readable.

Maintainable.

Reusable.

Scalable.

Predictable.

Avoid shortcuts.

Avoid duplicated logic.

Avoid unnecessary abstractions.

---

# Project Structure

The project should follow this structure:

app/

components/

sections/

layout/

navigation/

buttons/

cards/

forms/

animations/

hooks/

lib/

utils/

constants/

types/

styles/

public/

docs/

Every folder must have a single responsibility.

---

# Components

Components should remain small.

Each component should solve one problem.

Prefer composition over inheritance.

Avoid components larger than 250 lines whenever possible.

Separate logic from presentation.

---

# Naming Convention

Components

PascalCase

Example

ProjectCard.tsx

Functions

camelCase

Variables

camelCase

Constants

UPPER_SNAKE_CASE

Folders

kebab-case

Files

PascalCase for components.

camelCase for utilities.

---

# State Management

Prefer local state.

Use Context only when necessary.

Avoid unnecessary global state.

Server Components should be used whenever possible.

Client Components only when interaction requires them.

---

# React Principles

Prefer functional components.

Avoid class components.

Use hooks responsibly.

Keep components pure.

Avoid prop drilling.

Prefer composition.

---

# Next.js Principles

Use App Router.

Prefer Server Components.

Use Client Components only for:

Animations.

Forms.

Interactive UI.

Navigation behavior.

Optimize rendering whenever possible.

---

# Image Optimization

Always use next/image.

Provide meaningful alt text.

Lazy load images.

Optimize dimensions.

Avoid oversized assets.

Use modern formats when possible.

---

# Font Optimization

Use next/font.

Load only required weights.

Avoid unnecessary font families.

Fonts should never block rendering.

---

# Styling Rules

Tailwind CSS should be the primary styling solution.

Avoid inline styles.

Avoid arbitrary values whenever possible.

Create reusable utility patterns.

Maintain consistency.

---

# Responsive Development

Desktop First.

Adapt carefully for Tablet.

Optimize intentionally for Mobile.

Never hide broken layouts behind media queries.

Design every breakpoint intentionally.

---

# Performance Goals

Lighthouse Performance

95+

Accessibility

95+

SEO

95+

Best Practices

95+

Avoid unnecessary JavaScript.

Avoid layout shifts.

Optimize Largest Contentful Paint.

Reduce unused CSS.

Reduce bundle size.

---

# SEO Requirements

Every page must include:

Title

Meta Description

Canonical URL

Open Graph

Twitter Card

Structured Data when appropriate

robots.txt

sitemap.xml

Semantic HTML

Meaningful heading hierarchy

Readable URLs

---

# Accessibility

Keyboard navigation required.

Visible focus states.

Semantic HTML.

ARIA labels where necessary.

Proper contrast ratios.

Accessible forms.

Accessible navigation.

Meaningful button labels.

Accessible images.

Respect prefers-reduced-motion.

Accessibility is never optional.

---

# Forms

Validate inputs.

Provide clear feedback.

Prevent duplicate submissions.

Display loading state.

Display success state.

Display friendly error messages.

Never reload the page unnecessarily.

---

# Error Handling

Never expose technical errors to users.

Display clear messages.

Log unexpected errors.

Fail gracefully.

Always provide a recovery path.

---

# Code Quality

Avoid duplicated code.

Prefer reusable utilities.

Keep functions focused.

Avoid deeply nested logic.

Write self-explanatory code.

Use descriptive names.

---

# File Organization

Each feature should remain isolated.

Related files should live together.

Avoid dumping everything inside components.

Maintain a predictable structure.

---

# Utilities

Utility functions belong inside:

lib/

or

utils/

Never duplicate helper functions.

---

# Constants

Static values should live inside:

constants/

Avoid hardcoded values throughout the application.

---

# TypeScript

Avoid using any.

Prefer explicit types.

Create reusable interfaces.

Use strict mode.

Type every prop.

Type every API response.

---

# Animations

Animations should remain isolated.

Avoid embedding complex animation logic inside page components.

Create reusable animation wrappers whenever possible.

---

# Deployment

Deploy using Vercel.

Production branch:

main

Preview deployments should remain enabled.

Verify every deployment before merging.

---

# Git Workflow

Meaningful commit messages.

Small commits.

Atomic changes.

Example:

feat: add services section

fix: improve navbar responsiveness

refactor: simplify project cards

Avoid commits like:

update

changes

fix

---

# Dependencies

Only install packages that provide clear value.

Avoid unnecessary libraries.

Prefer native browser APIs whenever possible.

Reduce dependency count.

---

# Security

Never expose secrets.

Use environment variables.

Validate user input.

Escape dynamic content.

Avoid unsafe HTML rendering.

---

# Browser Support

Support all modern browsers.

Chrome

Edge

Firefox

Safari

Gracefully degrade unsupported features.

---

# Testing

Manually verify:

Desktop

Tablet

Mobile

Navigation

Forms

Animations

Responsive behavior

Accessibility

Performance

Every release should be tested before deployment.

---

# Documentation

Every reusable component should be understandable without additional explanation.

Keep documentation updated.

Maintain consistency between implementation and documentation.

---

# Final Engineering Philosophy

Technology is not the product.

The experience is the product.

Every line of code should contribute to:

Performance.

Maintainability.

Accessibility.

Scalability.

Reliability.

The visitor should never think about the technology.

They should simply experience a website that feels effortless, polished and professionally crafted.