<template>
    <header id="header" class="header">
        <div id="logo" class="logo"><router-link to="/">미디어포스 얼라이언스</router-link></div>
        <a href="#nav" class="btn-nav" @click="navToggle"><span>메뉴</span></a>
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
  methods: {
    navToggle (e) {
      e.preventDefault()
      if (e.target.classList.contains('on')) {
        e.target.classList.remove('on')
        document.querySelector('#header').classList.remove('on')
        document.querySelector('.sales-inquiry').classList.remove('on')
      } else {
        e.target.classList.add('on')
        document.querySelector('#header').classList.add('on')
        document.querySelector('.sales-inquiry').classList.add('on')
      }
    },
    closeNav () {
      document.querySelector('.btn-nav').classList.remove('on')
      document.querySelector('#header').classList.remove('on')
      document.querySelector('.sales-inquiry').classList.remove('on')
    }
  }
}
</script>
