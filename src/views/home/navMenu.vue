<template>
  <el-aside width="200px">
    <el-menu default-active="1" class="el-menu-vertical-demo" router>
      <!-- 无子集 -->
      <el-menu-item :index="item.url" class="home" v-for="item in list" :key="item.title">
        <i class="el-icon-s-home"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>

      <!-- 无子集 -->
      <!-- <el-menu-item index="/stats">
        <i class="el-icon-s-home"></i>
        <span slot="title">数据管理</span>
      </el-menu-item> -->

      <!-- 有子集 -->
      <el-submenu index="/wms">
        <template slot="title" class="masge">
          <i class="el-icon-s-order"></i>
          <span>信息管理</span>
        </template>
        <el-menu-item index="/wms/list">
          <i class="el-icon-s-order" style="color: #909399"></i
          >列表管理</el-menu-item
        >
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import list from '@/utils/navData'
export default {
  data() {
    return {
      // list: [
      //   { title: "首页1", icon: "el-icon-s-home",url:'/home'},
      //   { title: "数据管理", icon: "el-icon-s-home",url:'/stats'},
      //   { title: "企业管理", icon: "el-icon-s-home",url:'/stats'},
      //   { title: "财务管理", icon: "el-icon-s-home",url:'/stats'},
      //   { title: "订单管理", icon: "el-icon-s-home",url:'/stats'}
        
      // ],
      list,
    };
  },
  methods: {},
};
</script>
<style scoped>

</style>
