<script setup>
import { reactive, toRaw } from 'vue'
import IButton from '../../IButton/IButton.vue'
import IInput from '../../IInput/IInput.vue'
import FormContainer from '../FormContainer.vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  name: '',
  email: '',
  password: '',
})
</script>

<template>
  <FormContainer
    @submit.prevent="emit('submit', toRaw(userData))"
    class="max-w-[500px] w-full bg-white p-10 rounded-2xl"
  >
    <IInput class="mb-4" label="Full name" v-model="userData.name" placeholder="John Dou" />
    <IInput
      class="mb-4"
      label="E-mail"
      type="textarea"
      placeholder="mail@mail.com"
      v-model="userData.email"
    />
    <IInput
      label="Password"
      type="password"
      v-model="userData.password"
      placeholder="*************"
    />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Create account</IButton>
  </FormContainer>
</template>
