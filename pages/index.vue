<template>
  <div>
    <div class="bg-black">
      <!-- 1st carousel -->

      <div class="container-small p-0 bg-white">
        <div class="p-4 pt-5" style="background-color:#f3f3f3">
          <!-- <div id="carouselExampleIndicators1" class="px-5 slide" data-ride="carousel">
             <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
          </ol>-->
          <!-- <div class="carousel-inner" role="listbox"> -->
          <!-- <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <img class="d-block w-100 img1" src="~static/images/pkcaro.jpg" alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100 img1"
                    src="~static/images/pkteam1.jpeg"
                    alt="First slide"
                  />
                </div>
          </div>-->
          <!-- <div class="carousel-item active"> -->
          <div class="row mt-5">
            <div class="col-12 col-sm-6">
              <div>
                <h3 style="font-weight:700">WHO WE ARE</h3>
                <h5 class="mt-3" style="font-size:17px">
                  A Security Agency with a degree of professionalism that is
                  second to none.
                </h5>
                <p class="mt-4" style="font-sixe:15px !important;line-height:1.4">
                  PK Security Service is the trusted provider of cutting-edge
                  quality security service. We are committed to providing
                  reliable service through custom-designed security strategies.
                  Gain improved access control to your property with a range of
                  total solutions security package.
                </p>
              </div>
              <nuxt-link to="/whoweare" class="custom-link" href>READ MORE</nuxt-link>
            </div>
            <div class="col-12 col-sm-6">
              <video class="h-100 w-100" controls style="height:300px;width:545px">
                <source src="/video/video2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <!-- </div>
              <div class="carousel-item"></div>
          </div>-->
          <!-- <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators1"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators1"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </a>-->
        </div>
        <!-- </div> -->

        <!-- carousel end -->
        <!-- 3rd carousel starts here -->

        <div class="container pt-4 pb-5">
          <!-- <h4 class="header text-center underline pb-5">
            <span>LATEST NEWS</span>
          </h4> -->

          <client-only>
            <carousel
              :per-page-custom="[
                [0, 1],
                [992, 2],
                [1300, 3]
              ]"
              :mouse-drag="true"
              paginationColor="#e91e63"
              paginationActiveColor="#000"
            >
              <slide v-for="p in allBlogs" :key="p.id">
                <div class="p-2">
                  <div style="background-color:#f2f2f2;box-shadow:0 3px 8px 0 rgba(0, 0, 0, 0.16);">
                    <img class="w-100" :src="p.image" style="height:180px" />
                    <div class="p-3">
                      <h5 class="clamp2" style="height: 50px;font-size: 15px;">{{ p.title }}</h5>
                      <div style="height: 100%;max-width:300px">
                        <p style="font-size: 13px;line-height: 18px;">{{ p.body | striphtml }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
            </carousel>
          </client-only>
        </div>

        <!-- 3rd carousel ends here -->
        <!-- Our Services starts here -->

        <div class style="background-color:#f3f3f3;padding-bottom:30px">
          <div class="pt-5 mb-4">
            <h4 class="header text-center underline pb-3">
              <span>Our Services</span>
            </h4>
          </div>
          <div class="mt-5 container">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-6 pb-3">
                <div class="pad2 d-block-inline" style="background:#fff">
                  <h3 style="text-align:center">PK SECURITY SERVICES</h3>
                  <div class="mt-4 mb-4 d-flex justify-content-center">
                    <img src="~/static/images/gaurd.png" />
                  </div>
                  <p class="text2">Commercial Security</p>
                  <p class="text2">Residential Security</p>
                  <p class="text2">Society Maintenance</p>
                  <p class="text2">Event Security</p>
                  <p class="text2">Security Services for Hospitals</p>
                  <div class="d-flex justify-content-center">
                    <a class="btn btn1" href>Read More</a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-6">
                <div class="pad2 d-block-inline" style="background:#fff">
                  <h3 style="text-align:center">PK SERVICES</h3>
                  <div class="mt-4 mb-4 d-flex justify-content-center">
                    <img src="~/static/images/mechanic.png" />
                  </div>
                  <p class="text2">Electronic Security Systems</p>
                  <p class="text2">Maintenance Services</p>
                  <p class="text2">Mechanized Cleaning Services</p>
                  <p class="text2">Housekeeping</p>
                  <p class="text2">Plumbing Services</p>
                  <div class="d-flex justify-content-center">
                    <a class="btn btn1" href>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Our Services End Here -->
        <!-- Customer cities section starts here -->
        <div class="container pt-5 pb-2">
          <div class="row">
            <div class="col-12 col-sm-3">
              <div class="circle d-flex middle">
                <img
                  style="height:47px;width:47px;object-fit: contain;"
                  src="~/static/images/team-member.png"
                  alt
                />
              </div>
              <p class="text3 mt-3">CUSTOMERS</p>
              <p class="text4">1862+</p>
            </div>
            <div class="col-12 col-sm-3">
              <div class="circle d-flex middle">
                <img
                  style="height:47px;width:47px;object-fit: contain;"
                  src="~/static/images/policeman.png"
                  alt
                />
              </div>
              <p class="text3 mt-3">Employee</p>
              <p class="text4">1293+</p>
            </div>
            <div class="col-12 col-sm-3">
              <div class="circle d-flex middle">
                <img
                  style="height:47px;width:47px;object-fit: contain;"
                  src="~/static/images/time.png"
                  alt
                />
              </div>
              <p class="text3 mt-3">years history</p>
              <p class="text4">6+</p>
            </div>
            <div class="col-12 col-sm-3">
              <div class="circle d-flex middle">
                <img
                  style="height:47px;width:47px;object-fit: contain;"
                  src="~/static/images/flag.png"
                  alt
                />
              </div>
              <p class="text3 mt-3">cities</p>
              <p class="text4">11+</p>
            </div>
          </div>
        </div>

        <!-- Customer cities section ends here -->
        <!-- join our team starts here -->

        <div class="join-our-team pt-5 pb-5" style="background-color:#f3f3f3;">
          <div class="container">
            <h4 class="header text-center underline pb-5">
              <span>JOIN OUR TEAM</span>
            </h4>
            <p class="text2 mt-2" style="font-size:16px">
              Leading security specialists ready to respond to your
              round-the-clock security needs.
            </p>
            <div class="row mt-5">
              <div class="col-12 col-sm-12 col-md-5 h-100">
                <div class="d-flex colored-rule w-100">
                  <h4 class="container__link-main career-portal">VISIT OUR CAREERS PORTAL</h4>
                </div>
                <p class="container__link-sub">WE ARE GLAD YOU ARE CONSIDERING A CARRER WITH US</p>
                <div class="mt-1 d-flex align-items-center justify-content-between career-portal">
                  <p class="container__link-sub">STRATEGIC MANAGEMENT</p>
                  <a href>
                    <img style="height:30px;width:30px" src="/icons/play-button.svg" />
                  </a>
                </div>
                <div class="mt-1 d-flex align-items-center justify-content-between career-portal">
                  <p class="container__link-sub">MANAGEMENT AND SUPPORT</p>
                  <a href>
                    <img style="height:30px;width:30px" src="/icons/play-button.svg" />
                  </a>
                </div>
                <div class="mt-1 d-flex align-items-center justify-content-between career-portal">
                  <p class="container__link-sub">OPERATIONAL EMPLOYEES</p>
                  <a href>
                    <img style="height:30px;width:30px" src="/icons/play-button.svg" />
                  </a>
                </div>
                <div class="mt-4">
                  <button
                    @click="goToCareer"
                    style="width:100%"
                    type="button"
                    class="btn btn1"
                  >View All Vacancies</button>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-7">
                <div
                  style="background-color:#fff;height:100%;box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.16)"
                >
                  <div class="career">
                    <h5
                      style="color: white;font-size:15px;padding: 10px 0"
                    >CARRERS AT PK SECURITY SERVICES</h5>
                  </div>
                  <form class="pad-submit" action>
                    <div class>
                      <input
                        type="text"
                        class="career-input"
                        placeholder="Name*"
                        v-model="name"
                        required
                      />
                      <input
                        type="email"
                        class="career-input"
                        placeholder="E-mail*"
                        v-model="email"
                      />
                      <input
                        type="tel"
                        class="career-input"
                        placeholder="Phone No*"
                        v-model="phone_number"
                        required
                      />
                      <input
                        type="email"
                        class="career-input"
                        placeholder="Address*"
                        v-model="address"
                        required
                      />
                    </div>
                    <div class="mt-2">
                      <input
                        type="file"
                        id="file"
                        ref="file"
                        style="width: 100%;"
                        placeholder="Upload"
                      />
                    </div>
                    <button @click="createQuery" type="button" class="mt-3 btn btn-submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- join out team section ends here -->
        <!-- Latest news starts here-->

        <div class="container pt-4 pb-5">
          <h4 class="header text-center underline pb-5">
            <span>LATEST NEWS</span>
          </h4>

          <client-only>
            <carousel
              :per-page-custom="[
                [0, 1],
                [992, 2],
                [1300, 3]
              ]"
              :mouse-drag="true"
              paginationColor="#e91e63"
              paginationActiveColor="#000"
            >
              <slide v-for="p in allNews" :key="p.id">
                <div class="p-2">
                  <div style="background-color:#f2f2f2;box-shadow:0 3px 8px 0 rgba(0, 0, 0, 0.16);">
                    <img class="w-100" :src="p.image" style="height:180px" />
                    <div class="p-3">
                      <h5 class="clamp2" style="height: 50px;font-size: 15px;">{{ p.title }}</h5>
                      <div class="clamp4" style="height: 55px;max-width:300px">
                        <p style="font-size: 13px;line-height: 18px;">{{ p.body | striphtml }}</p>
                      </div>
                      <a style="text-decoration:none" href>Read More</a>
                    </div>
                  </div>
                </div>
              </slide>
            </carousel>
          </client-only>
        </div>

        <!-- latest news ends here -->
        <!-- Location starts here -->

        <div class="join-our-team pt-5 pb-5" style="background-color:#f3f3f3;">
          <div class="container">
            <div class="row m-0 pb-5">
              <div class="col-12 col-sm-6">
                <div class="map-text">
                  <div style="padding:20px">
                    <span
                      class="middle"
                      style="height:50px"
                    >Extensive Client-Base Locations in Kamrup</span>
                  </div>
                  <div>
                    <GMap
                      ref="gMap"
                      :center="{ lat: 25.2473, lng: 93.5374 }"
                      :options="{ fullscreenControl: false }"
                      :zoom="6"
                    >
                      <GMapMarker
                        v-for="location in allClientListKamrup"
                        :key="location.id"
                        :position="{
                          lat: location.latitude,
                          lng: location.longitude
                        }"
                        @click="currentLocation = location"
                      >
                        <GMapInfoWindow>
                          <code>{{ location.name }}</code>
                        </GMapInfoWindow>
                      </GMapMarker>
                    </GMap>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div
                  class="map-text"
                  style="background-image: linear-gradient(to right, #44c1f7 0%, #3352ac 84%);"
                >
                  <div style="padding:20px">
                    <span
                      class="middle"
                      style="height:50px"
                    >Expanding Client Territory in North East and beyond</span>
                  </div>
                  <GMap
                    ref="gMap"
                    :center="{ lat: 25.2473, lng: 93.5374 }"
                    :options="{ fullscreenControl: false }"
                    :zoom="6"
                  >
                    <GMapMarker
                      v-for="location in allClientListOutside"
                      :key="location.id"
                      :position="{
                        lat: location.latitude,
                        lng: location.longitude
                      }"
                      @click="currentLocation = location"
                    >
                      <GMapInfoWindow>
                        <code>{{ location.name }}</code>
                      </GMapInfoWindow>
                    </GMapMarker>
                  </GMap>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- location section ends here -->
      <!-- testimonials section starts here -->

      <div class="container-small pb-5 pt-5 bg-white">
        <div>
          <h4 class="header text-center underline pb-5">
            <span>Testimonials</span>
          </h4>
        </div>
        <client-only>
          <carousel
            class="header-carousel container"
            :per-page="1"
            :autoplay="true"
            :mouse-drag="true"
            :navigationEnabled="true"
            paginationColor="#e91e63"
            paginationActiveColor="#ffffff"
          >
            <slide v-for="p in alltestimonial" :key="p.id">
              <div class="testimony-slide">
                <img
                  style="margin:auto;width: 150px;height: 150px;border-radius: 50%;"
                  class="middle"
                  :src="p.image"
                  alt
                />
                <div>
                  <p class="text2 mt-5" style="height:auto">{{ p.testimonial }}</p>
                  <div class="d-flex justify-content-center flex-column">
                    <p class="text-center m-0">{{ p.name }}</p>
                    <p class="text-center m-0 small">{{ p.user_type }}</p>
                  </div>
                </div>
              </div>
            </slide>
          </carousel>
        </client-only>
      </div>

      <!-- Testimonials section ends here   -->
      <!-- our certificates section starts here -->

      <div class="container-small p-0">
        <div class="join-our-team pt-5 pb-5" style="background-color:#f3f3f3;">
          <div class="container">
            <h4 class="header text-center underline pb-5">
              <span>OUR CERTIFICATES</span>
            </h4>
            <div id="carouselExampleIndicators5" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators5" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators5" data-slide-to="1"></li>
              </ol>
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <div style="padding:30px 0">
                    <div class="row">
                      <div class="col-12 col-sm-3">
                        <img class="w-100" src="~/static/images/images.jpg" alt />
                      </div>
                      <div class="col-12 col-sm-3">
                        <img class="w-100" src="~/static/images/images.jpg" alt />
                      </div>
                      <div class="col-12 col-sm-3">
                        <img class="w-100" src="~/static/images/images.jpg" alt />
                      </div>
                      <div class="col-12 col-sm-3">
                        <img class="w-100" src="~/static/images/images.jpg" alt />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div style="padding:30px 0">
                    <div class="row">
                      <div class="col-12 col-sm-3">
                        <img class="w-100" src="~/static/images/images.jpg" alt />
                      </div>
                      <div class="col-12 col-sm-3">
                        <img class="w-100" src="~/static/images/images.jpg" alt />
                      </div>
                      <div class="col-12 col-sm-3">
                        <img class="w-100" src="~/static/images/images.jpg" alt />
                      </div>
                      <div class="col-12 col-sm-3">
                        <img class="w-100" src="~/static/images/images.jpg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators5"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators5"
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

      <!-- <-- Certificates section ends here -->
      <!-- Brands carousel section starts here -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      currentLocation: {},
      locations: [
        {
          lat: 26.1445,
          lng: 91.7362,
          name: "Guwahati"
        },
        {
          lat: 45.815,
          lng: "15.9819"
        },
        {
          lat: "45.12",
          lng: "16.21"
        }
      ],
      name: "",
      phone_number: "",
      email: "",
      address: ""
    };
  },
  computed: {
    ...mapState(["allClientListKamrup"]),
    ...mapState(["allClientListOutside"]),
    ...mapState(["allNews"]),
    ...mapState(["allBlogs"]),
    ...mapState(["alltestimonial"])
  },

  mounted() {
    this.$store.dispatch("getAllClientListOutside");
    this.$store.dispatch("getAllClientListKamrup");
    this.$store.dispatch("getAllNews");
    this.$store.dispatch("getAllBlogs");
    this.$store.dispatch("getAlltestimonial");
  },
  filters: {
    striphtml: function(string) {
      return string.replace(/<\/?[^>]+>/gi, " ");
    }
  },
  methods: {
    createQuery: function() {
      var payload = new FormData();

      payload.append("name", this.name);
      payload.append("email", this.email);
      payload.append("phone_number", this.phone_number);
      payload.append("address", this.address);

      if (this.$refs.file.files.length > 0) {
        payload.append("files", this.$refs.file.files[0]);
      }

      this.$store
        .dispatch("createQuery", payload)
        .then(res => {
          this.name = "";
          this.email = "";
          this.phone_number = "";
          this.address = "";
          $("#file").val("");

          alert("Query Successfully Sent");
        })
        .catch(res => {
          alert("Error on Query Submission");
        });
    },
    goToCareer: function() {
      this.$router.push("/career");
    }
  }
};
</script>

