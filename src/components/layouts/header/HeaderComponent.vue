<script setup>
import Logo from '@/assets/svg/logo.svg'
import Avatar from '@/assets/svg/user-circle.svg'
import Bell from '@/assets/svg/bell.svg'
import InputComponent from "@/components/UI/input/InputComponent.vue";
</script>

<template>
  <nav class="px-5">
    <div class="left-content">
      <Logo/>
      <InputComponent/>
    </div>
    <div class="right-content">
      <Bell/>
      <Avatar/>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/styles/colors' as *;
@use 'sass:map';

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: .5px solid map-get($gray, '200');
  background-color: white;

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

  svg {
    cursor: pointer;
  }

}

</style>