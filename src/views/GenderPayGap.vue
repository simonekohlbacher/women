<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLink } from 'vue-router'
import { animate, cubicBezier } from 'animejs'
import DetailHeader from '../components/DetailHeader.vue'

const line = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!line.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        line.value!.classList.add('rotate-10') 
      }
    },
    { threshold: 0.7 } // Element ist 10% sichtbar
  )

  observer.observe(line.value)
})

</script>

<template>
  <DetailHeader :icon="['fas', 'arrows-left-right-to-line']" title="Gender Pay Gap" />

  <div class="detail-content p-6 md:p-12">
    <div class="flex items-center my-4">
      <div class="flex-1 border-t border-white"></div>
      <p class="mx-4 text-center text-s w-[60vw]">
        Durchschnittlicher Lohnunterschied, gemessen am Bruttostundenverdienst
      </p>
      <div class="flex-1 border-t border-white"></div>
    </div>

    <div class="salary-info flex flex-col gap-6 mt-12 ">
      <h2 class="text-l text-center ">2023 mittleres Bruttojahreseinkommen</h2>

      

      
      <div class="salaries flex gap-20 justify-center">
        <div class="flex flex-col items-center translate-y-0">
          <font-awesome-icon :icon="['fas', 'venus']" class="text-md" />
          <span>€ 27.976</span>
        </div>

        <div class="flex flex-col items-center translate-y-8">
          <font-awesome-icon :icon="['fas', 'mars']" class="text-md" />
          <span>€ 42.131</span>
        </div>
      </div>


      <div class="wage flex items-center justify-center relative">
        <!-- Linie  -->
        <div ref="line" class="absolute top-1/5 w-[50vw] h-[2px] bg-white transition-transform duration-1000"></div>
        <!-- Dreieck SVG -->
        <font-awesome-icon :icon="['fas', 'caret-up']" class="text-4xl wage-socket" />
      </div>

      <p class="flex items-center justify-center "><strong>GPG = 18,3 %</strong></p>

      <div class="flex flex-col gap-6 justify-center mt-4">
        <div class="tooltip justify-center flex" data-tip="Teilzeit, Schlechter bezahlte Branchen">
          <button class="btn rounded-xl bg-gray-200 text-black">Gründe</button>
        </div>

        <div class="flex gap-8 items-center mb-12">
          <span class="text-3xl ml-8">!</span>
          <p class="">
            <strong>65,7% des GPG ungeklärt</strong> <br/>Diskriminierung, strukturelle
            Benachteiligungen
          </p>
        </div>
      </div>

      <div class="acc md:w-[40vw]">
        <details class="collapse bg-gray-200">
          <summary class="collapse-title font-semibold text-black">GPG EU weit</summary>
          <div class="collapse-content text-sm">
            <img src="../assets/img/gpg-eu.png" class="acc-img" alt="GPG EU" />
          </div>
        </details>
        <details class="collapse bg-gray-200 mt-2">
          <summary class="collapse-title font-semibold text-black">Kununu Gehaltsvergleich</summary>
          <div class="collapse-content text-sm">
            <img src="../assets/img/gehalt-kununu.png" class="acc-img" alt="GPG EU" />
          </div>
        </details>
      </div>

      <div class="text-[0.4rem] mt-8">
        <h3>Quellen:</h3>
        <span class="break-all">
          https://www.statistik.at/fileadmin/pages/362/Infotext_GenderStatistik_Einkommen.pdf
        </span><br/>
        <span>Kununu Gehaltscheck</span>
      </div>
    </div>
  </div>
</template>
