<template>
  <div class="home">
    <NavBar />
    <font-awesome-icon icon="envelope" />
    <button @click="onClick">toggle</button>

    <transition name="bounceUp">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'home',

  data() {
    return {
      show: true,
    };
  },

  computed: {
    ...mapGetters(['isLoading']),
  },

  methods: {
    ...mapActions(['toggleIsLoading']),
    onClick(): void {
      this.show = !this.show;
      this.toggleIsLoading();
    },
  },

  components: {
    NavBar,
  },
});
</script>
