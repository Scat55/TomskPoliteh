<script setup lang="ts">
import { Container } from '../container/';
</script>

<template>
  <div class="menu">
    <Container>
      <div class="menu__logo">
        <img src="../../app/assets/images/logo.png" alt="Logo" />
      </div>
      <slot></slot>
    </Container>
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

  &__logo {
    padding-top: 5rem;
  }
}
</style>
