<script setup lang="ts">
import { ref, computed } from 'vue';
import { Container } from '@/shared/container';
import { Button } from '@/shared/button';
import { Input } from '@/shared/input';
import { LeftMenu } from '@/shared/leftMenu';
import useVuelidate from '@vuelidate/core';
import { maxLength, helpers, required } from '@vuelidate/validators';

const nameField = ref('');
const passwordField = ref('');

const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage(`Обязательное поле`, required)
  },
  passwordField: {
    required: helpers.withMessage(`Обязательное поле`, required)
  }
}));
const v = useVuelidate(rules, {
  nameField,
  passwordField
});

const handler = () => {
  v.value.$touch(); // Проверка на ошибки

  if (v.value.$error) return;

  alert('Успешно');
  console.log(nameField.value);
};
</script>

<template>
  <form @submit.prevent="handler">
    <LeftMenu>
      <div class="authForm">
        <div class="authForm__inputs">
          <Input
            type="text"
            name="name"
            placeholder="Логин"
            v-model:value="v.nameField.$model"
            :error="v.nameField.$errors"
            :disabled="false"
          />
          <Input
            type="password"
            name="password"
            placeholder="Пароль"
            v-model:value="v.passwordField.$model"
            :error="v.passwordField.$errors"
            :disabled="false"
          />
        </div>
        <Button size="s" color="primary" type="submit">Вход</Button>
      </div>
    </LeftMenu>
  </form>
</template>

<style scoped lang="scss">
.authForm {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1.875rem;

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
}
</style>
