<template>
  <div id="app">
    <notifications group="notification-group" width="100%" />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/global.scss";
</style>
