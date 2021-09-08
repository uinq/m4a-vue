<template>
  <section id="contents" class="works contents">
    <splide id="splide1" ref="spl0"  :options="options" class="works-art-wrap detail2">
      <splide-slide class="works-art1">
        <div class="sec1">
          <div class="subject">
            <div class="pos-a">
              <h1 class="tit">SELF BANK APP</h1>
              <p class="sub-txt"><span>PARTNER</span> <span class="plus">+</span> <span>SC제일은행</span></p>
            </div>
          </div>
          <div class="info">
            <div class="date"><b>DATE.</b> 2017 F/W</div>
            <div class="output"><b>OUTPUT.</b> MOBILE APP. / MOBILE WEB</div>
          </div>
        </div>
        <div class="sec2 img-sec prj4"></div>
      </splide-slide>
      <splide-slide class="works-art2">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">OVERVIEW.</h2>
            <h3 class="tit1">비대면 <br> 모바일 <br> 금융 서비스</h3>
            <div class="paging"><span>1</span> <span>/</span> <span>3</span></div>
          </div>
          <div class="sec2">
            <p class="para-sec">은행에 직접 방문하여 번거로운 절차를 거치치 않고도 사용자 혼자 10분만에 비대면으로 통장 개설이 가능한 모바일 앱을 구축하였습니다. <br> 365일, 주말까지 앱을 통해 사용자가 은행업무를 어렵지 않게 볼 수 있도록 만들었습니다.</p>
            <div class="img-sec"><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail03_1.png" alt="OVERVIEW"></div>
          </div>
        </div>
      </splide-slide>
      <splide-slide class="works-art3">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">CONCEPT.</h2>
            <h3 class="tit1">빠르고 <br> 쉬운 <br> 금융 서비스</h3>
            <div class="paging"><span>2</span> <span>/</span> <span>3</span></div>
          </div>
          <div class="sec2">
            <p class="para-sec">이전 모바일 앱 서비스보다 사용자가 빠르고 쉽게 사용할 수 있도록 하였고, 은행 방문이 어려운 고객들을 위해 은행에 가지 않아도 혼자서 간편하게 365일 이용 가능한 셀프뱅크 앱을 구축하였습니다.</p>
            <div class="img-sec"><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail03_2.png" alt="OVERVIEW"></div>
          </div>
        </div>
      </splide-slide>
      <splide-slide class="works-art4">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">SCREEN.</h2>
            <div class="tit-group-wrap">
              <div id="titGroup0" class="tit-group on">
                <h3 class="tit1">금융설계 <br> 셀프 <br> 어드바이저</h3>
                <p class="s-txt">사용자의 취향과 금융 상태에 맞는 상품을 추천</p>
              </div>
              <div id="titGroup1" class="tit-group">
                <h3 class="tit1">간편한 <br> 상품가입 <br> 프로세스</h3>
                <p class="s-txt">사용자에게 가입 프로세스를 직관적으로 제공</p>
              </div>
              <div id="titGroup2" class="tit-group">
                <h3 class="tit1">새롭게 <br> 추가 된 <br> 인증 방식</h3>
                <p class="s-txt">사용자가 편리한 방법을 선택할 수 있도록 제공</p>
              </div>
              <div id="titGroup3" class="tit-group">
                <h3 class="tit1">신청 <br> 이어하기 <br> 서비스</h3>
                <p class="s-txt">신청단계를 이어서 진행이 가능하도록 서비스를 구축</p>
              </div>
            </div>
            <div class="paging"><span>3</span> <span>/</span> <span>3</span></div>
          </div>
          <div class="sec2">
            <div class="bg"></div>
            <div class="symbol"><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail03_3.png" alt=""></div>
            <div class="raoud-overflow">
              <div class="splide4-wrap">
                <splide id="splide4" class="splide4" :options="options4" @splide:pagination:updated="paginationUpdated4" ref="spl4">
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail03_mobile01.png" alt="사용자의 취향과 금융 상태에 맞는 상품을 추천" /></splide-slide>
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail03_mobile02.png" alt="사용자에게 가입 프로세스를 직관적으로 제공" /></splide-slide>
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail03_mobile03.png" alt="사용자가 편리한 방법을 선택할 수 있도록 제공" /></splide-slide>
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail03_mobile04.png" alt="신청단계를 이어서 진행이 가능하도록 서비스를 구축" /></splide-slide>
                </splide>
              </div>
            </div>
          </div>
        </div>
      </splide-slide>
   </splide>
   <div class="work-btm-fixed">
      <div class="app-group">
        <a href="https://itunes.apple.com/kr/app//id1192133466" class="app1" target="_blank" title="새창">APP STORE</a>
        <span class="col">|</span>
        <a href="https://play.google.com/store/apps/details?id=com.scbank.scnf" class="app2" target="_blank" title="새창">GOOGLE PLAY</a>
      </div>
      <div class="ctrl-group">
        <a href="/works/worksDetail3" class="prev">PREV</a>
        <a href="/works" class="list">list</a>
        <a href="/works/worksDetail5" class="next">NEXT</a>
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
