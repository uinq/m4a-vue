<template>
    <header id="header" class="header" :class="{ on : headerActive }">
        <div id="logo" class="logo"><router-link @click="closeNav" to="/">미디어포스 얼라이언스</router-link></div>
        <a href="#nav" class="btn-nav" :class="{ on : headerActive }" @click="navToggle"><span>메뉴</span></a>
        <nav id="nav" class="nav">
            <ul>
            <li class="nav-item"><router-link class="nav-link" to="/works" @click="closeNav">WORKS</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/about" @click="closeNav">ABOUT M4A</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/contact" @click="closeNav">CONTACT</router-link></li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
  data () {
    return {
      headerActive: false
    }
  },
  methods: {
    navToggle (e) {
      e.preventDefault()
      const footSale = document.querySelector('.sales-inquiry').classList
      if (this.headerActive === true) {
        this.headerActive = false
        footSale.remove('on')
      } else {
        this.headerActive = true
        footSale.add('on')
      }
    },
    closeNav () {
      const footSale = document.querySelector('.sales-inquiry').classList
      this.headerActive = false
      footSale.remove('on')
    }
  }
}
</script>
