<template>
  <div class="home">
    <NavBar />
    <font-awesome-icon icon="envelope" />
    <button @click="show = !show">toggle</button>

    <transition name="bounceUp">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';

export default Vue.extend({
  name: 'home',

  data() {
    return {
      show: true,
    };
  },

  components: {
    NavBar,
  },
});
</script>
