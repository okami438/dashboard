<script setup>
const props = defineProps(['card', 'name']);

</script>

<template>
<form>
  <header class="text-base font-bold">
    <span>{{ name }}</span>
  </header>
  <div class="item" v-for="(item, i) in card" :key="i" :style="{ borderBottom: i !== card.length - 1 ? '1px solid var(--gray-500)' : 'none' }">
    <div class="row-container">
      <div class="row-container__avatar">
        <component :is="item.icon"/>
      </div>
      <div class="row-container__user">
        <span class="text-sm">{{ item.name }}</span>
        <span class="text-xs">{{ item.email }}</span>
      </div>
    </div>
    <div class="row-container__price">
      <span class="text-sm">{{ item.price }}</span>
    </div>
  </div>
</form>
</template>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  width: 22rem;
  height: 24rem;
  max-height: 25rem;
  overflow-y: auto;
  background-color: white;
  box-shadow: 0px -1px 8px 0px rgba(34, 60, 80, 0.2);
  margin: 2rem;
  border-radius: 12px;
  position: relative;

  > header {
    background-color: white;
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;


    .row-container {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      &__avatar {
        display: flex;
        align-items: center;
      }

      &__user {
        display: flex;
        flex-direction: column;
      }

      &__price {
        display: flex;
        align-items: center;
      }
    }
  }
}

::-webkit-scrollbar-track {
  border-radius: 4px;
}

::-webkit-scrollbar {
  width: 9px;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: var(--surface-border);
}
</style>