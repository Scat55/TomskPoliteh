<script setup lang="ts"></script>

<template>
  <button class="bigButton">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import '../../app/assets/styles/index.scss';
.bigButton {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25.9375rem;
  height: 4.4375rem;
  font-size: 1rem;
  font-weight: 400;
  color: $primary_color;
  background-color: $white_color;
  padding: 1.25rem 1.875rem;
  border-radius: 0.625rem;
  border: 1px dashed $primary_color;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
