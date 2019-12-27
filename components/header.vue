<template>
  <div>
    <div class="top-nav">
      <div class="container">
        <div class style="padding-top:5px">
          <span>
            <i class="fa fa-phone" aria-hidden="true"></i>
          </span>
          <a style="font-size:16px" href="tel:+91 9152685887">+91 9152685887</a>
          <span>
            <i class="fa fa-phone" aria-hidden="true"></i>
          </span>
          <a style="font-size:16px" href="mailto:pksecurity@gmail.com">pksecurity@gmail.com</a>
        </div>
      </div>
    </div>
    <div class="container mt-1">
      <img class="logo" style="margin-right:10px" src="~/static/images/PK1.jpg" />
      <img class="logo" src="~/static/images/PK2.jpg" />
    </div>
    <div class="custom-nav mt-1">
      <div class="container d-flex justify-content-around">
        <div class="custom-link">
          <a href="/">HOME</a>
        </div>
        <div>
          <a href="/whoweare">WHO WE ARE</a>
        </div>
        <div>
          <a href="/ourclients">WHAT WE DO</a>
        </div>
        <div>
          <a href="/career">CAREERS</a>
        </div>
        <div>
          <a href>OUR CLIENTS</a>
        </div>
        <div>
          <a href>CONTACT US</a>
        </div>
      </div>
    </div>
    <!-- 1st carousel -->
    <div style="background-color:black">
      <div class="container p-2" style="background-color:#ededed">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          style="background-color:#ededed"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img class="d-block w-100 img1" src="~static/images/pkcaro.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 img1" src="~static/images/pkteam1.jpeg" alt="First slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
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
  height: 35px;
}
.top-nav a {
  text-decoration: none;
  font-weight: 500;
  color: black;
  font-size: 14px;
}

a:hover {
  color: blue;
}

.logo {
  height: 75px;
  width: 170px;
}

.custom-nav {
  background-color: #931012;
}

.custom-nav a {
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  padding: 5px 0;
}

.custom-link {
  text-decoration: none;
}

.custom-link:hover {
  border-bottom: 3px white;
}
</style>
