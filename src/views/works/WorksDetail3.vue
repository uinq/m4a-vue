<template>
  <section id="contents" class="works contents">
    <splide id="splide1" ref="spl0"  :options="options" class="works-art-wrap detail1">
      <splide-slide class="works-art1">
        <div class="sec1">
          <div class="subject">
            <div class="pos-a">
              <h1 class="tit">ShinhanCard ONLINE Maintenance</h1>
              <p class="sub-txt"><span>PARTNER</span> <span class="plus">+</span> <span>신한카드</span></p>
            </div>
          </div>
          <div class="info">
            <div class="date"><b>DATE.</b> 2016 ~ 현재 진행중</div>
            <div class="output"><b>OUTPUT.</b> PC WEB / MOBILE WEB / MOBILE APP.</div>
          </div>
        </div>
        <div class="sec2 img-sec prj3"></div>
      </splide-slide>
      <splide-slide class="works-art2">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">OVERVIEW.</h2>
            <h3 class="tit1">전사 <br> 디지털 채널 <br> 운영</h3>
            <div class="paging"><span>1</span> <span>/</span> <span>4</span></div>
          </div>
          <div class="sec2">
            <p class="para-sec">M4A에서는 신한카드 전사 디지털 채널을 운영을 하고 있으며 신한카드 운영 파트, 올댓 쇼핑 운영파트로 구분하여 운영을 하고 있으며, <br> 2016년부터 현재까지 장기간 partnership을 유지하고 있습니다.</p>
            <div class="img-sec"><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail05_1.png" alt="OVERVIEW"></div>
          </div>
        </div>
      </splide-slide>
      <splide-slide class="works-art3">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">CONCEPT.</h2>
            <h3 class="tit1">금융 <br> 디지털 트렌드 <br> 반영</h3>
            <div class="paging"><span>2</span> <span>/</span> <span>4</span></div>
          </div>
          <div class="sec2">
            <p class="para-sec">신한카드 운영은 단순 operation 뿐만 아니라 최신 금융 디지털 트렌드의 상시적인 분석을 통해 UI/UX 컨설팅을 제공하고 있습니다. <br> 전문 일러스트레이터를 통해 신한카드 디지털 채널의 그래픽 element의 가이드를 관리하고 있으며, 전문 웹 카피라이터를 통해 사용자에게 고품질의 서비스를 제공하고 있습니다.</p>
            <div class="img-sec"><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail05_2.png" alt="OVERVIEW"></div>
          </div>
        </div>
      </splide-slide>
      <splide-slide class="works-art4 type1">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">SCREEN.</h2>
            <div class="tit-group-wrap">
              <div id="titGroup0" class="tit-group on">
                <h3 class="tit1">신한카드 <br> 대표 <br> 홈페이지</h3>
                <p class="s-txt">카드 서비스 조회, 신청, 혜택 등 제공</p>
              </div>
              <div id="titGroup1" class="tit-group">
                <h3 class="tit1">신한카드 <br> 올댓 <br> 쇼핑</h3>
                <p class="s-txt">새로워진 쇼핑 트렌드 제공</p>
              </div>
            </div>
            <div class="paging"><span>3</span> <span>/</span> <span>4</span></div>
          </div>
          <div class="sec2">
            <div class="splide2-wrap">
              <splide id="splide2" class="splide2" :options="options2" ref="spl1">
                <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail05_mobile01.png" alt="카드 서비스 조회, 신청, 혜택 등 제공" /></splide-slide>
                <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail05_mobile02.png" alt="새로워진 쇼핑 트렌드 제공" /></splide-slide>
              </splide>
            </div>
            <div class="splide3-wrap">
              <splide id="splide3" class="splide3" :options="options3" ref="spl2"
              @splide:pagination:updated="paginationUpdated3">
                <splide-slide>
                  <p class="txt">카드 서비스 조회, 신청, 혜택 등 제공</p>
                  <img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail05_pc01.png" alt="카드 서비스 조회, 신청, 혜택 등 제공" />
                </splide-slide>
                <splide-slide>
                  <p class="txt">새로워진 쇼핑 트렌드 제공</p>
                  <img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail05_pc02.png" alt="새로워진 쇼핑 트렌드 제공" />
                </splide-slide>
              </splide>
            </div>
          </div>
        </div>
      </splide-slide>
      <splide-slide class="works-art4 type2 fan">
        <div class="art-tpl">
          <div class="sec1">
            <h2 class="tit">SCREEN.</h2>
            <div class="tit-group-wrap">
              <div id="titGroup0" class="tit-group on">
                <h3 class="tit1">신한 <br> 페이판 <br> APP</h3>
                <p class="s-txt">카드 서비스 조회, 신청, 혜택 등 제공</p>
              </div>
              <div id="titGroup1" class="tit-group">
                <h3 class="tit1">신한 <br> 페이판 <br> APP</h3>
                <p class="s-txt">새로워진 쇼핑 트렌드 제공</p>
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
            <div class="paging"><span>4</span> <span>/</span> <span>4</span></div>
          </div>
          <div class="sec2">
            <div class="bg"></div>
            <div class="symbol"><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail04_3.png" alt=""></div>
            <div class="raoud-overflow">
              <div class="splide4-wrap">
                <splide id="splide4" class="splide4" :options="options4" @splide:pagination:updated="paginationUpdated4" ref="spl4" >
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail05_mobile03.png" alt="카드 서비스 조회, 신청, 혜택 등 제공" /></splide-slide>
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail05_mobile04.png" alt="새로워진 쇼핑 트렌드 제공" /></splide-slide>
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail05_mobile05.png" alt="사용자가 편리한 방법을 선택할 수 있도록 제공" /></splide-slide>
                  <splide-slide><img src="http://www.m4a.co.kr/m4a_2019/images/sub/img_work_detail05_mobile06.png" alt="신청단계를 이어서 진행이 가능하도록 서비스를 구축" /></splide-slide>
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
        <a href="/worksDetail2" class="prev">PREV</a>
        <a href="/works" class="list">list</a>
        <a href="/worksDetail4" class="next">NEXT</a>
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
      },
      options4: {
        type: 'loop',
        perPage: 1,
        rewind: true
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
    paginationUpdated4 () {
      var s3Idx = this.$refs.spl4.index
      document.querySelector('.fan .tit-group.on').classList.remove('on')
      document.querySelector('.fan #titGroup' + (s3Idx)).classList.add('on')
      document.querySelector('#splideLine').style.width = this.$refs.spl4.index + (this.$refs.spl4.index * Math.ceil(100 / (this.$refs.spl4.length - 1))) + '%'
    },
    paginationUpdated3 () {
      var s3Idx = this.$refs.spl2.index
      document.querySelector('.tit-group.on').classList.remove('on')
      document.querySelector('#titGroup' + (s3Idx)).classList.add('on')
      document.querySelector('#splideLine').style.width = this.$refs.spl2.index + (this.$refs.spl2.index * Math.ceil(100 / (this.$refs.spl2.length - 1))) + '%'
    },
    mouseWheel (e) {
      if (this.$refs.spl0.index === this.$refs.spl0.length - 1 && e.deltaY < 0 && this.$refs.spl4.index === 0) {
        document.querySelector('#splide1').querySelectorAll('.splide__arrow--prev')[0].click()
      } else if (this.$refs.spl0.index === this.$refs.spl0.length - 2 && e.deltaY < 0 && this.$refs.spl2.index === 0) {
        document.querySelector('#splide1').querySelectorAll('.splide__arrow--prev')[0].click()
      } else if (this.$refs.spl0.index === this.$refs.spl0.length - 2 && e.deltaY > 0 && this.$refs.spl2.index === 1) {
        document.querySelector('#splide1').querySelectorAll('.splide__arrow--next')[0].click()
      } else if (this.$refs.spl0.index < this.$refs.spl0.length - 2) {
        if (e.deltaY < 0) {
          document.querySelector('#splide1').querySelectorAll('.splide__arrow--prev')[0].click()
        } else if (e.deltaY > 0) {
          document.querySelector('#splide1').querySelectorAll('.splide__arrow--next')[0].click()
        }
      } else if (this.$refs.spl0.index === this.$refs.spl0.length - 2) {
        if (e.deltaY < 0) {
          document.querySelector('#splide3').querySelectorAll('.splide__arrow--prev')[0].click()
        } else if (e.deltaY > 0) {
          document.querySelector('#splide3').querySelectorAll('.splide__arrow--next')[0].click()
        }
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
