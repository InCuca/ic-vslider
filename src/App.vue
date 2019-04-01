<template>
  <div id="app">
    <h1>ic-vslider demo</h1>
    <ic-vslider>
      <ic-vslider-legend>
        Programas <br>
        Benefícios
      </ic-vslider-legend>
      <ic-vslider-slide
        title="Pomar"
        subtitle="Horta comunitária"
      >
        <div slot="featured">
          <img
            src="https://placekitten.com/380/380"
            alt="kitty"
          >
        </div>
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
        title="Pomar"
        subtitle="Horta comunitária"
      >
        <div slot="featured">
          <iframe
            width="610"
            height="343"
            src="https://www.youtube.com/embed/k4mJkt1y7E8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Maecenas tempus, urna sodales condimentum eleifend,
        metus dui suscipit diam, eget consequat augue libero vel
        purus. In sed efficitur libero. Aenean scelerisque leo
        sed dolor hendrerit, id gravida lorem mattis. Etiam
        laoreet urna sit amet posuere ultricies. Cras hendrerit
        vel velit at varius. Duis dictum tellus vel erat
        pellentesque, vel commodo ipsum varius.
      </ic-vslider-slide>
    </ic-vslider>
  </div>
</template>


<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Exo+2|Roboto');

#app {
  font-family: Exo2;
  font-size: 16px;
  font-weight: 300;

  h2 {
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    font-family: Exo2;
  }
}
</style>
