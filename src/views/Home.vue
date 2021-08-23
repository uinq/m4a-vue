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
    <article id="homeMore" class="home-art2">2</article>
    <article id="homeSwiper" class="home-art3">
      <HomeSwiper />
    </article>
  </section>
</template>

<script>
import HomeSwiper from '@/components/HomeSwiper.vue'
export default {
  name: 'Home',
  components: {
    HomeSwiper
  }
}
</script>
