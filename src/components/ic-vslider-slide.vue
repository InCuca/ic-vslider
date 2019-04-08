<template>
  <swiper-slide class="icvs">
    <div class="icvs-featured">
      <slot name="featured" />
    </div>
    <div class="icvs-r">
      <div class="icvs-r-headline">
        <div
          class="icvs-r-headline-number"
          :style="headlineNumberStyle"
        >
          {{ number }}
        </div>
        <div class="icvs-r-headline-text">
          <div
            class="icvs-r-headline-text-title"
            :style="headlineTitleStyle"
          >
            {{ title }}
          </div>
          <div
            class="icvs-r-headline-text-subtitle"
            :style="headlineSubtitleStyle"
          >
            {{ subtitle }}
          </div>
        </div>
      </div>
      <div class="icvs-r-content">
        <slot />
      </div>
    </div>
  </swiper-slide>
</template>

<script>
import vSwiper from 'vue-awesome-swiper';
import bus from '../bus';
import colors from '../mixins/colors';

const { swiperSlide } = vSwiper;

export default {
  name: 'IcVsliderSlide',
  components: { swiperSlide },
  mixins: [colors],
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    number: '',
    visible: false,
  }),
  computed: {
    headlineNumberStyle() {
      return { color: this.colors.accent };
    },
    headlineTitleStyle() {
      return { color: this.colors.primary };
    },
    headlineSubtitleStyle() {
      return { color: this.colors.accent };
    },
  },
  mounted() {
    bus.$emit('icvs-mounted', this);
  },
  methods: {
    setNumber(number) {
      this.number = number;
    },
    setVisible(visible) {
      this.visible = visible;
    },
  },
};
</script>

<style lang="stylus" scoped>
.icvs {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  .icvs-featured {
    max-width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
      max-width: 40%;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
  }

  .icvs-r {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      justify-content: center;
      max-width: calc(60% - 100px);
      margin-left: 100px;
      margin-right: 0;
    }

    .icvs-r-headline,
    .icvs-r-content {
      margin: 1em 0;
    }

    .icvs-r-headline {
      display: flex;
      text-transform: uppercase;

      &-number {
        font-size: 3em;
        font-weight: bold;
        line-height: 1.5;
      }

      &-text {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-left: 1em;

        &-title {
          font-size: 1.5em;
        }

        &-subtitle {
          font-size: .75em;
        }
      }
    }

    .icvs-r-content {
      margin-top: 0;
    }
  }
}
</style>
