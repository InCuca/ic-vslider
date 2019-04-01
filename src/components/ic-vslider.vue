<script>
function byTag(name) {
  return tag => tag.name === name
}

export default {
  name: 'IcVslider',
  render() {
    const slides = this.$slots
      .default
      .filter(byTag('ic-vslider-slider'));
    return (
      <div class="ic-vslider">slides</div>
    );
  },
};
</script>

<style lang="stylus" scoped>

</style>
