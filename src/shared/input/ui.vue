<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { Ref } from 'vue';
import type { ErrorObject } from '@vuelidate/core';

const emit = defineEmits(['update:value']);

interface Props {
  type: string;
  placeholder?: string;
  disabled?: boolean;
  error: ErrorObject[];
  value: Ref<string>;
  name: string;
}
const props = defineProps<Props>();

const updateValue = (e: any) => {
  emit('update:value', (e.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="form-input">
    <input
      class="input-text"
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
  width: 21.875rem;
  height: 4.375rem;
  background: #f6f6f6;
  border-radius: 0.625rem;
  border: none;
  outline: none;
  padding: 1.875rem;
  font-size: 1rem;
  letter-spacing: 2px;
}
</style>