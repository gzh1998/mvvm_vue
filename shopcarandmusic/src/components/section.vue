<template>
    <div class="list">
        <p>
            <label for="checkall">全选<input type="checkbox" id="checkall" v-model="checkall" v-on:change="funcheckall"></label>
        </p>
        <div class="listson" v-for="(lists,index) in datalist" :key="lists.url">
            <div class="listsonleft"><input type="checkbox" v-model="lists.checkall" @change="checkallson(index)"></div>
            <div class="listsoncenter">
                <p><img :src="lists.url" alt=""></p>
                <span v-html="lists.price" v-bind:style="{color:'red',fontSize:'19px'}"></span>
                <p v-html="lists.name"></p>
                <p v-html="lists.city"></p>
            </div>
            <div class="listsonright">
                <span @click="jia(index)">+</span><input type="text" v-model='lists.cont'>
                <span @click="jian(index)">-</span>
            </div>
        </div>

        <div class="foot">
            <h6>数量:
                <span :style="{color:'red',fontSize:'19px'}">{{num}}</span>总价:
                <span :style="{color:'red',fontSize:'19px'}">{{num*40}}</span>
            </h6>
        </div>

    </div>
</template>

<script>
import list from "../api/section.js"
export default {
    name: '',
    data() {
        return {
            datalist: [],
            checkall: false,
            num: 0,
            zhi: 0,
            str:[]

        }
    },
    mounted() {
        this._listrandom()
    },
    methods: {
        _listrandom() {
            list().then(res => {
                this.datalist = res.data;
                console.log(this.datalist)
            })
        },
        //全选点击事件
        funcheckall() {
            if (this.checkall == true) {
                //循环让所有的多选都变成true
                this.datalist.map(items => {
                    items.checkall = true;

                })
            } else {
                this.datalist.map(items => {
                    items.checkall = false;
                })
            }

        },
        //加号按钮
        jia(index) {
            this.zhi++;
            this.datalist[index].cont++;
            this.num = this.zhi;
        },
        //减号按钮
        jian(index) {

            this.datalist[index].cont--;
            this.zhi--;
            if(this.zhi < 0){
                this.zhi = 0;
            }
            this.num = this.zhi;

            if (this.datalist[index].cont < 0) {
                this.datalist[index].cont = 0;
                alert('再点就爆炸你信不信')
            }
        },
        checkallson(index){
            if(this.datalist[index].checkall == true){
                this.str.push(index)
                console.log(this.str)
                console.log(this.str.length)
                if(this.str.length == this.datalist.length){
                    this.checkall = true;
                }else{
                    this.checkall=false;
                }
            }else{
                 this.checkall=false;
            }
        }
    }
}
</script>

<style>

</style>