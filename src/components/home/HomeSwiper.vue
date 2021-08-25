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
        <div class="detail" v-if="slide.url != 'none'" ><a href="#">VIEW MORE</a></div>
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
      const actIndex = function () {
        const elArr = document.querySelector('.splide__pagination').getElementsByTagName('li')
        for (var i = 0; i < elArr.length; i++) {
          if (elArr[i].firstChild.classList.contains('is-active')) {
            return i
          }
        }
      }
      this.activePage = actIndex() + 1
      this.totalPage = document.querySelector('.splide__pagination').getElementsByTagName('li').length
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

<style lang="scss">
#homeSwiper .splide{ height:100%;
  .splide__slider{position:relative;height:100%;
    .splide__arrows{
      .splide__arrow--prev{left:90px;text-align:right;}
      .splide__arrow--prev:before{content:'';width:15px;height:15px;border-left:1px solid #000;position:absolute;left:8px;bottom:0;transform:skew(-45deg);}
      .splide__arrow--prev:after{content:'PREV';}
      .splide__arrow--next{right:90px;text-align:left;}
      .splide__arrow--next:after{content:'NEXT';}
      .splide__arrow--next:before{content:'';width:15px;height:15px;border-right:1px solid #000;position:absolute;right:8px;bottom:0;transform:skew(45deg);}
      button{border-bottom:1px solid #000;width:100px;padding:2px 5px;font-size:1.4rem;margin-top:-23px;transition:all .4s ease-in-out;}
      svg{display:none;}
      .splide__arrow--prev:hover{font-weight:900;left:100px;}
      .splide__arrow--next:hover{font-weight:900;right:100px;}
    }
    .splide__track{height:100%;
      .splide__list{height:100%;
        .splide__slide{position:absolute;left:0;top:0;opacity:0;width:100%;height:100%;background:url(http://www.m4a.co.kr/m4a_2019/images/common/logo_m4a.png) center center no-repeat;background-size:cover;transition: opacity .8s ease-in-out !important;pointer-events: none;z-index:0;}
        .splide__slide.is-active{transition: opacity 1s ease-out !important;z-index:5;pointer-events:auto;}
        .splide__slide.is-active{opacity:1;}
        .splide__slide.prj-item1{background-image:url(http://www.m4a.co.kr/m4a_2019/images/prj/prj01/pic_project.jpg)}
        .splide__slide.prj-item2{background-image:url(http://www.m4a.co.kr/m4a_2019/images/prj/prj02/pic_project.jpg)}
        .splide__slide.prj-item3{background-image:url(http://www.m4a.co.kr/m4a_2019/images/prj/prj03/pic_project.jpg)}
        .splide__slide.prj-item4{background-image:url(http://www.m4a.co.kr/m4a_2019/images/prj/prj04/pic_project.jpg)}
        .splide__slide.prj-item5{background-image:url(http://www.m4a.co.kr/m4a_2019/images/prj/prj05/pic_project.jpg)}
        .splide__slide.prj-item6{background-image:url(http://www.m4a.co.kr/m4a_2019/images/prj/prj06/pic_project.jpg)}
        .splide__slide:before{content:'';width:100%;height:100%;position:absolute;left:0;top:0;background:#fff;opacity:0.5}
      }
    }
  }
  .splide__progress{position:fixed;z-index:4;width:100%;top:0;left:0;
    .splide__progress__bar{height:2px;background:#000;}
  }
  .splide__autoplay{position:absolute;z-index:4;right:85px;bottom:80px;
    button{display:inline-block;width:40px;height:40px;color:transparent;position:relative;transition:all .4s ease-in-out}
    button:hover{transform:scale(1.4);}
    .splide__play:after{content:'';position: absolute;height: 0;width: 0;border: 8px solid transparent;border-right: 0;border-left-color: #000;border-top-width: 6px;border-bottom-width: 6px;left:50%;top: 50%;transform: translate(-50%, -50%);margin-left:2px;}
    .splide__pause:before,
    .splide__pause:after{content:'';position: absolute;left:50%;top: 50%;transform: translate(-50%, -50%);margin-left:-4px;height:11px;width:3px;background:#000;}
    .splide__pause:after{margin-left:4px;}
    .splide__play{display:none;}
  }
  .splide__autoplay.on .splide__pause{display:none;}
  .splide__autoplay.on .splide__play{display:block;}
  .splide__pagination{position:fixed;bottom:0;width:100%;left:0;transform:translate(0,0);display:flex;
    > li {flex:1}
    .splide__pagination__page{width:100%;height:2px;border-radius: 0;background:#fff;opacity:0.2;padding:0;margin:0;z-index:0;position:relative;transition:all .6s ease-in-out;}
    .splide__pagination__page.is-active{background:#000;opacity:.8;transform:scale(1.2);z-index:1}
  }
  .pagiation-num{position:absolute;left:50%;top:50%;z-index:10;font-size:1.6rem;font-weight:bold;margin-top:160px;transform:translate(-50%, -50%)}
  .pagiation-num >b{font-weight:900;}
  .pagiation-num > span{margin:0px 6px;}
  .info{text-align:center;position:absolute;width:100%;top:50%;left:0;transform:translateY(-50%);margin-top:-55px}
  .info .contract{font-size:6.0rem;font-weight:900;line-height:1;margin-top:30px;padding:0px 50px;}
  .info .contract > span{display:inline-block;position:relative;position:relative;margin:0px 250px;}
  .info .contract > span:before,
  .info .contract > span:after{content:'/';font-size:30px;position:absolute;left:-40px;top:50%;transform: translateY(-50%);font-weight:bold;}
  .info .contract > span:after{left:auto;right:-40px;}
  .info .partner{font-size:1.4rem;font-weight:900;}
  .info .partner .plus{font-size:2.0rem;font-weight:normal;margin:0px 20px;position:relative;top:2px;}
  .info .detail{width:100%;position:absolute;left:0;bottom:-85px;}
  .info .detail > a{display: inline-block;padding: 10px;padding-right:0;font-weight: 900;letter-spacing: 12px;font-size: 1.5rem;transition:all .2s ease-in-out;position:relative;}
  .info .detail > a:hover{transform:scale(1.15)}
  .info .detail > a:before{content:'';width:100%;height:100%;background:#fff;border-radius:30px;position:absolute;left:-30px;top:-5px;z-index:-1;opacity:.2;padding:10px 30px;}
  .info .detail > a:after{content:'';position:absolute;left:0;bottom:0;background:#566c65;height:1px;width:100%;}
}
@media only screen and (max-width: 640px) {
  #homeSwiper .splide{
    .splide__slider{
      .splide__track{
        .splide__list{
          .splide__slide{position:relative;opacity:1;}
        }
      }

    }
  }
}
</style>
