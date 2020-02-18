<template>
  <div style="background-color:black">
    <Breadcrumbs title="About Us" subtitle="Unmatchable Quality meets Unbeatable Price Quote" crumbs="Home > Security Companies > About Us"></Breadcrumbs>
    <div class="container">
      <div class="row mt-5">
        <div class="col-12 col-lg-8">
          <div>
            <p class="text-whoweare">
              PK Security Service is the trusted provider of cutting-edge quality
              security service. We are committed to providing reliable service
              through custom-designed security strategies.
            </p>
            <p class="text-whoweare">
              Gain improved access
              control to your property with a range of total solutions security
              package. PK Security service has a reputation of being the top
              player in providing exclusive security services across Guwahati and
              North-East.
            </p>
            <p class="text-whoweare">
              We follow stringent benchmarked standards of security
              services with a holistic approach towards securing your property.
              With a firm foothold in the industry, our clientele represents a
              wide range of specialized industry sectors.
            </p>
            <p class="text-whoweare">
              Our security services
              are flexible and encompass all requirements as per our clients
              dictate. PK Security has always managed to impress clients with a
              degree of professionalism that is second to none. Our office is
              based in Guwahati at a prominent location easily accessible via
              various modes of transport.
            </p>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div>
            <div class="about-next py-2 position-relative">
              <div class="about position-absolute">About PK Security & Services</div>
              <ul class="px-5">
                <li>About PK Security</li>
                <li>Corporate Social Responsibility</li>
                <li>Quality Policy</li>
                <li>Gallery</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="row" style="margin-top:50px!important">
          <div class="col-12 col-sm-12 col-md-12 col-lg-4 pb-3">
            <img class="w-100 h-100" src="/images/bgsecurity.jpg" alt />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div>
              <div>
                <p class="p-header">MISSION</p>
                <p class="p-header-sub">
                  Our mission is to provide innovative and proactive security
                  solutions to every client, regardless of the industry. We
                  want to focus on building a smart and intuitive team of
                  security personnel who can offer the best solutions during a
                  time of emergency.
                </p>
              </div>
              <div>
                <p class="p-header">OUR MOTTO</p>
                <p class="p-header-sub">
                  To work towards building a secure environment and protect it
                  from any sabotage with responsiveness, diligence, and
                  professionalism.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div>
              <div>
                <p class="p-header">VISION</p>
                <p class="p-header-sub">
                  To create a benchmark in retaining the highest rate of
                  clientele in the contract security industry. We also intend
                  to assist in the development of each employee while
                  providing a safe, challenging, and cooperative work
                  environment.
                </p>
              </div>
              <div>
                <p class="p-header">OUR GOALS</p>
                <p class="p-header-sub">
                  Our future goal is to bring intelligent, automated security
                  solutions that enable cost-effective, efficient operations
                  of security monitoring and reporting services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Breadcrumbs from "@/components/breadcrumbs.vue";

export default {
  components: {
    Breadcrumbs
  }
};
</script>

<style>
/* .bg-black-custom {
} */

.text-whoweare {
  color: #fff;
  font-size: 22px;
  opacity: 0.62;
  text-align: justify;
}

.about {
  background-color: #e5b214;
  box-shadow: rgba(0, 0, 0, 0.16) !important;
  width: 80%;
  margin: auto;
  margin-top: -2.3rem;
  height: 60px;
  border-radius: 3px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 18px;
  left: 50%;
  transform: translateX(-50%);
}

.about-next {
  margin-top: 5rem;
  background-color: #333333;
}

ul li {
  list-style: disc inside url(##9e7b5f);
  color: #fff;
  opacity: 0.58;
  margin-top: 20px;
}

ul li:first-child {
  margin-top: 50px;
}

.p-header {
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 15px;
  text-align: left;
  color: #9e7b5f;
}

.p-header-sub {
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 28px;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  opacity: 0.63;
}
</style>
