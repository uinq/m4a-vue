<template>
  <section id="contents" class="works-list-sec contents">
     <div class="subject hidden">
      <h1>M4A - Works</h1>
      <p class="eng">Project List</p>
    </div>
    <div class="works-list-wrap">
      <slot v-for="(item, idx) in worksList" :key="{idx}">
        <slot v-if="item.section1">
          <article class="works-list section1">
            <div id="masonry1" class="masonry">
              <div class="item" v-for="unit in item.section1" :key="unit.type" :class="unit.type + ' ' + unit.cls">
                <slot v-if="unit.img">
                <div class="img-sec"><img :src="unit.img" :alt="unit.name" /></div>
                </slot>
                <div class="info-sec">
                  <div class="ptn">{{unit.ptn}}</div>
                  <div class="name">{{unit.name}}</div>
                  <slot v-if="unit.date">
                  <div class="date etc"><b>DATE.</b> {{unit.date}}</div>
                  <div class="kind etc"><b>OUTPUT.</b> {{unit.kind}}</div>
                  </slot>
                </div>
                <slot v-if="unit.url">
                <a :href="unit.url" class="link-block"><span>자세히 보기</span></a>
                </slot>
              </div>
            </div>
          </article>
        </slot>
        <slot v-else>
          <article class="works-list section2">
            <div id="masonry2" class="masonry">
              <div class="item" v-for="unit in item.section2" :key="unit.type" :class="unit.type + ' ' + unit.cls">
                <div class="info-sec">
                  <div class="ptn">{{unit.ptn}}</div>
                  <div class="name">{{unit.name}}</div>
                </div>
              </div>
            </div>
          </article>
        </slot>
      </slot>
    </div>
  </section>
</template>
<script>
import { m4aworks } from '@/components/works/m4aworks.json'
import Masonry from 'masonry-layout'
export default {
  data () {
    return {
      worksList: m4aworks
    }
  },
  mounted () {
    this.masonry()
  },
  unmounted () {
  },
  methods: {
    masonry () {
      var elem1 = document.querySelector('#masonry1')
      var msnry1 = new Masonry(elem1, {
        // options
        itemSelector: '.item',
        gutter: 50
      })
      console.log()
      var elem2 = document.querySelector('#masonry2')
      var msnry2 = new Masonry(elem2, {
        // options
        itemSelector: '.item',
        gutter: 50
      })
      console.log(msnry1 + '' + msnry2)
    }

  }
}
</script>
