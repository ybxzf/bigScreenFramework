<template>
    <div class="pg-ctn">
        <el-row class="pg-title-ctn">
            <el-col class="pg-title-col" :span="24">
                <titleComp />
            </el-col>
        </el-row>
        <el-row class="pg-middle-ctn">
            <el-col :span="6">
                <el-row class="pg-middle-left">
                    <el-col :span="24">
                        <middleLeftTopComp />
                    </el-col>
                    <el-col :span="24">
                        <middleLeftBottomComp />
                    </el-col>
                </el-row>
            </el-col>
            <el-col class="pg-middle-center" :span="12">
                <middleCenterComp />
            </el-col>
            <el-col :span="6">
                <el-row class="pg-middle-right">
                    <el-col :span="24">
                        <middleRightTopComp />
                    </el-col>
                    <el-col :span="24">
                        <middleRightBottomComp />
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row class="pg-bottom-ctn">
            <el-col class="pg-bottom-left" :span="6">
                <bottomLeftComp />
            </el-col>
            <el-col class="pg-bottom-center" :span="12">
                <div class="pg-bottom-center-left" :span="12">
                    <bottomCenterLeftComp />
                </div>
                <div class="pg-bottom-center-right" :span="12">
                    <bottomCenterRightComp />
                </div>
            </el-col>
            <el-col class="pg-bottom-right" :span="6">
                <bottomRightComp />
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch, onMounted, onBeforeUnmount } from "vue";
import titleComp from "./components/titleComp.vue";
import middleLeftTopComp from "./components/middleLeftTopComp.vue";
import middleLeftBottomComp from "./components/middleLeftBottomComp.vue";
import middleCenterComp from "./components/middleCenterComp.vue";
import middleRightTopComp from "./components/middleRightTopComp.vue";
import middleRightBottomComp from "./components/middleRightBottomComp.vue";
import bottomLeftComp from "./components/bottomLeftComp.vue";
import bottomCenterLeftComp from "./components/bottomCenterLeftComp.vue";
import bottomCenterRightComp from "./components/bottomCenterRightComp.vue";
import bottomRightComp from "./components/bottomRightComp.vue";

onMounted(() => {
    init();
});
const init = async () => { };
</script>
<style lang="less" scoped>
.pg-ctn {
    width: 120rem;
    height: 67.5rem;
    background-image: url('../../assets/images/microPowerGrid/bg.png');
    background-size: 100% 100%;
    overflow-x: hidden !important;

    .pg-title-ctn {
        height: 5rem;
    }

    .pg-middle-ctn {
        height: 41.5385rem;

        .pg-middle-left {
            height: 41.5385rem;

            >* {
                height: 20.7692rem;
            }
        }

        .pg-middle-center {
            height: 41.5385rem;
        }

        .pg-middle-right {
            height: 41.5385rem;

            >* {
                height: 20.7692rem;
            }
        }
    }

    .pg-bottom-ctn {
        height: 20.7692rem;

        .pg-bottom-center {
            height: 20.7692rem;
            display: flex;
            background-image: url('../../assets/images/microPowerGrid/item_border_2.png');
            background-size: 97% 92%;
            background-position: center;
            /* 防止背景图片重复 */
            background-repeat: no-repeat;

            >* {
                width: 30rem;
            }

        }
    }
}
</style>
