<template>
  <div class="wrapper">
    <header>
      <span>
        <a class="iconfont">&#xe729;</a><input type="text" placeholder="高考状元">
      </span>
      <a href="#" class="iconfont">&#xe713;提问</a>
    </header>

    <section>
      <router-view></router-view>
    </section>

    <footer>
      <router-link :to="{path:'/navone'}" class="iconfont">&#xe6cd;
        <b>首页</b>
      </router-link>
      <router-link :to="{path:'/navtwo'}" class="iconfont">&#xe6cc;
        <b>设计</b>
      </router-link>
      <router-link :to="{path:'/navtheer'}" class="iconfont">&#xe620;
        <b>经济</b>
      </router-link>
      <router-link :to="{path:'/navfor'}" class="iconfont">&#xe6b2;
        <b>大学</b>
      </router-link>
      <router-link :to="{path:'/navfive'}" class="iconfont">&#xe649;
        <b>更多</b>
      </router-link>
    </footer>
   
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  }
}
</script>


<style>

</style>
