<template>
  <div>
    <!-- <div class="top-nav hide-on-med-and-down">
      <div class="container p-0" style="line-height: 44px;">
        <div class="d-flex justify-content-between">
          <div>
            <span class="top-nav__contact">
              <i class="fa fa-phone top-nav-icon" aria-hidden="true"></i>
              <a style="font-size:14px;padding-left: 10px" href="tel:+91 9152685887">+91 9152685887</a>
            </span>
            <span class="top-nav__contact" style="margin-left: 15px">
              <i class="fa fa-envelope top-nav-icon" aria-hidden="true"></i>
              <a
                style="font-size:14px;padding-left: 10px"
                href="mailto:pksecurity@gmail.com"
              >pksecurity@gmail.com</a>
            </span>
          </div>
          <div class="hide-on-small-and-down">
            <div class="social-nav">
              <span class="social-nav__contact">
                <a style="font-size:14px;" href="https://www.facebook.com">
                  <i class="fa fa-facebook top-nav-icon" aria-hidden="true"></i>
                </a>
              </span>
              <span class="social-nav__contact">
                <a style="font-size:14px;" href="https://www.twitter.com">
                  <i class="fa fa-twitter top-nav-icon" aria-hidden="true"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <div class="nav-header-main">
      <div class="secondary-nav pt-3 pb-3">
        <div class="container p-0 d-flex justify-content-between align-items-center">
          <nuxt-link to="/">
            <img class="logo" style="margin-right:10px" src="~/static/images/PK1_new.png" alt="pksecuritylogo" />
            <img class="logo" src="~/static/images/PK2_new.png" alt="pkserviceslogo" />
          </nuxt-link>
          <div class="d-flex hide-on-med-and-down">
            <span class="d-flex">
              <img class="mr-2" style="height:18px" src="/images/clock.png" alt="workinghours" />
              <p style="color:#fff;font-size: 13px;">
                Working Times
                <br />24 X 7
              </p>
            </span>
            <span class="d-flex" style="margin-left:10px">
              <img class="lkasdkl mr-2" style="height:18px" src="/images/email.png" alt="pkcontact" />
              <p style="color:#fff;font-size: 13px;">
                Mail Us,
                <br />pawan@pkservices.in
              </p>
            </span>
          </div>
          <div
            @click="showMenu"
            class="show-on-medium-and-down hide-on-large-only menu"
            style="align-items: center;"
          >
            <img src="~static/menu.svg" style="height:20px" alt="pknav" />
          </div>
        </div>
      </div>
      <div class="container hide-on-med-and-down">
        <marquee
          style="color:#9e7b5f;display:flex;align-items:right;margin-left:auto;width:70%;border-top:2px solid #9e7b5f;padding-top:2px"
          behavior
          direction="left"
        >
          NEWS:
          <span v-for="p in blog" :key="p.id">{{p.title}} |</span>
        </marquee>
      </div>
    </div>
    <div class="custom-nav hide-on-med-and-down">
      <div class="container d-flex justify-content-around" style="position:relative;width: 100%;">
        <div class="nav-link">
          <nuxt-link class="link" to="/" exact>HOME</nuxt-link>
        </div>
        <div class="nav-link">
          <nuxt-link class="link" to="/whoweare">ABOUT US</nuxt-link>
        </div>
        <div class="nav-link hover" @mouseover="showMenuOpen" @mouseleave="showMenuClose">
          <nuxt-link class="link" to="#">SERVICES</nuxt-link>
          <div
            v-if="showMenu1"
            style="z-index: 9999; position: absolute;background-color:#110b0b;padding: 10px;top:50px;width:auto;"
          >
            <ul style="list-style:none">
              <li>
                <nuxt-link class="link" to="/securityservices">Security Services</nuxt-link>
              </li>
              <li>
                <nuxt-link class="link" to="/detectiveservices">Detective Services</nuxt-link>
              </li>
              <li>
                <nuxt-link class="link" to="/facilitymanagement">Facility Management Services</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- <div class="nav-link">
          <nuxt-link class="link" to="/pknetwork">PK NETWORK</nuxt-link>
        </div>
        <div class="nav-link">
          <nuxt-link class="link" to="/trainingandorientation">TRAINING AND ORIENTATION</nuxt-link>
        </div>
        <div class="nav-link">
          <nuxt-link class="link" to="/ourclients">OUR CLIENTS</nuxt-link>
        </div>-->
        <div class="nav-link">
          <nuxt-link class="link" to="/career">CAREERS</nuxt-link>
        </div>
        <div class="nav-link">
          <nuxt-link class="link" to="/contactus">CONTACT US</nuxt-link>
        </div>
      </div>
    </div>

    <div class="nav-header hide-on-large-only">
      <div class="container h-100 position-relative">
        <div
          class="nav-icon w-100"
          style="display:flex; justify-content: center;align-items:center"
        >
          <div class="nav-link hide-on-med-and-down">
            <nuxt-link class="link" to="/">Home</nuxt-link>

            <nuxt-link class="link" to="/services">Services</nuxt-link>

            <nuxt-link class="link" to="/about">About Us</nuxt-link>
            <nuxt-link class="link" to="/contact">Contact Us</nuxt-link>
          </div>
          <div class="contact-navigation">
            <span class="top-nav__contact">
              <i class="fa fa-phone top-nav-icon" style="color: white" aria-hidden="true"></i>
              <a style="font-size:14px;padding-left: 10px" href="tel:+91 9152685887">+91 9152685887</a>
            </span>
            <span class="top-nav__contact" style="margin-left: 15px">
              <i class="fa fa-envelope top-nav-icon" style="color: white" aria-hidden="true"></i>
              <a
                style="font-size:14px;padding-left: 10px"
                href="mailto:pksecurity@gmail.com"
              >pksecurity@gmail.com</a>
            </span>
          </div>
        </div>

        <div class="mobile-nav opacity-hide">
          <div class="nav">
            <nuxt-link class="link" to="/">Home</nuxt-link>
            <nuxt-link class="link" to="/securityservices">Security Services</nuxt-link>
            <nuxt-link class="link" to="/detectiveservices">Detective Services</nuxt-link>
            <nuxt-link class="link" to="/facilitymanagement">Facility Management Services</nuxt-link>
            <nuxt-link class="link" to="/career">Careers</nuxt-link>
            <nuxt-link class="link" to="/contactus">Contact Us</nuxt-link>
          </div>
          <div @click="closeMenu" class="show-on-medium-and-down hamburger">
            <img src="~static/close.svg" style="height:20px" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 1st carousel -->
  <!-- <div v-if="$nuxt.$route.name != 'contactus'">
      <div class="container-small p-0" style="background-color:#ededed">
        <client-only>
          <carousel
            class="header-carousel"
            :per-page="1"
            :autoplay="true"
            :mouse-drag="true"
            :loop="true"
            paginationColor="#e91e63"
            paginationActiveColor="#ffffff"
          >
            <slide v-for="p in HomepageSliderImages" :key="p.id">
              <img class="d-block w-100 img1" :src="p.image" alt="First slide" />
            </slide>
          </carousel>
        </client-only>
      </div>
  </div>-->
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      blog: [],
      showMenu1: false
    };
  },

  watch: {
    $route() {
      $(".mobile-nav").addClass("opacity-hide");
    }
  },

  computed: {
    // ...mapState(["HomepageSliderImages"]),
    ...mapState(["allNews"])
  },

  mounted() {
    // this.$store.dispatch("getHomepageSliderImages");

    this.$store.dispatch("getAllNews").then(res => {
      this.blog = Object.assign([], res.data).splice(0, 5);
    });
    // var lastScrollTop = 0;
    // $(window).scroll(function(event) {
    //   var st = $(this).scrollTop();
    //   if (st > lastScrollTop && st > 200) {
    //     $(".nav-header-main").addClass("hide-up");
    //   } else {
    //     // upscroll code
    //     $(".nav-header-main").removeClass("hide-up");
    //   }
    //   lastScrollTop = st;
    // });
    // $(window).scroll(function() {
    //   var scroll = $(window).scrollTop();
    //   //>=, not <=
    //   if (scroll <= 0) {
    //     //clearHeader, not clearheader - caps H
    //     $(".nav-header-main").removeClass("darkHeader");
    //   } else if (scroll > 0) {
    //     $(".nav-header-main").addClass("darkHeader");
    //   }
    // }); //missing );
  },
  methods: {
    showMenuOpen: function() {
      console.log("Sdsd");
      this.showMenu1 = true;
    },
    showMenuClose: function() {
      console.log("Sdsd");
      this.showMenu1 = false;
    },
    showMenu: function() {
      $(".mobile-nav").removeClass("opacity-hide");
      $(".nav").addClass("animation");
    },
    closeMenu: function() {
      $(".mobile-nav").addClass("opacity-hide");
      $(".nav").removeClass("animation");
    }
  }
};
</script>

