<template>
    <div class="details">
        <div class="detailson" v-for="data in detaildata" :key="data.url">
            <p v-html="data.title"></p>
            <router-link :to="{path:'/listone',query:{id:ind}}" class="iconfont" id="callback">&#xe6cf;返回</router-link>
            <div class="img">
                <img :src="data.url" alt="">
            </div>
            <p v-html="data.xinxi"></p>
            <div class="foots">
                <span class="iconfont" v-on:click='func'>&#xe6e8;点赞
                    <b v-html="ind" :style="{color:'red'}"></b>
                </span>
                <span class="iconfont" v-on:click="hanc">&#xe6e3;</span>
                <span class="iconfont">&#xe67c;</span>
                <span class="iconfont">&#xe63b;</span>
            </div>
        </div>

    </div>
</template>

<script>
import data from '../api/detail.js'
export default {
    name: '',
    data() {
        return {
            detaildata: [],
            ind: null
        }
    },
    mounted() {
        this.random();
    },
    methods: {
        random() {
            data().then(res => {
                this.detaildata = res.data[this.$route.query.id].cont;
                console.log(this.detaildata)
                this.detaildata.map(items => {
                    this.ind = items.num;
                })
            })
        },
        func() {
            this.ind++;
        },
        hanc() {
            this.ind--;
        }
    }
}

</script>

<style>

</style>