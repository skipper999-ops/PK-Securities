<template>
  <div>
    <div class="bg-black">
      <!-- 1st carousel -->
      <main-header />
      <div class="container-small">
        <div class="row" style="background-color:#f3f3f3">
          <div class="col-12 col-lg-5 p-0">
            <div class="pad-new">
              <h2>Security Services</h2>
              <hr />
              <h5>
                Transforming Service Management
                into an Innovative Force.
              </h5>
              <p class="text-justify" style="font-family:sans-serif;color:#323232;line-height:1.4">
                With years of experience, we understand the challenges to the ever-evolving security environment. We have become the most preferred partners of a huge clientele by setting a benchmark in creating smart measures.
                PK Security surpasses competitors by providing our clients with the most competent, motivated and caring staff of professionals. This is the result of our industry-leading recruiting, training, compensation and recognition programs.
              </p>
              <nuxt-link type="button" to="/securityservices" class="btn btn-security">Read More</nuxt-link>
            </div>
          </div>
          <div class="col-12 col-lg-7 p-0">
            <div class="d-flex h-100" style="background-color:#333333">
              <div class="row" style="margin-bottom: 0">
                <div class="col-6 px-0 border-right col-sm-6 col-md-4 col-lg-3">
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center border-bottom"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/policeman.png" alt="unarmed gaurding" />
                    </div>
                    <p style="font-family:sans-serif">Unarmed Manned Guarding</p>
                  </div>
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/hotel.png" alt="hotel security" />
                    </div>
                    <p style="font-family:sans-serif">Hotel Security</p>
                  </div>
                </div>
                <div class="col-6 px-0 border-right col-sm-6 col-md-4 col-lg-3">
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center border-bottom"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/key.png" alt="residential security" />
                    </div>
                    <p style="font-family:sans-serif">Residential Security</p>
                  </div>
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/event.png" alt="event security" />
                    </div>
                    <p style="font-family:sans-serif">Event Security</p>
                  </div>
                </div>
                <div class="col-6 px-0 border-right col-sm-6 col-md-4 col-lg-3">
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center border-bottom"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/sociology.png" alt="commercial security" />
                    </div>
                    <p style="font-family:sans-serif">Commercial Security</p>
                  </div>
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/school.png" alt="school security" />
                    </div>
                    <p style="font-family:sans-serif">School Security</p>
                  </div>
                </div>
                <div class="col-6 px-0 col-sm-6 col-md-4 col-lg-3">
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center border-bottom"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/hospital.png" alt="hospital security" />
                    </div>
                    <p style="font-family:sans-serif">Hospital Security</p>
                  </div>
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/surface1.png" alt="industrial security" />
                    </div>
                    <p style="font-family:sans-serif">Industrial Security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-small p-0 bg-black">
        <div class="p-4 pt-2">
          <div class="row mt-5">
            <div class="col-12 col-md-12 col-lg-6">
              <div>
                <h3 style="font-weight:700;color:#fff;font-size:19px">We provide</h3>
                <h5
                  class="mt-3"
                  style="color:#fff;font-size:29px"
                >An Agency big enough to serve, yet small enough to care.</h5>
                <p
                  class="mt-4"
                  style="font-size:16px !important;line-height:1.4;color:#fff;opacity:0.71"
                >
                  PK Security and PK Services is the trusted provider of cutting-edge
                  quality security service. We are committed to providing
                  reliable service through custom-designed security strategies.
                  Gain improved access control to your property with a range of
                  total solutions security package.
                </p>
              </div>
              <nuxt-link to="/whoweare2" class="custom-link" style="color:#9e7b5f" href>READ MORE</nuxt-link>
              <Observer @intersect="intersected" class="nav-observer" />
              <div class="row mt-3 incremental">
                <div class="col-12 col-md-4">
                  <p class="text-center text-white" style="font-size:17px">OUR CUSTOMERS</p>
                  <div class="circle middle">
                    <p class="m-0 text-center text-white" style="font-size:20px">{{customer}}</p>
                    <span class="align-items-center" style="color:#9e7b5f;font-size:10px">CUSTOMERS</span>
                  </div>
                </div>
                <div class="col-12 mt-4 mt-sm-0 col-md-4">
                  <p class="text-center text-white" style="font-size:17px">OUR TEAM</p>
                  <div class="circle middle">
                    <p class="m-0 text-center text-white" style="font-size:20px">{{employee}}</p>
                    <span class="align-items-center" style="color:#9e7b5f;font-size:10px">EMPLOYEES</span>
                  </div>
                </div>
                <div class="col-12 mt-4 mt-sm-0 col-md-4">
                  <p class="text-center text-white" style="font-size:17px">CITIES</p>
                  <div class="circle middle">
                    <p class="m-0 text-center text-white" style="font-size:20px">{{cities}}</p>
                    <span class="align-items-center" style="color:#9e7b5f;font-size:10px">CITIES</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-6">
              <div>
                <h4 class="text-center" style="color:#9e7b5f">THE EXPERTS</h4>
                <h3 class="text-center" style="color:#9e7b5f">VIDEO DEMO</h3>
                <hr style="margin:auto;width:20%" />
              </div>
              <!-- <embed
                class="h-100 w-100"
                src="/video/video2.webm"
                autostart="false"
                height="30"
                width="144"
                style="height:300px;width:545px"
              /> -->
              <!-- <video class="h-100 w-100" controls style="height:300px;width:545px">
                <source src="/video/video2.webm" type="video/webm; codecs='vp8.0, vorbis'" />
              </video>-->

              <video class="w-100 pt-5" controls>
                <source src="/video/video2.mp4" type="video/mp4" />Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
          </div>
        </div>
        <!-- special amenities starts here -->

        <div class="row mt-5" style="background-color:#f3f3f3;margin-bottom:0 !important">
          <div class="col-12 col-lg-5 p-0">
            <div class="pad-new">
              <h2>Facility Management Services</h2>
              <hr />
              <h5>Leading Service provider with exceptional quality management skills.</h5>
              <p
                style="color:#323232;font-family:sans-serif"
              >PK Services is integrated with the most innovative and advanced state of the art features to digitalize all kinds of maintenance and operational activities of gated societies. We offer a smart platform for a better managed and strongly connected society by leveraging our technology expertise. Our services ensure efficient and robust handling of day to day operations of the society. With heightened features and innovative amenities, we offer smooth rendering of society facilities like pool, gym etc</p>
              <nuxt-link type="button" to="/facilitymanagement" class="btn btn-security">Read More</nuxt-link>
            </div>
          </div>
          <div class="col-12 col-lg-7 p-0">
            <div class="d-flex h-100" style="background-color:#333333">
              <div class="row" style="margin-bottom:0!important">
                <div class="col-6 px-0 border-right col-sm-6 col-md-4 col-lg-3">
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center border-bottom"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/electrician.png" alt="electrical services" />
                    </div>
                    <p style="font-family:sans-serif">Electrical Services</p>
                  </div>
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/water.png" alt="swimming pool mainteinance" />
                    </div>
                    <p style="font-family:sans-serif">Swimming Pool Maintenance</p>
                  </div>
                </div>
                <div class="col-6 px-0 border-right col-sm-6 col-md-4 col-lg-3">
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center border-bottom"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/cctv.png" alt="electronic security system" />
                    </div>
                    <p style="font-family:sans-serif">Electronic Security Systems</p>
                  </div>
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/mop.png" alt="housekeeping services" />
                    </div>
                    <p style="font-family:sans-serif">Housekeeping Services</p>
                  </div>
                </div>
                <div class="col-6 px-0 border-right col-sm-6 col-md-4 col-lg-3">
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center border-bottom"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/cleaning.png" alt="mechanized cleaning services" />
                    </div>
                    <p style="font-family:sans-serif">Mechanized Cleaning Services</p>
                  </div>
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/plumbing.png" alt="plumbing services" />
                    </div>
                    <p style="font-family:sans-serif">Plumbing Services</p>
                  </div>
                </div>
                <div class="col-6 px-0 col-sm-6 col-md-4 col-lg-3">
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center border-bottom"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/empire-state-building.png" alt="maintenance services" />
                    </div>
                    <p style="font-family:sans-serif">Maintenance Services</p>
                  </div>
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/guard1.png" alt="stp wtp maintenance" />
                    </div>
                    <p style="font-family:sans-serif">STP/WTP Maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- special anemities ends here -->

        <!-- why choose us starts here -->

        <!-- Customer cities section starts here -->
        <div class="mt-5 padding-choose">
          <div class="row">
            <div class="col-12 col-md-6">
              <div>
                <h4>WHY CHOOSE US</h4>
                <h3>MAKE SMARTER CHOICES</h3>
                <p
                  class="mt-3 text-white"
                  style="font-size:18px;line-height:1.25;text-align:justify;opacity:.88"
                >PK Security & PK Services is the trusted provider of cutting-edge quality service not only in the areas of security but also in providing the perfect solution to make living in any society or complex a pleasant and convenient experience - for the residents, the managing committee, and the security staff. Gain improved access control to your property with a range of customized total solutions package.</p>
                <img class="w-100" src="/images/man-shadow.png" alt="pk security and services" />
              </div>
            </div>
            <div class="col-12 col-md-6 mt-3 mt-sm-0 d-flex flex-column justify-content-around">
              <div>
                <div class="d-flex align-items-center">
                  <img src="/images/like.png" alt="security satisfied customer" />
                  <span class="ml-5" style="color:#fff;font-size:20px">Satisfied Customers</span>
                </div>
                <p
                  class="text-white mt-4"
                  style="font-size:18px"
                >Our extensive industry experience enables us to exceed customers expectations.We now have around 120 satisfied customers and still counting.</p>
              </div>
              <div class="mt-5">
                <div class="d-flex align-items-center">
                  <img src="/images/support1.png" alt="pk security pk services support" />
                  <span class="ml-5" style="color:#fff;font-size:20px">24/7 Support</span>
                </div>
                <p
                  class="text-white mt-4"
                  style="font-size:18px"
                >We have more than 400 members & Security personals who are subject to 24 * 7 guard duties to to unload you of the burden connected with all your security aspects.</p>
              </div>
              <div class="mt-5">
                <div class="d-flex align-items-center">
                  <img src="/images/goal.png" alt="pk security pk services support" />
                  <span class="ml-5" style="color:#fff;font-size:20px">Accredited</span>
                </div>
                <p
                  class="text-white mt-4"
                  style="font-size:18px"
                >Reliable and Govt. approved security service provider with an ISO 9001:2015 certification to make your residential spaces risk-free.</p>
              </div>
            </div>
          </div>
          <div class="m-5 d-flex align-item-center">
            <button class="btn rounded-0 brochure">DOWNLOAD BROCHURE</button>
          </div>
        </div>

        <!-- why choose our section ends here -->
        <!-- Detective Services starts here -->

        <div class="row mt-5" style="background-color:#f3f3f3;margin-bottom:0 !important">
          <div class="col-12 col-lg-5 p-0">
            <div class="pad-new">
              <h2>Detective Services</h2>
              <hr />
              <h5>Gain the information edge with expert, efficient legal investigation.</h5>
              <p
                style="color:#323232;line-height:1.4;font-family:sans-serif"
              >Proficient, competent, dependable and professionally handled leading Private Investigation Agency. We take much pride in stating that we are one of the Premier Private Investigation Organization who had a humble beginning as a small detective agency. We have earned a reputation over the years by successfully completing numerous investigation matters. Our each and every staff are experienced and believes in obtaining information legitimate through keen observation, thorough investigation, careful and accurate examination with fine line analysis. Our wide network of Detectives consists of experienced personal from various fields. No matter what your issues may be we are here just a phone call away.</p>
              <nuxt-link type="button" to="/detectiveservices" class="btn btn-security">Read More</nuxt-link>
            </div>
          </div>
          <div class="col-12 col-lg-7 p-0">
            <div class="d-flex h-100" style="background-color:#333333">
              <div class="row" style="margin:0">
                <div class="col-6 px-0 border-right col-sm-6 col-md-4 col-lg-3">
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center border-bottom"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/surface1_2.png" alt="personal investigation" />
                    </div>
                    <p style="font-family:sans-serif">Personal Investigation</p>
                  </div>
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/world.png" alt="survellience" />
                    </div>
                    <p style="font-family:sans-serif">Survellience</p>
                  </div>
                </div>
                <div class="col-6 px-0 border-right col-sm-6 col-md-4 col-lg-3">
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center border-bottom"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/insight.png" alt="corporate investigation" />
                    </div>
                    <p style="font-family:sans-serif">Corporate Investigation</p>
                  </div>
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/detective.png" alt="Pre-Matrimonial Investigation" />
                    </div>
                    <p style="font-family:sans-serif">Pre-Matrimonial Investigation</p>
                  </div>
                </div>
                <div class="col-6 px-0 border-right col-sm-6 col-md-4 col-lg-3">
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center border-bottom"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/files-and-folders.png" alt="Legal Services" />
                    </div>
                    <p style="font-family:sans-serif">Legal Services</p>
                  </div>
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/research.png" alt="Post matrimonial investigation" />
                    </div>
                    <p style="font-family:sans-serif">Post-Matrimonial Investigation</p>
                  </div>
                </div>
                <div class="col-6 px-0 col-sm-6 col-md-4 col-lg-3">
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center border-bottom"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/footprint.png" alt="Missing Person Help Tracing" />
                    </div>
                    <p style="font-family:sans-serif">Missing Person/Help Tracing</p>
                  </div>
                  <div
                    class="services-pad d-flex flex-column justify-content-center align-items-center"
                  >
                    <div class="d-flex justify-content-center">
                      <img src="/images/loupe.png" alt="Post employment Verification" />
                    </div>
                    <p style="font-family:sans-serif">Post-Employment Verification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Detective services ends here -->

        <!-- Location starts here -->

        <div class="join-our-team pt-5">
          <div>
            <h3 class="text-center">PK NETWORK</h3>
            <hr style="width:7%;margin:auto" />
          </div>
          <div class="row mt-3 mt-lg-5 pb-5">
            <div class="col-12 col-sm-6">
              <div class="map-text">
                <div style="padding:18px 20px">
                  <span class="middle" style="height:50px">Extensive Client-Base Locations in Kamrup</span>
                </div>
                <div>
                  <img class="w-100" src="/images/1.jpg" alt="Kamrup" />
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="map-text">
                <div style="padding:20px">
                  <span
                    class="middle"
                    style="height:50px"
                  >Expanding Client Territory in North East and beyond</span>
                </div>
                <img class="w-100" src="/images/2.jpg" alt="North-east map" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- location section ends here -->

      <!-- career oportunities starts here -->
      <div class="container-small">
        <div class="row">
          <div class="col-12 col-lg-8 p-0">
            <img
              class="career-photo"
              style="width:100%"
              src="/images/security_01.jpg"
              alt="career security"
            />
          </div>
          <div class="col-12 col-lg-4 d-flex flex-column justify-content-around">
            <div>
              <h3 class="text-center">JOIN OUR TEAM AT PK</h3>
              <hr style="width:20%;margin:auto" />
            </div>
            <div
              class="d-flex mt-5 align-items-center justify-content-between"
              v-for="(p, index) in careers"
              :key="p.id"
            >
              <span style="color:#fff">
                {{p.title}}
                <br />
                Salary:{{p.salary_range}}
                <br />
                Location: {{p.location}}
              </span>
              <nuxt-link to="/career">
                <img
                  style="height:25px;width:25px;margin-left:10px"
                  src="/images/left-arrow.svg"
                  alt
                />
              </nuxt-link>
            </div>
            <hr style="width:100%" />
            <button class="btn btn-vacancy w-100">
              <nuxt-link
                style="text-decoration:none;color:white"
                to="/career"
              >VIEW ALL OUR VACANCIES</nuxt-link>
            </button>
          </div>
        </div>
      </div>

      <!-- career oportunities ends here -->

      <!-- our blogs and latest news starts here -->

      <div class="container-small mt-5" style="background-color:#333333">
        <div style="padding:25px 0">
          <div>
            <!-- <h2 class="text-center">OUR BLOG</h2> -->
            <h3 class="text-center">RECENT NEWS</h3>
            <hr style="width:10%;margin:auto" />
          </div>
          <div class="row" style="margin-top:40px !important">
            <div class="col-12 col-lg-4" v-for="p in allNews" :key="p.id">
              <div style="padding:0 10px 10px 10px;border-bottom:3px solid #9e7b5f;">
                <img class="w-100" style="margin:auto;height:210px" :src="p.image" alt />
                <p
                  style="color:white;margin-top:10px;font-size:18px;font-weight:bold;height:55px"
                >{{p.title}}</p>
                <!-- <p
                  class="text-white text-justify clamp4" style="height:100px"
                >{{p.body}}</p>-->
                <div
                  class="text-white text-justify clamp4"
                  style="height:100px;font-size: 13px"
                  v-html="p.body"
                ></div>
                <div class="d-flex justify-content-center">
                  <button
                    class="btn btn1"
                    style="font-size:14px;margin-top:20px"
                    type="button"
                    @click="goToSingleBlog(p.id)"
                  >Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- testimonials section starts here -->

      <div class="container-small pb-5 pt-5 bg-black">
        <div>
          <h4 class="header text-center underline pb-5">
            <span>Testimonials</span>
          </h4>
        </div>
        <!-- <VueSlickCarousel v-bind="sliderSettings2" ref="carousel">
          <div v-for="p in alltestimonial" :key="p.id">
            <div class="testimony-slide">
              <img
                style="margin:auto;width: 150px;height: 150px;border-radius: 50%;object-fit:contain"
                class="middle"
                :src="p.image"
                alt
              />
              <div>
                <p class="text2 mt-5 text-white" style="height:auto;opacity:.8">{{ p.testimonial }}</p>
                <div class="d-flex justify-content-center flex-column">
                  <p class="text-white text-center m-0" style="opacity:.8">{{ p.name }}</p>
                  <p class="text-white text-center m-0 small" style="opacity:.8">{{ p.user_type }}</p>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>-->
        <client-only>
          <carousel
            class="header-carousel container"
            :per-page="1"
            :autoplay="true"
            :loop="true"
            :mouse-drag="true"
            :navigationEnabled="true"
            :speed="1200"
            paginationColor="#e91e63"
            paginationActiveColor="#ffffff"
          >
            <slide v-for="p in alltestimonial" :key="p.id">
              <div class="testimony-slide">
                <img
                  style="margin:auto;width: 150px;height: 150px;border-radius: 0;object-fit:contain"
                  class="middle"
                  :src="p.image"
                  alt
                />
                <div>
                  <p
                    class="text2 mt-5 text-white"
                    style="height:auto;opacity:.8"
                  >{{ p.testimonial }}</p>
                  <div class="d-flex justify-content-center flex-column">
                    <p class="text-white text-center m-0" style="opacity:.8">{{ p.name }}</p>
                    <p class="text-white text-center m-0 small" style="opacity:.8">{{ p.user_type }}</p>
                  </div>
                </div>
              </div>
            </slide>
          </carousel>
        </client-only>
      </div>
      <div class="p-5" style="background-color: white;margin-top: 60px;">
        <div class="container-small" style="position: relative">
          <h4 class="text-center">Accredited By</h4>
          <p
            class="text-center"
          >PK Security Services is an ISO 9001:2015 certified organization approved by Government and also in collaboration with Assam Skill Development Empowering Local Youth.</p>

          <VueSlickCarousel v-bind="sliderSettings" ref="carousel">
            <div v-for="p in 15" :key="p">
              <img class="slider-image" :src="'/c_logo/Picture' + p + '.jpg'" alt="First slide" />
            </div>
          </VueSlickCarousel>
        </div>
      </div>

      <!-- Testimonials section ends here   -->
      <!-- Brands carousel section starts here -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainHeader from "@/components/Header-Nitu";

