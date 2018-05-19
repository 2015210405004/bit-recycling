<template>
    <div class="order-list">
        <!-- 导航 -->
        <header class="tab-bar">
            <div class="tab-item " v-for="item in tabOptions" :class="{'active':item.selected}" @click="Click(item)">
                {{item.label}}
            </div>
        </header>
        <main class="content">
            <div class="panel-contanier">
        <section class="penal" v-for="i in 4">
            <div class="drop">
                <img src="/static/icon/drop.svg" alt="" class="drop-img">
                <div class="line"></div>
                <img src="/static/icon/drop.svg" alt="" class="drop-img">
                <div class="line"></div>
                <img src="/static/icon/drop.svg" alt="" class="drop-img">
                <div class="line"></div>
                <img src="/static/icon/drop.svg" alt="" class="drop-img">
                <div class="line"></div>
                <img src="/static/icon/drop.svg" alt="" class="drop-img">
            </div>
            <div class="order-contanier"   v-for="o in orders" :key="o.n">
                <div class="order-info">
                    <div class="order-introduction">
                        <div class="intro-txt">您回收了 <template v-for="_d in o.d">{{_d}}、</template>...</div>
                        <div class="intro-txt">共{{o.w}}斤</div>
                    </div>
                    <div class="order-income">
                        <div class="income-icon"><img src="/static/icon/money.svg" alt=""></div>
                        <div class="income-amount">+{{o.p}}</div>
                        <div class="income-icon"><img src="/static/icon/yuan.svg" alt=""></div>
                        <div class="income-amount">+5</div>
                        <div class="order-date">{{o.startTime}}</div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        </main>
              <footer class="foot">
          <img class="foot-img"src="/static/img/bottom-wave.png" alt="">
      </footer>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      tabOptions: [
        { label: "全部", selected: true,postion:"0%"},
        { label: "待认领", selected: false ,postion:"100%"},
        { label: "待回收", selected: false ,postion:"200%"},
        { label: "待评价", selected: false ,postion:"300%"}
      ],
      orders: []
    };
  },
  methods: {
    Click(item) {
      this.tabOptions.forEach(function(item) {
        item.selected = false;
      });
      item.selected = true;
      $(".panel-contanier").animate({right:item.postion});
    }
  },
  mounted() {
    let OID = window.localStorage.getItem('OID')
    OID = `oEwij0-ryS8R56w2xWriEFaKejiU`
    axios.post('/api/user/orders/complete', {
      OID
    })
      .then(res => {
        res.data.forEach(o => {
          let d = JSON.parse(o.detail)
          let time = new Date(o.startTime)
          let startTime = `${time.toLocaleDateString()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
          let dn = []
          let w = 0
          let p = 0
          for (let k in d) {
            let v = d[k]
            dn.push(k)
            let wp = v.split('-')
            console.log(wp)
            w += parseInt(wp[0])
            p += parseInt(wp[0]) * parseInt(wp[1])
          }
          let _o = {
            d: dn,
            w,
            p,
            startTime
          }
          this.orders.push(_o)
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
};
</script>
<style scoped>
.order-list {
  font-family: "苹方";
  width: 100%;
  height: 100vh;
  background: #F2F2F2;
}
.tab-bar {
background: #FFF;
  display: flex;
  width: 100%;
  height: 40px;
}
.tab-item {
  height: 100%;
  width: 25%;
  line-height: 40px;
  text-align: center;
  font-size: 13px;
  color: #333;
}
.active {
  color: #32aafa;
  border-bottom: #32aafa solid 2px;
}
.content{

    overflow: hidden;
    width: 100%;

}
.panel-contanier{
    position: relative;
    display: flex;
    width: 400%;
}
.penal {
    width: 95vw;
  margin-top: 15px;
  margin-left: 25px;
}
.drop {
  float: left;
  width: 17px;
  margin-top: 29px;
}
.drop-img {
  width: 17px;
  height: 17px;
}
.line {
  margin: 5px auto;
  height: 66px;
  width: 0px;
  border-left: #32aafa dashed 1px;
}
.order-contanier {
  margin-left: 27px;
  margin-bottom: 10px;
 
}
.order-info {
  width: 93.2%;
  height: 86px;
  box-shadow: 0 0 5px rgba(204, 204, 204, 0.349019607843137);
  border-radius: 3px;
  background: #fff;
}
.order-introduction {

  height: 50px;
  width: 100%;
  font-size: 12px;
  color: #333;
  padding-top: 10px;
}
.intro-txt {
  margin-left: 13px;
}
.order-income {
    position: relative;
  background: #f8fafb;
  height: 26px;
  width: 100%;
  display: flex;
}
.income-icon {
  margin-top: 2px;
  width: 11px;
  height: 11px;
  margin-left: 13px;
}
.income-amount {
  align-self: center;
  height: 15px;
  margin-left: 6px;
  font-size: 10px;
  line-height: 15px;
  color: #ffaa42;
}
.order-date {
  position: absolute;
  right: 5%;
  align-self: center;
  font-size: 9px;
  color: #c9c9c9;
}
.foot{
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
img {
  width: 100%;
  height: 100%;
}
</style>
