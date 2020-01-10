<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
html, body {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #000;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}



@font-face {
  font-family: "Light";
  src: url("~static/fonts/tcf_regular.ttf");

  font-weight: normal;
  font-style: normal;
}

.header-carousel .VueCarousel-pagination{
  position: absolute;
    bottom: 20px;
}

</style>
