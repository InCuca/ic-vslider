<template>
  <div class="icvs">
    <template v-if="visible">
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
    </template>
  </div>
</template>

<script>
import bus from '../bus';

export default {
  name: 'IcVsliderSlide',
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