<style scoped>
.top-nav {
  background-color: rgb(237, 237, 237);
  height: 44px;
}

.top-nav-icon {
  color: #707070;
  font-size: 14px;
}

.top-nav a {
  text-decoration: none;
  font-weight: 500;
  color: #707070;
  font-size: 14px;
}

.top-nav__contact:hover i,
.top-nav__contact:hover a,
.social-nav__contact:hover i {
  color: #fdb06c;
}

.social-nav__contact i {
  width: 44px;
  text-align: center;
  height: 42px;
  line-height: 45px;
  border-left: 1px solid #cfcfcf;
}

ul li {
  list-style-type: none;
}

.social-nav .social-nav__contact:last-child i {
  width: 44px;
  text-align: center;
  height: 42px;
  line-height: 45px;
  border-right: 1px solid #cfcfcf;
}

.logo {
  height: 75px;
  width: 170px;
  object-fit: contain;
}

@media only screen and (max-width: 600px) {
  .logo {
    height: 42px;
    width: 90px;
  }
}

.custom-nav {
  background-color: #110b0b;
  height: 60px;
  line-height: 60px;
  border-top: 2px solid #9e7b5f;
  border-bottom: 2px solid #9e7b5f;
}

.custom-nav a {
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  padding: 11px 0;
}

