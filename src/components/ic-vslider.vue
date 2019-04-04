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

export default {
  name: 'IcVslider',
  data: () => ({
    slides: {}
  }),
  computed: {
    totalSlides() {
      return Object.keys(this.slides).length
    }
  },
  created() {
    bus.$on('icvs-mounted', (icvs) => {
      const slideNumber = this.totalSlides + 1;
      icvs.setNumber(String(slideNumber).padStart(2, '0'));
      this.slides = {
        ...this.slides,
        [icvs.number]: icvs
      };
    });
  }
};
</script>

<style lang="stylus" scoped>

</style>
