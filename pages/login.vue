<template>
  <div class="relative px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="relative px-4 py-10 box-soat shadow-lg sm:rounded-3xl sm:p-12">
        <div class="max-w-lg mx-auto">
          <div>
            <h2 class="text-2xl font-semibold text-blue-700 text-center">Inicio de Sesión</h2>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="relative grid">
                  <input v-model="state.objUser.username" autocomplete="off" id="user" name="email" type="text" class="is-input peer" placeholder=" " required/>
                  <label class="is-input-label">Usuario</label>
                  <div class="text-red-500 text-xs">
                    {{error_user}}
                  </div>
                </div>
                <div class="relative grid">
                  <input v-model="state.objUser.password" autocomplete="off" id="password" name="password" type="password" class="is-input peer" placeholder=" " required/>
                  <label class="is-input-label">Contraseña</label>
                  <div class="text-red-500 text-xs">
                    {{error_pass}}
                  </div>
                </div>
                <div class="relative">
                  <button type="submit" class="btn-secondary block text-center" :class="{'btn-disabled': loadingUser}" :disabled="loadingUser">Iniciar sesión</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts"  setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Login` : 'Login';
  }
})
import {useLoginStore} from '~/stores/login'
const loginStore = useLoginStore()
definePageMeta({
  layout: "login",
  // middleware: [
  //   function (to, from) {
  //     const useLogin = useLoginStore()
  //     const router = useRouter()
  //     if (useLogin.success == 1){
  //       router.push("/dashboard");
  //     }else{
  //       return
  //     }
  //   }
  // ]
})

const router = useRouter()
const error_user = ref("")
const error_pass = ref("")
const state = reactive({
  objUser: {
    username: "",
    password: ""
  }
})
const loadingUser = ref(false)

const handleSubmit = async () => {
  loadingUser.value = true
  // const res:any = await loginStore.loginUser(state.objUser)

  router.push("/dashboard")
  // if (res.token) {
  //   loginStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  //   router.push("/dashboard");
  // }
}
</script>