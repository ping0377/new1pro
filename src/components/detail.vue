<template>
  <div class="container">
    <el-row class="first">
      <el-col :span="24">
        <span>{{tablemsg.Name}}({{tablemsg.No}})</span>
      </el-col>
    </el-row>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="#239DFF"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click="to('/detail/')">商家信息</el-menu-item>
      <el-menu-item index="2" @click="to('/detail/record')">店铺记录</el-menu-item>
      <el-menu-item index="3" @click="to('/detail/sms')">短信记录</el-menu-item>
      <el-menu-item index="4" @click="to('/detail/addmoney')">服务器延期</el-menu-item>
      <el-menu-item index="5" @click="to('/detail/version')">版本管理</el-menu-item>
      <el-menu-item index="6" @click="to('/detail/parameter')">参数设定</el-menu-item>
      <el-menu-item index="7" @click="to('/')">返回首页</el-menu-item>
    </el-menu>
    <div class="detail">
      <div class="container" v-show="showindex">
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
              <el-input v-model="Host" disabled></el-input>
            </div>
          </el-col>
          <el-col :span="4" :xs="24">
            <div class="str">
              <span>IP</span>
              <el-input v-model="DirectoryIp" disabled></el-input>
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
              <el-input v-model="DBName" disabled></el-input>
            </div>
          </el-col>
          <el-col :span="4" :xs="24">
            <div class="str">
              <span>文件夹路径</span>
              <el-input v-model="Directory" disabled></el-input>
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
              <span>剩余时间</span>
              <el-input v-model="remainTime" disabled></el-input>
            </div>
          </el-col>
          <el-col :span="4" :xs="24">
            <div class="str">
              <span>地址</span>
              <el-input v-model="Addr" ></el-input>
            </div>
          </el-col>
          <el-col :span="4" :xs="24">
            <div class="str">
              <span>版本号</span>
              <el-input v-model="fVersion"></el-input>
            </div>
          </el-col>
          <el-col :span="4" :xs="24">
            <div class="str">
              <span>卡密码</span>
              <el-input v-model="CardPwd"></el-input>
            </div>
          </el-col>

          <el-col :span="24">
            <el-button type="primary" plain @click="updateMsg">更新资料</el-button>
          </el-col>
        </el-row>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showindex: true,
      tablemsg: {},
      activeIndex2: "1",
      no: "",
      No: "",
      Name: "",
      Host: "",
      Directory: "", //IP
      SurplusCount: "",
      Tel: "",
      remainTime: "", //剩余时间
      endDate: "", //结束时间
      DirectoryIp: "",
      Directory: "",
      Addr: "",
      fVersion: "",
      CardPwd: "",
      DBName: "",
      createDt: "", //开始时间
      msg: {}
    };
  },
  mounted() {
    // console.log(this.$route.query.item);
    this.tablemsg = this.$route.query.item;
    let msg = this.$route.query.item;
    // console.log(msg);
    this.No = msg.No;
    this.Name = msg.Name;
    this.Host = msg.Host;
    this.Directory = msg.Directory;
    this.SurplusCount = msg.SurplusCount;
    this.Tel = msg.Tel;
    this.endDate = msg.endDate; // 结束时间
    this.DBName = msg.DBName;
    this.DirectoryIp = msg.DirectoryIp;
    this.Directory = msg.Directory;
    this.Addr = msg.Addr;
    this.fVersion = msg.fVersion;
    this.CardPwd = msg.CardPwd;
    this.createDt = msg.createDt; //开始时间
    this.getmsg();
  },
  methods: {
    to(url) {
      if (url == "/detail/") {
        this.$router.push({ path: url }).catch(data => {});
        this.showindex = true;
      } else {
        this.$router.push({ path: url }).catch(data => {});
        this.showindex = false;
      }
    },
    updateMsg() {
      this.$message({
        message: "更新成功",
        type: "success"
      });
    },
    handleSelect() {},
    getmsg() {
      setInterval(() => {
        var date1 = new Date();
        var date2 = new Date(this.endDate);
        var total = (date2 - date1) / 1000;
        var day = parseInt(total / (24 * 60 * 60)); //计算整数天数
        if (day < 10) {
          day = "0" + day;
        }
        var afterDay = total - day * 24 * 60 * 60; //取得算出天数后剩余的秒数
        var hour = parseInt(afterDay / (60 * 60)); //计算整数小时数
        if (hour < 10) {
          hour = "0" + hour;
        }
        var afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的秒数
        var min = parseInt(afterHour / 60); //计算整数分
        if (min < 10) {
          min = "0" + min;
        }
        var afterMin = parseInt(
          total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60
        ); //取得算出分后剩余的秒数
        if (afterMin < 10) {
          afterMin = "0" + afterMin;
        }
        this.remainTime = day + "天" + "" + hour + ":" + min + ":" + afterMin;
      }, 1000);
    }
  }
};
</script>
<style scoped>
.el-menu-demo {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.container {
  width: 100%;
  margin: 0 auto;
}
.first {
  width: 100%;
  text-align: center;
  font-size: 16px;
  background-color: #ececec;
  font-weight: bold;
  padding: 15px;
}
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