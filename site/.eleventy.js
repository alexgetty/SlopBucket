module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // ====== COLLECTIONS ======

  // All articles sorted by date (newest first)
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/articles/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Section collections
  const sections = ['news', 'business', 'opinion', 'life-culture', 'tech'];
  sections.forEach(section => {
    eleventyConfig.addCollection(section, function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/content/articles/**/*.md")
        .filter(item => item.data.section === section)
        .sort((a, b) => b.date - a.date);
    });
  });

  // All unique tags collection (for tag pages)
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    const tagSet = new Set();
    collectionApi.getFilteredByGlob("src/content/articles/**/*.md").forEach(item => {
      if (item.data.tags) {
        item.data.tags.forEach(tag => tagSet.add(tag));
      }
    });
    return [...tagSet].sort();
  });

  // ====== FILTERS ======

  // Date formatting filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Excerpt filter - first paragraph
  eleventyConfig.addFilter("excerpt", (content) => {
    if (!content) return '';
    const match = content.match(/<p>(.*?)<\/p>/);
    return match ? match[1] : content.substring(0, 200) + '...';
  });

  // Group articles by year
  eleventyConfig.addFilter("groupByYear", (articles) => {
    const grouped = {};
    articles.forEach(article => {
      const year = new Date(article.date).getFullYear();
      if (!grouped[year]) grouped[year] = [];
      grouped[year].push(article);
    });
    // Return as array of [year, articles] sorted descending
    return Object.entries(grouped).sort((a, b) => b[0] - a[0]);
  });

  // Group tags by category (format:, archetype:, fallacy:)
  eleventyConfig.addFilter("groupTagsByCategory", (tags) => {
    const categories = {
      format: { name: 'Format', description: 'How it\'s structured', tags: [] },
      archetype: { name: 'Archetype', description: 'What rhetorical trick', tags: [] },
      fallacy: { name: 'Fallacy', description: 'What logical error', tags: [] }
    };

    tags.forEach(tag => {
      const [category, value] = tag.split(':');
      if (categories[category]) {
        categories[category].tags.push({ full: tag, name: value });
      }
    });

    return Object.entries(categories).map(([key, data]) => ({
      key,
      ...data
    }));
  });

  // Get display name from tag (strip prefix)
  eleventyConfig.addFilter("tagDisplayName", (tag) => {
    const parts = tag.split(':');
    return parts.length > 1 ? parts[1].replace(/-/g, ' ') : tag;
  });

  // Get articles with a specific tag
  eleventyConfig.addFilter("filterByTag", (articles, tag) => {
    return articles.filter(article =>
      article.data.tags && article.data.tags.includes(tag)
    );
  });

  // Slugify a tag for URLs
  eleventyConfig.addFilter("tagSlug", (tag) => {
    return tag.replace(':', '-').replace(/\s+/g, '-').toLowerCase();
  });

  // Shuffle array (Fisher-Yates) - for ticker headlines
  eleventyConfig.addFilter("shuffle", (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      layouts: "_includes/layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
