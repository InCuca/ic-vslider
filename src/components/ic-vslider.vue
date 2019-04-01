<template>
  <div class="icv">
    <div class="icv-legend">
      <slot name="legend" :number="totalSlides">
        <div class="icv-legend-number">{{totalSlides}}</div>
        <div class="icv-legend-text">
          Total
        </div>
      </slot>


    </div>
  </div>
</template>

<script>
import IcVsliderSlide from './ic-vslider-slide';

function byComponent(Component) {
  return vnode => (vnode.fnOptions
    && vnode.fnOptions.name === Component.name
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
  computed: {
    totalSlides() {
      return 14;
    }
  }
};
</script>

<style lang="stylus" scoped>

</style>
