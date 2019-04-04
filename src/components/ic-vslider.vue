<template>
  <div class="icv">
    <div class="icv-legend">
      <slot
        name="legend"
        :number="totalSlides"
      >
        <div class="icv-legend-number">
          {{ totalSlides }}
        </div>
        <div class="icv-legend-text">
          Total
        </div>
      </slot>
    </div>
    <slot />
    <div class="icv-controls">
      <i class="icv-controls-arrow icv-controls-arrow--up" />
      <i class="icv-controls-arrow icv-controls-arrow--down" />
    </div>
  </div>
</template>

<script>
import bus from '../bus';
import colors from '../mixins/colors';

export default {
  name: 'IcVslider',
  mixins: [colors],
  data: () => ({
    slides: {},
  }),
  computed: {
    visibleSlide() {
      return Object.values(this.slides)
        .find(slide => slide.visible);
    },
    totalSlides() {
      return Object.keys(this.slides).length;
    },
  },
  created() {
    bus.$on('icvs-mounted', (icvs) => {
      const slideNumber = this.totalSlides + 1;
      icvs.setNumber(this.getNumberPad(slideNumber));
      this.slides = {
        ...this.slides,
        [icvs.number]: icvs,
      };
    });
  },
  updated() {
    this.restartSlider();
  },
  methods: {
    nextSlide() {
      const numbers = Object.keys(this.slides);
      if (numbers.length < 1) return;

      const { visibleSlide } = this;
      let curIdx = 0;
      if (visibleSlide) {
        curIdx = numbers.findIndex(visibleSlide.number) + 1;
        visibleSlide.setVisible(false);
      }

      const nextSlideNumber = numbers[curIdx];
      const nextSlide = this.slides[nextSlideNumber];
      nextSlide.setVisible(true);
    },
    restartSlider() {
      this.nextSlide();
    },
    getNumberPad(number) {
      return String(number).padStart(2, '0');
    },
  },
};
</script>

<style lang="stylus" scoped>
.icv-controls-arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;

  &--right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  &--left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

  &--up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  &--down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
}
</style>
