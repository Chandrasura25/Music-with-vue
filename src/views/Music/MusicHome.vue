<template>
  <div class="container-fluid p-0 m-0">
    <div class="col-md-8">
        <div class="row" v-for="music in allMusics" v-bind:key="music.id">
        <div class="card shadow-sm" style="width:15rem;">
          <img :src="music.cover" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ music.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            b5
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; 
export default {
    methods: {
        getMusic(){
            let url = 'https://musica-api.up.railway.app/new';
            axios.get(url).then((data)=>{
                this.allMusics=(data.data)
            })
        }

    },
  mounted() {
    this.getMusic();
  },
  data() {
    return {
      allMusics:[]
    }
  },
}
</script>

<style>

</style>