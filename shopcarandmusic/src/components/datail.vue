<template>
    <div class="boxs">
        <div class="pic" v-for="aa in list.content" :key="aa.names">
            <img :src="aa.urls">
            <h5 v-html="aa.titles"></h5>
            <h5 v-html="aa.names"></h5>
            <h5 v-html="aa.xinxi"></h5>
        </div>
    </div>
</template>
<script>
import jsonp from 'jsonp'
import datails from "../api/datail.js"
export default {
    name: "",
    data() {
        return {
            list: []
        }
    },
    mounted() {
        this.getSongList()
    },
    methods: {
        getSongList() {
            datails().then(res => {
                this.list = res.data[this.$route.query.id];
                console.log(this.list)
            })
        }
    }
}

</script>
<style>
.boxs{
    width: 100%;
    height: 100%;
    position:fixed;
    top: 0;
    left: 0;
}

.boxs .pic {
    width: 100%;
    height: 100%;
    display: block;
    background: #fff;
    justify-content: center;
    align-items: center;
}

.boxs .pic img {
    width: 60%;
    height: auto;
}

.boxs h5 {
    font-weight: normal;
    width: 100%;
    height: 40px;
    text-indent: 15px;
    line-height: 40px;
}

image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
}
</style>

