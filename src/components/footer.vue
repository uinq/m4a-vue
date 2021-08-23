<template>
<footer id="footer" class="footer">
  <div class="sales-inquiry">
    <div id="salesInquiryWrap" class="inner-wrap" :class="{ on : saleInActive }">
      <h2 class="tit">영업문의.</h2>
      <button class="btn-sales-detail" @click="salesDetail"><span class="hidden" >이메일 전화번호 보기</span></button>
      <div id="salesInquiry" class="detail">
        <p id="salesEmail" class="email"><a href="mailto:jinny@m4a.co.kr">jinny@m4a.co.kr</a></p>
        <button class="btn-copy" @click="copyText">COPY</button>
        <p class="tel"><a href="tel:025360518">02.536.0518(161)</a></p>
        <p class="brochure"><a href="http://www.m4a.co.kr/upload/brochure/M4A_Brochure_2018_01.pdf" target="_blank" title="새창">COMPANY BROCHURE</a></p>
      </div>
    </div>
  </div>
  <address>ⓒ MEDIA4TH ALLIANCE CO., LTD.</address>
</footer>
</template>
<script>
export default {
  data () {
    return {
      saleInActive: false
    }
  },
  methods: {
    salesDetail () {
      this.saleInActive === true ? this.saleInActive = false : this.saleInActive = true
    },
    // copy to clipboard
    copyText () {
      var textArea
      var textToCopy = document.querySelector('#salesEmail').innerText
      function isOS () {
        return navigator.userAgent.match(/ipad|iphone/i)
      }
      function createTextArea (text) {
        textArea = document.createElement('textArea')
        textArea.readOnly = true
        textArea.contentEditable = true
        textArea.value = text
        document.body.appendChild(textArea)
      }
      function selectText () {
        var range, selection
        if (isOS()) {
          range = document.createRange()
          range.selectNodeContents(textArea)
          selection = window.getSelection()
          selection.removeAllRanges()
          selection.addRange(range)
          textArea.setSelectionRange(0, 999999)
        } else {
          textArea.select()
        }
      }
      function copyTo () {
        document.execCommand('copy')
        document.body.removeChild(textArea)
        alert('복사되었습니다.')
      }
      createTextArea(textToCopy)
      selectText()
      copyTo()
    }
  }
}
</script>