.custom-link {
  text-decoration: none;
}

.custom-nav a:hover {
  /* border-bottom: 3px solid white; */
}

.nuxt-link-exact-active,
.nuxt-link-active {
  color: red;
  /* border-bottom: 3px solid #fdb06c; */
}
.custom-nav > div > div {
  padding: 0 10px;
}

.secondary-nav {
  background-color: rgb(0, 0, 0);
}

/* mechfab */

.nav-header {
  background-color: #110b0b;
  height: 40px;
  display: flex;
  align-items: center;
  transition: all 0.5s;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.hide-up {
  top: -60px !important;
}

.darkHeader {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);
}

.nav-header.white {
  background-color: #fff !important;
}

.nav-header.white a {
  color: black;
}

.nav-header.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.nav-icon {
  height: 100%;
}

.nav-header a {
  color: white;
  text-decoration: none;
}

.nav-header .link {
  padding: 8px 16px;
  font-size: 14px;
}

.mobile-nav .link {
  font-size: 20px;
  color: white !important;
}

.nav-link a {
  position: relative;
  transition: all 0.5s;
}

.nav-link a:hover {
  color: #9e7b5f;
}
.nav-link a:after {
  content: "";
  border-bottom: 3px solid white;
  position: absolute;
  width: 10px;
  bottom: 0;
  opacity: 0;
  left: 0;
  right: 0;
  margin: auto;
  transition: all 0.3s ease-in-out;
}

.nav-link a:hover:after {
  content: "";
  border-bottom: 2px solid white;
  position: absolute;
  width: 45px;
  bottom: 0;
  left: 0;
  opacity: 1;
  right: 0;
  margin: auto;
}

.nav-link a:hover:after {
  content: "";
  border-bottom: 2px solid #fff;
  position: absolute;
  width: 45px;
  bottom: 0;
  left: 0;
  opacity: 1;
  right: 0;
  margin: auto;
}

.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: white;
  background-color: rgba(35, 35, 35, 0.91);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 99;
  transition: all 0.5s;
}

.nav {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 40px;
  opacity: 0;
  transition: all 0.4s ease;
  overflow: auto;
}

.nav .link {
  margin: 15px 0;
}

.menu {
  cursor: pointer;
}

.hamburger {
  position: fixed;
  top: 20px;
  right: 6.1%;
  cursor: pointer;
}

.animation {
  line-height: 19px;
  transition: all 0.4s ease;
  opacity: 1;
}

/* .nav-header-main {
  display: flex;
  align-items: center;
  transition: all 0.5s;
} */

.hide-up {
  top: -60px !important;
}

.darkHeader {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);
}

@media only screen and (max-width: 450px) {
  .nav-header {
    height: 60px;
  }
  .top-nav__contact {
    text-align: center;
  }
  .contact-navigation .top-nav__contact {
    margin-left: 0 !important;
  }
  .contact-navigation {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
