<template>
    <el-row>
        <el-button type="primary" @click="handleLogin">登录</el-button>
    </el-row>
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
            this.$router.push('/homePage');
        }
    },

}
</script>

<style>

</style>