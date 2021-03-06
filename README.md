# ic-vslider

Demo and docs: [https://incuca.github.io/ic-vslider/](https://incuca.github.io/ic-vslider/)

## Installation

### Direct Download / CDN

[https://unpkg.com/ic-vslider](https://unpkg.com/ic-vslider)

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via https://unpkg.com/ic-vslider@TAG
 
Include ic-vslider after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/ic-vslider"></script>
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
