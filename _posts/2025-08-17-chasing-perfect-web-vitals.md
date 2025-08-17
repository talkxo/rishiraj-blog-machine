---
layout: post
title: 'Chasing Perfect Web Vitals'
date: 2025-08-17
categories: [web-development, performance, seo]
tags: [web-vitals, performance, jekyll, github-pages, optimization]
description: 'I spent the last few days trying to get perfect Web Vitals scores for this blog. Not because I believe in Google metrics—their own Pixel 9a page fails their test, remember? But I was curious: what would it actually take to hit those elusive 100s across the board?'
writing_time:
  writing: "45:00"
  proofreading: "10:00"
  decorating: "5:00"
---

I spent the last few days trying to get perfect Web Vitals scores for this blog. Not because I believe in Google's metrics—their own Pixel 9a page fails their test, remember? But I was curious: what would it actually take to hit those elusive 100s across the board?

This blog seemed perfect for the experiment. Simple Jekyll setup on GitHub Pages, minimal dependencies, clean codebase. How hard could it be?

Turns out, very hard. After all the optimization and one complete weekend, my scores rose—from 79 mobile and 77 desktop, to 98 on mobile and 100 on desktop. Better, but still shy of the perfection I was chasing.

## Endless Loop of LCP and CLS

I started with what seemed like obvious wins. The commit history tells the story: "Fix Layout Shift & Improve Score," followed by "Performance Optimization," then "Fix Critical Issues," and eventually "Achieve 100/100/100/100" (spoiler: this was premature celebration).

The real nightmare was the loop between Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS). Fix one, break the other. Optimize font loading to improve LCP, but now fonts cause layout shifts. Presize elements to prevent CLS, but now initial paint is slower. Much credit to Claude Code for being a handy assistant and helping me understand what broke and where.

I've been thinking about this optimization process, and it revealed something fundamental: Web Vitals aren't really independent metrics. They're interconnected in ways that create optimization conflicts. Every performance improvement has trade-offs that PageSpeed Insights doesn't tell you about.

## Let's Load A Font

The biggest headache came from font optimization. I went through multiple approaches:

- Google Fonts (external request hurts LCP)
- Self-hosted fonts with preload (better LCP, but layout shifts)
- Variable fonts (smaller files, complex implementation)
- Font-display strategies (swap vs optional vs fallback)

Each change required testing across different devices and network conditions. What worked for desktop broke mobile. What improved lab scores sometimes hurt real-world performance.

The final solution involved local font loading with Source Sans 3 variable fonts, careful preloading, and CSS that prevents layout shifts. It took four separate commits to get right.

## "Use efficient cache lifetimes"

Here's where things got really frustrating. Unsolved, too. After fixing all the obvious issues, I was left with one persistent problem: static asset caching. PageSpeed Insights wanted font files cached for a year. GitHub Pages caches them for 10 minutes.

This single issue is probably costing me 10-15 points on both mobile and desktop scores. I tried every workaround I could find:

- _headers files (work on Netlify/Vercel, ignored by GitHub Pages)
- Cache-control meta tags (don't affect static assets)
- CDN proxying (defeats the simplicity purpose)

GitHub Pages processes caching differently than other static hosts. Their TTL is hardcoded at 10 minutes for most assets. You can't override it without moving platforms or adding complexity that defeats the point of a simple Jekyll blog.

## Concluding The Experiement

After all this optimization, I learned something important: perfect Web Vitals scores are often incompatible with practical web development. The thresholds are arbitrary—75th percentile metrics that don't reflect real user experience.

My current scores of 98 mobile and 100 desktop? Really good for a content site. But here's the thing about PageSpeed Insights—it's testing on some simulated mid-tier device in perfect lab conditions. Your actual visitors are using everything from flagship phones to budget Androids on spotty wifi. I've seen sites that nail the PageSpeed test but feel sluggish in the real world, and others that score poorly but are fast, really fast on actual devices.

But here's what really got me: sites obsessing over Core Web Vitals end up breaking other things that actually matter to users. You optimize so aggressively that your code becomes a mess, you lose features people care about, or you get locked into some specific platform just to hit those magic numbers.

Look, **performance optimization matters.** I'm not saying it doesn't. But chasing perfect Web Vitals scores? That's just teaching to the test.

What you should really care about: does your content actually load quickly when people visit on their phones? Can they click around without things jumping all over the place? Are you giving them a visual experience that your content deserves to be. The complete intended glory.

This blog loads fast, looks clean, and serves its purpose. The Web Vitals scores are (now) good enough. Perfect scores would require architectural changes that add complexity without improving the actual user experience. So, far later.

Sometimes good enough really is good enough. Even when Google's own pages can't pass their own tests.
