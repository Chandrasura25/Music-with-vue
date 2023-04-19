<script setup>
import HelloWorld from "../components/HelloWorld.vue";
</script>
<template>
  <main class="glass">
    <HelloWorld />
    <section class="section">
      <div class="content">
        <div class="card" v-for="(music, index) in newMusics" :key="index">    
          <div class="lines"></div>
          <div class="imgBx">
            <img :src="music.cover" alt="{{music.title}}" /> 
          </div>
          <div class="content">
            <div class="details">
              <h2 class="title">
                {{ music.title }}<br /><span>{{ music.info }}</span>
              </h2>
              <div class="data">
                <router-link :to="'/jobs/'+index">Music Available</router-link>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
  </main>
</template>
<script>
import axios from "axios"; 
export default {
  methods: {
    getMusic() {
      let url = "https://musica-api.up.railway.app/playlist";
      axios.get(url).then((res) => {
        this.newMusics = res.data;
      });
    },
    playlist(index) {
      this.$router.push({ name: "JobDetails", params: { id: index } });
    },
  },
  data() {
    return {
      newMusics: [],
    };
  },
  mounted() {
    this.getMusic();
  },
};
</script>
<style>
.title{
  width:100%;
  font-size:12px;
}
</style>