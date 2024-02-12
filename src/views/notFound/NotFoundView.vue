<script setup>

import {useRouter} from "vue-router";

const router = useRouter();


const goHomeFn = () => {
  router.push('/');
}

</script>

<template>
  <div>
  <span class="font-bold text-7xl">
    404
  </span>
    <button @click="goHomeFn">
      GO HOME
    </button>
  </div>
</template>

<style scoped lang="scss">
div {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;

  > button {
    padding: 1rem;
  }
}
</style>