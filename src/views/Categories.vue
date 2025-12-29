<script setup lang="ts">
import { ref, onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { RouterLink } from "vue-router";
import { animate, cubicBezier } from 'animejs';

// Refs für die DOM-Elemente
const detailsRefs = ref<HTMLElement[]>([]);

// 1. Logik für das Einblenden beim Scrollen (Intersection Observer)
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = entry.target.getAttribute('data-index');
        
        animate(entry.target, {
          opacity: [0, 1],
          translateY: [40, 0],
          easing: 'easeOutQuart',
          duration: 800,
          delay: Number(index) * 150 // Kaskaden-Effekt
        });

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  detailsRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });
});

// 2. Logik für das Aufklappen (Click-Animation)
const toggleAnimation = (index: number, event: Event) => {
  event.preventDefault(); // Browser-Standard verhindern
  
  const detail = detailsRefs.value[index];
  if (!detail) return;

  const isOpen = detail.hasAttribute('open');
  const contents = detail.querySelectorAll('.collapse-content');

  if (!isOpen) {
    // Öffnen
    detail.setAttribute('open', '');
    animate(contents, {
      translateX: [30, 0],
      opacity: [0, 1],
      rotate: [0, 0],
      easing: cubicBezier(0.5, 0, 0.9, 0.3),
      duration: 500,
      delay: (el, i) => i * 80
    });
  } else {
    // Schließen
    animate(contents, {
      translateX: [0, 30],
      opacity: [1, 0],
      rotate: [0, 0],
      easing: 'easeInQuad',
      duration: 300,
      complete: () => {
        detail.removeAttribute('open');
      }
    });
  }
};

// Daten-Array
const categories = ref([
  {
    title: "Ökonomisch",
    items: [
      { label: "Gender Pay Gap", link: "/oekonomisch/gender-pay-gap", icon: ['fas', 'arrows-left-right-to-line'] },
      { label: "Pink Tax", link: "/oekonomisch/pink-tax", icon: ['fas', 'hand-holding-dollar'] },
      { label: "Care Arbeit", link: "/care-arbeit", icon: ['fas', 'hands-holding-child'] },
      { label: "Kosten", link: "/kosten", icon: ['fas', 'coins'] },
    ]
  },
  {
    title: "Data Gap",
    items: [
      { label: "Health Data", link: "/health", icon: ['fas', 'heart-pulse'] },
    ]
  },
  {
    title: "Gewalt & Sicherheit",
    items: [
      { label: "Security Info", link: "/security", icon: ['fas', 'shield-halved'] },
    ]
  }
]);
</script>

<template>
  <div class="categories flex flex-col items-center justify-center gap-12 min-h-screen py-20">
    <details
      v-for="(category, index) in categories"
      :key="index"
      class="collapse bg-gray-200 w-64 opacity-0 text-black hover:bg-[var(--black)] hover:border-white border-2 border-transparent transition-all duration-500 ease-in-out hover:text-white" 
      :ref="el => { if (el) detailsRefs[index] = el as HTMLElement }"
      :data-index="index"
    >
      <summary 
        class="collapse-title text-center font-semibold pe-6 uppercase cursor-pointer list-none"
        @click="toggleAnimation(index, $event)"
      >
        {{ category.title }}
      </summary>

      <div
        v-for="(item, i) in category.items"
        :key="i"
        class="collapse-content text-md flex items-center"
      >
        <font-awesome-icon :icon="item.icon" class="text-md mr-3" />
        <RouterLink :to="item.link"  class="hover:underline">
          {{ item.label }}
        </RouterLink>
      </div>
    </details>
  </div>
  // ALtersarmut TZ Falle, Frauenberufe Wert
</template>

