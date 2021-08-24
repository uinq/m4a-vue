<template>
  <splide :options="options" has-slider-wrapper>
    <!-- <splide-slide class="item1">
      <div class="info">
        <div class="partner">
          <span class="txt1">PARTNER</span>
          <span class="plus">+</span>
          <span  class="txt2">신한카드</span>
        </div>
        <div class="contract"><span>MyAUTO RENEWAL</span></div>
        <div class="detail"><a href="#">VIEW MORE</a></div>
      </div>
    </splide-slide> -->
    <splide-slide v-for="slide in slides" :key="slide.cls" :class="slide.cls">
      <div class="info">
        <div class="partner">
          <span class="txt1">PARTNER</span>
          <span class="plus">+</span>
          <span  class="txt2">{{slide.ptn}}</span>
        </div>
        <div class="contract"><span>{{slide.prj}} {{slide.prj2}}</span></div>
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
      <div class="pagiation-num">1/1</div>
    </template>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'
import { prjList } from '@/components/home/HomeData.json'
// const prjList2 = prjList
prjList.splice(6, 1)
console.log(prjList)
export default {
  components: {
    Splide,
    SplideSlide
  },
  data () {
    return {
      options: {
        type: window.innerWidth > 640 ? 'fade' : 'loop',
        rewind: true,
        perPage: 1,
        autoplay: true,
        pauseOnHover: false,
        arrows: 'slider'
      },
      slides: prjList
      // hidePrjList: prjList2
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
#homeSwiper .splide{
  .splide__slider{position:relative;
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
    .splide__track{
      .splide__list{height:100vh;
        .splide__slide{position:absolute;left:0;top:0;opacity:0;width:100%;height:100%;background:url(http://www.m4a.co.kr/m4a_2019/images/common/logo_m4a.png) center center no-repeat;background-size:cover;}
        .splide__slide.is-active{opacity:1;}
        .splide__slide.prj-item1{background-image:url(http://www.m4a.co.kr/m4a_2019/images/prj/prj01/pic_project.jpg)}
        .splide__slide.prj-item2{background-image:url(http://www.m4a.co.kr/m4a_2019/images/prj/prj02/pic_project.jpg)}
        .splide__slide.prj-item3{background-image:url(http://www.m4a.co.kr/m4a_2019/images/prj/prj03/pic_project.jpg)}
        .splide__slide.prj-item4{background-image:url(http://www.m4a.co.kr/m4a_2019/images/prj/prj04/pic_project.jpg)}
        .splide__slide.prj-item5{background-image:url(http://www.m4a.co.kr/m4a_2019/images/prj/prj05/pic_project.jpg)}
        .splide__slide.prj-item6{background-image:url(http://www.m4a.co.kr/m4a_2019/images/prj/prj06/pic_project.jpg)}
        .splide__slide:before{content:'';width:100%;height:100%;position:absolute;left:0;top:0;background:#fff;opacity:0.4}
      }
    }
  }
  .splide__progress{position:fixed;z-index:10;width:100%;top:0;left:0;
    .splide__progress__bar{height:2px;background:#000;}
  }
  .splide__autoplay{position:absolute;
    .splide__play{}
    .splide__pause{}
  }
  .splide__pagination{position:absolute;
    .splide__pagination__page{}
    .splide__pagination__page.is-active{}
  }
  .info{text-align:center;position:absolute;width:100%;top:50%;left:0;transform:translateY(-50%);margin-top:-55px}
  .info .contract{font-size:6.0rem;font-weight:900;line-height:1;margin-top:30px;padding:0px 50px;}
  .info .contract > span{display:inline-block;position:relative;position:relative;margin:0px 50px;}
  .info .contract > span:before,
  .info .contract > span:after{content:'/';font-size:30px;position:absolute;left:-40px;top:50%;transform: translateY(-50%);font-weight:bold;}
  .info .contract > span:after{left:auto;right:-40px;}
  .info .partner{font-size:1.4rem;font-weight:900;}
  .info .partner .plus{font-size:2.0rem;font-weight:normal;margin:0px 20px;position:relative;top:2px;}
  .info .detail{width:100%;position:absolute;left:0;bottom:-75px;}
  .info .detail > a{display: inline-block;padding: 10px;padding-right:0;border-bottom: 1px solid #566c65;font-weight: 900;letter-spacing: 12px;font-size: 1.5rem;}
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