<style>
.img1 {
  height: 500px;
  width: 100%;
  /* border: 2px solid rgb(105, 5, 5); */
  object-fit: cover !important;
}

img {
  object-fit: cover;
}

h3 {
  color: #b71c1c;
}

h4 {
  color: #b71c1c;
  font-weight: 400;
}

h5 {
  color: #b71c1c;
}

.custom-link {
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  color: #b71c1c;
}

.text1 {
  font-size: 12px;
  height: 40px;
  text-align: justify;
  margin-top: 15px;
}

.pad2 {
  padding: 30px 0px;
  border: 1px solid #b71c1c;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
}

.text2 {
  text-align: center;
  color: #737373;
  opacity: 0.54;
  line-height: 1;
  font-size: 18px;
  height: 23px;
}

.btn1 {
  width: 160px;
  height: 50px;
  text-decoration: none;
  background-color: #b71c1c;
  padding: 10px 20px;
  color: #fff;
  font-size: 18px;
}

/* .container {
  padding: 20px 35px;
} */

.circle-fill {
  border: 1px solid #c61b15;
  border-radius: 50%;
  box-shadow: 0 3px 6px 0 #c61b15;
  background-color: #b71c1c;
  position: relative;
  height: 100px;
  width: 100px;
  margin: auto;
}

