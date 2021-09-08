<template>
  <splide
    ref="homeSwiper"
    @splide:autoplay:pause="autoplayPause"
    @splide:autoplay:play="autoplayPlay"
    @splide:pagination:updated="paginationUpdated"
   :options="options" has-slider-wrapper>
    <slot v-for="slide in slides" :key="slide.mslide">
    <splide-slide v-if="slide.mslide != 'N'"  :class="slide.cls">
      <div class="info">
        <div class="partner">
          <span class="txt1">PARTNER</span>
          <span class="plus">+</span>
          <span  class="txt2">{{slide.ptn}}</span>
        </div>
        <div class="contract"><span>{{slide.prj}} {{slide.prj2}}</span></div>
        <div class="detail" v-if="slide.url != 'none'" ><a :href="slide.url" role="button">VIEW MORE</a></div>
      </div>
    </splide-slide>
    </slot>

    <template v-slot:controls>
      <div class="splide__progress">
        <div class="splide__progress__bar"></div>
      </div>
      <div class="splide__autoplay">
        <button class="splide__play">Play</button>
        <button class="splide__pause">Pause</button>
      </div>
      <div class="pagiation-num"><b>{{activePage}}</b> <span>/</span> {{totalPage}}</div>
    </template>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'
import { prjList } from '@/components/home/HomeData.json'

export default {
  components: {
    Splide,
    SplideSlide
  },
  data () {
    return {
      // splide 옵션
      options: {
        type: window.innerWidth > 640 ? 'fade' : 'loop',
        rewind: true,
        perPage: 1,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: 'slider',
        accessibility: true
      },
      slides: prjList,
      activePage: null,
      totalPage: null
    }
  },
  mounted () {
    this.refleshPage()
  },
  beforeUnmount () {
    // splide destroy
    this.$refs.homeSwiper.splide.destroy()
  },
  methods: {
    // 정지버튼
    autoplayPause () {
      if (document.getElementsByClassName('splide__autoplay').length > 0) {
        document.querySelector('.splide__autoplay').classList.add('on')
      }
    },
    // 재생버튼
    autoplayPlay () {
      if (document.getElementsByClassName('splide__autoplay').length > 0) {
        document.querySelector('.splide__autoplay').classList.remove('on')
      }
    },
    // 페이지네이션 업데이트시 중앙슬라이드 숫자 처리
    paginationUpdated () {
      // if (document.getElementsByClassName('splide__pagination').length > 0) {
      //   const actIndex = function () {
      //     const elArr = document.querySelector('.splide__pagination').getElementsByTagName('li')
      //     for (var i = 0; i < elArr.length; i++) {
      //       if (elArr[i].firstChild.classList.contains('is-active')) {
      //         return i
      //       }
      //     }
      //   }
      //   this.activePage = actIndex() + 1
      //   this.totalPage = document.querySelector('.splide__pagination').getElementsByTagName('li').length
      // }
      this.activePage = this.$refs.homeSwiper.index + 1
      this.totalPage = this.$refs.homeSwiper.length
    },
    // 640 이하는 슬라이드 변경 리사이즈 640 분기로 리로드(새로고침)
    refleshPage () {
      var $this = this
      window.outerWidth > 640 ? document.querySelector('html').classList.add('wide') : document.querySelector('html').classList.remove('wide')
      window.addEventListener('resize', function () {
        if (window.outerWidth > 640 && !document.querySelector('html').classList.contains('wide')) {
          document.querySelector('html').classList.add('wide')
          $this.$router.go()
        } else if (window.outerWidth <= 640 && document.querySelector('html').classList.contains('wide')) {
          document.querySelector('html').classList.remove('wide')
          $this.$router.go()
        }
      })
    }

  }
}
</script>
