<template>
  <header id="nav" class="header">
    <div class="logo"><router-link to="/">미디어포스 얼라이언스</router-link></div>
    <button class="btn-nav">링크열기</button>
    <nav class="nav">
      <router-link class="nav-link1" to="/works">WORKS</router-link>
      <router-link class="nav-link2" to="/about">ABOUT M4A</router-link>
      <router-link class="nav-link3" to="/contact">CONTACT</router-link>
    </nav>
    <div class="util-ask">
      <dl class="detail">
        <dt>영업문의</dt>
        <dd>
          <div class="email">jinny@m4a.co.kr <button class="btn-copy">COPY</button></div>
          <div class="tel">02.536.0518(161)</div>
        </dd>
      </dl>
    </div>
  </header>
  <main id="container" class="container">
    <router-view />
  </main>

  <footer><address>ⓒ MEDIA4TH ALLIANCE CO., LTD.</address></footer>
</template>
