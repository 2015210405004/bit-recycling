<template>
<div class="basket">
  <section class="b-panel">
      <div class="add-time">
          <span class="choose-btn"  @click="Click($event)"></span>
          <span class="add-time-txt">2018.04.01 加入</span>
      </div>
      <div class="add-category">
          <div class="choose-btn" @click="Click($event)"></div>
          <div class="category-icon">
              <img class="category-icon-img" src="/static/icon/bottle.png" alt="">
          </div>
          <div class="category-txt">
              <div class="txt-title">废报纸</div>
              <div class="today-price-txt">今日价格
                  <div class="today-price"> <span class="price-number">￥ 1.2</span><span class="price-unit">元/斤</span></div>
              </div>  
          </div>
      </div>
      <div class="add-category">
          <div class="choose-btn" @click="Click($event)"></div>
           <div class="category-icon">
              <img class="category-icon-img" src="/static/icon/bottle.png" alt="">
          </div>
          <div class="category-txt">
              <div class="txt-title">废报纸</div>
              <div class="today-price-txt">今日价格
                  <div class="today-price"> <span class="price-number">￥ 1.2</span><span class="price-unit">元/斤</span></div>
              </div>  
          </div>
      </div>

  </section>
    <section class="b-panel">
      <div class="add-time">
          <span class="choose-btn" @click="Click($event)"></span>
          <span class="add-time-txt">2018.04.01 加入</span>
      </div>
      <div class="add-category">
          <div class="choose-btn" @click="Click($event)"></div>
          <div class="category-icon">
              <img class="category-icon-img" src="/static/icon/bottle.png" alt="">
          </div>
          <div class="category-txt">
              <div class="txt-title">废报纸</div>
              <div class="today-price-txt">今日价格
                  <div class="today-price"> <span class="price-number">￥ 1.2</span><span class="price-unit">元/斤</span></div>
              </div>  
          </div>
      </div>
      <div class="add-category">
          <div class="choose-btn" @click="Click($event)"></div>
           <div class="category-icon">
              <img class="category-icon-img" src="/static/icon/bottle.png" alt="">
          </div>
          <div class="category-txt">
              <div class="txt-title">废报纸</div>
              <div class="today-price-txt">今日价格
                  <div class="today-price"> <span class="price-number">￥ 1.2</span><span class="price-unit">元/斤</span></div>
              </div>  
          </div>
      </div>


  </section>
 <footer class="foot">
     <div class="order-col">
         <div class="order-info">已选中 (1) 个</div>
         <div class="order-btn-box">
             <div class="order-btn">一点回收</div>
         </div>
     </div>
     
 </footer>
 <div class="nav-bar">
      <router-link to="/userHome">
      <div class="nav-item" >
        <img src="/static/icon/home.png" alt="">
        <div class="nav-label">首页</div>
      </div>
      </router-link>
      <router-link to="/basket">
      <div class="nav-item" >
        <img src="/static/icon/box-active.png" alt="">
        <div class="nav-label">回收筐</div>
      </div>
      </router-link>
      <router-link to="/personal">
      <div class="nav-item" >
        <img src="/static/icon/personal.png" alt="">
        <div class="nav-label">我的</div>
      </div>
      </router-link>
    </div>
 
  </div>
</template>
<script>
export default {
  data(){
      return{ 
          
          checked:false      
      }
  },
  methods:{
   Click($event){
       if($event.currentTarget.className==='choose-btn' ){
       $event.currentTarget.className='choose-btn active'
       }
       else{
           $event.currentTarget.className='choose-btn'
       }
    
   }
  }
}
</script>
<style scoped>
.basket{
    width: 100%;
    height: 600px;
    background-color: #F2F2F2;
}
.b-panel{
    margin-bottom: 12px;
    font-family: "苹方";
    width: 100%;
    background-color: #FFF;
}
.add-time{
    display: flex;
    line-height: 44px;
    height: 44px;
    margin-left: 20px;

}
.add-time-txt{
    margin-left: 21px;
    font-size: 14px;
    color: #999;
}

.active{
    background-color: #32AAFA;
}
.choose-btn{
    align-self:center;
    margin-left: 5px;
    height: 18px;
    width: 18px;
    border:  #F2F2F2 solid 1px;
    border-radius: 50%;
}
.add-category{
    display: flex;
    height: 74px;
    margin-left: 20px;
    border-top: #F2F2F2 solid 1px;
}
.category-icon{
  display: flex;
  align-self:center;
  margin-left: 19px;
  height: 41px;
  width: 41px;
  border-radius: 50%;
  border: #32AAFA solid 2px;
  word-break: keep-all; /* 不换行 */
  text-align: center;
}
.category-icon-img{
    margin: 0 auto;
   align-self:center;
}
.category-txt{
    line-height: 27px;
    align-self:center;
    margin-left: 21px;
}
.txt-title{
  
    height: 27px;
    color: #333;
    font-size: 14px;
}
.today-price-txt{
    display: flex;
     width: 171px;
    justify-content: space-between;
    height: 27px;
    font-size: 14px;
    color: #666;
}
.today-price{
    height: 27px;
    font-size: 14px;
    color: #666;
}
.price-number{
    font-size: 16px;
    color: #FFAA42;
}
.price-unit{
    font-size: 13px;
}
.foot{
    background-color: #fff;
    position: fixed;
    height: 93px;
    width: 100%;
    bottom: 0;
}
.order-col{
    height: 44px;
    display: flex;
}
.order-info{
    text-align: center;
    color: #333;
    font-size: 14px;
    line-height: 44px;
    height: 100%;
    width: 51.2%;
    border-right:#F2F2F2 solid 1px;
}
.order-btn-box{
    font-size: 14px;
    height: 100%;
    width: 48.8%;
}
.order-btn{
    text-align: center;
    margin: 0 auto;
    margin-top: 7px;
    line-height: 30px;
    color: #FFF;
    height: 30px;
    width: 147px;
    border-radius: 15px;
    background: linear-gradient(to right, #6ee0ff, #32aafa);

}
.category-icon img{width: 80%;height:80%;}
@font-face {
  font-family: PingFang-Regular;
  src: url(../assets/font/PingFangRegular.ttf);
}
</style>


