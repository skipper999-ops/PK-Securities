<template>
  <div>
    <div @click="hide" class="backdrop"></div>
    <div class="container-small" style="margin-top:50px!important">
      <div class="mt-5">
        <div class="row">
          <div class="col-12">
            <h3>{{singleBlog.title}}</h3>
            <p class="text-white">{{date}}</p>
          </div>
          <div class="col-12 train" v-html="singleBlog.image">
            <img class="w-100 blog-img" :src="image" alt />
          </div>
          <div class="col-12">
            <div class="train-pad text-white" v-html="singleBlog.body">
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data(){
        return{
            date: ""
        }
    },
    
  computed: {
    ...mapState(["singleBlog"])
  },
  mounted() {
       this.$store.dispatch('getSingleBlog', localStorage.getItem('blog_id')).then(res=>{
           this.date = this.singleBlog.created_date.split("T")[0]
       })
  },
  methods: {
    hide() {},
  }
};
</script>
<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 100;
}

.backdrop--active {
  pointer-events: all;
  /* z-index: 1000; */
}

.train-pad {
  padding: 50px 0 10px;
}

.train-pad > p {
  font-size: 18px;
  color: #fff;
  text-align: justify;
}

.train {
  transition: all 0.4s;
}

.train-zoom {
  transform: scale(1.5);
}

@media only screen and (max-width: 600px) {
  .blog-img {
    max-height: 557px;
    height: 100%;
  }
}

.blog-img {
  max-height: 557px;
  height: 100%;
}
</style>
