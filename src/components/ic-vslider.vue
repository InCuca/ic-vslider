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
    console.log(slide);
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
  data: () => ({
    activeSlide: 0,
    sliders: [],
  }),
  watch: {
    activeSlide: {
      handler() {
        this.$slots.default[0].number = 'foo';
      },
      immediate: true,
    },
  },
  beforeCreate() {
    this.sliders = this.$slots
      .default
      .filter(byComponent(IcVsliderSlide));
  },
  render() {
    return (
      <div class="icv">{this.children}</div>
    );
  },
};
</script>

<style lang="stylus" scoped>

</style>
