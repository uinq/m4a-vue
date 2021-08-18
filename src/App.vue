<template>
  <header id="header" class="header">
    <div id="logo" class="logo"><router-link to="/">미디어포스 얼라이언스</router-link></div>
    <a href="#gnb" class="btn-nav">메뉴열기</a>
    <nav id="nav" class="nav">
      <ul>
        <li class="nav-item"><router-link class="nav-link" to="/works">WORKS</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/about">ABOUT M4A</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/contact">CONTACT</router-link></li>
      </ul>
    </nav>

  </header>
  <main id="container" class="container">
    <router-view />
  </main>

  <footer id="footer" class="footer">
    <div class="sales-inquiry">
      <h2 class="tit">영업문의</h2>
      <div id="salesInquiry" class="detail">
        <p class="email"><a href="mailto:jinny@m4a.co.kr">jinny@m4a.co.kr</a></p>
        <p class="tel">02.536.0518(161)</p>
        <button class="btn-copy">COPY</button>
      </div>
    </div>
    <address>ⓒ MEDIA4TH ALLIANCE CO., LTD.</address>
  </footer>
</template>
