<script setup lang="ts">
import { ref, computed } from 'vue';
import { Container } from '@/shared/container';
import { Button } from '@/shared/button';
import useVuelidate from '@vuelidate/core';
import { maxLength, helpers, required } from '@vuelidate/validators';
import { Input } from '@/shared/input/';

const nameField = ref('');

const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage(`Обязательное поле`, required)
  }
}));
const v = useVuelidate(rules, {
  nameField
});
</script>

<template>
  <div>
    <Container>
      <Button size="s" color="primary">Вход</Button>
      <Input
        type="text"
        name="name"
        placeholder="Введите ваше имя"
        v-model:value="v.nameField.$model"
        :error="v.nameField.$errors"
        :disabled="false"
      />
    </Container>
  </div>
</template>

<style scoped></style>
