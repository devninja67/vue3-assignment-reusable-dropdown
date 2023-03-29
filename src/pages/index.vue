<script setup>
import { ref } from 'vue';
import Dropdown from '../components/Dropdown.vue'
import { DROPDOWN_ITEMS } from '../constants/dropdownItems'

const selectedItem = ref('');

const onSelect = (item) => {
  selectedItem.value = item.label;
}
</script>

<template>
  <main>
    <p class="mb-2 font-bold text-left">Vue3 Dropdown</p>
    <Dropdown :items="DROPDOWN_ITEMS" :on-select="onSelect" />
    <p class="mt-2 text-left">Selected: {{ selectedItem }}</p>
  </main>
</template>
