<template>
  <div id="app">
    <h1>ic-vslider demo</h1>
    <ic-vslider>
      <template #legend-text>
        Programas <br>
        Benefícios
      </template>
      <ic-vslider-slide
        title="Pomar"
        subtitle="Horta comunitária"
      >
        <img
          slot="featured"
          src="https://placekitten.com/380/380"
          alt="kitty"
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Maecenas tempus, urna sodales condimentum eleifend,
        metus dui suscipit diam, eget consequat augue libero vel
        purus. In sed efficitur libero. Aenean scelerisque leo
        sed dolor hendrerit, id gravida lorem mattis. Etiam
        laoreet urna sit amet posuere ultricies. Cras hendrerit
        vel velit at varius. Duis dictum tellus vel erat
        pellentesque, vel commodo ipsum varius.
      </ic-vslider-slide>
      <ic-vslider-slide
        title="Futebol"
        subtitle="Futebol no campo"
      >
        <iframe
          slot="featured"
          width="610"
          height="343"
          src="https://www.youtube.com/embed/k4mJkt1y7E8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        Maecenas nec consectetur ante. Donec mattis lorem fringilla
        massa dapibus auctor. Nulla posuere maximus orci, eget mollis
        sapien scelerisque quis. Vestibulum id tristique enim.
        Donec vel sodales justo. Praesent pretium venenatis quam,
        in pulvinar quam volutpat nec. Nunc quis lacus enim.
        In rhoncus sem eu elit maximus, nec ultricies eros ultricies.
      </ic-vslider-slide>
    </ic-vslider>
  </div>
</template>


<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Exo+2|Roboto');

#app {
  margin: 0 auto;
  max-width: 1000px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 300;

  h1 {
    font-size: 28px;
    font-family: Exo2;
  }

  .icv-legend-number {
    font-family: Exo2;
  }

  .icv-legend-text {
    color: #cccccc;
  }
}
</style>
