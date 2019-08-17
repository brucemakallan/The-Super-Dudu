<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.png">
    <NavBar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';

export default Vue.extend({
  name: 'home',
  components: {
    NavBar,
  },
});
</script>
