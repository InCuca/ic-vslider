<script>
export default {
  name: 'IcVsliderSlide',
  functional: true,
  render(_, { props }) {
    const { number, title, subtitle } = props;
    return (
      <div class="icvs">
        <div class="icvs-headline">
          <div class="icvs-headline-number">{number}</div>
          <div class="icvs-headline-text">
            <div class="icvs-headline-text-title">{title}</div>
            <div class="icvs-headline-text-subtitle">{subtitle}</div>
          </div>
        </div>
      </div>
    );
  },
};
</script>
