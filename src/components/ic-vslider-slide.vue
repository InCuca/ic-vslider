<script>
import bus from '../bus';

export default {
  name: 'IcVsliderSlide',
  data: () => ({
    number: '',
  }),
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
  methods: {
    setNumber(number) {
      this.number = number
    }
  },
  mounted() {
    bus.$emit('icvs-mounted', this);
  },
  render() {
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
