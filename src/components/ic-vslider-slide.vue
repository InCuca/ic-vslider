<template>
  <swiper-slide class="icvs">
    <div class="icvs-headline">
      <div class="icvs-headline-number">
        {{ number }}
      </div>
      <div class="icvs-headline-text">
        <div class="icvs-headline-text-title">
          {{ title }}
        </div>
        <div class="icvs-headline-text-subtitle">
          {{ subtitle }}
        </div>
      </div>
    </div>
    <div class="icvs-content">
      <slot />
    </div>
  </swiper-slide>
</template>

<script>
import {swiperSlide} from 'vue-awesome-swiper';
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
