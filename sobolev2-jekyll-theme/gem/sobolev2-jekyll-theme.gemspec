# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "sobolev2-jekyll-theme"
  spec.version       = "1.0.0"
  spec.authors       = ["Rishi Raj"]
  spec.email         = ["r@rishi.im"]

  spec.summary       = "A modern, minimalist Jekyll theme with light/dark mode support"
  spec.description   = "Sobolev2 is a clean, modern Jekyll theme featuring light/dark mode, card-based layouts, collections support, and optimized performance."
  spec.homepage      = "https://github.com/rishiraj/sobolev2-jekyll-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_layouts|_includes|_sass|css|LICENSE|README|INSTALLATION|CREDITS|CUSTOMIZATION)!i)
  end

  spec.required_ruby_version = ">= 2.4.0"

  spec.add_runtime_dependency "jekyll", ">= 3.6", "< 5.0"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.2"
  spec.add_runtime_dependency "jemoji", "~> 0.10"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.11"
  spec.add_runtime_dependency "kramdown-parser-gfm", "~> 1.0"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 12.0"
end

