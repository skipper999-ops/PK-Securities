<template>
  <div>
    <div class="bg-black">
      <div class="container-small bg-white p-0">
        <div class="pad-career">
          <h5 style="font-size:12px;margin-bottom: 25px">
            <nuxt-link style="color: #B71C1C" to="/">HOME</nuxt-link>/ CAREER
          </h5>
          <div class="align">
            <div>
              <h2 style="text-align:center">Join Our Team</h2>
              <div class="w-100 d-flex justify-content-center coloured-rule"></div>
            </div>
            <div class="pb-0" style="padding: 3rem 0;">
              <p>
                PK Security Service is the trusted provider of cutting-edge
                quality security service. We are committed to providing reliable
                service through custom-designed security strategies. Gain
                improved access control to your property with a range of total
                solutions security package. PK Security service has a reputation
                of being the top player in providing exclusive security services
                across Guwahati and North-East. We follow stringent benchmarked
                standards of security services with a holistic approach towards
                securing your property. With a firm foothold in the industry,
                our clientele represents a wide range of specialized industry
                sectors. Our security services are flexible and encompass all
                requirements as per our clients dictate. PK Security has always
                managed to impress clients with a degree of professionalism that
                is second to none. Our office is based in Guwahati at a
                prominent location easily accessible via various modes of
                transport.
              </p>
            </div>
          </div>
        </div>
        <div class="pad-table para">
          <div class v-for="p in career" :key="p.id">
            <p class="fonts">{{p.category_name}}</p>
            <div class="d-flex justify-content-between">
              <p class="fonts-primary">{{p.title}}</p>
              <p class="fonts-secondary">Location:{{p.location}}</p>
              <p class="fonts-secondary">{{p.job_type}}</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data(){
    return{
      careers : []
    }
  },
  computed: {
    ...mapState(["career"])
  },

  mounted() {
    this.$store.dispatch("getAllCareer").then(res =>{
       this.careers = this.groupBy(res.data, 'category_name');
    });
  },
  methods: {
    groupBy(arr, property) {
      return arr.reduce(function(memo, x) {
        if (!memo[x[property]]) {
          memo[x[property]] = [];
        }
        memo[x[property]].push(x);
        return memo;
      }, {});
    }
  }
};
</script>




<style scoped>
.pad-career {
  padding: 70px;
}

.coloured-rule {
  border-top: 2px solid #b71c1c;
  width: 5%;
}
.align {
  text-align: center;
}
.home {
  text-decoration: none;
}
.para {
  background-color: #f3f3f3;
}
.fonts {
  font-size: 1.5rem;
  font-weight: bold;
}
.fonts-primary {
  color: #d82533;
  font-size: 0.8rem;
  font-weight: 500;
}
.fonts-secondary {
  color: #221f1f;
  font-size: 0.8rem;
  font-weight: 500;
}
.fonts-next {
  font-size: 1.5rem;
  font-weight: 500;
}

/***************************************************Contact Us***********************************************/
img {
  object-fit: contain;
}
.pad {
  padding: 0.63rem;
}
.logo-margin {
  margin: 0.3rem;
}
.primary-input {
  background: #f6f6f6;
  border: none;
  width: 30rem;
  height: 3rem;
  margin-bottom: 1.5rem;
}
.secondary-input {
  background: #f6f6f6;
  border: none;
  width: 30rem;
  height: 7rem;
}
.information-block {
  text-align: end;
}
.red-button {
  background: #b71c1c;
  color: white;
  border: none;
}

.pad-table {
  padding: 80px 100px;
}
</style>
