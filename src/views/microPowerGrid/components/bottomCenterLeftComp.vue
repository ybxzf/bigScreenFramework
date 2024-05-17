<template>
    <div class="flex-item-ctn">
        <div class="flex-item">
            <div class="item-title">
                <span>中央空调实时监控</span>
            </div>
            <div class="item-content">
                <div class="content-title">运行概况</div>
                <div class="content-cnt">

                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch, onMounted, onBeforeUnmount } from "vue";


onMounted(() => {
    init();
});
const init = async () => { };
</script>
<style lang="less" scoped>
.flex-item-ctn {
    display: block;
    font-size: 1rem;
    background-image: url('');

    .flex-item {
        padding: 0 1rem 1rem 1rem;

        .item-title {
            // border: 1px solid #53ff5b;
            height: 3rem;
            font-size: 1rem;
            display: flex;
            align-items: center;
        }

        .item-content {
            width: 100%;
            height: 16.7rem;
            // border: 1px solid red;

            .content-title {
                border: 1px solid;
                height: 1.7rem;
            }

            .content-cnt {
                border: 1px solid;
                height: 15rem;

            }
        }
    }
}
</style>
