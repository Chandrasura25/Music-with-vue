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
              <h2>
                {{ music.title }}<br /><span>{{ music.artist }}</span>
              </h2>
              <div class="data">
                <audio :src="music.audio" controls></audio>
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
      let url = "https://musica-api.up.railway.app/new";
      axios.get(url).then((res) => {
        this.newMusics = res.data;
      });
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
