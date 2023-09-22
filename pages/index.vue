<template>
  <div class="relative px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-12">
<!--      <div class="hidden sm:mb-8 sm:flex sm:justify-center">-->
<!--        <div class="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">-->
<!--          Manual de usuario. <a href="doc/manual.pdf" target="_blank" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Leer más <span aria-hidden="true">&rarr;</span></a>-->
<!--        </div>-->
<!--      </div>-->
      <div class="text-center mt-20">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white mb-12">SOAT <br> Interseguro</h1>
        <img src="/images/vehicle.png" alt="" class="mx-auto">
        <!--        <p class="mt-6 text-lg leading-8 text-gray-500">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>-->
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink to="/login" class="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Iniciar Sesión
          </NuxtLink>
          <!--          <NuxtLink to="/" class="text-base font-semibold leading-7 text-gray-900">Soporte <span aria-hidden="true">→</span></NuxtLink>-->
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Interseguro` : 'Interseguro';
  }
})
definePageMeta({
  layout: "login",
})
// import {useLoginStore} from "~/stores/login";
// const userLogin = useLoginStore()
// onMounted( () => {
//   userLogin.logout()
// })
</script>