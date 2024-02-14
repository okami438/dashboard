<script setup>
import Facebook from '@/assets/svg/facebook-f.svg'
</script>

<template>
  <div class="footer-container card">
    <span class="text-sm font-light" >2021, Themesberg</span>
    <Facebook/>
  </div>
</template>

<style scoped>

.footer-container {
  display: flex;
  flex-direction: row;
  height: 4rem;
  padding: 2rem;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  margin: 0 1rem 1rem 1rem;
  border-radius: 12px;
  position: relative;
}
</style>