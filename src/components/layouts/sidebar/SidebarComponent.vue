<script setup>
import Overview from '@/assets/svg/chart-pie.svg';
import DocumentReport from '@/assets/svg/document-report.svg';
import ShoppingBag from '@/assets/svg/shopping-bag.svg';
import InboxIn from '@/assets/svg/inbox-in.svg'
import LockClosed from '@/assets/svg/lock-closed.svg'
import ClipboardList from '@/assets/svg/clipboard-list.svg'
import Collection from '@/assets/svg/collection.svg'
import Support from '@/assets/svg/support.svg'
import Adjustments from '@/assets/svg/adjustments.svg'
import Globe from '@/assets/svg/globe.svg'
import Cog from '@/assets/svg/cog.svg'
import SidebarMenuItemComponent from "@/components/layouts/sidebar/menuItem/SidebarMenuItemComponent.vue";


const menuConfiguration = [
  {
    name: "Overview",
    class: 'text-blue-600',
    icon: Overview,
  },
  {
    name: "Pages",
    icon: DocumentReport,
  },
  {
    name: "Sales",
    icon: ShoppingBag,
  },
  {
    name: "Messages",
    icon: InboxIn,
  },
  {
    name: "Authentication",
    icon: LockClosed,
  },
  {
    name: "Docs",
    icon: ClipboardList,
  },
  {
    name: "Components",
    icon: Collection,
  },
  {
    name: "Help",
    icon: Support,
  },
]

</script>

<template>
  <div class="sidebar-container">
    <section class="sidebar-container__main px-3 pt-4">
      <ul>
        <SidebarMenuItemComponent :menu-configuration="menuConfiguration"/>
      </ul>
    </section>
    <section class="sidebar-container__additional">
      <Adjustments/>
      <Globe/>
      <Cog/>
    </section>
  </div>
</template>

<style scoped>

.sidebar-container {
  height: calc(100dvh - 70px);
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
}




</style>