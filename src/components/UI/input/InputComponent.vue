<script setup>
import Search from '@/assets/svg/search.svg'

</script>

<template>
  <div class="input-container">
    <Search/>
    <input type="text" class="search-input" placeholder="Search"/>
  </div>
</template>

<style scoped>


.input-container {
  position: relative;
  width: 400px;

  svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    fill: var(--gray-500); /* Цвет иконки поиска */
  }

  .search-input {
    padding: 5px 0 5px 30px; /* Отступ слева для учёта иконки поиска */
    width: 100%; /* Ширина инпута */
    border: 1px solid var(--gray-500); /* Добавляем тонкую серую границу */
    border-radius: 12px;
    background-color: var(--gray-100); /* Добавляем серый цвет фона */
  }

}

</style>