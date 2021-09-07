<template>
  <section id="contents" class="works contents">
    <splide id="splide1" ref="spl0"  :options="options" class="works-art-wrap detail1">
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
            <h3 class="tit1">비대면 <br /> 원스톱 <br /> 금융 플랫폼</h3>
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
            <h3 class="tit1">간편한 <br /> 할부금융 <br /> 프로세스</h3>
            <div class="paging"><span>2</span> <span>/</span> <span>3</span></div>
          </div>
          <div class="sec2">
            <p class="para-sec">고객의 Needs에 따라 선택과 집중을 통해 복잡한 할부금융 프로세스는 버리고, <br /> 주요 콘텐츠에 대한 기능 및 프로세스 흐름을 빠른 접근성을 기준으로 제작하였습니다.</p>
            <div class="img-sec"><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail01_2.png" alt="OVERVIEW"></div>
          </div>
        </div>
      </splide-slide>
      <splide-slide class="works-art4">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">SCREEN.</h2>
            <div class="tit-group-wrap">
              <div id="titGroup0" class="tit-group on">
                <h3 class="tit1">빠른 <br /> 무서류 <br /> 대출</h3>
                <p class="s-txt">견적부터 대출까지 간편하게 제공</p>
              </div>
              <div id="titGroup1" class="tit-group">
                <h3 class="tit1">자동차 <br /> 구매 <br /> 혜택</h3>
                <p class="s-txt">낮은 금리와 다양한 헤택 제공</p>
              </div>
              <div id="titGroup2" class="tit-group">
                <h3 class="tit1">새로운 <br /> 내 차 <br /> 구매방법</h3>
                <p class="s-txt">이자는 줄이고 혜택은 플러스</p>
              </div>
              <div id="titGroup3" class="tit-group">
                <h3 class="tit1">똑똑한 <br /> 내 차 <br /> 관리</h3>
                <p class="s-txt">내 차 관련 다양한 관리기능 제공</p>
              </div>
            </div>
            <div class="paging"><span>3</span> <span>/</span> <span>3</span></div>
          </div>
          <div class="sec2">
            <div class="splide2-wrap">
              <splide id="splide2" class="splide2" :options="options2" ref="spl1">
                <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail01_mobile01.png" alt="견적부터 대출까지 간편하게 제공" /></splide-slide>
                <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail01_mobile02.png" alt="낮은 금리와 다양한 헤택 제공" /></splide-slide>
                <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail01_mobile03.png" alt="이자는 줄이고 혜택은 플러스" /></splide-slide>
                <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail01_mobile04.png" alt="내 차 관련 다양한 관리기능 제공" /></splide-slide>
              </splide>
            </div>
            <div class="splide3-wrap">
              <splide id="splide3" class="splide3" :options="options3" ref="spl2"
              @splide:pagination:updated="paginationUpdated3">
                <splide-slide>
                  <p class="txt">견적부터 대출까지 간편하게 제공</p>
                  <img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail01_pc01.png" alt="견적부터 대출까지 간편하게 제공" />
                </splide-slide>
                <splide-slide>
                  <p class="txt">낮은 금리와 다양한 헤택 제공</p>
                  <img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail01_pc02.png" alt="낮은 금리와 다양한 헤택 제공" />
                </splide-slide>
                <splide-slide>
                  <p class="txt">이자는 줄이고 혜택은 플러스</p>
                  <img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail01_pc03.png" alt="이자는 줄이고 혜택은 플러스" />
                </splide-slide>
                <splide-slide>
                  <p class="txt">내 차 관련 다양한 관리기능 제공</p>
                  <img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail01_pc04.png" alt="내 차 관련 다양한 관리기능 제공" />
                </splide-slide>
              </splide>
            </div>
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
        <a href="/works/worksDetail1" class="next">NEXT</a>
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
      options2: {
        type: 'slide'
      },
      options3: {
        perPage: 1
      }
    }
  },
  mounted () {
    this.$refs.spl1.sync(this.$refs.spl2.splide)
    window.addEventListener('wheel', this.mouseWheel)
    document.querySelector('address').classList.add('hidden')
  },
  unmounted () {
    window.removeEventListener('wheel', this.mouseWheel)
    document.querySelector('address').classList.remove('hidden')
  },
  methods: {
    paginationUpdated3 () {
      var s3Idx = this.$refs.spl2.index
      document.querySelector('.tit-group.on').classList.remove('on')
      document.querySelector('#titGroup' + (s3Idx)).classList.add('on')
    },
    mouseWheel (e) {
      if (this.$refs.spl0.index === this.$refs.spl0.length - 1 && e.deltaY < 0 && this.$refs.spl2.index === 0) {
        document.querySelector('#splide1').querySelectorAll('.splide__arrow--prev')[0].click()
      } else if (this.$refs.spl0.index < this.$refs.spl0.length - 1) {
        if (e.deltaY < 0) {
          document.querySelector('#splide1').querySelectorAll('.splide__arrow--prev')[0].click()
        } else if (e.deltaY > 0) {
          document.querySelector('#splide1').querySelectorAll('.splide__arrow--next')[0].click()
        }
      } else if (this.$refs.spl0.index === this.$refs.spl0.length - 1) {
        if (e.deltaY < 0) {
          document.querySelector('#splide3').querySelectorAll('.splide__arrow--prev')[0].click()
        } else if (e.deltaY > 0) {
          document.querySelector('#splide3').querySelectorAll('.splide__arrow--next')[0].click()
        }
      }
    }
  }
}
</script>
