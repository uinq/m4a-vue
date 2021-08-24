<template>
  <splide :options="options" has-slider-wrapper>
    <splide-slide class="item1"></splide-slide>
    <template v-slot:controls>
      <div class="splide__progress">
        <div class="splide__progress__bar">
        </div>
      </div>

      <div class="splide__autoplay">
        <button class="splide__play">Play</button>
        <button class="splide__pause">Pause</button>
      </div>
    </template>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'
export default {
  components: {
    Splide,
    SplideSlide
  },
  data () {
    return {
      options: {
        type: 'fade',
        rewind: true,
        perPage: 1,
        autoplay: true,
        pauseOnHover: false,
        arrows: 'slider'
      }
    }
  }
}
</script>

<style>
.splide{}
  .splide__slider{}
    .splide__arrow{}
      .splide__arrow--prev{}
      .splide__arrow--next{}
    .splide__track{}
      .splide__list{}
        .splide__slide{position:absolute;left:0;top:0;opacity:0;height:100%}
        .splide__slide.is-active{opacity:1;}
  .splide__progress{}
    .splide__progress__bar{}
  .splide__autoplay{}
    .splide__play{}
    .splide__pause{}
  .splide__pagination{}
    .splide__pagination__page{}
    .splide__pagination__page.is-active{}

</style>
