<template>
  <div>aaaaaaaaaaaaa </div>
</template>

<script>
import loginService from "@/services/loginService"
export default {

    mounted() {
        loginService.verificaLogin(this.$route.params.id)
    }

}
</script>

<style>

</style>