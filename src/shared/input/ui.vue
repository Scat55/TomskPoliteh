<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { Ref } from 'vue';
import type { ErrorObject } from '@vuelidate/core';

const emit = defineEmits(['update:value']);

interface Props {
  type: string;
  placeholder?: string;
  disabled?: boolean;
  error?: ErrorObject[];
  value?: Ref<string>;
  color?: string;
  name: string;
}
const props = defineProps<Props>();
const { color } = props;
const updateValue = (e: any) => {
  emit('update:value', (e.target as HTMLInputElement).value);
};
const classes = ['input', 'input-text', `color_${color}`];
</script>

<template>
  <div class="form-input">
    <input
      :class="classes"
      :type="type"
      :name="name"
      :id="name"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
    />

    <TransitionGroup>
      <div class="form-error" v-for="element of error" :key="element.$uid">
        <div class="form-error__message">{{ element.$message }}</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
@import '../../app/assets/styles/index.scss';
.form-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.input-text {
  min-width: 16.8125rem;
  height: 4.375rem;
  background: #f6f6f6;
  border-radius: 0.625rem;
  border: none;
  outline: none;
  padding: 1.875rem;
  font-size: 1rem;
  letter-spacing: 2px;
}
.form-error {
  display: inline-block;
  max-width: 21.875rem;
  margin-top: 0.5rem;
  color: $white_color;
  border-radius: 0.625rem;
  padding: 0.3125rem;
  background-color: $error_color;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.color_white {
  background-color: #fff;
}
</style>
