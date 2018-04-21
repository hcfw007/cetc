<template>
  <div flex>
    <img src="~/static/logo.svg" class="logo-img pa-2">
    <div class="logo-text pa-2">
      科技创新平台<br> 资源开放共享系统
    </div>
  </div>
</template>
<script>
export default {
  name: "my-logo"
};
</script>
<style scoped>
.logo-img {
  height: 3em;
}
.logo-text {
  border-left: 1px solid #409eff;
  color: #409eff;
  white-space: nowrap;
}
</style>
