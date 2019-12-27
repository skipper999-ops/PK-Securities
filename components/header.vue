<template>
  <div>
    <div class="top-nav">
      <div class="container" style="line-height: 44px;">
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
    </div>
    <div class="container mt-3 mb-3">
      <img class="logo" style="margin-right:10px" src="~/static/images/PK1.jpg" />
      <img class="logo" src="~/static/images/PK2.jpg" />
    </div>
    <div class="custom-nav mt-1">
      <div class="container d-flex justify-content-end">
        <div>
          <nuxt-link to="/">HOME</nuxt-link>
        </div>
        <div>
          <nuxt-link to="/whoweare">WHO WE ARE</nuxt-link>
        </div>
        <div>
          <nuxt-link to="/ourclients">WHAT WE DO</nuxt-link>
        </div>
        <div>
          <nuxt-link to="/career">CAREERS</nuxt-link>
        </div>
        <div>
          <nuxt-link to="/">OUR CLIENTS</nuxt-link>
        </div>
        <div>
          <nuxt-link to="/">CONTACT US</nuxt-link>
        </div>
      </div>
    </div>
    <!-- 1st carousel -->
    <div style="background-color:black">
      <div class="container p-2" style="background-color:#ededed">
        <div
          id="carouselExampleIndicators7"
          class="carousel slide"
          style="background-color:#ededed"
          data-ride="carousel"
        >
          <!-- <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators7" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators7" data-slide-to="1"></li>
          </ol>-->
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img
                class="d-block w-100 img1"
                style="height:600px"
                src="~static/images/pkcaro.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 img1"
                style="height:600px"
                src="~static/images/pkteam1.jpeg"
                alt="First slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators7"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators7"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
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
  background-color: #931012;
  height: 40px;
  line-height: 40px;
}

.custom-nav a {
  text-decoration: none;
  color: #fff;
  font-size: 15px;
  padding: 6px 0;
}

.custom-link {
  text-decoration: none;
}

.custom-nav a:hover {
  border-bottom: 3px solid white;
}

.nuxt-link-exact-active,
.nuxt-link-active {
  color: red;
  border-bottom: 3px solid #fdb06c;
}
.custom-nav > div > div {
  padding: 0 30px;
}
</style>
