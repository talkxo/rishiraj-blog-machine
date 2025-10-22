# frozen_string_literal: true

require "jekyll"

module Sobolev2JekyllTheme
  class Theme < Jekyll::Theme
    def initialize(options = {})
      super(options)
      @name = "sobolev2-jekyll-theme"
    end
  end
end

