<script setup>
import { RouterView } from "vue-router";
</script>

<template>
    <div class="container">
      <div class="bgPulse">
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           <span></span> 
           <span></span> 
           <span></span> 
           <span></span> 
           <span></span> 
           <span></span> 
        </div>
      <RouterView />
    </div>
</template>


<script>
// import axios from 'axios';

export default {
  // methods: {
  //   getUsers(){
  //     let url = 'https://jsonplaceholder.typicode.com/users'
  //     axios.get(url).then((response)=>{
  //       console.log(response)
  //       this.allUsers = response.data
  //     })
  //   }
  // },
  // mounted(){
  //   this.getUsers();
  // },
  // data() {
  //   return {
  //     allUsers:[]
  //   }
  // },
};
</script>
<style scoped>
</style>
