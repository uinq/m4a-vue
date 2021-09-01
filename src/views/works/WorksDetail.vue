<template>
  <section id="contents" class="works contents">
    <splide :options="options" class="works-art-wrap ">
      <splide-slide class="works-art1">

      </splide-slide>
      <splide-slide class="works-art2">

      </splide-slide>
      <splide-slide class="works-art3">
          <splide :options="options2" ref="spl1">
              <splide-slide></splide-slide>
              <splide-slide></splide-slide>
              <splide-slide></splide-slide>
          </splide>
          <splide class="ddd" :options="options3" ref="spl2">
              <splide-slide></splide-slide>
              <splide-slide></splide-slide>
              <splide-slide></splide-slide>
          </splide>
      </splide-slide>
   </splide>
</section>
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
        direction: 'ttb',
        height: '100vh',
        perPage: 1
      },
      options2: {
        perPage: 1
      },
      options3: {
        type: 'slide',
        width: 800,
        gap: '1rem',
        pagination: false,
        fixedWidth: 110,
        fixedHeight: 70,
        cover: true,
        focus: 'center',
        isNavigation: true
      }
    }
  },
  mounted () {
    this.$refs.spl1.sync(this.$refs.spl2.splide)
  },
  unmounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss">
.splide__slide{height:100vh;position:relative;
  &:nth-child(1){background:#ff0000}
  &:nth-child(2){background:#0000ff}
  &:nth-child(3){background:#00ff00}
}
.splide__slide .splide{position:absolute;left:200px;bottom:200px;width:200px;}
.splide__slide .splide__slide{height:200px;
  &:nth-child(1){background:#000}
  &:nth-child(2){background:#fff}
  &:nth-child(3){background:#ff9900}
}
.splide__slide .splide.ddd{position:absolute;right:200px;left:auto;width:100px}

</style>
