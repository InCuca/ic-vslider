<template>
  <div id="app">
    <h1>ic-vslider demo</h1>
    <ic-vslider>
      <ic-vslider-title>
        <h2>Muito Além do Trabalho</h2>
      </ic-vslider-title>
      <ic-vslider-legend>
        Programas <br>
        Benefícios
      </ic-vslider-legend>
      <ic-vslider-slider
        title="Pomar"
        subtitle="Horta comunitária"
      >
        <div slot="featured">
          <img
            src="https://placekitten.com/320/320"
            alt="kitty"
          >
        </div>
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas tempus, urna sodales condimentum eleifend,
          metus dui suscipit diam, eget consequat augue libero vel
          purus. In sed efficitur libero. Aenean scelerisque leo
          sed dolor hendrerit, id gravida lorem mattis. Etiam
          laoreet urna sit amet posuere ultricies. Cras hendrerit
          vel velit at varius. Duis dictum tellus vel erat
          pellentesque, vel commodo ipsum varius.
        </div>
      </ic-vslider-slider>
      <ic-vslider-slider
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
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas tempus, urna sodales condimentum eleifend,
          metus dui suscipit diam, eget consequat augue libero vel
          purus. In sed efficitur libero. Aenean scelerisque leo
          sed dolor hendrerit, id gravida lorem mattis. Etiam
          laoreet urna sit amet posuere ultricies. Cras hendrerit
          vel velit at varius. Duis dictum tellus vel erat
          pellentesque, vel commodo ipsum varius.
        </div>
      </ic-vslider-slider>
    </ic-vslider>
  </div>
</template>


<style>
#app {

}
</style>
