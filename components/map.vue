<template>
    <div style="position:relative;">
        <img src="~/static/map-china.svg" style="width:100%" />
        <div v-for="item in province" v-if="map[item.name]" v-bind:key="item.name" v-bind:style="
                `
                position:absolute;
                left:${map[item.name].left}%;
                top:${map[item.name].top}%;
                transform:translate(-50%,-50%);
                `
            ">
            <el-tooltip placement="top">
                <div slot="content">{{item.name}} {{item.value}}</div>
                <div style="padding:10px" @click="$emit('click', item.name)">
                    <div v-bind:style="`width:${logistic(item.value)}px;height:${logistic(item.value)}px;border-radius:50%;background-color:#ffffff;`"></div>
                </div>
            </el-tooltip>
        </div>
    </div>
</template>

<style scoped>

</style>


<script>
export default {
    name: "china-map",
    data() {
        return {
            map: {
                新疆: {
                    left: 25.0,
                    top: 36.266667
                },
                内蒙古: {
                    left: 60.0,
                    top: 40.0
                },
                黑龙江: {
                    left: 87.5,
                    top: 24.0
                },
                吉林: {
                    left: 83.333333,
                    top: 33.066667
                },
                辽宁: {
                    left: 79.583333,
                    top: 38.4
                },
                天津: {
                    left: 70.625,
                    top: 45.333333
                },
                北京: {
                    left: 68.75,
                    top: 42.4
                },
                河北: {
                    left: 67.708333,
                    top: 47.2
                },
                山西: {
                    left: 62.708333,
                    top: 49.6
                },
                宁夏: {
                    left: 53.125,
                    top: 49.333333
                },
                甘肃: {
                    left: 50.0,
                    top: 54.4
                },
                青海: {
                    left: 42.5,
                    top: 50.666667
                },
                西藏: {
                    left: 27.5,
                    top: 63.2
                },
                山东: {
                    left: 70.833333,
                    top: 53.066667
                },
                河南: {
                    left: 65.0,
                    top: 57.6
                },
                陕西: {
                    left: 56.25,
                    top: 57.6
                },
                四川: {
                    left: 47.5,
                    top: 64.533333
                },
                重庆: {
                    left: 55.625,
                    top: 67.466667
                },
                湖北: {
                    left: 63.541667,
                    top: 65.066667
                },
                安徽: {
                    left: 71.25,
                    top: 63.466667
                },
                江苏: {
                    left: 74.083333,
                    top: 58.133333
                },
                上海: {
                    left: 77.916667,
                    top: 65.066667
                },
                浙江: {
                    left: 76.041667,
                    top: 68.533333
                },
                江西: {
                    left: 68.333333,
                    top: 73.6
                },
                湖南: {
                    left: 61.666667,
                    top: 72.0
                },
                贵州: {
                    left: 53.333333,
                    top: 74.666667
                },
                云南: {
                    left: 43.75,
                    top: 80.0
                },
                广西: {
                    left: 56.25,
                    top: 83.733333
                },
                广东: {
                    left: 65.0,
                    top: 82.933333
                },
                福建: {
                    left: 72.708333,
                    top: 77.333333
                },
                海南: {
                    left: 58.125,
                    top: 93.866667
                },
                澳门: {
                    left: 63.125,
                    top: 88.0
                },
                香港: {
                    left: 65.833333,
                    top: 86.133333
                },
                台湾: {
                    left: 77.5,
                    top: 82.4
                }
            }
        };
    },
    methods: {
        logistic(value) {
            return Math.floor(30 / (1 + Math.pow(Math.E, -((value - 3) * 0.15))))
        }
    },
    props: ["province"]
};
</script>
