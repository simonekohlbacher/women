<script setup lang="ts">
import Categories from './components/Views/Categories.vue';
import { RouterView } from 'vue-router';

</script>

<template>

  <main>

    <div class="overview flex items-center justify-center h-screen flex-col gap-10">
      <h1 class="text-5xl">Benachteiligung von Frauen in Österreich</h1>
      <RouterLink to="/categories" 
             class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-white rounded-3xl text-black">
            Lets go
          </RouterLink>
    </div>
    

  </main>
</template>

