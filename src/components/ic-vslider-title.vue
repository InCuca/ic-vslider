<template>
  <div class="ic-vslider-title" :style="titleStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ic-vslider-title',
  props: {
    color: {
      type: String,
      default: '#000000'
    }
  },
  computed: {
    titleStyle() {
      return {borderColor: this.color}
    }
  }
}
</script>


<style scoped>
.ic-vslider-title {

}
</style>
