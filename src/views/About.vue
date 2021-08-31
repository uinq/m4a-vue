<template>
  <section id="contents" class="about contents">
    <div class="hidden">
       <h1>About M4A</h1>
       <p>4BRAND TREND CONSULTING &amp; DESIGN PARTNER</p>
    </div>
    <div class="about-art-wrap">
        <article id="aboutArt1" class="about-art1">
          <div class="subject">
            <h2 class="tit">OUR CREATIVE <br class="pc-hide" /> TO YOUR LEGEND.</h2>
            <p class="sub-txt">BRAND TREND CONSULTING &amp; DESIGN PARTNER</p>
          </div>
          <div class="home-view-more">
            <button @click="goDown" class="btn-home-more">VIEW MORE? <br /> THEN, <br /> SCROLL DOWN <span class="hidden"><br /> or <br /> ↓ ARROW.</span></button>
            <div class="ani-arrow"></div>
          </div>
        </article>
        <article id="aboutArt2" class="about-art2">
          <div class="art-tpl">
            <div class="subject">
              <h2 class="tit">Long-term Partnership.</h2>
              <p class="sub-txt">M4A는 고객사와 인연을 맺으면 장기적인 Relationship을 맺어 높은 신뢰를 바탕으로 한 Long-term Partnership을 지향하고 M4A만의 Management Rule을 통하여 차별화된 업무수행 능력을 보유하고 있습니다.</p>
            </div>
            <div class="process">
              <div class="step1">
                <h3 class="tit">Trend Consulting</h3>
                <p class="sub-txt">국내외 업계의 최신동향을 파악하고 적용할 수 있는 환경이 되도록 지속적인 트렌드 컨설팅과 리포트 제공</p>
              </div>
              <div class="step2">
                <h3 class="tit">Business Insight</h3>
                <p class="sub-txt">다양하고 정확한 솔루션을 통해 고객의 사업 성공을 위한 인사이트 제공</p>
              </div>
              <div class="step3">
                <h3 class="tit">One-Stop Management</h3>
                <p class="sub-txt">전담 사업 관리 담당자를 통한 영업 + 수행의 One-Stop 관리로 빠르고 효율적인 업무진행</p>
              </div>
            </div>
          </div>
          <div class="home-view-more">
            <button @click="goDown" class="btn-home-more">VIEW MORE? <br /> THEN, <br /> SCROLL DOWN <span class="hidden"><br /> or <br /> ↓ ARROW.</span></button>
            <div class="ani-arrow"></div>
          </div>
        </article>
        <article  id="aboutArt3" class="about-art3">
          <div class="art-tpl">
            <div class="subject">
              <h2 class="tit">One-Stop Process</h2>
              <p class="sub-txt">온·오프라인을 융합한 전략적 컨설팅 및 최적화된 UX/UI 설계로 <br /> Creative 결과물을 도출하는 One-Stop Process 를 갖추고 있습니다.</p>
            </div>
            <div class="process">
              <div class="step1">
                <h3 class="tit">i Consulting Group</h3>
                <ul class="sub-txt">
                  <li>Strategy Consulting</li>
                  <li>Sales &amp; Proposal</li>
                </ul>
              </div>
              <div class="step2">
                <h3 class="tit">UX Lab</h3>
                <ul class="sub-txt">
                  <li>UX Consulting</li>
                  <li>UX Research/ Planning</li>
                  <li>UX/ Interaction Design</li>
                  <li>UX Prototyping</li>
                </ul>
              </div>
              <div class="step3">
                <h3 class="tit">Project Group</h3>
                <ul class="sub-txt">
                  <li>Strategy/ UI Planning</li>
                  <li>Creative Design</li>
                  <li>Publishing/ Interaction Scripting</li>
                  <li>Web/ Mobile/ App Development</li>
                </ul>
              </div>
              <div class="step4">
                <h3 class="tit">AD MKT Group</h3>
                <ul class="sub-txt">
                  <li>Account Executive</li>
                  <li>Account Planning</li>
                  <li>Media Planning</li>
                  <li>Creative Design</li>
                </ul>
              </div>
              <div class="step5">
                <h3 class="tit">IT Design Lab</h3>
                <ul class="sub-txt">
                  <li>IT Device Design</li>
                  <li>Digital Signage Construction</li>
                  <li>Film Making</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="home-view-more on">
            <button @click="goUp" class="btn-home-more">GO TO TOP? <br /> THEN, <br /> CLICK HERE. </button>
            <div class="ani-arrow"></div>
          </div>
        </article>
   </div>
  </section>
</template>
<script>
// 위치변수
var aboutTpos = 0
var aboutWh = 0
var aboutTimer = null

export default {
  data () {
    return {
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollEnd)
  },
  unmounted () {
    window.removeEventListener('scroll', this.scrollEnd)
  },
  methods: {
    // 화면번호
    getItemIdx () {
      aboutTpos = window.scrollY
      aboutWh = window.outerHeight
      if (aboutTpos < document.querySelector('#aboutArt2').offsetTop - aboutWh + document.querySelector('#aboutArt1').clientHeight / 2) {
        return 1
      } else if (aboutTpos >= document.querySelector('#aboutArt2').offsetTop - aboutWh + document.querySelector('#aboutArt1').clientHeight / 2 && aboutTpos < document.querySelector('#aboutArt3').offsetTop - aboutWh + document.querySelector('#aboutArt2').clientHeight / 2) {
        return 2
      } else if (aboutTpos >= document.querySelector('#aboutArt3').offsetTop - aboutWh + document.querySelector('#aboutArt3').clientHeight / 2) {
        return 3
      }
    },
    // 동작
    artMove (idx) {
      this.animteScrollTo('#aboutArt' + idx)
    },
    // scollEnd
    scrollEnd () {
      const $this = this
      if (aboutTimer !== null) {
        clearTimeout(aboutTimer)
        aboutTimer = null
      }
      aboutTimer = setTimeout(function () {
        $this.artMove($this.getItemIdx())
      }, 700)
    },
    goDown () {
      this.artMove(this.getItemIdx() + 1)
    },
    goUp () {
      this.artMove(this.getItemIdx() - 2)
    },
    animteScrollTo (_selector, _duration, _adjust) {
      const targetEle = document.querySelector(_selector)
      if (!targetEle) return
      _duration = 400
      const scrollEle = document.documentElement || window.scrollingElement
      const currentY = scrollEle.scrollTop
      const targetY = targetEle.offsetTop - (_adjust || 0)
      const flagUD = currentY > targetY ? 'up' : 'down'
      animateScrollTo(currentY, targetY, _duration, flagUD)
      function animateScrollTo (_startY, _endY, _duration, flag) {
        const unitY = (targetY - currentY) / _duration
        const startTime = new Date().getTime()
        // const endTime = new Date().getTime() + _duration
        var timeout = null
        const scrollTo = function () {
          const now = new Date().getTime()
          const passed = now - startTime
          if (scrollEle.scrollTop < targetY && flag === 'down') {
            scrollEle.scrollTop = currentY + (unitY * passed)
            timeout = setTimeout(scrollTo, 0)
          } else if (scrollEle.scrollTop > targetY && flag === 'up') {
            scrollEle.scrollTop = currentY + (unitY * passed)
            timeout = setTimeout(scrollTo, 0)
          } else {
            clearTimeout(timeout)
            // console.log('End off.')
          }
        }
        requestAnimationFrame(scrollTo)
      }
    }
  }
}
</script>
