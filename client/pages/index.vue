<template>
  <div></div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const name = ref('')
    return {
      name,
    }
  },
})
</script>
