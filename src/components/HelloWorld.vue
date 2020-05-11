<template>
  <div class="container">
    <!-- 条件筛选 -->
    <el-row>
      <el-col :span="6" :xs="12">
        <el-input placeholder="请输入剩余天数" v-model="day" @keyup.enter.native="submit"></el-input>
      </el-col>
      <el-col :span="6" :xs="12">
        <el-input placeholder="短信余额" v-model="messages" @keyup.enter.native="submit"></el-input>
      </el-col>
      <el-col :span="6" :xs="12">
        <el-input placeholder="名称,电话,地址" v-model="nameteladdr" @keyup.enter.native="submit"></el-input>
      </el-col>
      <el-col :span="6" :xs="12">
        <el-input placeholder="域名" v-model="domainname" @keyup.enter.native="submit"></el-input>
      </el-col>
      <el-col :span="6" :xs="12">
        <el-input placeholder="数据库名称" v-model="database" @keyup.enter.native="submit"></el-input>
      </el-col>
      <el-col :span="6" :xs="12">
        <el-input placeholder="IP地址" v-model="IP" @keyup.enter.native="submit"></el-input>
      </el-col>
      <el-col :span="6" :xs="12">
        <el-input placeholder="商家编号" v-model="No" @keyup.enter.native="submit"></el-input>
      </el-col>
      <el-col :span="2" :xs="6">
        <el-button type="primary" @click="screening">筛选</el-button>
      </el-col>
      <el-col :span="2" :xs="6">
        <el-button type="primary">添加</el-button>
      </el-col>
    </el-row>
    <!-- 数据渲染方块 -->
    <el-row :gutter="20" class="details">
      <el-col
        :span="4"
        :xs="12"
        v-for="(item,index) in tabledata "
        :key="index"
        class="msgdetails"
        v-loading="loading"
      >
        <div>
          <span></span>
          <span>{{item.Name}}({{item.No}})</span>
        </div>
        <div>
          <span>电话:</span>
          <span>{{item.Tel}}</span>
        </div>
        <div>
          <span>数据库名称:</span>
          <span>{{item.Name}}</span>
        </div>
        <div>
          <span>域名:</span>
          <span>{{item.Host}}</span>
        </div>
        <div>
          <span>IP:{{item.Directory}}</span>
        </div>
        <div>
          <span>短信余额:</span>
          <span>{{item.SurplusCount}}</span>
        </div>
        <div>
          <span>到期时间:</span>
          <span>{{item.endDate}}</span>
        </div>
        <el-button size="mini" type="primary" plain style="width:100%;" @click="todetail(item)">详情</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as axios from "@/components/axioshttp.js";
export default {
  // name: 'HelloWorld',
  data() {
    return {
      loading: true,
      No: "",
      tabledata: [],
      day: "", //  剩余到期天数
      messages: "", // 短信余额
      nameteladdr: "", //名字电话地址
      domainname: "", //域名
      database: "", //数据库
      IP: "" //IP
    };
  },
  mounted() {
    this.screening();
  },
  methods: {
    handleOpen() {},
    submit(){
      // console.log(1,event.keyCode)
      this.screening();
    },
    handleClose() {},
    todetail(item) {
      this.$router.push({ path: "/detail", query: { item } });
    },
    screening() {
      // 筛选数据   有条件  没有条件，查询所有
      let data = {
        No: this.No,
        Host: this.domainname,
        DBName: this.database,
        DirectoryIp: this.IP,
        Name: this.nameteladdr,
        validDay: this.day,
        smsCount: this.messages
      };
      let getallmsg = axios.getallmsg(data);
      getallmsg.then(res => {
        console.log(res);
        if (res.data.State == "成功") {
          this.$message({
            message:'查询成功,一共'+res.data.Body.length+'条信息',
            type:'success'
          })
          this.tabledata = res.data.Body;
          this.loading = false;
        }else{
          this.$message({
            message:"数据有误,无法获得数据",
            type:'error'
          })
        }
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type='sass'>
.msgdetails {
  margin-bottom: 10px;
}
.msgdetails div span {
  font-size: 14px;
}
.msgdetails div {
  background-color: #fafafa;
  overflow: hidden;
}
.msgdetails div > span:nth-child(1) {
  min-width: 50px;
  font-weight: bold;
}
.msgdetails div:nth-child(1) {
  text-align: center;
  background-color: #409eff;
  color: #fff;
  padding: 3px 0;
  border-radius: 5px;
  overflow: hidden;
  white-space: nowrap;
}
.msgdetails div:nth-child(3) {
  overflow: hidden;
  white-space: nowrap;
}
.msgdetails div:nth-child(1) span {
  font-size: 15px;
  font-weight: bold;
}
.details {
  margin-top: 10px;
}
.el-input {
  min-width: 100px !important;
  max-width: 299px;
  margin-top: 5px;
}
.el-button {
  margin-top: 5px;
}
.container {
  width: 99%;
  margin: 0 auto;
}
.top {
  width: 100%;
  background-color: #ccc;
  padding: 5px;
}
</style>
