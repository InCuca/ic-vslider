<template>
  <div
    class="icv"
    :style="icvStyle"
  >
    <div class="icv-c">
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
    <div class="icv-legend">
      <div
        class="icv-legend-number"
        :style="legendNumberStyle"
      >
        <slot
          name="legend-number"
          :number="padNumber(totalSlides)"
        >
          {{ padNumber(totalSlides) }}
        </slot>
      </div>
      <div class="icv-legend-text">
        <slot name="legend-text">
          Total
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
// FIXME: cannot import external css kazupon/vue-cli-plugin-p11n#21
// import 'swiper/dist/css/swiper.css';
import vSwiper from 'vue-awesome-swiper';
import bus from '../bus';
import colors from '../mixins/colors';
import padNumber from '../mixins/padNumber';

const { swiper } = vSwiper;

export default {
  name: 'IcVslider',
  components: { swiper },
  mixins: [colors, padNumber],
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
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
        autoHeight: true,
        effect: 'coverflow',
        ...this.options,
      };
    },
    visibleSlide() {
      return Object.values(this.slides)
        .find(slide => slide.visible);
    },
    totalSlides() {
      const total = Object.keys(this.slides).length;
      return this.padNumber(total);
    },
    icvStyle() {
      return { color: this.colors.text };
    },
    controlStyle() {
      return dir => ({
        borderColor: this.hoveredCtrl === dir
          ? this.colors.accent
          : this.colors.primary,
      });
    },
    legendNumberStyle() {
      return {
        color: this.colors.primary,
        borderColor: this.colors.accent,
      };
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
      this.slides = {
        ...this.slides,
        [icvs.number]: icvs,
      };
    });
  },
  methods: {
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

<style>
/* FIXME: remove this when swiper loads by dep */
@import url('../assets/swiper.min.css');
</style>


<style lang="stylus" scoped>
.icv {
  position: relative;

  .icv-c {
    padding-right: 60px;
  }
}

.icv-legend {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -60px;
  align-items: flex-end;
  line-height: 1em;

  @media screen and (min-width: 768px) {
    display: flex;
  }

  .icv-legend-number {
    font-size: 3.75em;
    font-weight: bold;
    border-bottom: 3px solid;
    line-height: 1;
  }

  .icv-legend-text {
    // position: absolute;
    // bottom: 0;
    // left: 100%;
    font-size: .625em;
    font-weight: 900;
    letter-spacing: 3.2px;
    transform: rotate(-90deg) translateX(-3.5em) translateY(1em);
    transform-origin: top left;
    text-transform: uppercase;
  }
}

.icv-controls {
  position: absolute;
  top: calc(50% - 60px);
  right: 0;
  bottom: 0;
  z-index: 1;

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
}

</style>
