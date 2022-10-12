<template>
    <el-button type="primary">主要按钮</el-button>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {

        }
    },
    methods: {
        handleLogin(){
            this.$router.push('/registration');
        }
    },

}
</script>

<style>
   

</style>