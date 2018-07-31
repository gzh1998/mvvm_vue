<template>
  <div class="wrapper">
    <el-carousel :interval="2000" type="card" height="130px" id="styles">
      <el-carousel-item>
        <h3><img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/283203.jpg?max_age=2592000" alt=""></h3>
      </el-carousel-item>
        <el-carousel-item>
        <h3><img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/283196.jpg?max_age=2592000" alt=""></h3>
      </el-carousel-item>
       <el-carousel-item>
        <h3><img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/283232.png?max_age=2592000" alt=""></h3>
      </el-carousel-item>
       <el-carousel-item>
        <h3><img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/282317.jpg?max_age=2592000" alt=""></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
    
</script>
<style>
.el-carousel__item{
  height: 130px;
  width: 200px;
 
}
.el-carousel__item h3 {
  color: #475669;
  height: 130px;
  font-size: 14px;
  opacity: 0.75;

  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.el-carousel__item img {
  width: 100%;
  height:100%;
}

</style>

