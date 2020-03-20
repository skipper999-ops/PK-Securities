<template>
  <div>
    <Breadcrumbs title="Contact Us" subtitle crumbs="Home > Contact Us"></Breadcrumbs>
    <div class="container-small p-3 py-4" style="background-color: #353535;">
      <p class="contact m-0">Contact Us</p>
      <span>We're here to help. Let us know if you have any questions at all.</span>
      <div class="border__btm my-5"></div>
      <div class="row">
        <div class="col-12 col-md-6">
          <span class>LOCATION</span>
          <div class="d-flex">
            <i class="mt-3 fa fa-map-marker" aria-hidden="true"></i>
            <div class="ml-3 mt-3">
              <span class="d-inline-block">
                Head Office:
                4th Floor, Protech Centre, Ganeshguri, Ganeshguri, Guwahati -
                781006,
              </span>
              <span>Administrative Office: House No. 51; 1st Floor, Sanjog Path, Hengrabari Road, Guwahati -781006</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6" style="line-height:3rem;">
          <div class="d-flex">
            <i class="mt-3 fa fa-clock-o" aria-hidden="true"></i>
            <div class="ml-3">
              <span>9:30 am - 7:30 pm</span>
            </div>
          </div>
          <div class="d-flex">
            <i class="mt-3 fa fa-phone" aria-hidden="true"></i>
            <div class="ml-3">
              <span>+91 8486027325, +91 8638511195</span>
            </div>
          </div>
          <div class="d-flex">
            <i class="mt-3 fa fa-location-arrow" aria-hidden="true"></i>
            <div class="ml-3">
              <span>pawan@pkservices.in / khatuwalapawan75@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div class="border__btm my-5"></div>
      <div class="d-flex justify-content-center mb-5">
        <iframe
          src="https://maps.google.com/maps?q=pk%20security&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          style="border:0;width: 100%;height: 500px"
          allowfullscreen
        ></iframe>
      </div>
      <span class="inquiries">General Inquiries</span>
      <div class="row my-4" style="margin:1.5rem 0!important">
        <div class="col-12 col-md-4">
          <span>Full Name:</span>
        </div>
        <div class="col-12 col-md-8" style="margin:1.5rem 0!important">
          <input class="form-control" v-model="name" value />
        </div>
      </div>
      <div class="row my-4" style="margin:1.5rem 0!important">
        <div class="col-12 col-md-4">
          <span>Email:</span>
        </div>
        <div class="col-12 col-md-8">
          <input class="form-control" v-model="email" value />
        </div>
      </div>
      <div class="row my-4" style="margin:1.5rem 0!important">
        <div class="col-12 col-md-4">
          <span>Phone:</span>
        </div>
        <div class="col-12 col-md-8">
          <input class="form-control" v-model="message" value />
        </div>
      </div>
      <div class="my-5">
        <textarea
          name
          id
          cols="146"
          rows="5"
          v-model="message"
          placeholder="How can we help you?"
          style="width:100%;"
        ></textarea>
      </div>
      <div class="d-flex justify-content-end">
        <button class="send__btn" type="submit">SEND</button>
      </div>
    </div>
  </div>
</template>


<script>
import Breadcrumbs from "@/components/breadcrumbs.vue";

export default {
  components: {
    Breadcrumbs
  },
  data() {
    return {
      name: "",
      subject: "",
      email: "",
      message: ""
    };
  },

  methods: {
    createContact: function() {
      var payload = new FormData();

      payload.append("name", this.name);
      payload.append("email", this.email);
      payload.append("subject", this.subject);
      payload.append("message", this.message);

      this.$store
        .dispatch("createContact", payload)
        .then(res => {
          this.name = "";
          this.email = "";
          this.subject = "";
          this.message = "";

          alert("Query Successfully Sent");
        })
        .catch(res => {
          alert("Error on Query Submission");
        });
    }
  }
};
</script>


<style scoped>
.contact {
  color: #9e7b5f;
  font-size: 30px;
  font-weight: 700;
  font-style: italic;
}
.fa {
  color: #9e7b5f;
  font-size: 1.1rem;
}
span,
textarea {
  color: #989595;
}
.border__btm {
  border-bottom: 1px solid #989595;
}
.inquiries {
  color: #9e7b5f;
  font-size: 1.4rem;
  font-weight: 600;
}
.form-control,
textarea {
  background: #353535;
  border: 1px solid #989595;
}
.send__btn {
  background-color: #9e7b5f;
  border: none;
  color: #fff;
  border-radius: 4px;
  padding: 0.4rem 1.3rem;
}
</style>
