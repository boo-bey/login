<template>
  <div class="login">
    <h1>喵喵电影后台管理系统</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <!-- 姓名 -->
      <el-form-item label="账户名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <!-- 密码 -->
      <el-form-item label="账户密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>

      <!-- 提交按钮 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 8 到 18 个字符", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    submitForm(){
      //进行数据请求，验证账户密码，如果可以再进行跳转
      this.$router.push('/home')
    }
  },
};
</script>

<style>
</style>