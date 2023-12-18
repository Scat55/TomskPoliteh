<script setup lang="ts"></script>

<template>
  <div class="menu">
    <div class="menu__logo">
      <img src="../../app/assets/images/logo.png" alt="Logo" />
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '../../app/assets/styles/index.scss';
.menu {
  position: relative;
  background-color: $white_color;
  width: 624px;
  height: 100vh;
  border-radius: 0.625rem;
  z-index: 1;
  padding: 0 11.1875rem;

  &__logo {
    padding-top: 5rem;
  }
}
</style>
