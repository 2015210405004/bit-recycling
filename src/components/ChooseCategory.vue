<template>
    <div class="box">
        <div class="container">
            <div class="content left" @click="slide">
                <div class="main-icon">
                  <img src="/static/img/水瓶.png" alt="">
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
            <!-- 点击后的遮罩层 -->
            <div class="mask right" v-bind:class="{'move':ismove,'leave':!ismove,'relative':firstClick}">
                <div class="category-box">
                    <div class="category-icon" :class="{'active':item.checked}" @click="selected(item)" v-for="item in categorise">
                        <i class="icon iconfont icon-icon-test "></i> {{item.name}}
                    </div>
                </div>
                <div class="confirm right " @click="slide">
                    <i class="fa fa-check fa-2x"></i>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import "../assets/css/iconfont.css";
export default {
  data() {
    return {
      ismove: false,
      isactive: false,
      firstClick:false,
      categorise: [
          {name:"塑料瓶",checked:false}, 
          {name:"塑料容器",checked:false}, 
          {name:"塑料玩具",checked:false}, 
          {name:"其他",checked:false}, ]
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
.box {
  margin: 5px;
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
@keyframes move {
  from {
    left: -0px;
  }
  to {
    left: -370px;
  }
}

@-webkit-keyframes move {
  from {
    left: -0px;
  }
  to {
    left: -370px;
  }
}
@keyframes leave {
  from {
    left: -370px;
  }
  to {
    left: 0px;
  }
}

@-webkit-keyframes leave {
  from {
    left: -370px;
  }
  to {
    left: 0px;
  }
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


