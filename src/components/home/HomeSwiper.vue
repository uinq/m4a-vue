<template>
  <splide :options="options" has-slider-wrapper>
    <splide-slide class="item1">
      <div class="info">
        <div class="partner">
          <span class="txt1">PARTNER</span>
          <span class="plus">+</span>
          <span  class="txt2">신한카드</span>
        </div>
        <div class="contract">MyAUTO RENEWAL</div>
        <div class="detail"><a href="#">VIEW MORE</a></div>
      </div>
    </splide-slide>
    <!-- <splide-slide class="item2">2</splide-slide>
    <splide-slide class="item3">3</splide-slide>
    <splide-slide class="item4">4</splide-slide>
    <splide-slide class="item5">5</splide-slide>
    <splide-slide class="item6">6</splide-slide> -->
    <template v-slot:controls>
      <div class="splide__progress">
        <div class="splide__progress__bar"></div>
      </div>
      <div class="splide__autoplay">
        <button class="splide__play">Play</button>
        <button class="splide__pause">Pause</button>
      </div>
    </template>
    <div class="pagiation-num">1/1</div>
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
  .splide__slider{position:relative;}
    .splide__arrow{}
      .splide__arrow--prev{}
      .splide__arrow--next{}
    .splide__track{}
      .splide__list{height:100vh;}
        .splide__slide{position:absolute;left:0;top:0;opacity:0;width:100%;height:100%}
        .splide__slide.is-active{opacity:1;}
        .splide__slide.item1{background:url(http://www.m4a.co.kr/m4a_2019/images/prj/prj01/pic_project.jpg) center center no-repeat;background-size:cover;}
        .splide__slide:before{content:'';width:100%;height:100%;position:absolute;left:0;top:0;background:#fff;opacity:0.4}
        .splide__slide .info{text-align:center;position:absolute;width:100%;top:40%;left:0;}
  .splide__progress{position:absolute;}
    .splide__progress__bar{}
  .splide__autoplay{position:absolute;}
    .splide__play{}
    .splide__pause{}
  .splide__pagination{position:absolute;}
    .splide__pagination__page{}
    .splide__pagination__page.is-active{}

</style>
