<template>
  <div class="personal">
    <div class="bg-contanier">
      <div class="personal-bg"></div>
    </div>
    <div class="person-content">
      <div class="personal-avatar">
        <img src="" alt="" id="personal-avatar-img">
      </div>
      <div class="personal-login"> 立即登录</div>
      <div class="personal-function">
        <div class="func-item" v-for="item in func">
          <div class="func-item-img"> <img v-bind:src="item.url" alt=""></div>
          <div class="func-item-title">{{item.title}}</div>
        </div>
      </div>
      <div class="personal-option">
        <div class="option-item" v-for="item in options">
          <div class="option-label">
            <div class="option-item-img pull-left"> <img v-bind:src="item.url" alt=""></div>
            {{item.title}}
          </div>

          <img src="/static/icon/right.png" alt="" class="angle">
        </div>
      </div>
        <div class="gap"></div>
    </div>
  
    <footer class="nav-bar">
      <router-link to="/userHome">
        <div class="nav-item">
          <img src="/static/icon/home.png" alt="">
          <div class="nav-label">首页</div>
        </div>
      </router-link>
      <router-link to="/basket">
        <div class="nav-item">
          <img src="/static/icon/box.png" alt="">
          <div class="nav-label">回收筐</div>
        </div>
      </router-link>
      <router-link to="/personal">
        <div class="nav-item">
          <img src="/static/icon/personal-active.png" alt="">
          <div class="nav-label">我的</div>
        </div>
      </router-link>
    </footer>

  </div>
</template>
<style scoped>
.personal {
  width: 100vw;
  height: 100vh;
}
.bg-contanier {
  z-index: -1;
  top: 0;
  height: 30vh;
  overflow: hidden;
}
.personal-bg {
  position: relative;
  top: -70vh;
  right: 50vw;
  width: 200vw;
  height: 100vh;
  border-radius: 80%;
  background: linear-gradient(to right, #6ee0ff 25%, #32aafa 50%);
}
.person-content {
  margin-top: 8vh;
  width: 100%;
  position: absolute;
  top: 0;
}
.personal-avatar {
  margin: 0 auto;

  border: #fff solid 2px;
  width: 62px;
  height: 62px;
  border-radius: 31px;
  background-color: #cccccc;
}
.personal-login {
  font-family: "苹方";
  margin: 0 auto;
  margin-top: 21px;
  width: 119px;
  height: 30px;
  border-radius: 15px;
  border: #fff solid 1px;
  color: white;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
}

.personal-function {
  margin-top: 30px;
  border-bottom: #f2f2f2 solid 2px;
  display: flex;
}
.func-item {
  font-family: "苹方";
  text-align: center;
  height: 110px;
  width: 25%;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
}
.func-item-img {
  margin: 0 auto;
  margin-top: 44px;
  margin-bottom: 8px;
  width: 24px;
  height: 24px;
}
.func-item-img img {
  width: 100%;
  height: 100%;
}
.option-item-img {
  margin: 8px 8px 8px 21px;
  width: 24px;
  height: 24px;
}
.option-item-img img {
  width: 100%;
  height: 100%;
}
.personal-option {
  width: 100%;
}
.option-item {
  font-family: "苹方";
  padding: 0 20px;
  line-height: 50px;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.angle {
  align-self: center;
  height: 15px;
  width: 15px;
  float: right;
  line-height: 50px;
  color: #d3d3d3;
}
.personal-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

body {
  font-family: PingFang-Regular;
}
</style>
<script>
export default {
  data() {
    return {
      func: [
        { title: "待上门", url: "/static/img/door.png" },
        { title: "待确认", url: "/static/icon/order-processing.png" },
        { title: "已完成", url: "/static/icon/order-over.png" },
        { title: "全部订单", url: "/static/icon/order.png" }
      ],

      options: [
        { title: "我的钱包", url: "/static/icon/余额.png" },
        { title: "我的地址簿", url: "/static/icon/地址.png" },
        { title: "成为大商户", url: "/static/icon/企业.svg" },
        { title: "联系客服", url: "/static/icon/客服.png" },
        { title: "帮助和反馈", url: "/static/icon/问题反馈.png" },
        { title: "设置", url: "/static/icon/设置.png" }
      ]
    };
  },
  methods: {},
  mounted() {
    const nickname = window.localStorage.getItem("nickname");
    const avatarurl = window.localStorage.getItem("avatarurl");

    if (nickname === undefined && avatarurl === undefined) {
    } else {
      document.getElementsByClassName("personal-login")[0].innerHTML = nickname;
      document.getElementsByClassName("personal-login")[0].style.borderWidth =
        "0";
      document.getElementById("personal-avatar-img").src = avatarurl;
    }
  }
};
</script>


