<template>
  <el-row :gutter="24" type="flex" justify="space-around" align="middle">
  <el-col :span="2">
      <router-link to="/">List</router-link>
    </el-col>
    <el-col :span="2">
      <router-link to="/new">New</router-link>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'Header',
  components: {

  }
}
</script>

<style>

.el-col{ background-color: #333; padding: 10px 25px; color: white!important; text-align: center; }
.el-col a{ color: white; }
</style>
