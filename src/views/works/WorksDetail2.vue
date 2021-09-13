<template>
  <section id="contents" class="works contents">
    <splide id="splide1" ref="spl0"  :options="options" class="works-art-wrap detail1">
      <splide-slide class="works-art1">
        <div class="sec1">
          <div class="subject">
            <div class="pos-a">
              <h1 class="tit">HANA MEMBERS APP</h1>
              <p class="sub-txt"><span>PARTNER</span> <span class="plus">+</span> <span>하나카드</span></p>
            </div>
          </div>
          <div class="info">
            <div class="date"><b>DATE.</b> 2018 S/S</div>
            <div class="output"><b>OUTPUT.</b> MOBILE APP.</div>
          </div>
        </div>
        <div class="sec2 img-sec prj2"></div>
      </splide-slide>
      <splide-slide class="works-art2">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">OVERVIEW.</h2>
            <h3 class="tit1">혜택 <br> 결합형 <br> 통합 멤버십</h3>
            <div class="paging"><span>1</span> <span>/</span> <span>3</span></div>
          </div>
          <div class="sec2">
            <p class="para-sec">고서비스의 본질에 집중하고 비주얼과 UI를 개선하여, 양질의 사용자 경험 제공 및 대고객 어플리케이션 운용력을 확보하였습니다. </p>
            <div class="img-sec"><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail02_1.png" alt="OVERVIEW"></div>
          </div>
        </div>
      </splide-slide>
      <splide-slide class="works-art3">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">CONCEPT.</h2>
            <h3 class="tit1">ONE SCREEN : <br> ONE TASK <br> 원칙</h3>
            <div class="paging"><span>2</span> <span>/</span> <span>3</span></div>
          </div>
          <div class="sec2">
            <p class="para-sec">서비스의 연속성을 보존하고 다량의 정보를 간결하게 제공하고자 했던 프로젝트의 핵심 컨셉은 실제로 사용자의 어플리케이션 활동량을 높은 폭으로 상승시켰습니다.</p>
            <div class="img-sec"><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail02_2.png" alt="OVERVIEW"></div>
          </div>
        </div>
      </splide-slide>
      <splide-slide class="works-art4 type2">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">SCREEN.</h2>
            <div class="tit-group-wrap">
              <div id="titGroup0" class="tit-group on">
                <h3 class="tit1">스마트한 <br> 멤버십 <br> 라이프</h3>
                <p class="s-txt">차세대 디지털 머니, 하나머니 제공</p>
              </div>
              <div id="titGroup1" class="tit-group">
                <h3 class="tit1">알찬 <br> 멤버스 <br> 혜택</h3>
                <p class="s-txt">이용할 수록 쌓이는 혜택 서비스 제공</p>
              </div>
              <div id="titGroup2" class="tit-group">
                <h3 class="tit1">머니 <br /> 즐기기 <br /> 서비스</h3>
                <p class="s-txt">즐겁게 머니가 플러스되는 경험 제공</p>
              </div>
              <div id="titGroup3" class="tit-group">
                <h3 class="tit1">나를 <br> 위한 <br> 금융상품몰</h3>
                <p class="s-txt">나에게 꼭 맞는 금융상품과 혜택 제공</p>
              </div>
            </div>
            <div class="paging"><span>3</span> <span>/</span> <span>3</span></div>
          </div>
          <div class="sec2">
            <div class="bg"></div>
            <div class="raoud-overflow">
              <div class="splide4-wrap">
                <splide id="splide4" class="splide4" :options="options4" @splide:pagination:updated="paginationUpdated4" ref="spl4">
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail02_mobile01.png" alt="차세대 디지털 머니, 하나머니 제공" /></splide-slide>
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail02_mobile02.png" alt="이용할 수록 쌓이는 혜택 서비스 제공" /></splide-slide>
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail02_mobile03.png" alt="즐겁게 머니가 플러스되는 경험 제공" /></splide-slide>
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail02_mobile04.png" alt="나에게 꼭 맞는 금융상품과 혜택 제공" /></splide-slide>
                </splide>
              </div>
            </div>
          </div>
        </div>
      </splide-slide>
   </splide>
   <div class="work-btm-fixed">
      <div class="app-group">
        <a href="https://itunes.apple.com/kr/app//id1038288833" class="app1" target="_blank" title="새창">APP STORE</a>
        <span class="col">|</span>
        <a href="https://play.google.com/store/apps/details?id=kr.co.hanamembers.hmscustomer" class="app2" target="_blank" title="새창">GOOGLE PLAY</a>
      </div>
      <div class="ctrl-group">
        <a href="/worksDetail1" class="prev">PREV</a>
        <a href="/works" class="list">list</a>
        <a href="/worksDetail3" class="next">NEXT</a>
      </div>
       <div id="splideLine" class="splide-line"></div>
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
      options4: {
        type: 'loop',
        perPage: 1,
        rewind: true
      }
    }
  },
  mounted () {
    window.addEventListener('wheel', this.mouseWheel)
    document.querySelector('address').classList.add('hidden')
  },
  unmounted () {
    window.removeEventListener('wheel', this.mouseWheel)
    document.querySelector('address').classList.remove('hidden')
  },
  methods: {
    paginationUpdated4 () {
      var s3Idx = this.$refs.spl4.index
      document.querySelector('.tit-group.on').classList.remove('on')
      document.querySelector('#titGroup' + (s3Idx)).classList.add('on')
      document.querySelector('#splideLine').style.width = this.$refs.spl4.index + (this.$refs.spl4.index * Math.ceil(100 / (this.$refs.spl4.length - 1))) + '%'
    },
    mouseWheel (e) {
      if (this.$refs.spl0.index === this.$refs.spl0.length - 1 && e.deltaY < 0 && this.$refs.spl4.index === 0) {
        document.querySelector('#splide1').querySelectorAll('.splide__arrow--prev')[0].click()
      } else if (this.$refs.spl0.index < this.$refs.spl0.length - 1) {
        if (e.deltaY < 0) {
          document.querySelector('#splide1').querySelectorAll('.splide__arrow--prev')[0].click()
        } else if (e.deltaY > 0) {
          document.querySelector('#splide1').querySelectorAll('.splide__arrow--next')[0].click()
        }
      } else if (this.$refs.spl0.index === this.$refs.spl0.length - 1) {
        if (e.deltaY < 0) {
          document.querySelector('#splide4').querySelectorAll('.splide__arrow--prev')[0].click()
        } else if (e.deltaY > 0) {
          document.querySelector('#splide4').querySelectorAll('.splide__arrow--next')[0].click()
        }
      }
    }
  }
}
</script>
