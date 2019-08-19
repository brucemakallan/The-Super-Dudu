<template>
  <div id="app">
    <notifications group="notification-group" width="100%" />
    <Loading v-if="isLoading" />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Loading from './components/Loading.vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'App',

  computed: {
    ...mapGetters(['isLoading']),
  },

  components: {
    Loading,
  },
});
</script>


<style lang="scss">
@import "./assets/styles/global.scss";
</style>
