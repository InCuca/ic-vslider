<template>
  <swiper-slide class="icvs">
    <div class="icvs-featured">
      <slot name="featured" />
    </div>
    <div class="icvs-r">
      <div class="icvs-r-headline">
        <div class="icvs-r-headline-number">
          {{ number }}
        </div>
        <div class="icvs-r-headline-text">
          <div class="icvs-r-headline-text-title">
            {{ title }}
          </div>
          <div class="icvs-r-headline-text-subtitle">
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
import { swiperSlide } from 'vue-awesome-swiper';
import bus from '../bus';

export default {
  name: 'IcVsliderSlide',
  components: { swiperSlide },
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
      max-width: calc(60% - 100px);
      margin-left: 100px;
      margin-right: 0;
    }
  }
}
</style>
