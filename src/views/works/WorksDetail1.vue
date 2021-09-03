<template>
  <section id="contents" class="works contents">
    <splide id="splide1" :options="options" class="works-art-wrap detail1">
      <splide-slide class="works-art1">
        <div class="sec1">
          <div class="subject">
            <div class="pos-a">
              <h1 class="tit">MyAUTO</h1>
              <p class="sub-txt"><span>PARTNER</span> <span class="plus">+</span> <span>신한카드</span></p>
            </div>
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
          <div class="sec1">
            <h2 class="tit">OVERVIEW.</h2>
            <h3 class="tit1">비대면 원스톱 금융 플랫</h3>
            <div class="paging"><span>1</span> <span>/</span> <span>3</span></div>
          </div>
          <div class="sec2">
            <p class="para-sec">고객에서 자동차판매딜러, 신한카드까지 유기적인 연결에 중점을 둔 비대면 원스톱 할부금융 플랫폼을 구축하였습니다. <br> 복잡한 중간 단계를 생략하고, 편리하게 목적달성을 하는 UI/UX로 구성하였습니다.</p>
            <div class="img-sec"><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail01_1.png" alt="OVERVIEW"></div>
          </div>
        </div>
      </splide-slide>
      <splide-slide class="works-art3">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">CONCEPT.</h2>
            <h3 class="tit1">간편한 할부금융 프로세스</h3>
            <div class="paging"><span>2</span> <span>/</span> <span>3</span></div>
          </div>
          <div class="sec2">
            <p class="para-sec">고객의 Needs에 따라 선택과 집중을 통해 복잡한 할부금융 프로세스는 버리고, 주요 콘텐츠에 대한 기능 및 프로세스 흐름을 빠른 접근성을 기준으로 제작하였습니다.</p>
            <div class="img-sec"><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail01_2.png" alt="OVERVIEW"></div>
          </div>
        </div>
      </splide-slide>
      <splide-slide class="works-art4">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">SCREEN.</h2>
            <div id="titGroup1">
              <h3 class="tit1">빠른 무서류 대출</h3>
              <p class="s-txt">견적부터 대출까지 간편하게 제공</p>
            </div>
            <div id="titGroup2">
              <h3 class="tit1">자동차 구매 혜택</h3>
              <p class="s-txt">낮은 금리와 다양한 헤택 제공</p>
            </div>
            <div id="titGroup3">
              <h3 class="tit1">새로운 내 차 구매방법</h3>
              <p class="s-txt">이자는 줄이고 혜택은 플러스</p>
            </div>
            <div id="titGroup4">
              <h3 class="tit1">똑똑한 내 차 관리</h3>
              <p class="s-txt">내 차 관련 다양한 관리기능 제공</p>
            </div>
            <div class="paging"><span>3</span> <span>/</span> <span>3</span></div>
          </div>
          <div class="sec2">
            <splide id="splide2" :options="options2" ref="spl1">
              <splide-slide></splide-slide>
              <splide-slide></splide-slide>
              <splide-slide></splide-slide>
              <splide-slide></splide-slide>
            </splide>
            <splide id="splide3" class="ddd" :options="options3" ref="spl2">
              <splide-slide>
                <p class="txt">견적부터 대출까지 간편하게 제공</p>
              </splide-slide>
              <splide-slide>
                <p class="txt">낮은 금리와 다양한 헤택 제공</p>
              </splide-slide>
              <splide-slide>
                <p class="txt">이자는 줄이고 혜택은 플러스</p>
              </splide-slide>
              <splide-slide>
                <p class="txt">내 차 관련 다양한 관리기능 제공</p>
              </splide-slide>
            </splide>
          </div>
        </div>
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
  .art-tpl{padding:200px 0px 80px;margin:0px 100px 0px 100px;position:relative;height:100%;box-sizing:border-box;transition:all .4s ease-in-out;}
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
      .list{display:inline-block;overflow:hidden;width:18px;height:18px;background:url(http://www.m4a.co.kr/m4a_2019/images/sub/bg_list02.png) center center no-repeat;color:transparent;margin:0 80px;}
    }
  }
  .works-art1{
    .subject{text-align:center;position:relative;height:100%;
      .pos-a{position:absolute;top:50%;width:100%;transform:translateY(-70%);padding-top:40px;}
      .tit{font-size:6.0rem;font-weight:900;display:inline-block;position:relative;
        &:after,
        &:before{width: 2px;height: 30px;background: #000;transform: rotate(30deg) translateY(-50%);position:absolute;top:50%;left:-55px;}
        &:after{left:auto;right:-40px;}
      }
      .sub-txt{position:absolute;width:100%;left:0;top:0px;font-size:1.4rem;font-weight:900;
        span{display:inline-block;vertical-align:middle;min-width:67px;text-align:left;}
        .plus{margin:0px 20px;min-width:0;font-weight:normal;font-size:2.0rem;}
      }
    }
    .info{position:absolute;left:100px;bottom:200px;z-index:2;font-size:1.4rem;
      > div + div{margin-top:15px;}
      b{font-weight:900;width:80px;display:inline-block;}
    }
    .sec1{height:37%;box-sizing:border-box;padding:200px 100px 0px;}
    .sec2{height:63%;min-height:408px;position:relative;}
  }
  .detail1 .works-art1 .img-sec{background:#2571cb url(http://www.m4a.co.kr/m4a_2019/images/sub/bg_work_detail01.png) center -50px no-repeat;background-size:cover;}
  .detail1 .works-art1 .img-sec span{position:absolute;bottom:0;left:50%;}
  .splide__slide{height:100vh;min-height:680px}
  .splide__track{min-height:680px;}
  .splide__arrow{width:30px;height:40px;transform:translate(0);left:auto;right: 13px;bottom:auto;top:50%;transition:all .4s ease-in-out;}
  .splide--ttb>.splide__pagination{right:20px;}
  .splide__pagination__page.is-active{background:#000}
  .splide__arrow:hover:after{transform:scale(1.2)}
  .splide__arrow--prev{margin-top:-100px;}
  .splide__arrow--prev:after{position:absolute;right:9px;bottom:0;width: 0px;height: 0px;border: 6px solid transparent;border-bottom: 10px solid #000;transition:all .4s ease-in-out;}
  .splide__arrow--next:after{position:absolute;right:9px;top:0;width: 0px;height: 0px;border: 6px solid transparent;border-top: 10px solid #000;transition:all .4s ease-in-out;}
  .splide__arrow:disabled{opacity:0.2;}
  .splide__arrow--next{margin-top:60px;}
  .splide__arrow svg{display:none;}
}
</style>
