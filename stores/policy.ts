import { defineStore } from 'pinia';
import {useLoginStore} from "~/stores/login";

export const usePolicyStore = defineStore('PolicyStore', () => {
	const config = useRuntimeConfig()
	const loginStore = useLoginStore()

	const test = ref("")

	const getPolicy = async () => {
		let headers = new Headers();

		headers.append('Content-Type', 'application/json');
		headers.append("Authorization", "Bearer " + loginStore.tokenLogin);

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "v1/policies?from=2023-01-01&to=2023-01-30&state=2&method=9&policy-code=590784367", {
					method: 'get',
					headers: headers,
				})
				const data =  await res.json()
				if (data){
					resolve(data)
				}else {
					reject(data)
				}
			} catch (error){
				reject(error)
			}
		})
	}
	return {
		getPolicy,
		test
	}
},{persist: true})
