<script setup>
import { defineProps } from 'vue'
const props = defineProps(['variant'])
const bgStyles =
  props.variant === 'gradient' ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]' : 'bg-[#FFA279]'
</script>
<template>
  <button
    class="bg-[#FFA279] rounded-xl py-[14px] px-10 text-white -tracking-wider font-bold cursor-pointer"
    :class="bgStyles"
  >
    <slot>Почати роботу</slot>
  </button>
</template>
