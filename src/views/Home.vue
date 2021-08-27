<template>
  <section id="contents" class="home contents">
    <article class="home-art1">
      <div class="home-subject">
        <h1 class="home-tit1">OUR CREATIVE <br /> TO YOUR LEGEND.</h1>
        <p class="home-txt1">Brand Trend Consulting &amp; Design Partner</p>
        <p class="brochure"><a class="com-brochure" href="http://www.m4a.co.kr/upload/brochure/M4A_Brochure_2018_01.pdf" target="_blank" title="새창">COMPANY BROCHURE</a></p>
      </div>
      <div class="home-view-more">
        <a href="#homeMore" class="btn-home-more">VIEW MORE? <br /> THEN, <br /> SCROLL DOWN <span class="hidden"><br /> or <br /> ↓ ARROW.</span></a>
        <div class="ani-arrow"></div>
      </div>
    </article>

    <article id="homeSwiper" class="home-art3">
      <HomeSwiper />
    </article>

    <article id="homeMore" class="home-art2">
      <div class="prj-list">
        <ul>
          <li v-for="plist in homeMoreList" :key="plist.cls">
            <slot v-if="plist.url === 'none'">
              <div class="item">
                <div class="txt1">{{plist.ptn}}</div>
                <div class="txt2">{{plist.prj}}</div>
              </div>
            </slot>
            <slot v-else>
              <a :href="plist.url" class="item">
                <div class="txt1">{{plist.ptn}}</div>
                <div class="txt2">{{plist.prj}}</div>
              </a>
            </slot>
          </li>
          <li>
            <a href="#" class="btn-all-project">VIEW <br class="pc-hide" /> ALL PROJECT</a>
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>

<script>
import HomeSwiper from '@/components/home/HomeSwiper.vue'
import { prjList } from '@/components/home/HomeData.json'
export default {
  name: 'Home',
  components: {
    HomeSwiper
  },
  data () {
    return {
      homeMoreList: prjList
    }
  },
  mounted () {
    // 마우스휠 이벤트 마운트
    window.addEventListener('wheel', this.whiteMode)
    // 키다운 이벤트 마운트
    window.addEventListener('keydown', this.whiteMode)
  },
  unmounted () {
    document.querySelector('#m4aVueApp').classList.remove('white-mode')
    // 이벤트 리스너 삭제
    window.removeEventListener('wheel', this.whiteMode)
    window.removeEventListener('keydown', this.whiteMode)
  },
  methods: {
    whiteMode (e) {
      if (e.deltaY < 0 || e.keyCode === 38) {
        document.querySelector('#m4aVueApp').classList.remove('white-mode')
      } else if (e.deltaY > 0 || e.keyCode === 40) {
        document.querySelector('#m4aVueApp').classList.add('white-mode')
      }
    }
  }
}
</script>
