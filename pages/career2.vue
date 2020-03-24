<template>
  <div class="bg-black">
    <Breadcrumbs title="Training and Orientation" subtitle crumbs="Home > Training and Orientation"></Breadcrumbs>
    <div class="container-small" style="padding-top:40px">
      <div>
        <div class="w-100">
          <div>
            <img class="coma" src="/images/asset1.png" alt />
          </div>
          <div class="container">
            <p style="color:white;opacity:.71;font-size:20px">
              Interested to work with us?
              PK Group is proud to align ourselves with smart, clear and focused team members that believe in making the world a safer and better place.
            </p>
          </div>
          <div class="d-flex justify-content-end">
            <img style="right:100%" class="coma" src="/images/asset3.png" alt />
          </div>
        </div>
      </div>
      <div class="mt-5">
        <h2 class="text-center text-white">CURRENT OPENING</h2>
        <div class="accordion mt-5 border-0" id="accordionExample">
          <div class="card border-bottom">
            <div class="card-header" id="headingOne">
              <button
                class="btn"
                type="button"
                style="color:white;font-size:20px;text-align:left"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >Account Officer</button>
            </div>

            <div
              id="collapseOne"
              class="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Experience</th>
                      <th>Location</th>
                      <th>Position Open</th>
                      <th>Salary Offered</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2-5 years</td>
                      <td>Guwahati</td>
                      <td>5</td>
                      <td>1.5-2.5 LPA</td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-flex justify-content-center m-4">
                  <!-- <button class="btn btn-apply" type="button">APPLY NOW</button> -->
                </div>
              </div>
            </div>
          </div>
          <div class="card border-0">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn collapsed"
                  type="button"
                  style="color:white;font-size:20px"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >Branch Manager</button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Experience</th>
                      <th>Location</th>
                      <th>Position Open</th>
                      <th>Salary Offered</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2-5 years</td>
                      <td>Guwahati</td>
                      <td>5</td>
                      <td>1.5-2.5 LPA</td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-flex justify-content-center m-4">
                  <!-- <button class="btn btn-apply" type="button">APPLY NOW</button> -->
                </div>
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
.bg-black {
  background-color: black;
}

.accordion {
  background-color: #333333;
}

.accordion > .card {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  background-color: #9e7b5f;
}

.card-body {
  background-color: #333333;
}

.btn:focus {
  box-shadow: none;
}

.table thead th {
  vertical-align: bottom;
  color: white;
  border-bottom: none;
}

.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  color: white;
  border-top: none;
}

.table {
  background-color: #6c6c6c;
}

.btn-apply {
  color: white;
  font-size: 18px;
  background-color: #9e7b5f;
  height: 48px;
  width: 160px;
  border-radius: 0;
}
</style>
