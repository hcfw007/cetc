<template>
    <el-row type="flex" justify="center" class="my-container">
        <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="16">
            <slot></slot>
        </el-col>
    </el-row>
</template>
<style scoped>
.my-container {
  max-width: 100vw;
}
</style>
<script>
export default {
  name: "my-container"
};
</script>
