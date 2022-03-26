<template>
  <div>
    <el-carousel :interval="4000" type="card" height="250px">
      <el-carousel-item v-for="item in imgList" :key="item">
        <img :src="item" width="100%" height="100%" alt="" />
      </el-carousel-item>
    </el-carousel>

    <el-row :gutter="20">
      <el-col :span="6" v-for="o in carList" :key="o.img">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="o.img" class="image" />
          <div style="padding: 14px">
            <span>{{o.title}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      imgList: [
        require("@/assets/img/banner1.png"),
        require("@/assets/img/banner2.png"),
        require("@/assets/img/banner3.png"),
      ],
      carList: [
        { title: "企业荣誉", img: require("@/assets/img/yu1.png") },
        { title: "企业福利", img: require("@/assets/img/yu2.png") },
        { title: "企业荣誉", img: require("@/assets/img/yu3.png") },
        { title: "企业福利", img: require("@/assets/img/yu4.png") },
      ],
      currentDate: new Date(),
    };
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  height: 100%;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>