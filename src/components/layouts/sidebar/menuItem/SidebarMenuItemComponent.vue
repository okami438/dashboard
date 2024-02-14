<script setup>
import Chevron from '@/assets/svg/chevron-down.svg'
import {ref} from "vue";
import {useRouter} from "vue-router";

const props = defineProps(['item']);
const isChevronRotated = ref(false);
const isChildrenVisible = ref(false);
const router = useRouter();

const toggleChevron = () => {
  if (props.item.children) {
    isChevronRotated.value = !isChevronRotated.value;
    isChildrenVisible.value = !isChildrenVisible.value;
  }
};

const handleItemClick = (item) => {
  if (!item.children && item.to) {
    router.push(item.to);
  } else if (item.children && item.children.to) {
    router.push(item.children.to);
  }
};

const handleItemClickWithToggle = (item) => {
  toggleChevron();
  handleItemClick(item);
};

</script>

<template>
  <ul>
    <li class="px-2" @click="handleItemClickWithToggle(item)" >
      <div class="row">
        <component :is="item.icon"/>
        <span class="text-sm"> {{ item.name }} </span>
      </div>
      <div class="icon" v-if="item.children" :class="{ 'rotated': isChevronRotated }">
        <Chevron/>
      </div>
    </li>
    <Transition>
      <ul class="children" v-if="isChildrenVisible">
        <template v-for="(child, index) in item.children" :key="index">
          <SidebarMenuItemComponent  :item="child"/>
        </template>
      </ul>
    </Transition>
  </ul>
</template>



<style scoped>
ul {
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 225px;
    cursor: pointer;

    .row {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      > span {
        display: flex;
        align-items: center;
      }
    }

    .icon {
      transition: transform 0.3s;
    }

    .rotated {
      transform: rotate(180deg);
    }

  }

  .children {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: 3rem;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.1s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}



</style>