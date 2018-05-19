<template>
  <div class="leaderboard">
      <header class="head">每周一凌晨刷新</header>
      <main class="lb-container">
          <div class="lb-item" v-for="item in userData1">
              <span class="lb-crown">
                  <img  v-bind:src="item.crownUrl" alt="">
              </span>
              <span class="lb-ranking">{{item.ranking}}</span>
              <span class="lb-avatar">
                 <img  v-bind:src="item.avatarUrl" alt="">
              </span>
              <span class="lb-name">{{item.name}}</span>
              <span class="lb-amount">{{item.amount}}元</span>
          </div>
          <div class="lb-item" v-for="item in userData2">
              <span class="lb-crown">
                
              </span>
              <span class="lb-ranking">{{item.ranking}}</span>
              <span class="lb-avatar">
                 <img  v-bind:src="item.avatarUrl" alt="">
              </span>
              <span class="lb-name">{{item.name}}</span>
              <span class="lb-amount">{{item.amount}}元</span>
          </div>

      </main>
      <footer class="foot">
          <img class="foot-img"src="/static/img/bottom-wave.png" alt="">

      </footer>
  </div>
</template>
<script>
export default {
    data(){
        return{
            userData1:[
                {ranking:1,avatarUrl:"/static/img/avatar-1.png",name:"海绵宝宝强迫症",amount:1000,crownUrl:"/static/img/crown-1.png"},
                {ranking:2,avatarUrl:"/static/img/avatar-2.png",name:"拿着试卷唱忐忑",amount:800,crownUrl:"/static/img/crown-2.png"},
                {ranking:3,avatarUrl:"/static/img/avatar-3.png",name:"张油条",amount:700,crownUrl:"/static/img/crown-3.png"}
            ],userData2:[
                {ranking:4,avatarUrl:"/static/img/avatar-4.png",name:"喋喋以喋以喋喋",amount:600,crownUrl:""},
                {ranking:5,avatarUrl:"/static/img/avatar-5.png",name:"张磊132",amount:550,crownUrl:""},
                {ranking:6,avatarUrl:"/static/img/avatar-6.png",name:"佩德罗",amount:400,crownUrl:""},
                {ranking:7,avatarUrl:"/static/img/avatar-7.png",name:"再看就把你吃掉",amount:350,crownUrl:""},
                {ranking:8,avatarUrl:"/static/img/avatar-8.png",name:"幼稚园园长☀",amount:300,crownUrl:""},
                {ranking:9,avatarUrl:"/static/img/avatar-9.png",name:"请眼熟我",amount:298,crownUrl:""},
                {ranking:10,avatarUrl:"/static/img/avatar-10.png",name:"高速公鹿",amount:198,crownUrl:""}
            ],
        }
    },
    mounted(){
        this.init()
    },
    methods:{
         init() {
            $(".lb-ranking:eq(0)").addClass("first-color");
            $(".lb-ranking:eq(1)").addClass("second-color");
            $(".lb-ranking:eq(2)").addClass("second-color");
        }
    }
}
</script>
<style scoped>
.leaderboard{
     font-family: PingFang-Regular;
    width: 100%;
    height: 100vh;
    
}
.head{
    height: 27px;
    line-height: 27px;
    text-align: center;
    font-size: 12px;
    color: #CCC;
    background-color: #F2F2F2;
}
.lb-container{

    width: 100%;
}
.lb-item{
    display: flex;
    width: 100%;
    height: 52px;
}
.lb-crown{
    transform: rotate(-10deg);
    margin-left: 8px;
    margin-top: 12px;
    height: 22px;
    width: 22px;
}
.lb-ranking{
    font-size: 14px;
    font-family: Forte;
    align-self: center;
    line-height: 36px;
    height: 36px;
    width: 23px;
}
.first-color{
    color: #32AAFA;
}
.second-color{
    color: #6EE0FF;
}
.lb-avatar{
    align-self: center;
    margin-left: 10px;
    height: 46px;
    width: 46px;
}
.lb-name{
    font-size: 14px;
    align-self: center;
    margin-left: 18px;
}
.lb-amount{
    line-height: 52px;
    margin-right: 33px;
    position: absolute;
    right: 0;
}
.foot{
    position: relative;
    z-index: -1;
    display: flex;
    flex-direction: column-reverse;
    position: fixed;
    bottom: 0;
    width: 100%;
}
.foot-img{
    width: 100%;
    height: 100%;
}
img{
    width: 100%;
    height: 100%;
}
@font-face {
  font-family: PingFang-Regular;
  src: url(../assets/font/PingFangRegular.ttf);
}
@font-face {
  font-family: Forte;
  src: url(../assets/font/Forte.ttf);
}
</style>


