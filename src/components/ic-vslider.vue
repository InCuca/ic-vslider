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
    bus.$on('icvs-mounted', (icvs) => {
      this.slides.push(icvs);
    });
  }
};
</script>

<style lang="stylus" scoped>

</style>
