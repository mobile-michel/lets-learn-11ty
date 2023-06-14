/* .eleventy.js */

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
  
    eleventyConfig.addCollection("page", function(collections) {
      return collections.getFilteredByTag("page").sort(function(a, b) {
        return a.data.order - b.data.order;
      });
    });
    
    eleventyConfig.addShortcode(
      "headers",
      (title, subtitle) =>
        `<h1>${title}</h1>
          <p>${subtitle}</p>`
    );
  
    return {
      dir: {
        input: "src",
        data: "_data",
        includes: "_includes",
        layouts: "_layouts",
      },
    };
  };