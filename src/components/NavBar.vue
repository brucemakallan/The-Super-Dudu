<template>
  <nav>
    <div>NavBar</div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'NavBar',

  computed: {
    ...mapGetters(['allProducts', 'oneProduct']),
  },

  methods: {
    ...mapActions(['fetchAllProducts']),
  },

  created() {
    this.fetchAllProducts();
  },
});
</script>

<style lang="scss" scoped>

</style>

