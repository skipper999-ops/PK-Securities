<template>
  <div>
    <div class="container px-5 py-4" style="background-color: #353535;">
      <p class="contact m-0">Contact Us</p>
      <span>We're here to help. Let us know if you have any questions at all.</span>
      <div class="border__btm my-5"></div>
      <div class="row">
        <div class="col-12 col-md-6">
          <span class>LOCATION</span>
          <div class="d-flex">
            <i class="mt-3 fa fa-map-marker" aria-hidden="true"></i>
            <div class="ml-3 mt-3">
              <span>
                4th Floor, Protech Centre, Ganeshguri, Ganeshguri, Guwahati -
                781006, Above Vishal Mega Mart
              </span>
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
              <span>+91 9152685887</span>
            </div>
          </div>
          <div class="d-flex">
            <i class="mt-3 fa fa-location-arrow" aria-hidden="true"></i>
            <div class="ml-3">
              <span>pksecurity@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="border__btm my-5"></div>
      <div class="d-flex justify-content-center mb-5">
        <img style="width:100%;" src="images/Capture.jpg" alt />
      </div>
      <span class="inquiries">General Inquiries</span>
      <div class="row my-4" style="margin:1.5rem 0!important">
        <div class="col-12 col-md-4">
          <span>First Name:</span>
        </div>
        <div class="col-12 col-md-8" style="margin:1.5rem 0!important">
          <input class="form-control" value />
        </div>
      </div>
      <div class="row my-4" style="margin:1.5rem 0!important">
        <div class="col-12 col-md-4">
          <span>Last Name:</span>
        </div>
        <div class="col-12 col-md-8">
          <input class="form-control" value />
        </div>
      </div>
      <div class="row my-4" style="margin:1.5rem 0!important">
        <div class="col-12 col-md-4">
          <span>Email:</span>
        </div>
        <div class="col-12 col-md-8">
          <input class="form-control" value />
        </div>
      </div>
      <div class="row my-4" style="margin:1.5rem 0!important">
        <div class="col-12 col-md-4">
          <span>Phone:</span>
        </div>
        <div class="col-12 col-md-8">
          <input class="form-control" value />
        </div>
      </div>
      <div class="my-5">
        <textarea
          name
          id
          cols="146"
          rows="5"
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
<style scoped>
.contact {
  color: #9e7b5f;
  font-size: 4rem;
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
