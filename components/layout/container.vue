<template>
    <el-row type="flex" justify="center" class="my-container">
        <el-col :xs="24" :sm="23" :md="22" :lg="21" :xl="20">
            <slot></slot>
        </el-col>
    </el-row>
</template>
<style scoped>
/* .my-container {
  width: 100vw;
} */
</style>
<script>
export default {
  name: "my-container"
};
</script>
