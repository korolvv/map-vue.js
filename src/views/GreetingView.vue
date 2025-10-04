<script setup>
import IButton from '../components/IButton/IButton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <div class="text-center">
      <img class="inline mb-6" src="../assets/img/map-pin.svg" alt="" />
      <h1 class="mb-7 font-bold text-4xl">IT traveler</h1>
      <p class="mb-11 leading-6 text-lg">
        A simple and convenient web application that allows you to mark your favorite places, as
        well as those you would really like to visit. So don't hesitate and try it yourself.
      </p>
      <IButton to="auth/registration">Start a journey!</IButton>
    </div>
  </BaseLayout>
</template>
