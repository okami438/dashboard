<script setup>
import { data } from '@/consts/data/card.js'
import CardComponent from "@/components/layouts/main/card/CardComponent.vue";
import ChartComponent from "@/components/layouts/main/chart/ChartComponent.vue";
import FooterComponent from "@/components/layouts/footer/FooterComponent.vue";



</script>

<template>
  <div class="container">
    <div class="container__main">
      <CardComponent :card="data" :name="'Latest customers'"/>
      <ChartComponent style="flex-grow: 1;"/>
    </div>
    <FooterComponent class="footer"/>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  height: 100lvh;
}

.container__main {
  display: flex;
  flex-direction: row;
  flex: 1;
}

.footer {
  margin-top: auto;
}


</style>