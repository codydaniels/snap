const path = require("path");
const Image = require("@11ty/eleventy-img");

function getImageOpt(inputPath, outputPath, widths=undefined, formats=undefined) {
    return {
        widths: widths ? widths : [320, 560, 800, 1040],
        formats: formats ? formats : ["webp", null], //multiple types like "webp", null will generate <picture>tag in html
        urlPath: inputPath, ///assets/images/uploads
        outputDir: outputPath, //public/assets/images/uploads
        filenameFormat: function (id, src, width, format, options) {
            const extension = path.extname(src);
            const name = path.basename(src, extension);

            return `${name}-${width}.${format}`;
        }
    }
}

function processImage(imgSrc, imgOpts, inputFullPath) {
    try {
        Image(imgSrc, imgOpts)
    } catch (error) {
        // console.log('🚨 error...@Image:', error);
    }

    let metadata;
    try {
        metadata = Image.statsSync(inputFullPath, imgOpts)
    } catch (error) {
        // console.log('🚨🚨 error...@Image.statsSync:', error);
        console.log('🚨🚨 imgProcesser returning undefined...');
        return undefined;
    }
    // console.log('🐛🐛🐛🐛🐛🐛🐛🐛 af metadata- METADATA:', metadata);
    return metadata;
}

function generateImageHtml(metadata, htmlOpts, sizes=undefined) {
    const generated = Image.generateHTML(metadata, {
        sizes: sizes ? sizes : '(max-width: 768px) 100vw, 768px',
        ...htmlOpts
    })
    // console.log('🤡🤡🤡🤡🤡:', generated);
    return generated;
}

function getHtmlOpts(imgTitle=undefined, imgAlt, className=undefined, loading='lazy') {
    let data = {
        alt: imgAlt,
        decoding: 'async',
        loading
    }
    if (imgTitle!==undefined){
        data.title=imgTitle;
    }
    if (className!==undefined){
        data.class=className;
    }
    if (['lazy', 'auto', 'eager'].indexOf(loading) === -1){
        data.loading == 'lazy'
    }
    
    return data;
}

function getImagePath(imgSrc) {
    let commonPath = path.dirname(imgSrc);
    imgSrc = path.join("./src", imgSrc)
    let inputFullPath = path.join(path.join("./src", commonPath), path.parse(imgSrc).base);
    let outputPath = path.join("./public", commonPath)

    return { commonPath, src: imgSrc, inputFullPath, outputPath }
}

const imageShortCode = function (opts) {
    let {imgSrc, alt, className, imgTitle, pictureTagClassName, widths, formats, sizes, loading} = opts;
    if(imgSrc === undefined){
        console.log("🚨🚨🚨 imageShortCode err - imgSrc is undefined! producing empty html line instead...")
        return ''
    }
    widths ? widths : [320, 560, 800, 1040];
    formats ? formats : ["webp", null];
    sizes ? sizes : '100vw';
    
    let { commonPath, src, inputFullPath, outputPath } = getImagePath(imgSrc);
    
    let htmlOpts = getHtmlOpts(imgTitle, alt, className, loading);
    const imgOpts = getImageOpt(commonPath, outputPath, widths, formats);
    const metadata = processImage(src, imgOpts, inputFullPath);
    // console.log('💜💜💜💜💜💜metadata @ imageShortCode:', metadata);
    
    if (metadata === undefined) return '';
    let generated = generateImageHtml(metadata, htmlOpts, sizes);

    if(pictureTagClassName !== undefined){
        generated = generated.replace('<picture>', `<picture class="${pictureTagClassName}">`);
    }

    return generated
};

module.exports = {
    getImageOpt,
    processImage,
    generateImageHtml,
    getHtmlOpts,
    getImagePath,
    imageShortCode
}
