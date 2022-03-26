<template>
  <div class="about">
    <el-container>
      <!-- 左侧导航 -->
      <NavMenu></NavMenu>
      <el-container>
        <!-- 右侧主体 -->
        <el-header class="content">
          <h1>首页</h1>
          <el-button type="primary" @click="heandele">退出</el-button>
        </el-header>
        
        <el-main>
        
          <router-view></router-view>
          </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import NavMenu from './navMenu.vue'
export default {
  data() {
    return {};
  },
  methods: {
    heandele(){
      this.$router.push('/login')
    }
  },
  components:{
    NavMenu,
  
  }
};
</script>

<style>
.about{
  width: 100%;
  height: 100%;
}
.content{
  display: flex;
  justify-content: space-between;
  align-items:center;
}
.el-header,
.el-footer {

  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #404142;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
 
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-main{
  background: none;
  border-top: 1px solid rgb(241, 238, 238);
}
</style>