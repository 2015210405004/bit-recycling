<template>
<div class="wrapper">
  <header class="index-swipe-wrapper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeImgSrc" :key='item.index'>
        <img v-bind:src=item.imgSrc alt="轮播图" class='swipe-item-img'>
      </mt-swipe-item>
    </mt-swipe>
  </header>
  <main>
    <section class="price-module">
      <div class="price-item left no-top-border">
        <span class="price-item-title">
          废纸
        </span>
        <span class="price-item-detail">
          废报纸 废纸箱 废书纸
        </span>
      </div>
      <div class="price-item left">
        <span class="price-item-title">
          废纺织品
        </span>
        <span class="price-item-detail">
          废衣物 床上用品 地毯
        </span>
        <br>
        <span class="price-item-detail">
          其他纺织品
        </span>
      </div>
      <div class="price-item right no-top-border">
        <span class="price-item-title">
          废塑料
        </span>
        <span class="price-item-detail">
          塑料容器 塑料瓶 塑料玩具
        </span>
      </div>
      <div class="price-item right">
        <span class="price-item-title">
          电子电器
        </span>
        <span class="price-item-detail">
          电脑 电视 冰箱 洗衣机
        </span>
      </div>
      <div class="price-item right">
        <span class="price-item-title">
          其他
        </span>
        <span class="price-item-detail">
          废钢铁 金属 玻璃
        </span>
      </div>
    </section>
    <section class="main-function">
      <div class="main-fn-item">
        <div class="icon-wrapper offline-recycle flex-center">
          <img src="/static/icon/simpleRecycle.png" alt="线下回收">
        </div>
        <div class="fn-title">
          线下回收
        </div>
      </div>
      <div class="main-fn-item">
        <div class="icon-wrapper create-order flex-center">
          <img src="/static/icon/createOrder.png" alt="一键下单">
        </div>
        <div class="fn-title">
          一键下单
        </div>
      </div>
      <div class="main-fn-item">
        <div class="icon-wrapper scan-code flex-center">
          <img src="/static/icon/scanCode.png" alt="扫码开箱">
        </div>
        <div class="fn-title">
          扫码开箱
        </div>
      </div>
      <div class="main-fn-item">
        <div class="icon-wrapper acativity flex-center">
          <img src="/static/icon/acativity.png" alt="环保活动">
        </div>
        <div class="fn-title">
          环保活动
        </div>
      </div>
    </section>
  </main>
  <my-footer class='index-footer'></my-footer>
</div>
</template>
<script>
import MyFooter from '@/components/MyFooter'
export default {
  components: {
    MyFooter
  },
  data() {
    return {
      swipeImgSrc: []
    };
  },
  mounted() {
    // 初始化轮播图图片路径
    for (let i = 0; i < 5; i++) {
      this.swipeImgSrc.push({
        index: i,
        imgSrc: `/static/img/index-wrapper-${i + 1}.jpg`
      });
    }
  }
};
</script>
<style scoped>
.wrapper {
  background-color: #ddd;
  font-family: "苹方";
}

.swipe-item-img {
  width: 100%;
  height: 100%;
}

.index-swipe-wrapper {
  height: 202px;
}

.price-module {
  display: flex;
  flex-direction: column;
  height: 240px;
  flex-wrap: wrap;
  border: 1px solid #ddd;
  background-color: #fff;
}

.price-item {
  box-sizing: border-box;
  width: 50%;
  border: 1px solid #ddd;
  border-bottom: none;
  border-left: none;
  padding: 9px 27px 0 10px;
}

.price-item.left {
  height: 120px;
}

.price-item.right {
  height: 80px;
  border-right: none;
}

.price-item-title {
  display: block;
  margin-bottom: 7px;
  color: #333;
  font-size: 14px;
  font-weight: 600;
}

.price-item-detail {
  color: #949494;
  font-size: 12px;
  text-align: justify;
}

.no-top-border {
  border-top: none;
}

.main-function,
footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.main-function {
  height: 80px;
  width: 100%;
  background-color: #fff;
}

.main-fn-item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.icon-wrapper {
  width: 36px;
  height: 36px;
}

.icon-wrapper img {
  width: 24px;
  height: 24px;
}

.fn-title {
  font-size: 12px;
}

.offline-recycle,
.create-order,
.scan-code,
.acativity {
  border-radius: 50%;
  border: 2px solid #F2F2F2;
}

.offline-recycle {
  background-color: #52d322;
}

.create-order {
  background-color: #FF8888;
}

.scan-code {
  background-color: #56A0FC;
}

.acativity {
  background-color: #FFAA42;
}

.index-footer {
  margin-top: 29px;
}

</style>

