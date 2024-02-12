<script setup>
import { menuConfiguration } from "@/consts/sidebar/items.js";
import Adjustments from '@/assets/svg/adjustments.svg'
import Globe from '@/assets/svg/globe.svg'
import Cog from '@/assets/svg/cog.svg'
import SidebarMenuItemComponent from "@/components/layouts/sidebar/menuItem/SidebarMenuItemComponent.vue";




</script>

<template>
  <div class="sidebar-container">
    <section class="sidebar-container__main px-3 pt-4">
      <ul>
        <SidebarMenuItemComponent v-for="(item, i) in menuConfiguration" :key="i" :item="item"/>
      </ul>
    </section>
    <section class="sidebar-container__additional">
      <Adjustments/>
      <Globe/>
      <Cog/>
    </section>
  </div>
</template>

<style scoped lang="scss">

.sidebar-container {
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid var(--gray-500);

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.375rem;
  }

  .sidebar-container__additional {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.375rem;
    padding-bottom: 1rem;
  }

  svg {
    cursor: pointer;
  }
}




</style>