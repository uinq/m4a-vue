<template>
    <!-- <div class="home-layer1">
      <img src="http://www.m4a.co.kr/m4a_2019/images/common/pop_result.png" />
    </div> -->
    <div id="homeLayer1" class="home-layer">
      <div class="pop-conts">
        <div class="pop-head">
          <h2 class="tit">경력직 상시 채용 안내</h2>
          <p class="para">Fin UX 전문 에이전시, M4A에서 <br /> 언택트 시대에 함께할 유능한 인재를 모십니다.</p>
        </div>
        <div class="pop-body">
          <h3 class="p-tit1"><span>고용형태</span></h3>
          <p class="p-txt1">정규직 (해당 경력 2년 이상)</p>
          <h3 class="p-tit1"><span>모집부문</span></h3>
          <ul class="p-txt1">
            <li>UI/UX 기획자 및 프로젝트 PM</li>
            <li>UI/UX 디자이너</li>
            <li>UI/UX 퍼블리셔 및 Front-End 스크립터</li>
          </ul>
          <div class="btn-area">
            <a href="https://www.jobkorea.co.kr/Recruit/GI_Read/35336880?Oem_Code=C1" class="btn-pop1" target="_blank" title="새창">잡코리아에서 입사지원하기</a>
          </div>
        </div>
      </div>
      <div class="pop-foot">
        <button id="closeLS" class="pop-close2" role="button" @click="HomePopLS()">오늘 하루 열지 않기</button>
      </div>
      <button class="pop-close1" @click="closePop()"></button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      popupActive: true
    }
  },
  mounted () {
    this.checkHomePopLS()
  },
  methods: {
    closePop () {
      document.querySelector('#homeLayer1').style.display = 'none'
    },
    setHomePopLS (a, b) {
      localStorage.setItem(a, b)
    },
    getHomePopLS (a) {
      return localStorage.getItem(a)
    },
    checkHomePopLS () {
      var showDate = new Date()
      var getDate = this.getHomePopLS('homePopSetDate')
      var CompareDate = new Date(getDate)
      if (getDate === undefined || getDate === null || CompareDate.getTime() <= showDate.getTime()) {
        document.querySelector('#homeLayer1').style.display = 'block'
      }
    },
    HomePopLS () {
      var showDate = new Date()
      showDate.setDate(showDate.getDate() + 2)
      this.setHomePopLS('homePopSetDate', showDate)
      document.querySelector('#homeLayer1').style.display = 'none'
    }
  }
}
</script>
