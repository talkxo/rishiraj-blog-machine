# Rishi Raj's Blog

A modern, minimalist personal blog built with Jekyll. Features a clean design with light/dark theme support, card-based layouts, and optimized for performance.

[See it live!](https://rishiraj.blog)

## Features

- **Modern Design**: Clean, minimalist aesthetic with 2025-inspired design elements
- **Theme System**: Light and dark mode with smooth transitions
- **Card Layouts**: Beautiful card-based designs for content organization
- **Responsive**: Optimized for all device sizes
- **Performance**: Optimized images, fonts, and assets
- **Collections**: Organized content with talks and activities collections
- **SEO Optimized**: Sitemap, feeds, and meta tags included

## Tech Stack

- **Jekyll**: Static site generator
- **SCSS**: Modular CSS with custom properties for theming
- **Liquid**: Templating language
- **SVG Icons**: Custom icon system
- **Google Fonts**: Source Sans 3 and Roboto Mono

## Development

### Prerequisites

- Ruby (3.0+ recommended)
- Bundler

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/rishiraj/rishiraj-blog-machine-2025.git
   cd rishiraj-blog-machine-2025
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Start the development server:
   ```bash
   bundle exec jekyll serve --livereload --port 4000 --host 127.0.0.1
   ```

4. Open [http://127.0.0.1:4000](http://127.0.0.1:4000) in your browser

### Build for Production

```bash
bundle exec jekyll build
```

## Project Structure

```
├── _activities/          # Activities collection
├── _includes/           # Reusable HTML components
├── _layouts/            # Page layout templates
├── _pages/              # Static pages
├── _posts/              # Blog posts
├── _sass/               # SCSS stylesheets
├── assets/              # Images and other assets
└── _config.yml          # Jekyll configuration
```

## Customization

### Adding Content

- **Blog Posts**: Add markdown files to `_posts/` with YAML front matter
- **Pages**: Add markdown files to `_pages/` with appropriate front matter
- **Activities**: Add markdown files to `_activities/` collection
- **Talks**: Add markdown files to `_talks/` collection

### Styling

- **Theme Colors**: Modify CSS variables in `_sass/utilities/_theme.scss`
- **Components**: Edit component styles in `_sass/components/`
- **Layout**: Adjust layout utilities in `_sass/utilities/_layout.scss`

## Deployment

This site is configured for GitHub Pages deployment. Simply push to the `main` branch to deploy automatically.

## License

The source code is licensed under [MIT](LICENSE).
The content is licensed under [CC BY-NC](https://creativecommons.org/licenses/by-nc/4.0/).
