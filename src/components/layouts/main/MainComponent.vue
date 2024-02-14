<script setup>
import { data } from '@/consts/data/card.js'
import CardComponent from "@/components/layouts/main/card/CardComponent.vue";
import ChartComponent from "@/components/layouts/main/chart/ChartComponent.vue";
import FooterComponent from "@/components/layouts/footer/FooterComponent.vue";



</script>

<template>
  <div class="container d-flex">
    <div class="col-12">
      <ChartComponent  style=""/>
    </div>
    <div class="col-4">
      <CardComponent  :card="data" :name="'Latest customers'"/>
    </div>
    <div class="col-8">
      <CardComponent :card="data" :name="'Latest customers'"/>
    </div>
  </div>
</template>

<style scoped>

.container {
  flex-wrap: wrap;

  &__main {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
}


</style>