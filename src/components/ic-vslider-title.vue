<template>
  <div
    class="ic-vslider-title"
    :style="titleStyle"
  >
    <slot />
    <div
      class="ic-vslider-title-border"
      :style="borderStyle"
    />
  </div>
</template>

<script>
import Colors from '../mixins/colors';

export default {
  name: 'IcVsliderTitle',
  mixins: [Colors],
  computed: {
    titleStyle() {
      return { color: this.colors.primary };
    },
    borderStyle() {
      return { backgroundColor: this.colors.accent };
    },
  },
};
</script>


<style lang="stylus" scoped>
.ic-vslider-title {
  display: flex;
  flex-direction: column;
}
.ic-vslider-title /deep/ {
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
}
.ic-vslider-title-border {
  display: block;
  height: 3px;
  width: 30px;
}
</style>
