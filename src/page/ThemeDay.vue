<template>
    <div class="theme-day">
        <header class="head">
            <div class="theme-select" @click="Enter()">
                 {{optionSelected}}
                <img src="/static/icon/arrow.png" alt="" class="select-icon">
            </div>
            <div class="head-icon">

                <img src="/static/icon/box.svg">
                <div class="header-txt">益点 +10%</div>
            </div>
        </header>
        <div class="price-col">
            <div class="price-label">今日回收价：</div>
            <div class="price">
                <span class="price-num">1.1</span> 元/斤</div>
        </div>
        <div class="theme-info">
            来源：快递盒、包装箱...
        </div>
        <div class="theme-info">
            可制成：书纸、报纸、宣纸、纸巾...
        </div>
        <div class="theme-info">
           回收 <span class="num">1</span> 吨纸板箱相当于保护<span class="num">66</span>棵树
        </div>
        <div class="theme-info">
           本周平均每天能回收<span class="num">678吨</span>纸板箱
        </div>
        <div class="theme-info">
           较上周增长<span class="num">12%</span> ，共保护了<span class="num">44748</span>棵树
        </div>
        <div class="theme-info">
           留住它，就是留住<span class="num">绿色</span>
        </div>
        <div class="mask" v-if="active" @click="Leave()">
            <div class="option-contanier">
                <div class="mask-theme-select">
                    {{optionSelected}}
                    <img src="/static/icon/arrow-black.png" alt="" class="select-icon">
                </div>
            </div>
        </div>
        <div class="options-box" v-show="active">
            <div class="theme-option" v-for="item in options" :class="{'selected':item.selected}" @click="Select(item)" >
                {{item.label}}
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            options:[
                {label:"周一 纸板日",selected:false},
                {label:"周二 塑料瓶日",selected:false},
                {label:"周三 旧家电日",selected:false},
                {label:"周四 纺织品日",selected:false},
                {label:"周五 废金属日",selected:false},
                {label:"周六 书籍捐赠日",selected:false},
                {label:"周日 衣物捐赠日",selected:false}
            ],
            optionSelected:"周一 纸板日",
            active:false

        }
    },
    methods:{
        Select(item){
            this.optionSelected = item.label;
            this.options.forEach(function(item){
                item.selected = false;
            })
            item.selected = !item.selected;
            this.active = !this.active;
            $(".options-box").animate({top:-500})
        },
        Enter(){
            this.active = !this.active;
            $(".options-box").animate({top:51})
            console.log(this.active);
        },
        Leave(){
              this.active = !this.active;
            $(".options-box").animate({top:-500})
        }
    }
};
</script>
<style scoped>
.theme-day {
  width: 100%;
}
.head {
  overflow: hidden;
  font-family: PingFang-Regular;
  width: 100%;
  height: 216px;
  background: linear-gradient(to right, #6ee0ff, #32aafa);
  background: url(/static/img/top-wave.jpg);
  background-size: 100% 100%;
}
.theme-select {
  font-family: "苹方";
  width: 140px;
  margin: 0 auto;
  height: 51px;
  line-height: 51px;
  padding-left: 30px;
  color: #fff;
  font-size: 16px;
}
.mask-theme-select {
  font-family: "苹方";
  font-size: 16px;
  width: 140px;
  height: 51px;
  line-height: 51px;
  margin: 0 auto;
  color: #333;
  text-align: center;
}
.head-icon {
  margin: 0 auto;
  margin-top: 27px;
  height: 90px;
  width: 109px;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
.header-txt {
  font-family: "苹方";

  font-size: 13px;
  white-space: nowrap;
}
.price-col {
  display: flex;
  justify-content: space-between;
  font-family: "苹方";
  overflow: hidden;
  width: 91.2%;
  height: 50px;
  margin: 0 auto;
  border-bottom: #f2f2f2 solid 1px;
  color: #666666;
  font-size: 14px;
}
.price-label {
  margin-left: 11px;
  margin-top: 14px;
}
.price {
  margin-right: 7px;
  margin-top: 10px;
}
.price-num {
  color: #ffaa42;
  font-size: 18px;
}
.num{
    color: #ffaa42;
}
.theme-info{
    width: 70%;
    margin: 0 auto;
    padding: 19px;
    color: #666;
    font-size: 15px;
}
.select-icon {
  width: 15px;
  height: 12px;
}
.mask {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.3);
}
.option-contanier {
  color: #333;
  background: #fff;
}
.options-box{
    position: absolute;
    top: -500px;
    background: #FFF;
    width: 100vw;

}
.theme-option{
    color: #333;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    height: 44px;
    line-height: 44px;
    font-size: 13px;
    border-bottom: #ccc solid 1px; 
}
.selected{
     background:  linear-gradient(to right, #6ee0ff, #32aafa);
}
img {
  width: 100%;
  height: 100%;
}
</style>

