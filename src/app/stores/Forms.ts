import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
const url: string = 'https://5fdb4b66ec7a0eb1.mokky.dev';

interface Form {
  id: number;
  title: string;
  author: string;
  data: any;
}

export const useGetForms = defineStore('formStore', () => {
  const forms = ref<Array<Form>>([]);

  const getFormsFromApi = async (search: string) => {
    const res = await fetch(`${url}/${search}`);
    const data = await res.json();
    forms.value = data;
  };

  return {
    forms,
    getFormsFromApi
  };
});
