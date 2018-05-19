<template>
  <div class="user-home">
    <header class="head">
      <div class="head-icon">
        <router-link :to="'/fillOrder/'+'0'">
          <img src="/static/icon/Receipt.png">
        </router-link>
        
        <div class="header-txt">一点回收</div>
      </div>

    </header>
    <main class="home-content">
      <div class="passage">
        <div class="passage-container">
          <router-link to="/orderList">
          <div class="passage-item">
            <img src="/static/icon/orderSearch.png" alt="" class="passage-item-icon">
            <div class="passage-item-txt">点滴记录</div>
          </div>
          </router-link>
          <router-link to="/">
          <div class="passage-item">
            <img src="/static/icon/scan.png" alt="" class="passage-item-icon">

            <div class="passage-item-txt">扫码开箱</div>
          </div>
          </router-link>
          <router-link to="/leaderboard">
            <div class="passage-item">
            <img src="/static/icon/ranking.svg" alt="" class="passage-item-icon">

            <div class="passage-item-txt">点滴排行</div>
          </div>
          </router-link> 
        </div>
      </div>
      <div class="func">
        <div class="func-container">
          <div class="func-item" v-for="item in func" :style="{backgroundImage: 'url(' + item.bgUrl + ')'}" >
            <router-link :to="item.router">
            <img class="func-item-icon" v-bind:src="item.imgUrl"></img>
          
            </router-link>
              <div>{{item.title}}</div>
          </div>
        </div>
      </div>
      <div class="gap"></div>
    </main>
    <footer class="nav-bar">
      <router-link to="/userHome">
      <div class="nav-item" >
        <img src="/static/icon/home-active.png" alt="">
        <div class="nav-label">首页</div>
      </div>
      </router-link>
      <router-link to="/basket">
      <div class="nav-item" >
        <img src="/static/icon/box.png" alt="">
        <div class="nav-label">回收筐</div>
      </div>
      </router-link>
      <router-link to="/personal">
      <div class="nav-item" >
        <img src="/static/icon/personal.png" alt="">
        <div class="nav-label">我的</div>
      </div>
      </router-link>
    </footer>
    <check-info  @cancelCheck='cancelCheck()'  v-if="cardshow" v-bind:details = "details"></check-info>
  </div>
</template>
<script>
import util from "@/utils/index.js"
import CheckInfo from "./components/checkInfo";
import io from "socket.io-client";
export default {
  components:{
    CheckInfo
  },
  data() {
    return {
      cardshow:true,
      details:[],
      
      ckdata:"{\"废报纸\":\"20-5\",\"废料瓶\":\"20-5\",\"废书纸\":\"1-1\",\"废钢铁\":\"1-1\"}",
      func: [
        {
          title: "纸板日",
          imgUrl: "/static/icon/package.png",
          bgUrl: "/static/img/wave-1.png",
          router: "/themeDay"
        },
        {
          title: "废品价格",
          imgUrl: "/static/icon/price.png",
          bgUrl: "/static/img/wave-2.png",
          router: "/category"
        },
        {
          title: "点滴公益",
          imgUrl: "/static/icon/heart.png",
          bgUrl: "/static/img/wave-3.png",
          router: "/charity"
        },
        {
          title: "积分交易",
          imgUrl: "/static/icon/transaction.png",
          bgUrl: "/static/img/wave-4.png",
          router: "/tradingHall"
        }
      ]
    };
  },
  methods:{
     cancelCheck() {
      this.cardshow = false;
    },
    initSocket() {
      this.socket = io.connect("http://localhost:9999");
      // let OID = window.localStorage.getItem("OID");
      let OID = `oEwij06p7u8GpwVw6NSk7xWZ2dIU`
      this.socket.emit("addUser", {
        OID
      });
      this.socket.on("checkOrder", msg => {
        try {
         let _order = msg.order
         // TODO 封装数据
        } catch (err) {
          console.log("er", err);
        }
      });
    }
  },
  mounted(){
    this.initSocket()
      let temp = JSON.parse(this.ckdata);
     
      for(let key in temp){
         let detail =  {
        label:"",
        weight:"",
        price:"",
        total:0
      }

        detail.label = key;
        detail.weight = temp[key].split('-')[0];
        detail.price = temp[key].split('-')[1];
        detail.total = parseFloat(detail.weight)*parseFloat(detail.price)

        this.details.push(detail);
      }
      // this.details.newspaper.weight = temp.废报纸.split('-')[0];
      // this.details.newspaper.price = temp.废报纸.split('-')[1];
      // this.details.book.weight = temp.废书纸.split('-')[0];
      // this.details.book.price = temp.废书纸.split('-')[1];
      // this.details.bottle.weight = temp.废料瓶.split('-')[0];
      // this.details.bottle.price = temp.废料瓶.split('-')[1];
      // this.details.iron.weight = temp.废钢铁.split('-')[0];
      // this.details.iron.price = temp.废钢铁.split('-')[1];
      console.log(this.details);
      
    
    util.getUserInfo(util.getQueryVariable("code"));
  }
};
</script>
<style scoped>
.head {
  font-family: "苹方";
  width: 100%;
  height: 198px;
  background: linear-gradient(to right, #6ee0ff, #32aafa);
  background: url(/static/img/top-wave.jpg);
  background-size: 100% 100%;
}
.head-icon {
  margin: 0 auto;
  padding-top: 30px;
  height: 64px;
  width: 64px;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
.header-txt {
  margin-top: 10px;
}
.home-content {
  font-family: "苹方";
  width: 100%;
  position: relative;
  top: -48px;
}
.passage {
  box-shadow: 1px 1px 10px rgba(161, 161, 161, 0.349019607843137);
  margin: 0 auto;
  height: 91px;
  width: 340px;
  border-radius: 5px;
  background-color: #fff;
}
.passage-container {
  margin: 0 39px;
  display: flex;
  justify-content: space-between;
}
.passage-item {
  margin-top: 19px;
  position: relative;
  height: 64px;
  width: 47px;
}
.passage-item-icon {
  margin-top: 9px;
  margin-left: 6px;
  height: 35px;
  width: 34px;
}
.passage-item-txt {
  position: absolute;
  bottom: 0;
  color: #333;
  font-size: 12px;
  white-space: nowrap;
}
.func {
  margin-top: 4px;
  width: 100%;
}
.func-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 340px;
  flex-wrap: wrap;
}
.func-item {
  box-shadow: 1px 1px 10px rgba(161, 161, 161, 0.349019607843137);
  width: 160px;
  height: 119px;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  color: #999999;
  margin-top: 20px;
  background-size: 160px 119px;
}
.func-item-icon {
  margin: 0 62px;
  margin-top: 27px;
  width: 36px;
  height: 36px;
}
.nav-bar {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 49px;
  border-top: #e4e4e4 solid 1px;
}
.nav-item {
  margin-top: 3px;
  width: 36px;
  height: 44px;
  font-size: 10;
  color: #333;
}
.nav-item img{
  height: 36px;
}
.nav-label{
  font-family: "苹方";
  color: #333;
  font-size: 10px;
  text-align: center;
  position: relative;
  top: -10px;
}
img {
  width: 100%;
  height: 100%;
}
a {
    text-decoration: none;
    color: none;
}
@font-face {
  font-family: PingFang-Regular;
  src: url(../../assets/font/PingFangRegular.ttf);
}
</style>
