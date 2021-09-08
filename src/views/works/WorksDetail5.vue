<template>
  <section id="contents" class="works contents">
    <splide id="splide1" ref="spl0"  :options="options" class="works-art-wrap detail2">
      <splide-slide class="works-art1">
        <div class="sec1">
          <div class="subject">
            <div class="pos-a">
              <h1 class="tit">ShinhanCard MOBILE</h1>
              <p class="sub-txt"><span>PARTNER</span> <span class="plus">+</span> <span>신한카드</span></p>
            </div>
          </div>
          <div class="info">
            <div class="date"><b>DATE.</b> 2017 S/S</div>
            <div class="output"><b>OUTPUT.</b> MOBILE WEB / MOBILE APP.</div>
          </div>
        </div>
        <div class="sec2 img-sec prj5"></div>
      </splide-slide>
      <splide-slide class="works-art2">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">OVERVIEW.</h2>
            <h3 class="tit1">새로워진 <br> 모바일 <br> 서비스</h3>
            <div class="paging"><span>1</span> <span>/</span> <span>3</span></div>
          </div>
          <div class="sec2">
            <p class="para-sec">신한카드의 하이브리드 모바일을 구성하고, 최신 트랜드에 맞는 적합한 UI/UX를 설계하였으며, <br> 편리해진 사용성에 맞게 디자인을 구성하였습니다.</p>
            <div class="img-sec"><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail04_1.png" alt="OVERVIEW"></div>
          </div>
        </div>
      </splide-slide>
      <splide-slide class="works-art3">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">CONCEPT.</h2>
            <h3 class="tit1">재미있고 <br> 심플한 <br> 구성</h3>
            <div class="paging"><span>2</span> <span>/</span> <span>3</span></div>
          </div>
          <div class="sec2">
            <p class="para-sec">홈페이지와 어플리케이션이 동일한 사용경험을 할 수 있는 하이브리드 모바일을 구축 하였습니다. <br> 유저의 편의성을 제공하고, 딱딱했던 금융의 이미지를 재미있고 심플하게 구성하였습니다.</p>
            <div class="img-sec"><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail04_2.png" alt="OVERVIEW"></div>
          </div>
        </div>
      </splide-slide>
      <splide-slide class="works-art4">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">SCREEN.</h2>
            <div class="tit-group-wrap">
              <div id="titGroup0" class="tit-group on">
                <h3 class="tit1">더 짧은 <br> 신청 <br> 프로세스</h3>
                <p class="s-txt">정보만 바로 입력하면 신청 가능</p>
              </div>
              <div id="titGroup1" class="tit-group">
                <h3 class="tit1">실시간 <br> 입력 <br> 오류메시지</h3>
                <p class="s-txt">실시간으로 오류 해당 위치를 안내</p>
              </div>
              <div id="titGroup2" class="tit-group">
                <h3 class="tit1">두가지 <br> 카드 <br> 비교 분석</h3>
                <p class="s-txt">카드를 비교함에 담아 혜택 비교 가능</p>
              </div>
              <div id="titGroup3" class="tit-group">
                <h3 class="tit1">내게 맞는 <br> 개인화 <br> 서비스</h3>
                <p class="s-txt">나만의 영역, 개인화 서비스 구축</p>
              </div>
            </div>
            <div class="paging"><span>3</span> <span>/</span> <span>3</span></div>
          </div>
          <div class="sec2">
            <div class="bg"></div>
            <div class="symbol"><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail04_3.png" alt="판귄"></div>
            <div class="raoud-overflow">
              <div class="splide4-wrap">
                <splide id="splide4" class="splide4" :options="options4" @splide:pagination:updated="paginationUpdated4" ref="spl4">
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail04_mobile01.png" alt="정보만 바로 입력하면 신청 가능" /></splide-slide>
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail04_mobile02.png" alt="실시간으로 오류 해당 위치를 안내" /></splide-slide>
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail04_mobile03.png" alt="카드를 비교함에 담아 혜택 비교 가능" /></splide-slide>
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail04_mobile04.png" alt="나만의 영역, 개인화 서비스 구축" /></splide-slide>
                </splide>
              </div>
            </div>
          </div>
        </div>
      </splide-slide>
   </splide>
   <div class="work-btm-fixed">
      <div class="app-group">
        <a href="https://itunes.apple.com/kr/app//id360681882" class="app1" target="_blank" title="새창">APP STORE</a>
        <span class="col">|</span>
        <a href="https://play.google.com/store/apps/details?id=com.shinhancard.smartshinhan" class="app2" target="_blank" title="새창">GOOGLE PLAY</a>
      </div>
      <div class="ctrl-group">
        <a href="/works/worksDetail4" class="prev">PREV</a>
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