export default {
  data() {
    return {
      currentLocation: {},
      sliderSettings: {
        dots: false,
        dotsClass: "slick-dots custom-dot-class",
        infinite: true,
        speed: 500,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      sliderSettings2: {
        dots: false,
        dotsClass: "slick-dots custom-dot-class",
        infinite: true,
        speed: 500,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      },
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
      address: "",
      isDone: false,
      customer: 0,
      employee: 0,
      cities: 0,
      count_intersect: 0,
      careers: []
    };
  },
  components: {
    MainHeader,
    Observer: () => import("@/components/observer")
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

    this.$store.dispatch("getAllCareer").then(res => {
      this.careers = JSON.parse(JSON.stringify(res.data)).splice(0, 2);
    });
  },
  filters: {
    striphtml: function(string) {
      return string.replace(/<\/?[^>]+>/gi, " ");
    }
  },
  methods: {
    // Detect intersection of the element observer while scrolling and add/remove shadow & fixed class to Navbar
    intersected() {
      this.count_intersect++;
      if (this.count_intersect == 2) {
        console.log("intersect");
        this.isDone = true;
        this.incremental(121, "customer");
        this.incremental(430, "employee");
        this.incremental(11, "cities");
      }
    },
    incremental: function(target, model) {
      var number = 0;
      var target = target;

      var that = this;

      var interval = setInterval(function() {
        that[model] = number;
        if (number >= target) clearInterval(interval);
        number++;
      }, 1);
    },
    groupBy(arr, property) {
      return arr.reduce(function(memo, x) {
        if (!memo[x[property]]) {
          memo[x[property]] = [];
        }
        memo[x[property]].push(x);
        return memo;
      }, {});
    },
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
    goToSingleBlog: function(id) {
      console.log("goToSingleBlog");
      localStorage.setItem("blog_id", id);
      this.$router.push("/blog");
    },
    goToCareer: function() {
      this.$router.push("/career");
    }
  }
};
</script>

<style>
hr {
  background-color: rgb(158, 123, 95);
  width: 24%;
  height: 2px;
}

.brochure {
  height: 50px;
  width: 250px;
  color: black;
  background-color: #e5b214;
  text-align: center;
  margin: auto;
}
.pad-new {
  padding: 27px;
}

.pad-new p {
  font-family: Roboto;
}
.services-pad {
  padding: 19px 18px;
  height: 50%;
}

.services-pad > p {
  color: #fff;
  opacity: 0.8;
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  /* height: 70px; */
  font-family: Roboto;
}

.btn-vacancy {
  background-color: #9e7b5f;
  height: 75px;
  color: white;
  text-decoration: none;
}
.btn-security {
  height: 31px;
  width: 128px;
  color: #fff;
  background-color: #9e7b5f;
  border-radius: 0;
  font-size: 13px;
}

.bg-black {
  background-color: #000000;
}

.slider-image {
  height: 140px;
  width: 100%;
  object-fit: contain;
  padding: 20px;
}

.container .row {
  margin: 0 !important;
}

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
  color: #9e7b5f;
}

