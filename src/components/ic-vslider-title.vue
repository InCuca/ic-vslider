<template>
  <div class="ic-vslider-title" :style="titleStyle">
    <slot />
  </div>
</template>

<script>
import Colors from '../mixins/colors';

export default {
  name: 'ic-vslider-title',
  mixins: [Colors],
  computed: {
    titleStyle() {
      return {borderColor: this.colors.primary}
    }
  }
}
</script>


<style scoped>
.ic-vslider-title {

}
</style>
