<template>
    <div class="flex-item-ctn">
        <div class="flex-item">
            <div class="item-title">
                <span style="width: 13rem;">光伏发电情况</span>
                <div class="chart-button">
                    <span @click="init('day')">日发电量</span>
                    <span @click="init('week')">周发电量</span>
                </div>
            </div>
            <div ref="lineChart" class="item-chart"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch, onMounted, onBeforeUnmount } from "vue";
import * as echarts from 'echarts';
import { split } from "postcss/lib/list";

const lineChart = ref<any>();
const xAxisData = ref<any>([]);
const seriesData = ref<any>([]);

let myChart: any = null;
let option: any = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            interval: 0,//显示所有标签
            textStyle: {
                color: '#fff',
                fontSize: '0.75rem',
            }
        },
        data: [],
    },
    yAxis: {
        name: '单位：千瓦时',
        nameTextStyle: {
            color: '#fff' // 设置为红色
        },
        type: 'value',
        splitLine: {
            show: false,    //横线显示
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: '0.75rem',
            }
        },
    },
    grid: {
        show: false,
        top: '15%',    // 一下数值可为百分比也可为具体像素值
        right: '5%',
        bottom: '13%',
        left: '14%'
    },
    series: [{
        data: [],
        type: 'line',
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [  // 渐变颜色
                    {
                        offset: 0,
                        color: '#83eeb0',
                    },
                    {
                        offset: 1,
                        color: 'rgba(255, 255, 255, 0)',
                    },
                ],
                global: false,
            },
        },
        itemStyle: {
            // 设置线条上点的颜色（和图例的颜色）
            normal: {
                color: '#83eeb0',
            },
        },
    }]
};
onMounted(() => {
    myChart = echarts.init(lineChart.value);
    init();
    window.addEventListener('resize', () => {
        myChart.resize();
    });
});
const init = async (dateType: string = 'day') => {
    //默认日发电量请求API
    const elecData: any = await elecTotal(dateType);
    // xAxisData.value = ['0时', '2时', '4时', '6时', '8时', '10时', '12时', '14时', '16时', '18时', '20时', '22时', '24时'];
    // seriesData.value = [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330];
    option.xAxis.data = elecData.xAxisData;
    option.series[0].data = elecData.seriesData;
    console.log(elecData);

    console.log(dateType, option)
    myChart.setOption(option);
    myChart.resize();
};

async function elecTotal(dateType: string) {
    const elecData: any = {};
    if (dateType == 'day') {
        elecData.xAxisData = ['0时', '2时', '4时', '6时', '8时', '10时', '12时', '14时', '16时', '18时', '20时', '22时', '24时'];
        // const res: any = await DAY_API();
        elecData.seriesData = [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330];
    } else {
        elecData.xAxisData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
        // const res: any = await WEEK_API();
        elecData.seriesData = [1330, 1320, 820, 932, 901, 934, 1290];
    }
    return elecData;

}
</script>
<style lang="less" scoped>
.flex-item-ctn {
    display: block;

    .chart-button {
        border: 1px solid #83eeb0;
        height: 2.7rem;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: end;

        >* {
            margin-right: 1rem;
            cursor: pointer;
            border: 1px solid #83eeb0;
            border-radius: 0.5rem;
            padding: 0.2rem;

        }
    }

    .item-chart {
        width: 100%;
        height: 16rem;
        border: 1px solid red;
    }
}
</style>
