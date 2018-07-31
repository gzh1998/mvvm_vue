<template>
    <div class="box">
        <div class="headers">
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;">QQ音乐</a>
            <a href="javascript:;">下载App</a>
        </div>
        <ul>
            <li>
                <router-link to="/music/">推荐</router-link>
            </li>
            <li>
                <router-link to="/toplist">排行榜</router-link>
            </li>
            <li>
                <router-link to="/search">搜索</router-link>
            </li>
            <span id="bar"></span>
        </ul>
        <router-view></router-view>

    </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            cont: 0
        }
    },
    mounted() {
      
    },
    methods: {
       
}
}

</script>

<style>
* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
}

html,
body {
    width: 100%;
    height: 100%;
}

.box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.headers {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #31c27c;
}

.headers a {
    color: #fff;
    font-size: 20px;
   
}

.headers a:nth-child(4) {
    width: 70px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #149c5a;
    border-radius: 10px;
    margin-right: .23rem;
    font-size: .12rem;
}

ul li,
ol li {
    list-style: none;
}

ul {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

ul li {
    width: 33.3%;
    height:.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
ul li a{
padding-bottom:.03rem;
}

ul>li>.router-link-active {
    color: #31c27c;
    border-bottom:solid .03rem #31c27c;

}

ul li a {

    color: #000;
}


</style>

