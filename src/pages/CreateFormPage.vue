<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { LeftMenu } from '@/shared/leftMenu';
import { Button } from '@/shared/button';
import { BigButton } from '@/shared/bigButton';
import { Input } from '@/shared/input';
</script>
<template>
  <div class="createForm">
    <LeftMenu class="leftMenu">
      <RouterLink to="/forms">
        <div class="leftMenu__back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M7.91659 5H2.08325"
              stroke="black"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.99992 7.91732L2.08325 5.00065L4.99992 2.08398"
              stroke="black"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="leftMenu__back-title">Назад</p>
        </div>
      </RouterLink>
      <div class="leftMenu__list">
        <ul class="leftMenu__list-items">
          <li class="leftMenu__list-item">Тип формы</li>
          <li class="leftMenu__list-item">Сущности</li>
          <RouterLink to=""> <li class="leftMenu__list-item">Поля</li></RouterLink>
          <li class="leftMenu__list-item">Правила показа полей</li>
          <li class="leftMenu__list-item">Другие настройки</li>
        </ul>
      </div>

      <div class="leftMenu__buttons">
        <Button color="white">Скрипт</Button>
        <Button color="primary">Сохранить</Button>
      </div>
    </LeftMenu>

    <div class="rightMenu">
      <div class="rightMenu__text">
        <h2 class="rightMenu__text-title">Поля</h2>
        <p class="rightMenu__text-subtitle">Скрытые поля</p>
      </div>
      <BigButton class="rightMenu__bigButton">
        <p>Добавить поле</p>
        <img src="../app/assets/images/plus.svg" alt="AddInput" />
      </BigButton>

      <div class="rightMenu__field">
        <h2 class="rightMenu__field-title">Поля</h2>
        <Input
          type="text"
          name="name"
          placeholder="Логин"
          :disabled="false"
          class="input"
          color="white"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../app/assets/styles/index.scss';
.createForm {
  display: flex;
  gap: 1.875rem;
}

.leftMenu {
  width: 27.125rem;

  &__back {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 2.25rem;

    &-title {
      color: #212121;
      font-size: 16px;
      font-weight: 400;
      text-decoration: none;
    }
  }
  &__list {
    flex: 1;
    &-items {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3.5rem;
    }
    &-item {
      list-style: none;
      cursor: pointer;
    }
  }
  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    margin-bottom: 4.5rem;
  }
}
.rightMenu {
  &__text {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    &-title {
      font-size: 2.5rem;
      font-weight: 500;
      margin-top: 5rem;
    }
    &-subtitle {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
  &__bigButton {
    margin-top: 1.875rem;
  }
  &__field {
    margin-top: 3.125rem;
    &-title {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 2rem;
    }
  }
}
a:-webkit-any-link {
  text-decoration: none;
}
.router-link-active {
  color: $primary_color;
}
.input {
  width: 415px;
  &::placeholder {
    background-color: #fff;
  }
}
</style>
