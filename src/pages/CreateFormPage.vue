<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { LeftMenu } from '@/shared/leftMenu';
import { Button } from '@/shared/button';
import { BigButton } from '@/shared/bigButton';
import { Input } from '@/shared/input';
import { Checkbox } from '@/shared/checkbox';
import { ref } from 'vue';

const valueInput = ref<string>('');
const counter = ref<number>(0);
const required = ref<boolean>(false);
const isChecked = ref<boolean>(false);

const handler = () => {
  if (isChecked.value === true || valueInput.value !== '') {
    alert(1);
  } else {
    alert('Ошибка');
  }
};
</script>
<template>
  <form @submit.prevent="handler">
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
          <Button color="white" type="button">Скрипт</Button>
          <Button color="primary" @click="handler">Сохранить</Button>
        </div>
      </LeftMenu>

      <div class="rightMenu">
        <div class="rightMenu__text">
          <h2 class="rightMenu__text-title">Поля</h2>
          <p class="rightMenu__text-subtitle">Скрытые поля</p>
        </div>
        <BigButton class="rightMenu__bigButton" type="button" @click="counter++">
          <p>Добавить поле</p>
          <img src="../app/assets/images/plus.svg" alt="AddInput" />
        </BigButton>

        <div class="rightMenu__field">
          <h2 class="rightMenu__field-title" v-if="counter > 0">Поля</h2>
          <div class="rightMenu__field-content" v-for="count in counter">
            <div class="rightMenu__field-spans" v-if="counter > 0">
              <div>
                <span class="value">{{ valueInput }}</span>
                <span class="value"> Контакт</span>
              </div>
              <span class="remove" @click="counter--">Удалить поле</span>
            </div>

            <Input
              type="text"
              name="name"
              v-model:value="valueInput"
              placeholder="Ваше значение"
              :disabled="false"
              class="input"
              color="white"
              :required="required"
            />

            <div class="isReq">
              <Checkbox :required="false" v-model:checked="isChecked" />
              <span class="question">Сделать поле обязательным</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
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
    max-height: 21.875rem;
    overflow: auto;
    &-title {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 2rem;
    }
    &-spans {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin-top: 1.875rem;
      margin-bottom: 0.5625rem;
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
.value {
  font-size: 1rem;
  font-weight: 400;
  color: $black_color;
  opacity: 0.5;
}

.remove {
  font-size: 1rem;
  color: $primary_color;
  font-weight: 400;
  cursor: pointer;
}
.isReq {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.8125rem;
  margin-bottom: 0.625rem;
}
.question {
  color: #212121;
  font-size: 0.875rem;
  font-weight: 500;
}
</style>
