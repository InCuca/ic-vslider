<script>
export default {
  name: 'IcVsliderSlide',
  functional: true,
  render(_, { children, data }) {
    const { number, title, subtitle } = data.attrs;
    return (
      <div class="icvs">
        <div class="icvs-headline">
          <div class="icvs-headline-number">{number}</div>
          <div class="icvs-headline-text">
            <div class="icvs-headline-text-title">{title}</div>
            <div class="icvs-headline-text-subtitle">{subtitle}</div>
          </div>
          {children}
        </div>
      </div>
    );
  },
};
</script>
