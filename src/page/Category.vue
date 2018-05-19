<template>
<div class="category-container">
    <div class="category-bar" v-for="item in categorise">
      <router-link to="/price">
        <div class="container">
            <div class="content left" @click="slide">
                <div class="main-icon" :style="{background:item.color}">
                  <img v-bind:src="item.icon" alt="">
                </div>
                <div class="category ">
                    <div class="category-title">废塑料</div>
                    <div class="category-content">
                        <span>塑料容器</span>
                        <span>塑料瓶</span>
                        <span>塑料玩具</span>
                    </div>
                </div>
            </div>
        </div>
        </router-link>
    </div>
</div>
</template>
<script>

export default {
  data() {
    return {
      ismove: false,
      isactive: false,
      firstClick:false,
      categorise: [
        {icon:"/static/img/水瓶.png",color:"#ffb9b9",label:"废塑料"},
        {icon:"/static/img/iron.png",color:"#6EE0FF",label:"废金属"},
        {icon:"/static/img/水瓶.png",color:"#FFD183",label:"废塑料"},
        {icon:"/static/img/iron.png",color:"#ffb9b9",label:"废塑料"},
        {icon:"/static/img/水瓶.png",color:"#FFD183",label:"废塑料"},

          ]
    };
  },
  methods: {
    slide: function() {
      this.ismove = !this.ismove;
      this.firstClick = true;
    },
    selected: function(item) {
      item.checked = !item.checked;

    }
  }
};
</script>
<style scoped>
.category-container{
  width: 100%;
  height: 100vh;
  background: #f2f2f2;
  overflow: hidden;
}
.category-bar {
  margin: 0 auto;
  margin-top: 5px;
  width: 365px;
  overflow: hidden;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 0 8px rgba(204, 204, 204, 0.349019607843137);
}
.container {
  font-family: PingFang-Regular;
  display: flex;
  width: 800px;
  height: 80px;
}
.content {
  margin-right: 5px;
  display: flex;
  height: 80px;
  width: 365px;
  border-radius: 5px;
}
.main-icon {
  height: 44px;
  width: 44px;
  margin-left: 41px;
  margin-top: 17px;
  background-color: #ffb9b9;
  border-radius: 50%;
}
.category {
  margin-top: 17px;
  text-align: center;
  width: 285px;
}
.category-title {
  font-size: 18px;
  color: #333333;
  font-weight: bold;
}
.mask {
  background-color: #6ee0ff;
  height: 80px;
  width: 365px;
  border-radius: 5px;
}
.confirm {
  text-align: center;
  float: right;
  color: #fff;
  line-height: 80px;
  width: 48px;
  height: 100%;
  border-left: #fff solid 2px;
}
.category-box {
  float: left;
  display: flex;
  margin-left: 29px;
  width: 240px;
  height: 65px;
}
.category-content{
  color: #949494;
  font-size: 12px;
}
.category-icon {
  margin-right: 14px;
  font-size: 12px;
  margin-top: 8px;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: #fff solid 2px;
  color: #fff;
  word-break: keep-all; /* 不换行 */
  text-align: center;
}
.category-icon:last-child {
  margin-right: 0px;
}
.relative{
  position: relative;
}
.move {
  left: -370px;
  animation: move 1s;
  -webkit-animation: move 1s; /*Safari and Chrome*/
}
.leave {
  animation: leave 1s;
  -webkit-animation: leave 1s; /*Safari and Chrome*/
}
.icon {
  font-size: 42px;
}
.active {
  color: #ff8888;
  border-color: #ff8888;
}
.main-icon img {
  color: #fff;
  width: 80%;
  height: 80%;
  margin: 4px;
}
@font-face {
  font-family: PingFang-Regular;
  src: url(../assets/font/PingFangRegular.ttf);
}
</style>


