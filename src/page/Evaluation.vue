<template>
<div class="evaluation">
    <main class="panel">
        <div class="avatar">
        </div>
        <div class="name">王师傅</div>
        <div class="star-box">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <span>5.0</span>
        </div>  
        <div class="select-star">
            <i class="fa fa-star"v-for="(i,index) in 5" @click="ClickStar(index)"></i>

        </div>    
        <div class="evaluation-options">
            <div class="option" v-for="item in options" :class="{'selected':item.selected}" @click="Selected(item)">
                {{item.label}}
            </div>
        </div>
        <div class="input-box">
        <input type="text" placeholder="请输入...">
        </div>
    </main>
    <footer class="footer">
        <div class="footer-btn">
            匿名提交
        </div>
    </footer>
</div>
</template>
<script scoped>
export default {
  data(){
      return{
          options:[
              {label:"准时上门" ,selected:false},
              {label:"价格公道" ,selected:false},
              {label:"形象整洁" ,selected:false},
              {label:"态度良好" ,selected:false}
          ]
      }
  },
  methods:{
      ClickStar(index){
          console.log(index);
            $(".select-star i").css("color","#f2f2f2");
          for(var i = 0; i<index+1; i++){
       
            $(".select-star i").eq(i).css("color","#FFAA42");
          }
      },
      Selected(item){
          item.selected = !item.selected;
      }
  }
}
</script>
<style>
.evaluation{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #f2f2f2;
}
.panel{
    overflow: hidden;
    width: 94.4%;
    height: 69.7%;
    background: #FFF;
    margin: 0 auto;
    margin-top: 11px;
    border-radius: 5px;
    box-shadow:0 0 5px rgba(204, 204, 204, 0.349019607843137);

}
.avatar{
    margin: 31px auto 0 auto;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: url("/static/img/avatar-11.JPG");
    background-size: 100% 100%;
}
.name{
    font-size: 18px;
    margin: 10px auto 0 auto;
    text-align: center;
}
.star-box{
text-align: center;
  color: #FFAA42;
}
.star-box i{
    font-size: 12px;
    margin: -2px;
    
}
.star-box span{
    font-size: 10px;

}
.select-star{
    width: 61.6%;
    margin: 0 auto; 
    margin-top: 37px;  
    display: flex;
    justify-content: space-between;
}
.star-active{
    color: #FFAA42;
}
.select-star i{
    color: #F2F2F2;
    font-size: 38px; 
    margin: 0 4px;   
}
.evaluation-options{
    width: 73.4%;
    height: 70px;
    margin: 0 auto;
    margin-top: 39px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

}
.option{
    width: 46.15%;
    height: 30px;
    border: #E4E4E4 solid 1px;
    border-radius: 3px;
    line-height: 30px;
    color: #949494;
    text-align: center;
    font-size: 13px;
}
.selected{
    background: #32aafa;
    color: #fff;
}
.input-box{
    width: 73.4%;
    height: 34px;
    outline: medium;
    margin: 0 auto;
    margin-top: 21px;
    background: #F2F2F2;
}
.panel input{
    width: 95%;
    height: 32px;
    margin-left: 10px;
    outline: medium;
    border: none;
    background: #F2F2F2;

}
input::-webkit-input-placeholder{
   
    color: #949494;
    font-size: 13px;
}
.footer{
     width: 100%;
     position: fixed;
     bottom: 15px;
}
.footer-btn{
    font-size: 14px;
    text-align: center;
    line-height: 44px;
    color: #fff;
     margin: 0 auto;
     width: 94.4%;
     height: 44px;
     border-radius: 22px;
     background: linear-gradient(to right, #6ee0ff, #32aafa);

}
</style>
