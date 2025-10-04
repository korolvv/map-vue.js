<script setup>
import { defineProps, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => {
      return ['primary', 'gradient', 'outlined'].includes(value)
    },
  },
  to: String,
})

const bgStyles = computed(() => {
  return props.variant === 'gradient'
    ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]'
    : 'bg-[#FFA279]'
})

const isLinked = computed(() => !!props.to)

const componentName = computed(() => {
  return props.to ? RouterLink : 'button'
})

const link = computed(() => {
  return isLinked.value ? props.to : undefined
})
</script>
<template>
  <component
    :is="componentName"
    :to="link"
    class="bg-[#FFA279] rounded-xl py-[14px] px-10 text-white -tracking-wider font-bold cursor-pointer"
    :class="bgStyles"
  >
    <slot></slot>
  </component>
</template>
