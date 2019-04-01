<script>
import IcVsliderSlide from './ic-vslider-slide';

function byComponent(Component) {
  return vnode => (vnode.fnOptions
    && vnode.fnOptions.name === Component.name
  );
}

function getSliderStarter() {
  let sliders = 0;
  return (slide) => {
    const number = String(sliders + 1).padStart(2, '0');
    sliders += 1;
    return {
      ...slide,
      props: { number },
    };
  };
}

export default {
  name: 'IcVslider',
  render() {
    const sliderStarter = getSliderStarter();
    this.$slots.default = this.$slots
      .default
      .filter(byComponent(IcVsliderSlide))
      .map(sliderStarter);
    return (
      <div class="icv">{this.$slots.default}</div>
    );
  },
};
</script>

<style lang="stylus" scoped>

</style>
