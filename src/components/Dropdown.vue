<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Select'
  },
  items: {
    type: Array,
    default: () => []
  },
  onSelect: Function,
})

const isOptionExpaneded = ref(false)

const setToggle = () => {
  isOptionExpaneded.value = !isOptionExpaneded.value
}

const onSelect = (item) => {
  props.onSelect(item)
  isOptionExpaneded.value = false
}
</script>

<template>
  <div class="relative">
    <button @click="setToggle"
      class="flex items-center w-fit p-2 cursor-pointer border border-solid border-gray-300 rounded-lg hover:bg-gray-100"
      @blur="() => { isOptionExpaneded = false; }">
      <span class="text-lg font-medium mr-2">{{ label }}</span>
      <img src="../assets/dropdown.svg" class="h-5 w-5 duration-200"
        :class="isOptionExpaneded ? 'rotate-180' : 'rotate-0'" alt="" />
    </button>
    <Transition enter-active-class="animate-fadedIn" leave-active-class="animate-fadedOut">
      <ul v-show="isOptionExpaneded"
        class="min-w-full w-max p-1 absolute left-0 top-[100%]] bg-white shadow-lg rounded-lg z-50 text-left">
        <li v-for="item in items" :key="item.key" @click="() => onSelect(item)"
          class="p-2 hover:bg-gray-300 cursor-pointer rounded-lg">
          {{ item.label }}
        </li>
      </ul>
    </Transition>
  </div>
</template>
