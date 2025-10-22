# Sobolev2 Jekyll Theme

A modern, minimalist Jekyll theme featuring light/dark mode support, card-based layouts, collections support, and optimized performance.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-rishiraj.blog-blue)](https://rishiraj.blog)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Jekyll](https://img.shields.io/badge/Jekyll-3.6%2B-red.svg)](https://jekyllrb.com/)

## Features

### 🎨 Design
- **Modern & Minimal**: Clean aesthetic focused on content
- **Light/Dark Mode**: Automatic theme switching based on user preference
- **Card Layouts**: Beautiful card-based designs for content organization
- **Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Typography**: Beautiful typography with Source Sans 3 and Roboto Mono

### ⚡ Performance
- **Fast Loading**: Optimized assets and minimal JavaScript
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Responsive images and modern formats
- **Font Loading**: Optimized font loading with fallbacks

### 🛠 Technical
- **SEO Ready**: Built-in sitemap, feeds, and meta tags
- **Accessibility**: WCAG compliant with semantic HTML
- **Collections**: Built-in support for talks and activities
- **Flexible Layouts**: Multiple layout options for different content types

## Installation

### Option 1: Standalone (Recommended for beginners)

1. **Download the theme**:
   ```bash
   git clone https://github.com/rishiraj/sobolev2-jekyll-theme.git
   cd sobolev2-jekyll-theme/standalone
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Configure your site**:
   - Edit `_config.yml` with your information
   - Replace demo content with your own
   - Customize colors and fonts as needed

4. **Run locally**:
   ```bash
   bundle exec jekyll serve --livereload
   ```

### Option 2: Gem Installation

1. **Add to your Gemfile**:
   ```ruby
   gem "sobolev2-jekyll-theme"
   ```

2. **Update your _config.yml**:
   ```yaml
   theme: sobolev2-jekyll-theme
   ```

3. **Install and run**:
   ```bash
   bundle install
   bundle exec jekyll serve
   ```

## Configuration

### Basic Settings

```yaml
# Site settings
title: "Your Blog Title"
description: "A brief description of your blog"
author: "Your Name"
email: "your.email@example.com"

# Theme settings
theme:
  color_scheme: auto  # 'light', 'dark', or 'auto'
  navigation:
    - title: "Home"
      url: "/"
    - title: "About"
      url: "/about"
```

### Collections

The theme includes support for talks and activities:

```yaml
collections:
  talks:
    output: true
    permalink: /:collection/:name
  activities:
    output: true
    permalink: /:collection/:name
```

### Social Links

```yaml
github_username: yourusername
twitter_username: yourusername
linkedin_username: yourusername
```

## Customization

### Colors and Typography

Edit `_sass/utilities/_theme.scss` to customize:

```scss
:root {
  --primary-color: #007acc;
  --secondary-color: #6c757d;
  --accent-color: #28a745;
  --text-color: #333333;
  --bg-color: #ffffff;
}
```

### Layouts

The theme includes several layouts:

- `default.html` - Base layout with HTML structure
- `page.html` - Standard page layout
- `post.html` - Blog post layout
- `talk.html` - Talk/event layout
- `about.html` - About page layout

### Components

Key components in `_includes/`:

- `head.html` - HTML head with meta tags and stylesheets
- `header.html` - Site header and navigation
- `footer.html` - Site footer
- `icon.html` - SVG icon system

## Content Types

### Blog Posts

Create posts in `_posts/` with front matter:

```yaml
---
layout: post
title: "Your Post Title"
date: 2024-01-15 10:00:00 +0000
description: "A brief description of your post"
categories: [jekyll, theme]
tags: [jekyll, theme, minimalism]
---
```

### Talks

Create talks in `_talks/`:

```yaml
---
layout: talk
title: "Your Talk Title"
date: 2024-01-20
event: "Conference Name"
location: "City, Country"
slides: "https://slides.example.com"
video: "https://youtube.com/watch?v=example"
---
```

### Activities

Create activities in `_activities/`:

```yaml
---
layout: activity
title: "Activity Title"
date: 2024-01-30
type: "Contribution"
description: "Description of the activity"
---
```

## Deployment

### GitHub Pages

1. Push your site to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main` or `gh-pages`)

### Other Platforms

The theme works with any Jekyll-compatible hosting:

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitLab Pages**: Similar to GitHub Pages
- **Traditional Hosting**: Upload the `_site` folder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- **Fonts**: Source Sans 3 and Roboto Mono (Google Fonts)
- **Icons**: Custom SVG icon system
- **Inspiration**: Modern minimalist design principles
- **Performance**: Optimized for Core Web Vitals

## Support

- 📖 [Documentation](INSTALLATION.md)
- 🐛 [Report Issues](https://github.com/rishiraj/sobolev2-jekyll-theme/issues)
- 💬 [Discussions](https://github.com/rishiraj/sobolev2-jekyll-theme/discussions)
- 📧 [Email Support](mailto:r@rishi.im)

---

**Made with ❤️ by [Rishi Raj](https://rishiraj.blog)**

