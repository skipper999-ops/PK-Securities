<template>
  <div>
    <div style="background-color:black">
      <div class="container p-0" style="background-color:#ededed">
        <img
          class="d-block w-100 img1"
          style="height:600px"
          src="~static/images/contact.jpg"
        />
      </div>
    </div>
    <div class="bg-black">
      <div class="container bg-white">
        <div class="pad-contact">
          <h5 style="font-size:12px;margin-bottom: 25px">
            <nuxt-link style="color: #931012" to="/">HOME </nuxt-link> / CONTACT
            US
          </h5>
          <h2 style="font-weight:700">Write Us</h2>
          <div class="justify-content-center coloured-rule"></div>
          <p style="padding: 3rem 0;">
            Minimal disruption with complete peace of mind is what our
            protection services will give you. We like answering questions from
            our clients. If you have any questions or feel you are ready to
            begin your next contract, feel free to reach out to us.
          </p>
          <div class="row">
            <div class="col-12 col-sm-6">
              <div class="d-flex">
                <img src="/images/clock.png" alt />
                <p class="m-0 pad">9:30am - 7:30 pm</p>
              </div>
              <div class="d-flex">
                <img src="/images/call-answer.png" alt />
                <p class="m-0 pad">+91 9152685887</p>
              </div>
              <div class="d-flex">
                <img src="/images/location.png" alt />
                <p class="m-0 pad">
                  4th Floor, Protech Centre, Ganeshguri, Ganeshguri, Guwahati -
                  781006, Above Vishal Mega Mart
                </p>
              </div>
              <div class="d-flex">
                <img src="images/sent-mail.png" alt />
                <p class="m-0 pad">pksecurity@gmail.com</p>
              </div>
              <div>
                <a href=""
                  ><img class="logo-margin" src="/images/twitter.png" alt
                /></a>
                <a href=""
                  ><img class="logo-margin" src="/images/linkedin.png" alt
                /></a>
                <a href=""
                  ><img class="logo-margin" src="/images/pinterest.png" alt
                /></a>
                <a href=""
                  ><img class="logo-margin" src="/images/facebook.png" alt
                /></a>
                <a href=""
                  ><img class="logo-margin" src="/images/gmail.png" alt
                /></a>
              </div>
            </div>

            <div class="col-12 col-sm-6">
              <div class="information-block">
                <input
                  class="primary-input"
                  type="text"
                  placeholder="Your Name"
                  v-model="name"
                />
                <input class="primary-input" v-model="email" type="text" placeholder="Email" />
                <input
                  class="primary-input"
                  type="text"
                  placeholder="Subject"
                  v-model="subject"
                />
                <textarea
                  class="secondary-input"
                  type="text"
                  placeholder="Your Message"
                  v-model="message"
                >
                </textarea>
              </div>
              <div class="mt-4 d-flex justify-content-center">
                <button class="btn btn-send" @click="createContact">
                  <span>
                    SEND
                    <img src="/images/sent-mail-1.png" alt />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.pad-contact {
  padding: 40px 60px;
}

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
  width: 100%;
  padding: 0 20px;
  height: 3rem;
  margin-bottom: 1.5rem;
  outline: none;
}
.secondary-input {
  background: #f6f6f6;
  border: none;
  padding: 10px 20px;
  width: 100%;
  height: 7rem;
  outline: none;
}
.information-block {
  text-align: end;
}

.coloured-rule {
  border-top: 2px solid #931012;
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

.btn-send {
  height: 60px;
  width: 153px;
  padding: 9px 49px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  border-radius: 0;
  background: #931012;
  border: none;
  text-align: center;
}
.btn-send:hover {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
</style>
