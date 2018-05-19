<template>
  <div class="price-wrapper">
    <header>
      <section class='data-section'>
        <div class="time-selector">
          <div class="child-time date">
            日
          </div>
          <div class="child-time month">
            月
          </div>
          <div class="child-time year">
            年
          </div>
        </div>
        <h1 class="price-data">
          35
        </h1>
      </section>
      <section class="tip-section">
        <span class='tip'>
          <img src="/static/icon/rightIcon.png" alt="对勾中">
          承诺绝不压价
        </span>
        <span class='tip'>
          <img src="/static/icon/rightIcon.png" alt="对勾中">
          回收10天保价
        </span>
        <span class='tip'>
          <img src="/static/icon/rightIcon.png" alt="对勾中">
          彻底清除隐患
        </span>
      </section>
    </header>
    <main>
    </main>

    <footer></footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.price-wrapper {
  background-color: #ddd;
  font-family: "苹方";
}

.data-section {
  height: 178px;
  padding-top: 1px;
  background: linear-gradient(to right, #6ee0ff, #32aafa);
}

.time-selector {
  display: flex;
  width: 324px;
  height: 28px;
  border-radius: 14px;
  margin: 11px auto;
  background-color: #fff;
}

.time-selector .child-time {
  flex: 1;
  text-align: center;
  font-size: 14px;
  line-height: 28px;
}

.month {
  border-left: 1px solid #0188FB;
  border-right: 1px solid #0188FB;
}

.price-data {
  margin-top: 4px;
  text-align: center;
  font-size: 48px;
}

.price-data::after {
  content: "元";
  font-size: 16px;
  margin-left: -15px;
  font-weight: normal;
}

.tip-section {
  color: #6b6b6b;
  font-size: 12px;
  height: 41px;
  background-color: #fff;
}

.tip,
.tip-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

img {
  width: 20px;
  height: 20px;
}


main {
  margin: 10px 0 15px 0;
  height: 303px;
  background-color: #fff;
}

footer {
  height: 58px;
  background-color: #fff;
}
</style>
