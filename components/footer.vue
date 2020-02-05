<template>
  <div>
    <div class="bg-grey">
      <div class="container-small footer-pad">
        <div class="row">
          <div class="col-12 col-lg-4 pt-5">
            <div class="d-flex">
              <img class="w-100" src="/images/PK1.png" alt />
              <img class="w-100" src="/images/PK2.png" alt />
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4 pt-5">
            <p class="footer-head">GET IN TOUCH</p>
            <div>
              <div class>
                <span class="d-flex">
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
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-4 pt-5">
            <div>
              <p>GET A QUOTE</p>
              <div>
                <form action>
                  <input type="text" name="quote" id />
                  <button class="ml-5 btn btn-go">GO</button>
                </form>
              </div>
            </div>
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
