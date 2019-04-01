<script>
export default {
  name: 'IcVsliderSlide',
  props: {
    number: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
  render(_, ctx) {
    return (
      <div class="icvs">
        <div class="icvs-headline">
          <div class="icvs-headline-number">{this.number}</div>
          <div class="icvs-headline-text">
            <div class="icvs-headline-text-title">{this.title}</div>
            <div class="icvs-headline-text-subtitle">{this.subtitle}</div>
          </div>
          {this.$slots.default}
        </div>
      </div>
    );
  },
};
</script>
