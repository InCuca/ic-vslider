---
sidebar: auto
---

# Introduction

`IcVslider` plugin is plugin for [Vue.js](http://vuejs.org).

<ClientOnly><Demo /></ClientOnly>

## Installation

### Direct Download / CDN

[https://unpkg.com/ic-vslider/dist/ic-vslider](https://unpkg.com/ic-vslider/dist/ic-vslider)

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/ic-vslider@{{ $version }}/dist/ic-vslider.js
 
Include ic-vslider after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/ic-vslider/dist/ic-vslider.js"></script>
```

### NPM

```sh
$ npm install ic-vslider
```

### Yarn

```sh
$ yarn add ic-vslider
```

When used with a module system, you must explicitly install the `ic-vslider` via `Vue.use()`:

```javascript
import Vue from 'vue'
import IcVslider from 'ic-vslider'

Vue.use(IcVslider)
```

You don't need to do this when using global script tags.

### Dev Build

You will have to clone directly from GitHub and build `ic-vslider` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//ic-vslider.git node_modules/ic-vslider
$ cd node_modules/ic-vslider
$ npm install
$ npm run build
```

## Getting Started

> We will be using [ES2015](https://github.com/lukehoban/es6features) in the code samples in the guide.


### HTML

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/ic-vslider/dist/ic-vslider.js"></script>

<div id="#app">
  <!-- NOTE: here the outputs -->
</div>
```

### JavaScript

```javascript
// If using a module system (e.g. via Vue CLI), import Vue and ic-vslider and then call Vue.use(ic-vslider).
// import Vue from 'vue'
// import ic-vslider from 'ic-vslider'
// 
// Vue.use(ic-vslider)

// NOTE: here the example

// Now the app has started!
new Vue({ }).$mount('#app')
```

Output the following:

```html
<div id="#app">
  <!-- NOTE: here the outputs -->
</div>
```

