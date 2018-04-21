<template>
    <div class="list">
        <div v-for="item in list" :key="item.id" class="list-item" flex style="max-height:7em;overflow:hidden;">
            <img :src="item.avatar" alt="avatar" style="border-radius:50%">
            <div flex="dir:top" class="ml-4" style="width:100%">
                <div flex="cross:center main:justify" style="width:100%">
                    <div style="color:#555;font-size:1.2em">
                        <el-button type="text">{{item.name}}</el-button>
                    </div>
                    <div style="color:#bcbcbc">来自:
                        <el-button type="text">{{item.lab}}</el-button>
                    </div>
                </div>
                <span>{{item.description}}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.list-item {
  border-bottom: 1px solid #bcbcbc;
  padding: 1em;
}
.list-item:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}
.list-item:first-child {
  padding-top: 0;
}
</style>

<script>
export default {
  props: ["list"]
};
</script>
