<script setup lang="ts">
import { Button } from '@/shared/button';
</script>

<template>
  <div class="rightMenu__form">
    <div class="rightMenu__form-content">
      <div class="rightMenu__form-text">
        <p class="rightMenu__form-title">Форма регистрации участников</p>

        <span class="author">Автор: user 1</span>
        <span class="data">Дата создания: 01.01.23</span>
      </div>
      <div class="rightMenu__form-buttons">
        <Button size="l" color="white">Редактировать</Button>
        <p class="remove">Удалить</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../app/assets/styles/index.scss';
.rightMenu {
  &__form {
    height: 11.875rem;
    border-radius: 10px;
    background: #fff;
    padding: 1.5rem;
    &-content {
      display: flex;
      justify-content: space-between;
    }
    &-title {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    &-text {
      display: flex;
      flex-direction: column;
    }
    &-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3.625rem;
    }
  }
}
.author {
  font-size: 0.875rem;
  font-weight: 400;
  color: $black_color;
  opacity: 0.5;
}
.data {
  font-size: 0.875rem;
  font-weight: 400;
  color: $black_color;
  opacity: 0.5;
  margin-top: 3.625rem;
}
.remove {
  color: $primary_color;
  font-weight: 500;
  cursor: pointer;
}
</style>
