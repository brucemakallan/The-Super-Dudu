<template>
  <div class="error-page bg-gradient">
    <h1>Page Not Found</h1>
    <router-link to="/" class="btn btn-sm btn-primary">Back to Homepage</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style lang="scss" scoped>
.error-page {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

