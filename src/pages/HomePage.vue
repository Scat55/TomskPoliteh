<script setup lang="ts">
import { ref, computed } from 'vue';
import { Button } from '@/shared/button';
import { Input } from '@/shared/input';
import { LeftMenu } from '@/shared/leftMenu';
import useVuelidate from '@vuelidate/core';
import { minLength, helpers, required } from '@vuelidate/validators';
import { useRouter } from 'vue-router';

const router = useRouter();
const nameField = ref('');
const passwordField = ref('');

const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage(`Обязательное поле`, required)
  },
  passwordField: {
    required: helpers.withMessage(`Обязательное поле`, required),
    minLength: helpers.withMessage(`Пароль должен быть не меньше 8 символов`, minLength(8))
  }
}));
const v = useVuelidate(rules, {
  nameField,
  passwordField
});

const handler = () => {
  v.value.$touch(); // Проверка на ошибки

  if (v.value.$error) return;

  router.push('/forms');
  nameField.value = passwordField.value = '';
};
</script>

<template>
  <div class="firstPage">
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
              class="input"
            />
            <Input
              type="password"
              name="password"
              placeholder="Пароль"
              v-model:value="v.passwordField.$model"
              :error="v.passwordField.$errors"
              :disabled="false"
              class="input"
            />
          </div>
          <Button size="s" color="primary" type="submit">Вход</Button>

          <div class="authForm__text">
            <p class="authForm__text-title">
              Если возникла проблема, то можете написать<span class="authForm__text-green">
                Алёне из Сибтеха</span
              >
            </p>
            <p class="authForm__text-title">
              С любовью, ваш <span class="authForm__text-green">Сибтех</span>
            </p>
          </div>
        </div>
      </LeftMenu>
    </form>
    <div class="rightMenu"><img src="/src/app/assets/images/Group.png" alt="Group" /></div>
  </div>
</template>

<style scoped lang="scss">
@import '../app/assets/styles/index.scss';
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

  &__text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 16.25rem;
    height: 4.5625rem;
    margin-top: 19.375rem;

    &-title {
      color: $grey_color;
      line-height: 24px;
      letter-spacing: -0.64px;
    }

    &-green {
      color: $primary_color;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
.input {
  width: 21.875rem;
}
.firstPage {
  display: flex;
  align-items: center;
}
.rightMenu {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: $primary_color;

  img {
    position: absolute;
    width: 90%;
    bottom: 0px;
    left: -180px;
  }
}
</style>
