<template>
  <Header />
  <main id="container" class="container">
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'App',
  components: {
    Header, Footer
  }
}
</script>
