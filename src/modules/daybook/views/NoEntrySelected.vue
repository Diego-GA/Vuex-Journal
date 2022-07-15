<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada seleccionado</h1>
    </div>

    <FaBotton />

</template>



<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        FaBotton: defineAsyncComponent( () => import('../components/FaBotton.vue'))
    }
}
</script>




<style lang="scss" scoped>

div {
    height: 100%;
}

</style>