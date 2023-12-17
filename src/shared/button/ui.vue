<script setup lang="ts">
interface Props {
  color?: 'primary' | 'white';
  size?: 's' | 'm' | 'l';
}

const props = defineProps<Props>();

const { color = 'primary', size = 's' } = props;
const classes = ['button', `size_${size}`, `color_${color}`];
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import '../../app/assets/styles/index.scss';
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  border: none;
  outline: none;
  font-weight: 500;
  line-height: normal;
  border-radius: 0.625rem;
  cursor: pointer;

  &.color_primary {
    background-color: $primary_color;
    color: $white_color;
    border: 1px solid $primary_color;
  }
  &.color_white {
    background: $white_color;
    color: $primary_color;
    border: 1px solid $primary_color;
  }
  &.size_s {
    width: 10rem;
    height: 3.125rem;
  }
  &.size_m {
    width: 11.1875rem;
    height: 2.625rem;
  }
  &.size_l {
    width: 16.8125rem;
    height: 3.125rem;
  }
}
</style>
