<template>
  <div class="menu-box">
    <h3 class="font-semibold mb-2 text-sm">HOME</h3>
    <NuxtLink to="/dashboard">
      <div class="nav-list">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg> Dashboard
      </div>
    </NuxtLink>
  </div>

  <div class="menu-box space-y-4">
    <h3 class="font-semibold mb-2 text-sm">OPCIONES</h3>

      <NuxtLink to="/policy">
        <div class="nav-list">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
          Poliza
        </div>
      </NuxtLink>

  </div>



</template>

<script setup lang="ts">
// import {useLoginStore} from "~/stores/login";

  name: "sidebar"

  // const userLogin = useLoginStore()
  const router = useRouter()

  onMounted(() => {
  // @ts-ignore
  // let estado = JSON.parse(localStorage.getItem("estado"));
  // if (estado == 0){
  //   router.push("/login")
  // }

  })
</script>