<script setup>
import IButton from '../components/IButton/IButton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <img class="inline mb-6" src="../assets/img/map-pin.svg" alt="" />
    <h1 class="mb-7 font-bold text-4xl">IT traveler</h1>
    <p class="mb-11 leading-6 text-lg">
      Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також ті,
      в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
    </p>
    <IButton></IButton>
  </BaseLayout>
</template>
