<template>
    <div class="list">
        <router-link :to="{path:'/detail',query:{id:index}}" v-for="(datas,index) in datalist" :key="datas.url" class="listson">
            <p v-html="datas.title"></p>
            <div class="listsonleft" v-html="datas.xinxi">
            </div>
            <div class="listsonright">
                <img :src="datas.url" alt="">
            </div>
            <p :style="{color:'red'}" v-html="ind||datas.num"></p>
        </router-link>
        <router-view></router-view>
    </div>
</template>


<script>
import listdata from '../api/list.js'
export default {
    name: '',
    data() {
        return {
            datalist: [],
            ind: null
        }
    },
    mounted() {
        this._random()
    },
    methods: {
        _random() {
            listdata().then(res => {
                this.datalist = res.data;
                this.datalist.map(items => {
                    this.ind = items.num;
                    this.ind = this.$route.query.id;
                })
            })

        }
    }

}

</script>

<style>

</style>