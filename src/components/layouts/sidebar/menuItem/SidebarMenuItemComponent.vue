<script setup>
import Chevron from '@/assets/svg/chevron-down.svg'

const props = defineProps(['menuConfiguration']);


</script>

<template>
  <li v-for="(item, i) in menuConfiguration" :key="i" class="px-2">
    <div class="row">
      <component :is="item.icon"/>
      <span :class="item.class ? item.class : ''"> {{ item.name }} </span>
    </div>
    <div class="icon">
      <Chevron/>
    </div>
  </li>
</template>

<style scoped>

li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 225px;

  .row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
}

</style>