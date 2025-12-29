<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Props definieren
defineProps<{
  icon: any, 
  title: string   
}>()
</script>

<template>
  <div class="detail-header bg-gray-200 px-6 py-12 md:p-12 flex justify-between items-center">
    <div class="content flex text-black items-center">
     <font-awesome-icon :icon="icon" class="text-xl mr-3" />
      <h1 class="text-2xl leading-none">{{ title }}</h1>
    </div>

    <RouterLink
      to="/categories"
      class="btn btn-sm md:btn-md lg:btn-lg bg-gray-200 rounded-xl text-black shadow-none"
    >
      zurück
    </RouterLink>
  </div>



</template>
