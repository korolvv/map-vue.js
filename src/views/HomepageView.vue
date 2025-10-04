<script setup>
import { ref } from 'vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSettings } from '../map/settings.js'
import FavoritePlaces from '../components/FavoritePlaces/FavoritePlaces.vue'
import MarkerIcon from '../components/icons/MarkerIcon.vue'

const favoritePlaces = [
  {
    id: 1,
    title: 'New place 1',
    description: 'Description 1',
    img: '',
    lngLat: [7.791667, 47.591111],
  },
  {
    id: 2,
    title: 'New place 2',
    description: 'Description 2',
    img: '',
    lngLat: [7.791667, 47.501111],
  },
]

const activeId = ref(null)

const map = ref(null)

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { lngLat } = favoritePlaces.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ center: lngLat, zoom: 14 })
}
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces :items="favoritePlaces" :active-id="activeId" @place-clicked="changePlace" />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6x1">
      <MapboxMap
        class="w-full h-full"
        :center="[7.791667, 47.561111]"
        :zoom="11"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        @mb-created="(mapInstance) => (map = mapInstance)"
      >
        <MapboxMarker v-for="place in favoritePlaces" :key="place.id" :lng-lat="place.lngLat">
          <button class="cursor-pointer" @click="changeActiveId(place.id)">
            <MarkerIcon class="w-8 h-8" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
