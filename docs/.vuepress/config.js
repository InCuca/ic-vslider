const { sidebarTree } = require('../code/config');

module.exports = {
  base: '/ic-vslider/',
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
    editLinks: true,
    sidebarDepth: 4,
    docsDir: 'code',
    locales: {
      '/': {
        nav: [{
          text: 'Release Notes',
          link: 'https://github.com//ic-vslider/releases'
        }],
        sidebar: Object.assign({}, sidebarTree())
      }
    }
  }
}
