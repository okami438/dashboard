<script setup>
import Logo from '@/assets/svg/logo.svg'
import Avatar from '@/assets/svg/avatar.svg'
import Bell from '@/assets/svg/bell.svg'
</script>

<template>
  <nav class="px-5">
    <div class="left-content">
      <Logo/>
      <input type="text"/>
    </div>
    <div class="right-content">
      <Bell/>
      <Avatar/>
    </div>
  </nav>
</template>

<style scoped>

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  border-bottom: .5px solid var(--gray-500);

  > .left-content {
    display: flex;
    flex-direction: row;
    width: 469px;
    height: 45px;
    align-items: center;
    gap: 1.5rem;
  }

  > .right-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .75rem;
  }

}

</style>