<template>
  <div>
    <div class="box-soat p-6 mb-6">
      <div class="flex gap-4 py-3 pl-2 items-end">
        <div class="relative max-w-xs">
          <div class="relative">
            <input
                type="text"
                name="search"
                class="is-input-ico peer"
                placeholder=" "

            />
            <label class="is-input-ico-label">Nro. Póliza</label>
            <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>

            </div>
          </div>
        </div>

        <div class="relative max-w-xs">
          <div class="relative">
            <input
                type="text"
                name="search"
                class="is-input-ico peer"
                placeholder=" "
                maxlength="6"

            />
            <label class="is-input-ico-label">Nro. Placa</label>
            <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>

            </div>
          </div>
        </div>

        <div class="relative max-w-xs">
          <div class="relative">
            <input
                type="text"
                name="search"
                class="is-input-ico peer"
                placeholder=" "
                maxlength="11"

            />
            <label class="is-input-ico-label">Documento</label>
            <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>

            </div>
          </div>
        </div>

        <div class="relative w-1/4">
          <client-only>
            <vue-tailwind-datepicker i18n="es-us.js" v-model="dateValue" :options="options" :formatter="formatter" separator=" hasta " input-classes="wolf is-input"/>
          </client-only>
          <label class="is-input-ico-label wolf-label">Fecha de venta</label>

        </div>


        <div class="relative max-w-xs">
          <button class="btn-secondary">Buscar</button>
        </div>
        <div class="">
          <button class="rounded-md py-5 px-5 text-white bg-secondary hover:bg-pink-600 duration-300" @click="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
        </div>

      </div>
      <div class="text-center text-xs text-red-500">
<!--        {{searchError}}-->
      </div>
    </div>


    <div class="col-span-6 is-box">
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="w-full inline-block align-middle">
            <div class="box-table">
              <table class="table-is">
                <thead class="bg-slate-100">
                <tr>
                  <th scope="col">
                    Póliza
                  </th>
                  <th scope="col">
                    Placa
                  </th>
                  <th scope="col">
                    Cliente
                  </th>

                  <th scope="col">
                    Acción
                  </th>
                </tr>
                </thead>
                <tbody>

<!--                <tr class="text-center" v-show="loading">-->
<!--                  <td colspan="7" class="py-6">-->
<!--                    <loader></loader>-->
<!--                  </td>-->
<!--                </tr>-->

                <tr v-for="list_policy in listPolicy" >
                  <td>
                    {{list_policy.codigopoliza}}
                  </td>
                  <td>
                    {{list_policy.placa}}
                  </td>
                  <td>
                    {{list_policy.idcliente}}
                  </td>

                  <td class="gap-2 flex">
                    <VTooltip>
                      <div @click="showModal = true" class="cursor-pointer text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-purple-500">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                      </div>

                      <template #popper>
                        Editar
                      </template>
                    </VTooltip>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
<!--    <div class="flex items-center justify-center  lg:px-0 sm:px-6 px-4">-->
<!--      <div class="w-full flex items-center justify-between">-->
<!--        <client-only>-->
<!--          <paginate-->
<!--              :page-count="parseInt(listVehicles.totalPages)"-->
<!--              v-model="currentPage2"-->
<!--              :container-class="'pagination'"-->
<!--              :prev-text="'Anterior'"-->
<!--              :next-text="'Siguiente'"-->
<!--              :prev-link-class="'previousPage'"-->
<!--              :next-link-class="'previousPage'"-->
<!--              :click-handler="clickCallback"-->
<!--              :page-link-class="'stretched-link'"-->
<!--          />-->
<!--        </client-only>-->
<!--      </div>-->
<!--    </div>-->


    <!--    MODA-->
    <section class="modal-box">
      <transition name="fade" appear>
        <div class="modal-overlay"
             v-if="showModal"
             @click="showModal = false"></div>
      </transition>
      <transition name="top" appear>
        <div class="modal"
             role="dialog"
             v-if="showModal"
        >
          <div class="flex items-center justify-between border-b-2 border-dashed pb-4 mb-5">
            <div class="flex gap-2 items-center font-semibold text-lg text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
              </svg>
              <h2>¡Lo sentimos!</h2>
            </div>
            <div class="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer" @click="showModal = false">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

            </div>
          </div>

          <div class="space-y-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolores eveniet ipsum maiores molestiae nesciunt quae quaerat repellendus ullam voluptatum? Debitis dignissimos distinctio esse ex maxime mollitia suscipit vero voluptas?
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<script lang="ts" setup>
  import {usePolicyStore} from "~/stores/policy";

  definePageMeta({
    // layout: "login",
  })

  const policyStore = usePolicyStore()
  const showModal = ref(false)
  const dateValue = ref({
    startDate: '',
    endDate: ''
  })

  const listPolicy = ref([])

  const formatter = ref({
    date: 'YYYY-MM-DD',
    month: 'MMM'
  })
  const options = ref({
    shortcuts: {
      today: 'Hoy',
      yesterday: 'Ayer',
      past: (period: string) => period + ' últimos dias',
      currentMonth: 'Este mes',
      pastMonth: 'El mes pasado'
    },
    footer: {
      apply: 'Terapkan',
      cancel: 'Batal'
    }
  })

  const getPolicy = async () => {
    const res:any = await policyStore.getPolicy()

    listPolicy.value = res
    // if (res.token) {
    //   policyStore['tokenLogin'] = res.token
    //   loadingUser.value = false
    // }
  }

  onMounted(async () => {
    // await getPolicy()
    policyStore.test = "lulu"
    console.log("hola"+policyStore.test)
  })

</script>