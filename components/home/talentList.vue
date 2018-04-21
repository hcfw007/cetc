<template>
    <div class="list">
        <div v-for="item in list" :key="item.id" class="list-item">
            <el-row :gutter="2">
                <el-col :span="6">
                    <img :src="item.avatar" alt="avatar" style="border-radius:50%">
                </el-col>
                <el-col :span="18" flex="dir:top" style="max-height:7em;overflow:hidden;">
                    <div flex="cross:center main:justify" style="width:100%">
                        <div style="color:#555;font-size:1.2em">
                            <el-button type="text">{{item.name}}</el-button>
                        </div>
                        <div style="color:#bcbcbc">来自:
                            <el-button type="text">{{item.lab}}</el-button>
                        </div>
                    </div>
                    <span>{{item.description}}</span>
                </el-col>
            </el-row>
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
</style>

<script>
export default {
  props: ["list"]
};
</script>
