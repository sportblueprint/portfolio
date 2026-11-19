module.exports = function (eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");

  // Custom collection sorted by front matter "order"
  eleventyConfig.addCollection("featuredProjects", function (collectionApi) {
    return collectionApi.getFilteredByTag("projects").sort((a, b) => {
      return (a.data.order || 99) - (b.data.order || 99);
    });
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};