<template>
  <div style="background-color:black">
    <Breadcrumbs
      title="About Us"
      subtitle="Unmatchable Quality meets Unbeatable Price Quote"
      crumbs="Home > Security Companies > About Us"
    ></Breadcrumbs>
    <div class="container-small">
      <div class="row mt-5">
        <div class="col-12 col-lg-8">
          <div>
            <p class="text-whoweare">
              It gives us immense pleasure in introducing ourselves as Security,
              Housekeeping and Maintenance Service provider,
              popularly known as P.K. Services and P.K. Security Services,
              Established in 2014.
              We undertake to unload you of the burden and worries connected with all security
              and housekeeping aspects of your organization by effective and reliable security
              and maintenance services through our trained personnel, who posses sound professional
              knowledge, in vigilance, patrolling, gate controls searches,
              and leave you free to devote the time and energy in your own work.
              Smartly turned out in MODERN dress, our staff would
              immensely enhance the prestige and charm of your organization
              . We being men of profession fully recognize the significance of,
              and realize the implication of a dependable security system and
              it is exactly that, we promise you
            </p>
            <p class="text-whoweare">
              Our Head Ofice is situated at Protech Center Ganeshguri
              and our Branch office is situated at house no.5, Sanjog Path,
              Hengrabari Road, Hengrabari, Guwahati – 6 and we are approved
              license holder from IGP ( TAP ) Govt. of Assam in the name of P K Security Services.
            </p>
            <p class="text-whoweare">
              We understand that the development of a long term relationship
              between client and vendor requires us to have knowledge of the
              client’s organization, as well as providing immediate access to
              our main office support, effective management teams and qualified
              and trained responsible personnel. Our success in the industry has
              come from our extensively trained personnel backed by the supervision
              of our own staff. You will be thoroughly satisfied with our approach to
              effective management solutions, professional support, courtesy, patrols
              and qualitative service. Take time to compare, we believe competition yields greater productivity.
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
              <div style="min-height:195px">
                <p class="p-header">MISSION</p>
                <p class="p-header-sub">
                  To provide competitive and competent Facility Management Service.
                  P.K. Services is an organization committed to supplying quality professional individuals as per your needs.
                </p>
              </div>
              <div style="min-height:195px">
                <p class="p-header">OUR MOTTO</p>
                <p class="p-header-sub">
                  "If we don’t take care of our clients,
                  We know that someone else will."
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

<style scoped>
/* .bg-black-custom {
} */

.text-whoweare {
  color: #fff;
  font-size: 16px;
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
