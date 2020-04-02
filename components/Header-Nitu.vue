<template>
  <div class="header">
    <HeaderContent
      style="position: absolute;z-index: 99;left: 0;right: 0;margin: auto;top: 0;bottom: 0;"
    />

    <VueSlickCarousel class="homepageSlider"
      v-if="HomepageSliderImages && HomepageSliderImages.length > 1"
      v-bind="sliderSettings"
      ref="carousel"
    >
      <div v-for="p in HomepageSliderImages" :key="p.id">
        <img class="d-block w-100 img1" :src="p.image" alt="First slide" />
      </div>
    </VueSlickCarousel>
    <!-- <client-only>
      <carousel
        class=""
        :per-page="1"
        :autoplay="true"
        :mouse-drag="true"
        :navigationEnabled="true"
        paginationColor="#e91e63"
        paginationActiveColor="#ffffff"
      >
        <slide v-for="p in HomepageSliderImages" :key="p.id">
          <img class="d-block w-100 img1" :src="p.image" alt="First slide" />
        </slide>
      </carousel>
    </client-only>-->
  </div>
</template>

<script>
import { mapState } from "vuex";

import { TweenLite, TimelineLite, Power4, Power0 } from "gsap";
import HeaderContent from "./HeaderContent";

export default {
  components: { HeaderContent },
  data() {
    return {
      slideData: [{ img: "/1.jpeg" }, { img: "/1.jpeg" }],
      sliderSettings: {
        dots: false,
        dotsClass: "slick-dots custom-dot-class",
        infinite: true,
        speed: 500,
        draggable: false,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      },
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

  created() {
    this.$store.dispatch("getHomepageSliderImages");
  },
  computed: {
    ...mapState(["HomepageSliderImages"])
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
  .header {
    height: 380px !important;
  }
}

.img1 {
  height: 100%;
  width: 100%;
  object-fit: cover !important;
}

.header {
  position: relative;
}
.header:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #00000078;
}


</style>
