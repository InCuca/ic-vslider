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
          {{ padNumber(number) }}
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
import colors from '../mixins/colors';
import padNumber from '../mixins/padNumber';

const { swiperSlide } = vSwiper;

export default {
  name: 'IcVsliderSlide',
  components: { swiperSlide },
  mixins: [colors, padNumber],
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
    number: 0,
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
    // FIXME: Find a safer way
    // I was using bus, but itwas broken while using
    // many instances, because of global scope
    this.$parent.$parent.$emit('icvs-mounted', this);
  },
};
</script>

<style lang="css" scoped>
.icvs {
  display: flex;
  flex-direction: column;
}
@media screen and (min-width: 768px) {
  .icvs {
    flex-direction: row;
    justify-content: space-around;
  }
}
.icvs .icvs-featured {
  max-width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (min-width: 768px) {
  .icvs .icvs-featured {
    width: 40%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
}
.icvs .icvs-r {
  display: flex;
  flex-direction: column;
}
@media screen and (min-width: 768px) {
  .icvs .icvs-r {
    justify-content: center;
    width: calc(60% - 100px);
    margin-left: 100px;
    margin-right: 0;
  }
}
.icvs .icvs-r .icvs-r-headline,
.icvs .icvs-r .icvs-r-content {
  margin: 1em 0;
}
.icvs .icvs-r .icvs-r-headline {
  display: flex;
  text-transform: uppercase;
}
.icvs .icvs-r .icvs-r-headline-number {
  font-size: 3em;
  font-weight: bold;
  line-height: 1.5;
}
.icvs .icvs-r .icvs-r-headline-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 1em;
}
.icvs .icvs-r .icvs-r-headline-text-title {
  font-size: 1.5em;
}
.icvs .icvs-r .icvs-r-headline-text-subtitle {
  min-height: 2.45em;
  font-size: 0.75em;
}
.icvs .icvs-r .icvs-r-content {
  margin-top: 0;
}
</style>
