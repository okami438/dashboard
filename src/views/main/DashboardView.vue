<script setup>

import HeaderComponent from "@/components/layouts/header/HeaderComponent.vue";
import SidebarComponent from "@/components/layouts/sidebar/SidebarComponent.vue";
import MainComponent from "@/components/layouts/main/MainComponent.vue";
</script>

<template>
  <div class="app-container">
    <HeaderComponent :style="{height: '70px'}"/>
    <div class="app-container__content">
      <SidebarComponent/>
      <main :style="{backgroundColor: 'var(--gray-100)'}">
        <MainComponent :style="{height: 'calc(100lvh - 70px)'}"/>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">

.app-container {
  display: flex;
  flex-direction: column;
  height: 100dvh;

  &__content {
    display: flex;
    flex: 1;

    > main {
      flex: 1;
    }

  }
}


</style>
