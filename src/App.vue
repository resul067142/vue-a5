<template>
  <div>
    <Header />

    <div id="container">
      <Sidebar />
      <section>
        <Navbar />

        <main>
          <!-- değişen alan -->
          <router-view />
        </main>

      </section>
      <Footer>  </Footer>
    </div>
  </div>
</template>


<script>
import Header from './shared/Header.vue';
import Sidebar from './shared/Sidebar.vue';
import Navbar from './shared/Navbar.vue';
import Footer from './shared/Footer.vue';

export default {
  components: {
    Header,
    Sidebar,
    Navbar,
    Footer
  }
}
</script>


<style lang="scss">

</style>
