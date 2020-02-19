<template>
  <div class="header">
    <div
      v-for="(data, i) in slideData"
      :key="i"
      :style="{transform: i === 0 ? 'translateX(0%)' : 'translateX(100%)', backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${data.img})`}"
      class="header-slide"
    >
      <HeaderContent />
    </div>
    <!-- <span @click="goLeft" class="controle controle--left">
      <img src="/arrow.svg" />
    </span> -->
    <!-- <span @click="goRight" class="controle controle--right">
      <img src="/arrow.svg" />
    </span> -->
  </div>
</template>

<script>
import { TweenLite, TimelineLite, Power4, Power0 } from "gsap";
import HeaderContent from "./HeaderContent";

export default {
  components: { HeaderContent },
  data() {
    return {
      slideData: [{ img: "/1.jpeg" }, { img: "/1.jpeg" }],
      activeSlide: 0,
      heading1: [],
      heading2: [],
      heading3: [],
      btnContainers: [],
      slides: [],
      svgContainers: [],
      timelines: []
    };
  },
  mounted() {
    this.slides = document.querySelectorAll(".header-slide");
    this.heading1 = document.querySelectorAll(".heading--1");
    this.heading2 = document.querySelectorAll(".heading--2");
    this.heading3 = document.querySelectorAll(".heading--3");
    this.btnContainers = document.querySelectorAll(".btn-container");
    this.svgContainers = document.querySelectorAll(".svg-main-container");
    this.svgContainers.forEach(item => {
      this.timelines.push(new TimelineLite());
    });
  },
  methods: {
    goRight() {
      if (this.activeSlide === this.slideData.length - 1) return;
      this.activeSlide = this.activeSlide + 1;
      TweenLite.to(this.slides[this.activeSlide], 1, { x: "0%" });
      TweenLite.to(this.slides[this.activeSlide - 1], 1, {
        x: "-100%"
      });
    },
    goLeft() {
      if (this.activeSlide === 0) return;
      TweenLite.to(this.slides[this.activeSlide], 1, { x: "100%" });
      TweenLite.to(this.slides[this.activeSlide - 1], 1, {
        x: "0%"
      });
      this.activeSlide = this.activeSlide - 1;
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 700px;
  position: relative;
  overflow: hidden;
  /* cursor: none; */
}

.header-slide {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-transform: uppercase;
}

.controle {
  position: absolute;
  top: 50%;
  padding: 1rem;
  transform: translateY(-50%);
  display: block;
  z-index: 10;
  cursor: pointer;
}

.controle img {
  height: 2rem;
}

.controle--left {
  left: 5rem;
}

.controle--right {
  right: 5rem;
}

.controle--left img {
  transform: rotate(180deg);
}


@media only screen and (max-width: 600px) {

  .header{
    height:380px!important
  }
}

</style>
