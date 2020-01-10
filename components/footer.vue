<template>
  <div>
    <div class="bg-black">
      <div class="container footer-pad">
        <div class="row">
          <div class="col-12 col-md-3 mt-3">
            <p class="footer-head">POPULAR PAGES</p>
            <a href class="footer-sub">What we do</a>
            <a href class="footer-sub">WHO WE ARE</a>
            <a href class="footer-sub">CAREERS</a>
            <a href class="footer-sub">OUR PROJECTS</a>
          </div>
          <div class="col-12 col-md-3 mt-3">
            <p class="footer-head">IMPORTANT LINKS</p>
            <a href class="footer-sub">Home</a>
            <a href class="footer-sub">About Us</a>
            <a href class="footer-sub">Terms & Conditions</a>
            <a href class="footer-sub">Privacy Policy</a>
            <a href class="footer-sub">SiteMap</a>
          </div>
          <div class="col-12 col-md-3 mt-3">
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
          <div class="col-12 col-md-3 mt-3">
            <p class="footer-head">CONTACT US</p>
            <div style="display:flex">
              <a href="tel:8486027325" class="footer-sub">8486027325,</a>
              <a class="footer-sub" href="tel:>8638511195">8638511195</a>
            </div>
            <a class="footer-sub-mail" href="mailto:">
              pawan@pkservices.in khatuwalapawan75@gmail.com
            </a>
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
  padding: 50px 50px 30px;
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
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
  color: #ff9000;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
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
}
</style>
