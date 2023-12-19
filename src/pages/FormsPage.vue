<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { LeftMenu } from '@/shared/leftMenu';
import { Button } from '@/shared/button';
import { CardForm } from '@/widgets';
import { useRouter } from 'vue-router';

import { useGetForms } from '../app/stores/Forms';

const formStore = useGetForms();
const router = useRouter();
const logOut = () => {
  router.push('/');
};
console.log(formStore);
formStore.getFormsFromApi('/forms');
</script>

<template>
  <div class="forms">
    <LeftMenu class="leftMenu">
      <div class="links">
        <RouterLink to="/forms" class="links__link">Формы</RouterLink>
        <RouterLink to="/reg" class="links__link">Пользователи</RouterLink>
      </div>
      <Button class="btn" color="white" @click="logOut">Выход</Button>
    </LeftMenu>
    <div class="rightMenu">
      <div class="rightMenu__heading">
        <h2 class="rightMenu__heading-title">Формы</h2>
        <Button size="s" class="rightMenu__heading-btn">Создать форму</Button>
      </div>

      <div class="rightMenu__forms">
        <CardForm
          v-for="form of formStore.forms"
          :key="form.id"
          :title="form.title"
          :author="form.author"
          :data="form.data"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../app/assets/styles/index.scss';
.leftMenu {
  width: 27.125rem;
}
.forms {
  display: flex;
  gap: 1.875rem;
}
.links {
  margin-top: 1.875rem;
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  &__link {
    color: $black_color;
    cursor: pointer;
    text-decoration: none;
  }
}

.router-link-active {
  color: $primary_color;
}

.rightMenu {
  display: flex;
  flex-direction: column;
  width: 51.5625rem;
  margin-top: 5rem;

  &__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.125rem;

    &-title {
      font-size: 2.5rem;
      font-weight: 500;
    }
    &-btn {
      width: 12rem;
      font-weight: 500;
    }
  }

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
.btn {
  margin-bottom: 4.5rem;
}
</style>
