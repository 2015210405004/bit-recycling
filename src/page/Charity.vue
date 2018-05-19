<template>
  <div class="charity">
      <div class="panel">
          <div class="charity-img">
              <img src="/static/img/charity-1.jpg" alt="">
          </div>
          <div class="charity-content">
          <div class="charity-title">
              图书馆捐赠活动
          </div>
          <div class="charity-info">
              筹集物资：铅笔、橡皮、作业本等
          </div>
          <div class="charity-info">
            <span class="number">824</span>人参与捐赠，已获得<span class="number">230</span>次捐赠
              
          </div>
          <div class="charity-btn">
              我要捐赠
          </div>
       </div>
      </div>
       <div class="panel">
          <div class="charity-img">
              <img src="/static/img/charity-1.jpg" alt="">
          </div>
          <div class="charity-content">
          <div class="charity-title">
              图书馆捐赠活动
          </div>
          <div class="charity-info">
              筹集物资：铅笔、橡皮、作业本等
          </div>
          <div class="charity-info">
            <span class="number">824</span>人参与捐赠，已获得<span class="number">230</span>次捐赠
              
          </div>
          <div class="charity-btn">
              我要捐赠
          </div>
       </div>
      </div>
       <div class="panel">
          <div class="charity-img">
              <img src="/static/img/charity-1.jpg" alt="">
          </div>
          <div class="charity-content">
          <div class="charity-title">
              图书馆捐赠活动
          </div>
          <div class="charity-info">
              筹集物资：铅笔、橡皮、作业本等
          </div>
          <div class="charity-info">
            <span class="number">824</span>人参与捐赠，已获得<span class="number">230</span>次捐赠
              
          </div>
          <div class="charity-btn">
              我要捐赠
          </div>
       </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return{
          data:[
              {}
          ]
      }
  }
}
</script>
<style scoped>
.charity{
    font-family: "苹方";
    overflow: hidden;
    width: 100%;
    background-color: #F2F2F2;
}
.charity-img{
    height:169px ;
}
.panel{
    margin:0 auto;
    margin-top: 10px;
    width: 97.3%;
    height: 249px;
    background-color: #FFF;
}
.charity-content{
    margin-top: 10px;
    margin-left: 12px;
}
.charity-title{
    font-family: "苹方";
    font-size: 16px;
    color:#333;
}
.charity-info{
    font-family: "苹方";
    margin-top: 3px;
    font-size: 12px;
    color: #949494;
}
.charity-btn{
    font-family: "苹方";
    position: relative;
    margin-right: 16px;
    top: -25px;
    float: right;
    height: 23px;
    width: 81px;
    border: #32AAFA solid 1px;
    border-radius: 12.5px;
    color: #32AAFA;
    font-size: 12px;
    text-align: center;
    line-height: 23px;
}
.number{
    margin: 0;
    color: #32AAFA;
}
</style>

