<template>
  <b-navbar toggleable="lg" variant="faded" type="light">
    <b-navbar-brand><router-link to="/">NavBar</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
        <b-nav-item-dropdown>
          <template slot="button-content">Categories</template>
          <b-dropdown-item><router-link to="/about">Electronics</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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

