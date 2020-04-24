<template>
  <div style="border-bottom: 2px solid #9e7b5f">
    <div style="background-color:black;position:relative">
      <div class="img-text">
        <h3>{{title}}</h3>
        <h5>{{subtitle}}</h5>
        <p>{{crumbs}}</p>
      </div>
      <div
        class="p-0 bg-img overlay"
        style="background-color:#ededed;background-image: url('~static/images/contact.png');"
      >
        <!-- <img class="d-block w-100 img1" src="~static/images/contact.png" /> -->
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

  props: ["title", "subtitle", "crumbs", "image"],
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
  padding: 40px 0;
}

.overlay {
  position: relative;
}

h3,
h5,
p {
  color: white;
}

.bg-img {
  height: 420px;
  background-size: cover;
}

.img-text h3 {
  color: #9e7b5f;
  font-weight: bold;
}
.img-text {
  position: absolute;
  z-index: 98;
  margin: 0 auto;
  max-width: 1280px;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
}

.overlay:after {
  position: absolute;
  content: "";
  background-color: #000000c4;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
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

.btn-send {
  height: 60px;
  width: 153px;
  padding: 9px 49px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  border-radius: 0;
  background: #b71c1c;
  border: none;
  text-align: center;
}
.btn-send:hover {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}

.img1 {
  height: 500px;
}

p {
  font-size: 14px;
}

@media screen and (max-width: 600px) {
  .img1 {
    height: 200px;
  }
  .information-block {
    padding-top: 20px;
  }
}

@media screen and (min-width: 601px) and (max-width: 991px) {
  .pad-contact {
    padding: 40px 0px;
  }
  .information-block {
    padding-top: 20px;
  }
}
</style>
