<script setup>
import IInput from '@/components/IInput/IInput.vue'
import { reactive, toRaw } from 'vue'

import IButton from '@/components/IButton/IButton.vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput class="mb-4" v-model="userData.email" label="E-mail" placeholder="email@gmail.com" />
    <IInput
      type="password"
      v-model="userData.password"
      placeholder="*************"
      label="Password"
    />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Sign in</IButton>
  </form>
</template>
