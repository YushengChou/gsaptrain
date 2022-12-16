<template>
    <div class="vant">
        <van-cell is-link @click="showPopup">展示弹出层</van-cell>
        <van-popup v-model="show" get-container="body">内容</van-popup>
        <hr>
        <van-tabs v-model="active">
            <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
        <hr>
        <van-tabbar v-model="activeTab">
            <van-tabbar-item icon="home-o" dot>标签</van-tabbar-item>
            <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
            <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                1
            </van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <br>
        <van-progress inactive :percentage="50" />
        <br>
        <van-progress pivot-text="橙色" color="#f2826a" :percentage="25" />
        <br>
        <van-progress pivot-text="红色" color="#ee0a24" :percentage="50" />
        <br>
        <van-progress :percentage="75" pivot-text="紫色" pivot-color="#7232dd"
            color="linear-gradient(to right, #be99ff, #7232dd)" />
    </div>
</template>
<script>
export default {
    name: 'TestVant',
    data() {
        return {
            show: false,
            active: 0,
            activeTab: 2,
        }
    },
    methods: {
        showPopup() {
            this.show = true;
        },
    },
    mounted() {

    },
};
</script>
<style scoped lang="scss">
hr {
    margin: 50px 0;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
</style>