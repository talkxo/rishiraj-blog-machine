# rishiraj.blog

Source for [rishiraj.blog](https://rishiraj.blog) — a personal blog on marketing, tech, and building a services company.

Built with Jekyll, hosted on GitHub Pages.

## What's here

- **Blog** — posts on marketing strategy, SEO, tech opinions, and work culture (2014–present)
- **Stuff I Use** — gear and software recommendations with a categorized card layout
- **About** — profile page with intro section and photo
- **Colophon** — design system documentation (theme tokens, typography)
- **Subscribe** — RSS and WhatsApp group links

## Features

- Light/dark theme toggle with `localStorage` persistence
- Card-based gear/stuff page layout
- Reading progress bar and scroll-triggered fade-in animations
- Text spotlight effect on article paragraphs
- Magnetic nav link hover effect
- "Discuss with AI" buttons on posts (ChatGPT, Claude, Gemini, Perplexity)
- Compressed HTML output via `compress_html` layout
- Structured data (WebSite, BlogPosting, BreadcrumbList)
- RSS feed via `jekyll-feed`
- Sitemap via `jekyll-sitemap`
- Analytics via Umami

## Tech stack

- **Jekyll** (3.9) with Kramdown and GFM
- **SCSS** with CSS custom properties for theming
- **Google Fonts** — Work Sans (300/400/500/700)
- **Umami** for privacy-friendly analytics

## Development

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open [http://127.0.0.1:4000](http://127.0.0.1:4000).

## Project structure

```
_posts/           Blog posts (Markdown + YAML front matter)
_pages/           Static pages (About, Stuff, Colophon, Subscribe)
_includes/        Reusable HTML partials (head, header, footer, favicons)
_layouts/         Page templates (default, page, post, about, content)
_sass/            SCSS modules (base, components, helpers, utilities, vendor)
assets/           Images, fonts, and favicons
css/              Main SCSS entry point
_config.yml       Jekyll configuration
```

## Credits

Forked from [sobolevn.github.io](https://github.com/sobolevn/sobolevn.github.io) by [Nikita Sobolev](https://github.com/sobolevn). The original theme provided the foundation — layout structure, SCSS architecture, and build pipeline. Significantly modified since: custom card layouts, gear/stuff page, dark mode, reading enhancements, AI discussion buttons, structured data, and design system overhaul.

## License

Source code is licensed under [MIT](LICENSE) (original copyright Nikita Sobolev, 2015).
Blog content is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
