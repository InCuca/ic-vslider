module.exports = {
  plugins: [
    require('./plugin.js')
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'IcVslider',
      description: 'IcVslider for Vue.js'
    }
  },
  themeConfig: {
    repo: 'InCuca/ic-vslider',
    docsDir: 'docs',
    nav: [{
      text: 'Release Notes',
      link: 'https://github.com//ic-vslider/releases'
    }],
  }
}
