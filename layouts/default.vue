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
html,
body {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
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

/* Slick Fix */

.slick-track {
  display: flex;
}

.slick-list {
  overflow: hidden;
}

.slick-prev:before, .slick-next:before{
  color: black!important
}

.slick-slider.slick-initialized{
  position: relative;
}

.middle {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-flow: column;
}

@font-face {
  font-family: "Light";
  src: url("~static/fonts/tcf_regular.ttf");

  font-weight: normal;
  font-style: normal;
}

.nuxt-link-exact-active.nuxt-link-active {
  color: #fdb06c !important;
}


.header-carousel .VueCarousel-pagination {
  position: absolute;
  bottom: 20px;
}

.VueCarousel-pagination {
  display: none;
}

hr {
  height: 1px;
  border: none;
  color: #000;
  background-color: #000;
}

.navbar-padding {
  padding-top: 60px;
}

.no-padd {
  padding: 0 !important;
}

@font-face {
  font-family: "Light";
  src: url("~static/fonts/regular.woff");

  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Bold";
  src: url("~static/fonts/bold.woff");

  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
}

html,
body,
button,
input,
select,
textarea {
  font-family: "Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif !important;
}
html {
  font-family: "Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html,
body {
  min-width: 360px;
}

.h-100 {
  height: 100%;
}

.w-100 {
  width: 100%;
}

.underline span {
  position: relative;
  width: 100%;
}

.underline {
  padding: 14px 0;
}

.underline span::after {
  /* border-bottom: 3px solid #4a4a4a;
  height: 54px;
  width: 10%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  content: ""; */

  height: 4px;
  width: 78px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -15px;
  margin: auto;
  content: "";
  background: rgb(158, 123, 95); /* fallback for old browsers */
  background: linear-gradient(to right, rgb(158, 123, 95), rgb(158, 123, 95));
}

.underline.right span::after {
  height: 4px;
  width: 78px;
  position: absolute;
  right: 0 !important;
  left: initial;
  bottom: -15px;
  margin: auto;
  z-index: -1;
  content: "";
  background: #b71c1c;
  background: linear-gradient(to right, #b71c1c, #b71c1c);
}

.underline span.white::after {
  border-bottom: 3px solid white;
}

.hide {
  display: none;
}

.opacity-hide {
  opacity: 0;
  visibility: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.flex {
  display: flex;
}

.justify-space-between {
  justify-content: space-between;
}

.align-items-center {
  align-items: center;
}

ul {
  list-style: none;
  padding-inline-start: 0;
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + label {
  position: relative;
  padding: 0px 28px;
  /*padding: 3px 7px 3px 22px;*/
  cursor: pointer;
  font-size: 12px;
  line-height: 23px;
  display: inline-block;
  color: #000;
  font-weight: bold;
  letter-spacing: 0.2px;
}

[type="radio"]:not(:checked) + label {
  position: relative;
  padding: 0px 28px;
  cursor: pointer;
  font-size: 12px;
  line-height: 23px;
  display: inline-block;
  color: #000;
  font-weight: bold;
  letter-spacing: 0.2px;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "";
  width: 12px;
  height: 12px;
  background: #1f1f1f;
  position: absolute;
  top: 3px;
  left: 3px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

label {
  padding: 5px 0;
  font-size: 12px;
  font-weight: bold;
}

input[type="text"],
input[type="email"] {
  outline: 0;
  border: 1px solid #e8e8e8;
  padding: 5px;
  border-radius: 2px;
}
</style>
