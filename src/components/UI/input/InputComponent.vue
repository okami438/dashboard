<script setup>
import Search from '@/assets/svg/search.svg'

</script>

<template>
  <div class="input-container">
    <Search/>
    <input type="text" class="search-input" placeholder="Search"/>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/colors' as *;
@use 'sass:map';


.input-container {
  position: relative;
  width: 400px;

  svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    fill: map-get($gray, '500'); /* Цвет иконки поиска */
  }

  .search-input {
    padding: 5px 0 5px 30px; /* Отступ слева для учёта иконки поиска */
    width: 100%; /* Ширина инпута */
    border: 1px solid map-get($gray, '200'); /* Добавляем тонкую серую границу */
    border-radius: 12px;
    background-color: map-get($gray, '100'); /* Добавляем серый цвет фона */
  }

}

</style>