import * as THREE from 'three'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      three: THREE
    }
  }
})