.text3 {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}

.text4 {
  font-size: 19px;
  font-weight: 600;
  text-align: center;
}

.circle {
  justify-content: center;
  align-items: center;
  border: 1px solid #c61b15;
  border-radius: 50%;
  box-shadow: 0 3px 6px 0 #c61b15;
  /* background-color: #B71C1C; */
  position: relative;
  height: 100px;
  width: 100px;
  margin: auto;
}

/* .container {
  padding: 50px 100px;
  background-color: #f3f3f3;
} */

.container__link-main {
  text-decoration: none;
  font-weight: 700;
  color: #313b4a;
  text-align: left;
  font-size: 22px;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 2px;
  padding-bottom: 20px;
  width: 100%;
}

.container__link-sub {
  width: 100%;
  text-decoration: none;
  font-weight: 600;
  color: #313b4a;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}

.career-portal {
  border-bottom: 1px solid #c4c4c4;
  padding: 10px 0;
}

/* .container {
  padding: 50px 100px;
} */

.map-text {
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.16);
  background-image: linear-gradient(to right, #fecb6f 0%, #fa6b63 84%);
}

.career {
  background-color: #b71c1c;
  color: #fff;
  text-align: center;
  font-size: 25px;
}

.career-input {
  border-radius: 4px;
  border: solid 1px rgba(112, 112, 112, 0.26);
  background-color: #ffffff;
  height: 43px;
  margin: 10px 0;
  padding: 0 15px;
  width: 100%;
}

.btn-submit {
  width: 120px;
  height: 36px;
  text-decoration: none;
  background-color: #b71c1c;
  padding: 4px 16px;
  color: #fff;
  font-size: 15px;
}

.pad-submit {
  padding: 15px 20px 20px;
}

.coloured-rule {
  border-bottom: 1px solid #707070;
}

.testimony-slide {
  display: flex;
  flex-direction: column;
}

@media only screen and (max-width: 600px) {
  .img1 {
    height: 300px;
  }
}

@media only screen and (min-width: 601px) and (max-width: 991px) {
  .img1 {
    height: 400px;
  }
}

@media only screen and (min-width: 992px) {
}
</style>
