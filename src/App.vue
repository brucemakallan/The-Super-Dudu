<template>
  <div id="app">
    <notifications group="notification-group" width="100%" />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/global.scss";
</style>