h4 {
  color: #9e7b5f;
  font-weight: 400;
}

h5 {
  color: #323232;
}

h2 {
  color: #9e7b5f;
  font-size: 30px;
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
  opacity: 1;
  line-height: 1;
  font-size: 18px;
  height: 23px;
}

.btn1 {
  width: 160px;
  height: 50px;
  text-decoration: none;
  background-color: #2d2d37;
  padding: 10px 20px;
  color: #fff;
  font-size: 15px;
}
.btn1:hover {
  background: #9e7b5f;
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
  border: 3px solid #9e7b5f;
  border-radius: 50%;
  position: relative;
  height: 125px;
  width: 130px;
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
  color: #9e7b5f;
  border-radius: 4px;
  box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #2d2d37;
  font-size: 18px;
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

.career-photo {
  height: 600px;
}

@media only screen and (max-width: 600px) {
  .img1 {
    height: 380px !important;
  }
  .padding-choose {
    padding: 3rem;
  }
  .career-photo {
    height: 300px;
  }
}

@media only screen and (min-width: 601px) and (max-width: 991px) {
  .img1 {
    height: 400px;
  }
  .padding-choose {
    padding: 3rem;
  }
  .career-photo {
    height: 300px;
  }
}

@media only screen and (min-width: 992px) {
}
</style>
