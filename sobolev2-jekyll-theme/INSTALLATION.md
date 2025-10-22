# Installation Guide

This guide will help you install and set up the Sobolev2 Jekyll theme for your website.

## Prerequisites

Before installing the theme, ensure you have the following installed:

### Required Software

- **Ruby** (3.0+ recommended)
  - [Download Ruby](https://www.ruby-lang.org/en/downloads/)
  - Verify installation: `ruby --version`

- **Bundler** (Ruby gem manager)
  - Install: `gem install bundler`
  - Verify: `bundle --version`

- **Git** (for version control)
  - [Download Git](https://git-scm.com/downloads)
  - Verify: `git --version`

### Optional but Recommended

- **Jekyll** (can be installed via Bundler)
- **Node.js** (for advanced customization)

## Installation Methods

### Method 1: Standalone Installation (Recommended)

This method gives you full control over the theme files and is perfect for customization.

#### Step 1: Download the Theme

```bash
# Clone the repository
git clone https://github.com/rishiraj/sobolev2-jekyll-theme.git
cd sobolev2-jekyll-theme/standalone

# Or download as ZIP and extract
# Then navigate to the standalone folder
```

#### Step 2: Install Dependencies

```bash
# Install Ruby dependencies
bundle install
```

#### Step 3: Configure Your Site

1. **Edit `_config.yml`**:
   ```yaml
   # Site settings
   title: "Your Blog Title"
   description: "A brief description of your blog"
   author: "Your Name"
   email: "your.email@example.com"
   
   # Site URL (update for your domain)
   url: "https://yourusername.github.io"
   baseurl: "" # or "/repository-name" for project pages
   ```

2. **Replace demo content**:
   - Edit or replace files in `_posts/`
   - Update `_pages/about.md`
   - Add your own talks to `_talks/`
   - Add your own activities to `_activities/`

#### Step 4: Run Locally

```bash
# Start the development server
bundle exec jekyll serve --livereload

# Open http://localhost:4000 in your browser
```

### Method 2: Gem Installation

This method installs the theme as a Ruby gem, making updates easier.

#### Step 1: Create a New Jekyll Site

```bash
# Create new Jekyll site
jekyll new my-blog
cd my-blog
```

#### Step 2: Add Theme to Gemfile

```ruby
# Add to your Gemfile
gem "sobolev2-jekyll-theme"
```

#### Step 3: Update Configuration

```yaml
# In _config.yml
theme: sobolev2-jekyll-theme

# Add theme-specific settings
theme:
  color_scheme: auto
  navigation:
    - title: "Home"
      url: "/"
    - title: "About"
      url: "/about"
```

#### Step 4: Install and Run

```bash
# Install dependencies
bundle install

# Run locally
bundle exec jekyll serve
```

## First-Time Setup Checklist

### ✅ Basic Configuration

- [ ] Update site title and description in `_config.yml`
- [ ] Add your name and email
- [ ] Set correct URL and baseurl
- [ ] Configure social media links (optional)

### ✅ Content Setup

- [ ] Replace demo blog posts with your content
- [ ] Update the About page
- [ ] Add your talks (if applicable)
- [ ] Add your activities (if applicable)
- [ ] Upload your profile image to `assets/images/`

### ✅ Customization

- [ ] Choose your color scheme (light/dark/auto)
- [ ] Customize navigation menu
- [ ] Update favicon and site icons
- [ ] Modify typography if desired

### ✅ Testing

- [ ] Test the site locally
- [ ] Check all pages load correctly
- [ ] Verify responsive design on mobile
- [ ] Test dark/light mode switching
- [ ] Validate HTML and accessibility

## Configuration Options

### Theme Settings

```yaml
theme:
  # Color scheme: 'light', 'dark', or 'auto'
  color_scheme: auto
  
  # Navigation menu
  navigation:
    - title: "Home"
      url: "/"
    - title: "About"
      url: "/about"
    - title: "Talks"
      url: "/talks"
    - title: "Activities"
      url: "/activities"
```

### Collections

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
# Social media profiles
github_username: yourusername
twitter_username: yourusername
linkedin_username: yourusername
```

### Comments (Optional)

```yaml
# Disqus comments
disqus_id: your-disqus-shortname
```

## Troubleshooting

### Common Issues

#### 1. Bundle Install Fails

**Problem**: `bundle install` fails with permission errors

**Solution**:
```bash
# Install gems to user directory
bundle install --path vendor/bundle

# Or use rbenv/rvm for Ruby version management
```

#### 2. Jekyll Serve Fails

**Problem**: `jekyll serve` fails with dependency errors

**Solution**:
```bash
# Update Jekyll and dependencies
bundle update

# Check Ruby version compatibility
ruby --version
```

#### 3. Theme Not Loading

**Problem**: Theme styles not applied

**Solution**:
```bash
# Clear Jekyll cache
bundle exec jekyll clean

# Rebuild site
bundle exec jekyll build
```

#### 4. Live Reload Not Working

**Problem**: Changes not reflected automatically

**Solution**:
```bash
# Use livereload flag
bundle exec jekyll serve --livereload

# Or use force_polling for some systems
bundle exec jekyll serve --livereload --force_polling
```

### Performance Issues

#### Slow Build Times

```bash
# Use incremental builds
bundle exec jekyll serve --incremental

# Exclude unnecessary files
# Add to _config.yml:
exclude: [vendor, node_modules, .git]
```

#### Large Site Size

```bash
# Optimize images
# Use tools like ImageOptim or TinyPNG

# Exclude development files
# Update .gitignore and _config.yml
```

## Deployment

### GitHub Pages

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/repository.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to Pages section
   - Select source branch (usually `main`)
   - Your site will be available at `https://username.github.io/repository`

### Netlify

1. **Connect Repository**:
   - Sign up at [Netlify](https://netlify.com)
   - Connect your GitHub repository
   - Netlify will auto-deploy your site

2. **Build Settings**:
   - Build command: `bundle exec jekyll build`
   - Publish directory: `_site`

### Other Platforms

- **Vercel**: Connect repository, auto-detects Jekyll
- **GitLab Pages**: Similar to GitHub Pages
- **Traditional Hosting**: Upload `_site` folder contents

## Getting Help

### Documentation

- 📖 [Theme Documentation](README.md)
- 🎨 [Customization Guide](CUSTOMIZATION.md)
- 📋 [Credits and Licenses](CREDITS.md)

### Support Channels

- 🐛 [GitHub Issues](https://github.com/rishiraj/sobolev2-jekyll-theme/issues)
- 💬 [GitHub Discussions](https://github.com/rishiraj/sobolev2-jekyll-theme/discussions)
- 📧 [Email Support](mailto:r@rishi.im)

### Community

- Join the [Jekyll Community](https://talk.jekyllrb.com/)
- Follow [@jekyllrb](https://twitter.com/jekyllrb) on Twitter
- Check out [Jekyll Tips](https://jekyllrb.com/docs/) for advanced usage

---

**Need more help?** Don't hesitate to reach out through any of the support channels above!

