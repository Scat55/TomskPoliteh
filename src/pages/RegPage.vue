<script setup lang="ts">
import { ref, computed } from 'vue';
import { LeftMenu } from '@/shared/leftMenu';
import { Input } from '@/shared/input';
import { Button } from '@/shared/button';
import { Checkbox } from '@/shared/checkbox';
import useVuelidate from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';

const firstNameField = ref<string>('');
const lastNameField = ref<string>('');

const rules = computed(() => ({
  firstNameField: {
    required: helpers.withMessage(`Обязательное поле`, required)
  },
  lastNameField: {
    required: helpers.withMessage(`Обязательное поле`, required)
  }
}));
const v = useVuelidate(rules, {
  firstNameField,
  lastNameField
});

const handler = () => {
  v.value.$touch(); // Проверка на ошибки

  if (v.value.$error) return;
  alert('Пользователь создан');
  firstNameField.value = lastNameField.value = '';
};
</script>

<template>
  <div class="menu">
    <LeftMenu class="leftMenu">
      <div class="links">
        <RouterLink to="/forms" class="links__link">Формы</RouterLink>
        <RouterLink to="" class="links__link">Пользователи</RouterLink>
      </div>
    </LeftMenu>
    <div class="rightMenu">
      <form class="form" @submit.prevent="handler">
        <h2 class="form__title">Форма регистрации участников</h2>
        <div class="form__inputs">
          <Input
            type="text"
            name="name"
            placeholder="Имя"
            :disabled="false"
            class="form__input"
            v-model:value="v.firstNameField.$model"
            :error="v.firstNameField.$errors"
          />
          <Input
            type="text"
            name="name"
            placeholder="Фамилия"
            :disabled="false"
            class="form__input"
            v-model:value="v.lastNameField.$model"
            :error="v.lastNameField.$errors"
          />
        </div>
        <div class="form__info">
          <Checkbox :required="true" />
          <p class="form__info-text">
            Нажимая кнопку «Отправить», я принимаю условия политики конфиденциальности
          </p>
        </div>

        <Button size="l" color="primary" type="submit" class="form__btn">Отправить</Button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../app/assets/styles/index.scss';
.menu {
  display: flex;
}
.leftMenu {
  display: flex;
  flex-direction: column;
}
.links {
  margin-top: 1.875rem;
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;

  &__link {
    color: $black_color;
    cursor: pointer;
    text-decoration: none;
  }
}
.rightMenu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $primary_color;
}

.router-link-active {
  color: $primary_color;
}
.form {
  width: 21.8125rem;
  min-height: 31.5rem;
  border-radius: 1.25rem;
  padding: 2.5rem;
  background-color: $white_color;
  &__title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.875rem;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
  &__input {
    width: 16.8125rem;
  }

  &__info {
    display: flex;
    align-items: center;
    margin-top: 1.8438rem;
    gap: 1rem;

    &-text {
      font-size: 0.875rem;
      color: #212121;
      opacity: 0.5;
    }
  }
  &__btn {
    margin-top: 3.0938rem;
  }
}
.form-error__message {
  padding: 2px;
}
</style>
