<script setup>

import HeaderComponent from "@/components/layouts/header/HeaderComponent.vue";
import SidebarComponent from "@/components/layouts/sidebar/SidebarComponent.vue";
import MainComponent from "@/components/layouts/main/MainComponent.vue";
import FooterComponent from "@/components/layouts/footer/FooterComponent.vue";

</script>

<template>
<div class="layout-container">
  <header>
    <HeaderComponent :style="{height: '70px'}"/>
  </header>
  <div class="layout-container__wrap">
    <SidebarComponent/>
  <div class="layout-container__content">
    <main class="layout-container__main">
      <MainComponent />
    </main>
    <footer>
      <FooterComponent class="footer"/>
    </footer>
  </div>
  </div>
</div>
</template>

<style scoped lang="scss">


.layout-container {
  display: flex;
  flex-direction: column;

  &__main {

  }

  &__wrap {
    display: flex;
    position: relative;
    flex-direction: row;
  }

  &__content {
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
    overflow: auto;
    width: 100vw;
    height: calc(100vh - 70px);
  }
}


</style>
