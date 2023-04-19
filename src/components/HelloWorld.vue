<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
    <div class="sideBar">
      <input type="checkbox" name="" id="check" />
      <label for="check">
        <i class="fas fa-bars" aria-hidden="true" id="btn"></i>
        <i class="fas fa-times" aria-hidden="true" id="cancel"></i>
      </label>
      <div class="sidebar">
        <header>Shake It</header>
        <ul>
          <li>
            
            <RouterLink to="/"><i class="fas fa-qrcode" aria-hidden="true"></i>New</RouterLink>
          </li>
          <li>
            <RouterLink to="/popular"><i class="fas fa-link" aria-hidden="true"></i>Popular</RouterLink>
          </li>
          <li>
            <RouterLink to="/playlist"><i class="fas fa-stream" aria-hidden="true"></i>PlayList</RouterLink>
          </li>
          <li>
            <a href="#"
              ><i class="fas fa-calendar-week" aria-hidden="true"></i>Events</a
            >
          </li>
          <li>
            <a href="#"
              ><i class="far fa-question-circle" aria-hidden="true"></i>About</a
            >
          </li>
          <li>
            <a href="#"
              ><i class="fas fa-sliders-h" aria-hidden="true"></i>Services</a
            >
          </li>
          <li>
            <a href="#"
              ><i class="far fa-envelope" aria-hidden="true"></i>Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
</template>
