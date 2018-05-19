<template>
    <div class="trading-hall">
        <header class="info">
            <div class="current-points">当前积分:
                <span class="number">50</span>
            </div>
            <div class="current-balance">钱包余额:
                <span class="number">200</span>
            </div>
            <div class="sell-btn" @click="sell()">一点出售</div>
        </header>
        <main class="content">
            <div class="sell-info-box" v-for="i in 5">
                <div class="sell-info">
                    <span class="info-point">40益点</span>
                    <span class="info-price">￥4</span>
                    <span class="info-time">2018-03-28 19:25:35</span>
                </div>
                <div class="sell-msg">
                    低价出售益点，可小刀
                </div>
            </div>
        </main>
        <transition name="fade">
            <section v-if="show" class="mask">
                <div class="modal">
                    <div class="modal-head">
                        益点回收
                    </div>
                    <div class="average">
                        当前均价：0.1元/益点
                    </div>
                    <div class="point-input-box">
                        <input type="text" class="point-input" v-model="amount" v-on:blur="changePrice(amount)" placeholder="请输入回收的益点数">
                        <div class="unit" v-if="auShow">益点</div>
                    </div>
                    <div class="price-input-box">
                        <input type="text" class="price-input" v-model="price" placeholder="请输入售价">
                         <div class="unit" v-if="puShow">元</div>
                    </div>
                    <div class="confirm-btn" @click="sell()">
                        确认回收
                    </div>
                    <div class="tip">
                        积分回收后不可退回
                    </div>

                </div>
                <div class="close-btn" @click="sell()">
                    <img src="/static/icon/close.png" alt="">
                </div>

            </section>
        </transition>
    </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      amount: "",
      price: "",
      auShow: false,
      puShow: false
    };
  },
  watch: {
    amount: function(val) {   
      if (val === "") {
        this.auShow=false;
      } else {
        this.auShow= true;
      }
    },
    price: function(val) {   
      if (val === "") {
        this.puShow=false;
      } else {
        this.puShow= true;
      }
    }

  },
  methods: {
    sell() {
      this.show = !this.show;
    },
    changePrice(value) {
      if (!(value === "")) 
        this.price = (0.1 * value).toFixed(2);

    }
  }
};
</script>
<style scoped>
.info {
  display: flex;
  width: 100%;
  height: 43px;
  border-bottom: #f2f2f2 solid 1px;
  font-family: "苹方";
  font-size: 14px;
}
.current-points {
  width: 91px;
  height: 20px;
  line-height: 44px;
  margin-left: 20px;
}
.current-balance {
  line-height: 44px;
  margin-left: 33px;
}
.number {
  color: #ffaa42;
  margin-left: 5px;
}
.sell-btn {
  position: absolute;
  right: 13px;
  text-align: center;
  align-self: center;
  width: 71px;
  height: 22px;
  line-height: 24px;
  border: #32aafa solid 1px;
  color: #32aafa;
  border-radius: 12px;
  font-size: 12px;
}
.content {
  width: 100%;
  font-family: "苹方";
}
.sell-info-box {
  font-size: 14px;
  margin: 0 auto;
  margin-top: 7px;
  width: 96%;
  height: 70px;
  border: #f2f2f2 solid 1px;
  box-shadow: 0 0 5px rgba(204, 204, 204, 0.349019607843137);
}
.sell-info {
  display: flex;
  justify-content: space-between;
  margin: 12px 19px 0 19px;
}
.info-point {
  color: #199ed8;
}
.info-price {
  color: #ffaa42;
  margin-left: 15px;
}
.info-time {
  color: #ccc;
  font-size: 12px;
  font-weight: lighter;
}
.sell-msg {
  margin-top: 9px;
  margin-left: 19px;
  color: #5e5e5e;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.modal {
  width: 293px;
  height: 292px;
  margin: 0 auto;
  margin-top: 125px;
  background-color: #fff;
  border-radius: 5px;
}
.modal-head {
  width: 100%;
  height: 53px;
  background: linear-gradient(to right, #6ee0ff, #32aafa);
  font-size: 20px;
  font-weight: bold;
  line-height: 53px;
  text-align: center;
  color: #fff;
}
.average {
  width: 100%;
  margin-top: 4px;
  text-align: center;
  font-size: 10px;
  color: #999;
}
.close-btn {
  position: absolute;
  left: 50%;
  margin-left: -25px;
  bottom: 24px;
  width: 50px;
  height: 50px;
}
.point-input,
.price-input {
  font-size: 20px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: none;
  color: #ffaa42;
  border-bottom: solid 1px #333333;
  outline: medium;
  text-align: center;
}
.unit {
  float: right;
  position: relative;
  top: -26px;
  font-size: 12px;
  color: #666666;
}
.point-input-box {
  font-size: 20px;
  width: 207px;
  height: 37px;
  margin: 0 auto;
  margin-top: 12px;
  text-align: center;
}

.price-input-box {
  width: 207px;
  height: 37px;
  margin: 0 auto;
  margin-top: 28px;
  text-align: center;
}
input::-webkit-input-placeholder {
  font-size: 18px;
  color: #999;
}
.confirm-btn {
  margin: 0 auto;
  margin-top: 40px;
  width: 135px;
  height: 30px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 30px;
  background: linear-gradient(to right, #6ee0ff, #32aafa);
  border-radius: 15px;
}
.tip {
  margin: 0 auto;
  font-size: 9px;
  color: #999;
  text-align: center;
}
img {
  width: 100%;
  height: 100%;
}
</style>

