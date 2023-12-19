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
  display: flex;
  flex-direction: column;
  padding-left: 11.1875rem;
  background-color: $white_color;
  width: 39rem;
  height: 100vh;
  border-radius: 0.625rem;
  z-index: 1;

  &__logo {
    padding-top: 5rem;
  }
}
</style>
