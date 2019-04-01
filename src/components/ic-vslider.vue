<template>
  <div class="icv">
    <div class="icv-legend">
      <slot name="legend" :number="totalSlides">
        <div class="icv-legend-number">{{totalSlides}}</div>
        <div class="icv-legend-text">
          Total
        </div>
      </slot>

      <slot />
    </div>
  </div>
</template>

<script>
import IcVsliderSlide from './ic-vslider-slide';
import bus from '../bus';

function byComponent(Component) {
  return vnode => (vnode.componentOptions
    && vnode.componentOptions.Ctor
    && vnode.componentOptions.Ctor.extendOptions === Component
  );
}

function getSliderStarter() {
  let sliders = 0;
  return (slide) => {
    const number = String(sliders + 1).padStart(2, '0');
    sliders += 1;
    return {
      ...slide,
      props: { number },
    };
  };
}

export default {
  name: 'IcVslider',
  data: () => ({
    slides: []
  }),
  computed: {
    totalSlides() {
      return this.slides.length
    }
  },
  created() {
    this.slides = this.$slots
      .default
      .filter(byComponent(IcVsliderSlide));
    // bus.$on('icvs-mounted', (vnode) => {
    //   // this.slides.push(icvs);
    // });
  }
};
</script>

<style lang="stylus" scoped>

</style>
