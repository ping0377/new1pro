<template>
  <!-- <div>商家信息</div> -->
  <div class="container">
    <el-row :gutter="10">
      <el-col :span="4" :xs="24">
        <div class="str">
          <span>单位编号</span>
          <el-input v-model="No" disabled></el-input>
        </div>
      </el-col>
      <el-col :span="4" :xs="24">
        <div class="str">
          <span>域名</span>
          <el-input v-model="Host"></el-input>
        </div>
      </el-col>
      <el-col :span="4" :xs="24">
        <div class="str">
          <span>IP</span>
          <el-input v-model="Directory" disabled></el-input>
        </div>
      </el-col>
      <el-col :span="4" :xs="24">
        <div class="str">
          <span>单位名称</span>
          <el-input v-model="Name"></el-input>
        </div>
      </el-col>
      <el-col :span="4" :xs="24">
        <div class="str">
          <span>数据库名称</span>
          <el-input v-model="Name"></el-input>
        </div>
      </el-col>
      <el-col :span="4" :xs="24">
        <div class="str">
          <span>文件夹路径</span>
          <el-input v-model="no"></el-input>
        </div>
      </el-col>
      <el-col :span="4" :xs="24">
        <div class="str">
          <span>单位电话</span>
          <el-input v-model="Tel"></el-input>
        </div>
      </el-col>

      <el-col :span="4" :xs="24">
        <div class="str">
          <span>短信余额</span>
          <el-input v-model="SurplusCount" disabled></el-input>
        </div>
      </el-col>
      <el-col :span="4" :xs="24">
        <div class="str">
          <span>到期时间</span>
          <el-input v-model="no"></el-input>
        </div>
      </el-col>
      <el-col :span="24">
        <el-button type="primary" plain @click="updateMsg">更新资料</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      no:'',
      No: "",
      Name:'',
      Host:'',
      Directory:'',//IP
      SurplusCount:'',
      Tel:'',
      msg:{}
    };
  },
  created() {
    let msg=JSON.parse(localStorage.getItem('msg'));
    this.No=msg.No
    this.Name=msg.Name
    this.Host=msg.Host
    this.Directory=msg.Directory
    this.SurplusCount=msg.SurplusCount
    this.Tel=msg.Tel
  },
  methods: {
    updateMsg(){
      this.$message({
        message:'更新成功',
        type:'success'
      })
    }
  }
};
</script>
<style scoped>
.el-button {
  width: 100%;
  font-size: 16px;
  margin-top: 10px;
}
.str {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 3px;
}
.str span {
  display: inline-block;
  width: 60%;
  border-right: 1px solid black;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  background-color: #d7d7d7;
  white-space: nowrap;
}
.el-col {
  margin-top: 5px;
}
</style>