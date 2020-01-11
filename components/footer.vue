<template>
  <div>
    <div class="bg-black">
      <div class="container-small footer-pad">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-4 pt-5">
            <p class="footer-head">OUR OFFICE</p>
            <a href style="line-height:2" class="footer-sub mt-1">
              Head Office: Protech Centre,4th Floor,Ganeshguri,G.S.
              Road,Guwahati - 781006
            </a>
            <a href style="line-height:2" class="mt-4 footer-sub">
              Administrative Office: House No.5, 1st Floor, Sanjog Path, Forest
              Gate, Opp. Khadi Board office, Hengrabari, Guwahati - 781006
            </a>
          </div>
          <div class="col-12 col-md-12 col-lg-4 offset-lg-1 pt-5">
            <p class="footer-head">CONTACT US</p>
            <div>
            <div class="d-flex align-items-center">
                            <i
                class="fa fa-phone top-nav-icon"
                style="color: white;padding-right: 10px"
                aria-hidden="true"
              ></i><a href="tel:8486027325" class="footer-sub">+91 8486027325</a> </div>
              <a class="footer-sub" style="color: white;padding-left: 22px" href="tel:8638511195">+91 8638511195</a>
            </div>
             <div class="d-flex align-items-center">
            <a class="footer-sub-mail" href="mailto:pawan@pkservices.in">
               <i
                class="fa fa-envelope top-nav-icon"
                style="color: white;padding-right: 10px"
                aria-hidden="true"
              ></i>pawan@pkservices.in </a></div>
              <a class="footer-sub-mail"  style="padding-left: 24px;margin-top:5px" href="mailto:khatuwalapawan75@gmail.com">khatuwalapawan75@gmail.com
            </a>
          </div>
          <div class="col-12 col-md-6 col-lg-3 pt-5">
            <p class="footer-head">IMPORTANT LINKS</p>
            <a href class="footer-sub">Home</a>
            <a href class="footer-sub">About Us</a>
            <a href class="footer-sub">Terms & Conditions</a>
            <a href class="footer-sub">Privacy Policy</a>
            <a href class="footer-sub">SiteMap</a>
          </div>
        </div>

        <div class="hide">
          <div class="row footer-bottom1">
            <div class="col-12 col-md-2">
              <a class="footer-bottom" href>PRIVACY</a>
            </div>
            <div class="col-12 col-md-2">
              <a class="footer-bottom rc-whitespace" href
                >KEY FACT AND FIGURES</a
              >
            </div>
            <div class="col-12 col-md-2">
              <a class="footer-bottom" href>CONTACTS</a>
            </div>
            <div class="col-12 col-md-2">
              <a class="footer-bottom rc-whitespace" href
                >REGULATORY COMPLIANCES</a
              >
            </div>
            <div class="col-12 col-md-2 ">
              <a class="footer-bottom" href>DISCLAIMER</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer-pad {
  padding: 0 50px 30px;
  background-color: #3d4045;
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
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  opacity: 0.7;
  line-height: 2.3;
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
