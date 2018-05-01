// Image Compression Plugins
const imagemin = require('gulp-imagemin');

// PostCSS Plugins
const cssnano = require('cssnano');
const scss = require('postcss-scss');
const autoprefixer = require('autoprefixer');

const VERBOSE = process.env.VERBOSE ? (process.env.VERBOSE.toLowerCase() === 'true') : false;

module.exports = {
  assets: {
    styles: './source/styles/**/*.{css,scss,sass}',
    html: './source/**/*.{htm,html,php}',
    scripts: './source/**/*.js',

    fonts: [
      './source/fonts/**/*.{ttf,otf,woff,woff2}',
    ],
    images: './source/images/**/*.{jpg,jpeg,gif,png,svg,tiff,ico}',
    videos: './source/video/**/*.{mp4,ogv,mpg,webm}',
    favicons: './source/favicons/**',
  },

  // gulp-sourcemaps
  sourcemaps: {
    // sourcemaps.init() options
    init: {
      loadMaps: true,
    },
    // sourcemaps.write() options
    write: './sourcemaps/',
  },

  // browser-sync
  browsersync: {
    reloadDebounce: 3000,
    reloadDelay: 4000,
    logConnections: true,
    open: false,
    notify: false,
    server: { baseDir: './public/' },
  },

  // gulp-postcss
  postcss: [
    cssnano({ autoprefixer: false }),
    autoprefixer(),
  ],

  // gulp-uglify
  uglify: {
    mangle: true,
    preserveComments: 'license',
  },

  // gulp-imagemin
  imagemin: {
    options: {
      verbose: VERBOSE,
    },
    jpeg: [
      imagemin.jpegtran(),
    ],
    gif: [
      imagemin.gifsicle({ progressive: true }),
    ],
    png: [
      imagemin.optipng({ optimizationLevel: 5 }),
    ],
    svg: [
      imagemin.svgo(),
    ],
  },

  // gulp-purifycss
  purifycss: [
    // Globs
    [
      './public/*.js',
      './public/*.{html,htm,php}',
    ],
    // Options https://github.com/purifycss/purifycss#the-optional-options-argument
    {
      info: VERBOSE,
      rejected: VERBOSE,
      minify: true,
      whitelist: [
        '*slick*',
      ],
    },
  ],

  // gulp-rev
  revision: {
    globs: [
      './public/**/*.css',
      './public/**/*.js',
      './public/**/*.{png,jpg,jpeg,svg,gif}',
      './public/**/*.{ttf,woff,woff2,otf}',
      './public/**/*.{mp4,avi,webm,mkv,ogv}',
      '!./public/favicons/**',
      '!./public/images/open-graph/**',
    ],
    rev: {},
    revCSS: {},
    revDelete: {},
  },

  // gulp-babel
  babel: {},

  // gulp-nunjucks
  nunjucks: {},

  // gulp-sass
  sass: {
    outputStyle: 'compressed',
  },

  // gulp-htmlmin
  htmlmin: {
    // https://github.com/kangax/html-minifier#options-quick-reference
    caseSensitive: false,
    collapseBooleanAttributes: false,
    collapseInlineTagWhitespace: false,
    collapseWhitespace: true,
    conservativeCollapse: false,
    // customAttrAssign: [],
    // customAttrCollapse: null,
    // customAttrSurround: [],
    // customEventAttributes: [],
    decodeEntities: false,
    html5: true,
    // ignoreCustomComments: [],
    // ignoreCustomFragments: [],
    includeAutoGeneratedTags: true,
    keepClosingSlash: false,
    // maxLineLength: 80,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: false,
    preserveLineBreaks: false,
    preventAttributesEscaping: false,
    processConditionalComments: false,
    // processScripts: [],
    quoteCharacter: '""',
    removeAttributeQuotes: false,
    removeComments: false,
    removeEmptyAttributes: false,
    removeEmptyElements: false,
    removeOptionalTags: false,
    removeRedundantAttributes: false,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeTagWhitespace: false,
    sortAttributes: true,
    sortClassName: true,
    trimCustomFragments: false,
    useShortDoctype: false,
  },

  // critical
  critical: {
    base: 'public/',
    inline: true,
    minify: true,
    css: ['./public/main.css'],
    inlineImages: true,
    maxImageFileSize: 10240,
    assetPaths: ['./public/images'],
    dimensions: [
      { width: 1280, height: 1024 },
    ],
  },
};
