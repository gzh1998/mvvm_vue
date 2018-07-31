<template>
  <div class="box">
    <ol>
      <router-link :to="{path:'/datail',query:{id:index}}" v-for="(lists,index) in list" :key="lists.top" class="lis">
        <a href="javascript:;" v-html="index+1"></a>
        <a href="javascript:;"><img :src="`http://y.gtimg.cn/music/photo_new/T002R90x90M000${lists.data.albummid}.jpg?max_age=2592000`">
          <span v-html="lists.data.songname"></span>
        </a>
        <a href="javascript:;" v-for="newname in lists.data.singer" :key="newname.a">
          <b href="#" v-html="newname.name"></b>
        </a>
      </router-link>
    </ol>
    <transition enter-active-class="animated rollIn" leave-active-class="animated hinge">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import jsonp from 'jsonp'
export default {
  name: '',
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
      let url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2018-06-21&topid=4&type=top&song_begin=0&song_num=30&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0"
      jsonp(url, {
        param: "jsonpCallback",
        prefix: 'jp'
      }, (err, res) => {
        console.log(res)
        this.list = res.songlist
      })

    }
  }
}

</script>
<style>
.box {
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.box>ol {
  width: 100%;
  height: 100%;
  flex-direction: column;
}

ol .lis {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  align-items: center;
}


ol .lis img {
  width: 30px;
  height: 30px;
}

ol .lis a:nth-child(1) {
  color: red;
  width: 10%;
  display: block;
}

ol .lis a:nth-child(2) {
  width: 50%;
  display: block;
  display: flex;
}

ol .lis a:nth-child(3) {
  width: 40%;
  display: block;
  font-size: 14px;
  text-align: center;
}

ol .lis a span {
  line-height: 30px;
  width:80%;
  display: flex;
  padding: 0 8px;
  color: #000;
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow: hidden;
}
</style>