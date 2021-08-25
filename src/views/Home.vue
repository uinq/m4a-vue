<template>
  <section id="contents" class="home contents">
    <article class="home-art1">
      <div class="home-subject">
        <h1 class="home-tit1">OUR CREATIVE <br /> TO YOUR LEGEND.</h1>
        <p class="home-txt1">Brand Trend Consulting &amp; Design Partner</p>
        <p class="brochure"><a href="http://www.m4a.co.kr/upload/brochure/M4A_Brochure_2018_01.pdf" target="_blank" title="새창">COMPANY BROCHURE</a></p>
      </div>
      <div class="home-view-more">
        <a href="#homeMore" class="btn-home-more">VIEW MORE? <br /> THEN, <br /> SCROLL DOWN OR ↓ ARROW.</a>
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
                <div class="txt1">{{plist.prj}}</div>
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
            <a href="#" class="btn-all-project">VIEW ALL PROJECT</a>
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
  }
}
</script>
