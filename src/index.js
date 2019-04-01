import IcVsliderSlide from './components/ic-vslider-slide';
import IcVslider from './components/ic-vslider';


const version = '__VERSION__';

const install = (Vue) => {
  /*
   * NOTE:
   *   if you need to extend Vue contstructor, you can extend it in here.
   */

  Vue.component(IcVsliderSlide.name, IcVsliderSlide);
  Vue.component(IcVslider.name, IcVslider);

  /*
   * NOTE:
   *  somthing implementation here ...
   */
};

const plugin = {
  install,
  version,
};

export default plugin;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}
