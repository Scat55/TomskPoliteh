<script setup lang="ts">
const emits = defineEmits(['update:checked']);
interface Props {
  required?: boolean;
  checked?: boolean;
}

const props = defineProps<Props>();

const { required, checked } = props;

const handleClick = (event: any) => {
  emits('update:checked', event.target.checked);
};
</script>

<template>
  <label>
    <input
      type="checkbox"
      class="realchek"
      :required="required"
      :checked="checked"
      @input="handleClick($event)"
    />
    <span class="customcheck" :required="required" :checked="checked"></span>
  </label>
</template>

<style scoped lang="scss">
@import '../../app/assets/styles/index.scss';
.realchek {
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  z-index: -1;
}
.customcheck {
  position: relative;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border-radius: 0.25rem;
  vertical-align: sub;
  border: 1px solid $primary_color;
  cursor: pointer;

  &::before {
    content: '';
    // рисуем галочку
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    background-image: url(../../app/assets/images/check.png);
    background-size: contain;
    background-repeat: no-repeat;

    // Выравниваем по центру
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 0.2s ease-in-out;
  }
}

.realchek:checked + .customcheck::before {
  transform: translate(-50%, -50%) scale(1);
}
</style>
