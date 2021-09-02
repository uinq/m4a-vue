<template>
  <section id="contents" class="works contents">
    <splide id="splide1" :options="options" class="works-art-wrap detail1">
      <splide-slide class="works-art1">
        <div class="sec1">
          <div class="subject">
            <h1 class="tit">MyAUTO</h1>
            <p class="sub-txt"><span>PARTNER</span> <span class="plus">+</span> <span>신한카드</span></p>
          </div>
          <div class="info">
            <div class="date"><b>DATE.</b> 2018 F/W</div>
            <div class="output"><b>OUTPUT.</b> PC WEB / MOBILE WEB / HYBRID APP.W</div>
          </div>
        </div>
        <div class="sec2 img-sec"></div>
      </splide-slide>
      <splide-slide class="works-art2">
        <div class="art-tpl">
        </div>
      </splide-slide>
      <splide-slide class="works-art3">
        <div class="art-tpl">
        </div>
      </splide-slide>
      <splide-slide class="works-art4">
          <splide id="splide2" :options="options2" ref="spl1">
              <splide-slide></splide-slide>
              <splide-slide></splide-slide>
              <splide-slide></splide-slide>
          </splide>
          <splide id="splide3" class="ddd" :options="options3" ref="spl2">
              <splide-slide></splide-slide>
              <splide-slide></splide-slide>
              <splide-slide></splide-slide>
          </splide>
      </splide-slide>
   </splide>
   <div class="work-btm-fixed">
      <div class="app-group">
        <a href="https://itunes.apple.com/kr/app//id1436808677" class="app1" target="_blank" title="새창">APP STORE</a>
        <span class="col">|</span>
        <a href="https://play.google.com/store/apps/details?id=com.shinhancard.autoplatform" class="app2" target="_blank" title="새창">GOOGLE PLAY</a>
      </div>
      <div class="ctrl-group">
        <a href="/works/worksDetail5" class="prev">PREV</a>
        <a href="/works" class="list">list</a>
        <a href="/works/worksDetail5" class="next">NEXT</a>
      </div>
   </div>
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
        autoHeight: true,
        perPage: 1,
        keyboard: true,
        slideFocus: true
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
    window.addEventListener('wheel', this.mouseWheel)
  },
  unmounted () {
    window.removeEventListener('wheel', this.mouseWheel)
  },
  methods: {
    mouseWheel (e) {
      if (e.deltaY < 0) {
        document.querySelector('#splide1').querySelectorAll('.splide__arrow--prev')[0].click()
      } else if (e.deltaY > 0) {
        document.querySelector('#splide1').querySelectorAll('.splide__arrow--next')[0].click()
      }
    }
  }
}
</script>
<style lang="scss">
.works.contents{
  .art-tpl{padding-top:200px;margin:0px 0px 0px 100px;position:relative;}
  .work-btm-fixed{width:100%;position:fixed;bottom:0;left:0;height:80px;display:flex;box-sizing:border-box;padding:0px 100px;justify-content: space-between;z-index:3;background:rgba(255,255,255,0.1);align-content: center;align-items: center;font-weight: 900;color: #000;
    &:before{position:absolute;top:0;left:0;width:100%;height:1px;background:rgba(255,255,255,0.2)}
    a{display:inline-block;vertical-align:middle;transition:all .2s ease-in-out;}
    a:hover{transform:scale(1.2);}
    .app-group{flex:1;font-size:1.6rem;
      .app1{padding-left: 21px;background: url(http://www.m4a.co.kr/m4a_2019/images/sub/logo_app_store.png) no-repeat 0 4px;}
      .app2{padding-left: 22px;background: url(http://www.m4a.co.kr/m4a_2019/images/sub/logo_google_play.png) no-repeat 0 4px;}
      .col{width:1px;height:10px;color:transparent;overflow:hidden;position:relative;top:0px;margin:0px 40px;background:#000;line-height:0;display:inline-block;}
    }
    .ctrl-group{flex:1;text-align:right;font-size:1.4rem;
      .prev{display:inline-block;padding-left:25px;padding-right:10px;padding-bottom:3px;position:relative;
        &:before{width:10px;height:10px;transform-origin:left bottom;border-left:1px solid #000;transform:skew(-35deg);position:absolute;left:0;bottom:0;}
        &:after{width:100%;height:1px;background:#000;position:absolute;left:0;bottom:0;}
      }
      .next{display:inline-block;padding-right:25px;padding-left:10px;padding-bottom:3px;position:relative;
        &:before{width:10px;height:10px;transform-origin:right bottom;border-right:1px solid #000;transform:skew(35deg);position:absolute;right:0;bottom:0;}
        &:after{width:100%;height:1px;background:#000;position:absolute;right:0;bottom:0;}
      }
      .list{display:inline-block;overflow:hidden;width:18px;height:18px;background:url(http://www.m4a.co.kr/m4a_2019/images/sub/bg_list02.png) center center no-repeat;color:transparent;margin:0 100px;}
    }
  }
  .works-art1{
    .sec1{height:40%}
    .sec2{height:60%;min-height:408px;position:relative;}
  }
  .detail1 .img-sec{background:#2571cb url(http://www.m4a.co.kr/m4a_2019/images/sub/bg_work_detail01.png) center -50px no-repeat;background-size:cover;}
  .detail1 .img-sec span{position:absolute;bottom:0;left:50%;}
  .splide__slide{height:100vh;min-height:680px}
  .splide__track{min-height:680px;}
}
</style>
