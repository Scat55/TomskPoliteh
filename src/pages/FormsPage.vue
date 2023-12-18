<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { LeftMenu } from '@/shared/leftMenu';
import { Button } from '@/shared/button';
import { useRouter } from 'vue-router';
const router = useRouter();
const logOut = () => {
  router.push('/');
};
</script>

<template>
  <div>
    <LeftMenu>
      <div class="links">
        <RouterLink to="/forms" class="links__link">Формы</RouterLink>
        <RouterLink to="/reg" class="links__link">Пользователи</RouterLink>
      </div>
      <Button class="btn" color="white" @click="logOut">Выход</Button>
    </LeftMenu>
  </div>
</template>

<style scoped lang="scss">
@import '../app/assets/styles/index.scss';
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
.btn {
  margin-top: 35.625rem;
}
.router-link-active {
  color: $primary_color;
}
// .router-link-exact-active {

// }
</style>
