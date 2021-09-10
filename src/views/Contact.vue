<template>
  <section id="contents" class="contact contents">
    <div class="contact-art-wrap">
      <article class="contact-art1">
        <h1>서울시 서초구 <br /> 신반포로 304 H1빌딩 <br /> 미디어포스얼라이언스</h1>
        <p class="eng">Media4th Alliance, inc. H1 Bldg, <br /> 304, Shinbanpo-ro, Seocho-gu, Seoul, Korea</p>
        <div class="info">
          <p class="tel"><b>TEL.</b> 02. 536. 0518</p>
          <p class="fax"><b>FAX.</b> 02. 536. 0578</p>
        </div>
        <div class="brochure"><a class="btn-brochure" href="http://www.m4a.co.kr/upload/brochure/M4A_Brochure_2018_01.pdf" target="_blank" title="새창">COMPANY BROCHURE</a></div>
      </article>
      <article class="contact-art2">
        <div id="m4aMap" class="m4a-map"></div>
      </article>
   </div>
</section>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    if (window.kakao && window.kakao.maps) {
      this.initMap()
    } else {
      const script = document.createElement('script')
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap)
      script.src =
        'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=8ed8b918e8cc516006a162814d55a9fd'
      document.head.appendChild(script)
    }
  },
  unmounted () {
  },
  methods: {
    initMap () {
      var mapContainer = document.getElementById('m4aMap') // 지도를 표시할 div
      var mapOption = {
        center: new kakao.maps.LatLng(37.50968, 127.01715), // 지도의 중심좌표
        level: 2 // 지도의 확대 레벨
      }
      var map = new kakao.maps.Map(mapContainer, mapOption)
      var imageSrc = '/images/mapin.png' // 마커이미지의 주소입니다
      var imageSize = new kakao.maps.Size(68, 24) // 마커이미지의 크기입니다
      var imageOption = { offset: new kakao.maps.Point(2, 26) } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
      var markerPosition = new kakao.maps.LatLng(37.50960, 127.01720)
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage
      })
      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map)
      // dd
      function reLay () {
        map.relayout()
      }
      function setCenter () {
        var moveLatLon = new kakao.maps.LatLng(37.50960, 127.01720)
        map.setCenter(moveLatLon)
      }
      window.addEventListener('resize', function () {
        setCenter()
        reLay()
      })
    }
  }
}
</script>
