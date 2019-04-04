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
    <swiper
      ref="swiperCmp"
      :options="swiperOptions"
      v-on="$listeners"
    >
      <slot />
    </swiper>
    <div
      class="icv-controls"
      @mouseleave="hoveredCtrl = null"
    >
      <template v-for="dir in ['up', 'down']">
        <div
          :key="dir"
          :class="['icv-controls-ctrl', `icv-controls-ctrl--${dir}`]"
          :style="controlStyle(dir)"
          @mouseenter="hoveredCtrl = dir"
          @click="onControlClick"
        >
          <i class="icv-controls-ctrl-arrow" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper } from 'vue-awesome-swiper';
import bus from '../bus';
import colors from '../mixins/colors';

export default {
  name: 'IcVslider',
  components: { swiper },
  mixins: [colors],
  data: () => ({
    slides: {},
    hoveredCtrl: null,
  }),
  computed: {
    swiper() {
      return this.$refs.swiperCmp.swiper;
    },
    swiperOptions() {
      return {
        direction: 'vertical',
      };
    },
    visibleSlide() {
      return Object.values(this.slides)
        .find(slide => slide.visible);
    },
    totalSlides() {
      return Object.keys(this.slides).length;
    },
    controlStyle() {
      return dir => ({
        borderColor: this.hoveredCtrl === dir
          ? this.colors.accent
          : this.colors.primary,
      });
    },
  },
  watch: {
    slides: {
      handler() {
        if (this.swipCmp) {
          this.swiperCmp.update();
        }
      },
      immediate: true,
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
  methods: {
    getNumberPad(number) {
      return String(number).padStart(2, '0');
    },
    onControlClick() {
      if (this.hoveredCtrl === 'down') {
        this.swiper.slideNext();
      } else {
        this.swiper.slidePrev();
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.icv-controls-ctrl {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;

  .icv-controls-ctrl-arrow {
    border-color: inherit;
    border-style: solid;
    border-width: 0 3px 3px 0;
    display: block;
    padding: 3px;
  }

  &--right .icv-controls-ctrl-arrow {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  &--left .icv-controls-ctrl-arrow {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

  &--up .icv-controls-ctrl-arrow {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  &--down .icv-controls-ctrl-arrow {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
}
</style>
