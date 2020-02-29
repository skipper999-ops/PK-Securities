<template>
  <div>
    <div class="bg-grey">
      <div class="container-small footer-pad">
        <div class="row">
          <div class="col-12 col-lg-4 pt-5">
            <div class="d-flex">
              <img style="height:80px" class="w-50" src="/images/PK1_new.png" alt />
              <img style="height:80px" class="w-50" src="/images/PK2_new.png" alt />
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <!-- <img style="height:300px;width:auto" src="/images/certficate1.jpg" alt /> -->
              <img style="height:220px;width:auto" src="/images/securitycertificate.jpg" alt />
              <img style="height:220px;width:auto" src="/images/servicescertificate.jpg" alt />
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4 pt-5">
            <p class="footer-head">GET IN TOUCH</p>
            <div class="h-50 d-flex flex-column justify-content-around">
              <span class="d-flex mt-5">
                <p style="color:white">PHONE NUMBER:</p>
                <a href="tel:8486027325" class="footer-sub">+91 8486027325</a>
              </span>
              <span class="d-flex">
                <p style="color:white">FAX:</p>
                <a href="tel:8486027325" class="footer-sub">+91 8486027325</a>
              </span>
              <span class="d-flex">
                <p style="color:white">E-MAIL:</p>
                <a href="mailto:pawan@pkservices.in" class="footer-sub">pawan@pkservices.in</a>
              </span>
              <span>
                <span class="text-white">ADDRESS:</span>
                <span class="text-white" style="opacity:.8">
                  Head Office:
                  Protech Centre,4th Floor,Ganeshguri,G.S. Road,Guwahati - 781006
                </span>
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-4 pt-5">
            <div>
              <p style="color:white">GET A QUOTE</p>
              <div class="mt-5">
                <form action>
                  <input type="text" name="quote" id />
                  <button class="ml-5 btn btn-go">GO</button>
                </form>
              </div>
              <div class="justify-content-between mt-4 w-100">
                <img style="height:15px;width:5px;margin-right:15px" src="/icons/facebook.svg" alt />
                <img style="height:15px;width:13px;margin-right:15px" src="/icons/google.svg" alt />
                <img
                  style="height:15px;width:15px;margin-right:15px"
                  src="/icons/instagram.svg"
                  alt
                />
                <img style="height:15px;width:15px;margin-right:15px" src="/icons/twitter.svg" alt />
                <img style="height:15px;width:15px" src="/icons/pinterest.svg" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <div class="px-3 border-right">
            <a style="color:white;text-decoration:none" href="/">Home</a>
          </div>
          <div class="px-3 border-right">
            <a style="color:white;text-decoration:none" href="#">About Us</a>
          </div>
          <div class="px-3 border-right">
            <a style="color:white;text-decoration:none" href="/career2">Career</a>
          </div>
          <div class="px-3">
            <a style="color:white;text-decoration:none" href="/contactus2">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-grey {
  background-color: #323232;
}

.btn-go {
  height: 50px;
  width: 50px;
  background-color: #9e7b5f;
  color: white;
}

.footer-pad {
  padding: 0 50px 30px;
}
.rc-whitespace {
  white-space: nowrap;
}
.footer-head {
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  text-align: left;
}

.footer-sub {
  display: block;
  text-decoration: none;
  font-weight: 400;
  color: #fff;
  text-align: left;
  opacity: 0.75;
}

.footer-sub-mail {
  letter-spacing: normal;
  text-align: left;
  color: #ff9000;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  line-height: 2.3;
}

.footer-bottom {
  display: block;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  opacity: 0.7;
  line-height: 2.3;
  text-align: center;
}

.footer-bottom {
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  .footer-bottom1 {
    display: block;
  }
  .footer-bottom {
    text-align: left;
    justify-content: flex-start;
  }
  .footer-pad {
    padding: 20px 10px 30px;
  }
}
</style>
