<script setup lang="ts">
import { LeftMenu } from '@/shared/leftMenu';
</script>

<template>
  <div class="menu">
    <LeftMenu class="leftMenu">
      <div class="links">
        <RouterLink to="/forms" class="links__link">Формы</RouterLink>
        <RouterLink to="" class="links__link">Пользователи</RouterLink>
      </div>
    </LeftMenu>
    <div>JFJFJ</div>
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

.router-link-active {
  color: $primary_color;
}
// .router-link-exact-active {

// }
</style>
