<template>
  <div>
    <div class="bg-black">
      <div class="container p-0">
        <div class="bg-white">
          <div class="pt-5">
            <h1 class="text-center" style="color:#454545">Our Clients</h1>
          </div>
          <div class="pad-table">
            <div class="container">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th class="text-center">Sl. No</th>
                    <th class="text-center">Name of Sites</th>
                    <th class="text-center">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(p, index) in allClientListKamrup" :key="p.id">
                    <th class="text-center" scope="row">{{index + 1}}</th>
                    <td class="text-center">{{p.name}}</td>
                    <td class="text-center">{{p.location_name}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="pad-table">
            <div class="container">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th class="text-center">Sl. No</th>
                    <th class="text-center">Name of Sites</th>
                    <th class="text-center">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(p, index) in allClientListOutside" :key="p.id">
                    <th class="text-center" scope="row">{{index + 1}}</th>
                    <td class="text-center">{{p.name}}</td>
                    <td class="text-center">{{p.location_name}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {

  data(){
    return{

    }
  },

   computed: {
        ...mapState(['allClientListKamrup']),
        ...mapState(['allClientListOutside'])
    },

  mounted(){

        this.$store.dispatch('getAllClientListOutside')
        this.$store.dispatch('getAllClientListKamrup')

  },
  methods:{




  }


}
</script>

<style>
.pad-table {
  padding: 20px 15px;
}
</style>
