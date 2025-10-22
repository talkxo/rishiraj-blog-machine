# Customization Guide

This guide covers how to customize the Sobolev2 Jekyll theme to match your brand and preferences.

## Table of Contents

- [Color Customization](#color-customization)
- [Typography](#typography)
- [Layout Modifications](#layout-modifications)
- [Navigation](#navigation)
- [Components](#components)
- [Advanced Customization](#advanced-customization)

## Color Customization

### Theme Colors

The theme uses CSS custom properties for easy color customization. Edit `_sass/utilities/_theme.scss`:

```scss
:root {
  // Primary colors
  --primary-color: #007acc;
  --primary-hover: #005a99;
  --primary-light: #4a9eff;
  
  // Secondary colors
  --secondary-color: #6c757d;
  --secondary-hover: #545b62;
  --secondary-light: #adb5bd;
  
  // Accent colors
  --accent-color: #28a745;
  --accent-hover: #1e7e34;
  --accent-light: #6fcf97;
  
  // Text colors
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;
  
  // Background colors
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;
  
  // Border colors
  --border-color: #dee2e6;
  --border-light: #f1f3f4;
  
  // Link colors
  --link-color: var(--primary-color);
  --link-hover: var(--primary-hover);
  --link-visited: #6f42c1;
}

// Dark mode colors
[data-theme="dark"] {
  --text-primary: #e0e0e0;
  --text-secondary: #b0b0b0;
  --text-muted: #808080;
  
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --bg-tertiary: #404040;
  
  --border-color: #404040;
  --border-light: #2d2d2d;
}
```

### Color Schemes

#### Light Mode
```scss
:root {
  --primary-color: #007acc;
  --bg-primary: #ffffff;
  --text-primary: #333333;
}
```

#### Dark Mode
```scss
[data-theme="dark"] {
  --primary-color: #4a9eff;
  --bg-primary: #1a1a1a;
  --text-primary: #e0e0e0;
}
```

#### Custom Brand Colors
```scss
:root {
  --primary-color: #your-brand-color;
  --accent-color: #your-accent-color;
}
```

## Typography

### Font Customization

Edit `_sass/utilities/_theme.scss` to change fonts:

```scss
:root {
  // Font families
  --font-primary: "Source Sans 3", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "Roboto Mono", "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
  
  // Font sizes
  --font-size-xs: 0.75rem;    // 12px
  --font-size-sm: 0.875rem;   // 14px
  --font-size-base: 1rem;     // 16px
  --font-size-lg: 1.125rem;   // 18px
  --font-size-xl: 1.25rem;    // 20px
  --font-size-2xl: 1.5rem;    // 24px
  --font-size-3xl: 1.875rem;  // 30px
  --font-size-4xl: 2.25rem;   // 36px
  
  // Font weights
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  // Line heights
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}
```

### Custom Fonts

To use custom fonts:

1. **Add font files** to `assets/fonts/`
2. **Update CSS** in `_sass/utilities/_theme.scss`:

```scss
@font-face {
  font-family: "Your Custom Font";
  src: url("../assets/fonts/your-font.woff2") format("woff2"),
       url("../assets/fonts/your-font.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

:root {
  --font-primary: "Your Custom Font", sans-serif;
}
```

## Layout Modifications

### Container Widths

Adjust maximum container widths in `_sass/utilities/_layout.scss`:

```scss
.u-container {
  max-width: 1200px; // Default: 1200px
  margin: 0 auto;
  padding: 0 1rem;
}

// Responsive breakpoints
@media (max-width: 768px) {
  .u-container {
    padding: 0 0.5rem;
  }
}
```

### Grid System

Customize the grid system:

```scss
// Grid columns
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

// Card grid
.cards-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}
```

## Navigation

### Navigation Menu

Customize navigation in `_config.yml`:

```yaml
theme:
  navigation:
    - title: "Home"
      url: "/"
    - title: "About"
      url: "/about"
    - title: "Blog"
      url: "/"
    - title: "Talks"
      url: "/talks"
    - title: "Activities"
      url: "/activities"
    - title: "Contact"
      url: "/contact"
```

### Navigation Styling

Edit `_sass/components/_header.scss`:

```scss
.navigation {
  // Navigation container
  &__list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  &__item {
    margin-right: 2rem;
  }
  
  &__link {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: var(--font-weight-medium);
    transition: color 0.2s ease;
    
    &:hover {
      color: var(--primary-color);
    }
  }
}
```

## Components

### Cards

Customize card components in `_sass/components/_cards.scss`:

```scss
.c-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  &__title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    margin-bottom: 0.5rem;
  }
  
  &__content {
    color: var(--text-secondary);
    line-height: var(--line-height-relaxed);
  }
}
```

### Buttons

Create custom button styles:

```scss
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &--primary {
    background: var(--primary-color);
    color: white;
    
    &:hover {
      background: var(--primary-hover);
    }
  }
  
  &--secondary {
    background: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    
    &:hover {
      background: var(--primary-color);
      color: white;
    }
  }
}
```

## Advanced Customization

### Custom Layouts

Create new layouts in `_layouts/`:

```html
<!-- _layouts/custom.html -->
<!DOCTYPE html>
<html lang="en">
  {% include head.html %}
  <body>
    <header class="custom-header">
      <!-- Custom header content -->
    </header>
    
    <main class="custom-main">
      {{ content }}
    </main>
    
    <footer class="custom-footer">
      <!-- Custom footer content -->
    </footer>
  </body>
</html>
```

### Custom Includes

Create reusable components in `_includes/`:

```html
<!-- _includes/custom-component.html -->
<div class="custom-component">
  <h3>{{ include.title }}</h3>
  <p>{{ include.description }}</p>
  {% if include.link %}
    <a href="{{ include.link }}" class="btn btn--primary">Learn More</a>
  {% endif %}
</div>
```

### SCSS Architecture

The theme follows a modular SCSS structure:

```
_sass/
├── base/
│   └── _reset.scss          # CSS reset
├── components/
│   ├── _cards.scss          # Card components
│   ├── _header.scss         # Header and navigation
│   └── _footer.scss         # Footer
├── helpers/
│   ├── _mixins.scss         # SCSS mixins
│   └── _variables.scss      # SCSS variables
└── utilities/
    ├── _layout.scss         # Layout utilities
    ├── _theme.scss          # Theme variables
    └── _separator.scss      # Separators and dividers
```

### Adding New Components

1. **Create component file** in `_sass/components/`
2. **Import in main.scss**:

```scss
// css/main.scss
@import 'components/your-component';
```

3. **Use in HTML**:

```html
<div class="your-component">
  <!-- Component content -->
</div>
```

### JavaScript Customization

Add custom JavaScript in `_includes/head.html`:

```html
<script>
  // Custom theme functionality
  document.addEventListener('DOMContentLoaded', function() {
    // Your custom JavaScript here
  });
</script>
```

## Performance Optimization

### Critical CSS

Inline critical CSS in `_includes/head.html`:

```html
<style>
  /* Critical above-the-fold styles */
  body { font-family: var(--font-primary); }
  .u-container { max-width: 1200px; margin: 0 auto; }
</style>
```

### Image Optimization

Optimize images for performance:

```scss
img {
  max-width: 100%;
  height: auto;
  loading: lazy; // Native lazy loading
}
```

### Font Loading

Optimize font loading:

```html
<link rel="preload" href="/assets/fonts/your-font.woff2" as="font" type="font/woff2" crossorigin>
```

## Testing Customizations

### Local Testing

```bash
# Start development server
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build

# Check for errors
bundle exec jekyll doctor
```

### Browser Testing

- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Test responsive design on different screen sizes
- Validate HTML and CSS
- Check accessibility with screen readers

## Best Practices

### CSS Organization
- Use semantic class names
- Follow BEM methodology for complex components
- Keep specificity low
- Use CSS custom properties for consistency

### Performance
- Minimize custom CSS
- Use efficient selectors
- Optimize images and fonts
- Test on slow connections

### Accessibility
- Maintain color contrast ratios
- Use semantic HTML elements
- Provide alternative text for images
- Ensure keyboard navigation works

### Maintenance
- Document custom changes
- Use version control
- Test updates before deploying
- Keep dependencies updated

## Troubleshooting

### Common Issues

#### Styles Not Loading
```bash
# Clear Jekyll cache
bundle exec jekyll clean
bundle exec jekyll build
```

#### SCSS Compilation Errors
- Check syntax in SCSS files
- Verify import paths
- Ensure proper nesting

#### Layout Issues
- Check CSS specificity
- Verify HTML structure
- Test responsive breakpoints

### Getting Help

- 📖 Check the [Installation Guide](INSTALLATION.md)
- 🐛 [Report Issues](https://github.com/rishiraj/sobolev2-jekyll-theme/issues)
- 💬 [GitHub Discussions](https://github.com/rishiraj/sobolev2-jekyll-theme/discussions)

---

**Happy customizing!** 🎨

