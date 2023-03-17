const { DateTime } = require("luxon");
const path = require("path");
const markdown = require('markdown-it')()
const {getImageOpt, processImage, generateImageHtml, getHtmlOpts, getImagePath, imageShortCode} = require('./imageProcesser.js');
const fs = require('fs');

function filterCollection(eleventyConfig, tag){
  eleventyConfig.addCollection(tag, function(collectionApi){    
    let result = collectionApi
      .getAll()  
      .filter(e=>{
        return e.data.tags!== undefined && e.data.tags.includes(tag)
      })
      .sort((a,b)=>{
        return a.data.order-b.data.order
      });
    
    return result;
  })
}

module.exports = function (eleventyConfig) {
  filterCollection(eleventyConfig, "post");
  filterCollection(eleventyConfig, "review");
  
  // Sometimes handy for making sure your browser refreshes the CSS
  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });
  // Apparently this, on top of the PostCSS pruning options watching 11ty, helps 11ty watch Tailwind or something.
  // eleventyConfig.addWatchTarget("./public/css/tailwind.css");
  eleventyConfig.addWatchTarget("./src/css/tailwind.css");
  eleventyConfig.addWatchTarget("./src/css/custom.scss");
  eleventyConfig.addWatchTarget("./src/css/boilerplate.scss");

  //eleventyConfig.addPassthroughCopy('./src/css/admin.css')
  eleventyConfig.addPassthroughCopy('./src/all.js')

  eleventyConfig.addPassthroughCopy('./src/assets')
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  markdown.renderer.rules.image = function (tokens, idx, options, env, self) {
    const token = tokens[idx]
    let imgSrc = token.attrGet('src')
    const imgAlt = token.content
    const imgTitle = token.attrGet('title')
    
    let {commonPath, src, inputFullPath, outputPath} = getImagePath(imgSrc);
    
    const htmlOpts = getHtmlOpts(imgTitle, imgAlt);
    const imgOpts = getImageOpt(commonPath, outputPath);
    const metadata = processImage(src, imgOpts, inputFullPath);
    // console.log('💜💜💜💜💜💜metadata @ marodown renderer:', metadata);
    
    if (metadata === undefined) return '';
    return generateImageHtml(metadata, htmlOpts);
  }

  function encryptShortCode(txt){
    let txtArr = txt.split('');
    
    txt = txtArr.map(s=>
      s.replace(/[a-zA-Z]/g,function(char){return String.fromCharCode(char.charCodeAt(0) + (char.toLowerCase() < 'n' ? 13 : -13));})
    ).map(s=>
      s.replace(/[0-9*]/g, function(num){return parseInt(num) === 9 ? "*" : parseInt(num)+1 }))
    .join('');
      
    return `${txt}`
  }

  eleventyConfig.addShortcode('encryptShortCode', encryptShortCode);
  eleventyConfig.addShortcode('imageShortCode', imageShortCode);  

  eleventyConfig.setLibrary('md', markdown)
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
