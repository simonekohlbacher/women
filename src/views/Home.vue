<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
 <div class="overview flex items-center justify-center h-screen flex-col gap-10">
      <h1 class="text-4xl text-center">Benachteiligung von Frauen in Österreich</h1>
      <RouterLink to="/categories" 
             class="btn btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-white rounded-xl text-black">
            Lets go
      </RouterLink>
    </div>

</template>

