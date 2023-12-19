<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { LeftMenu } from '@/shared/leftMenu';
import { Button } from '@/shared/button';
</script>
<template>
  <div>
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
  </div>
</template>

<style scoped lang="scss">
@import '../app/assets/styles/index.scss';
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
a:-webkit-any-link {
  text-decoration: none;
}
.router-link-active {
  color: $primary_color;
}
</style>
