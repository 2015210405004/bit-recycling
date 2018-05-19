<template>
  <footer>
    <div class="footer-item">
      <img src="/static/icon/indexFooterSelected.png" alt="主页">
    </div>
    <div class="footer-item">
      <img src="/static/icon/orderFooter.png" alt="我要下单">
    </div>
    <div class="footer-item">
      <img src="/static/icon/orderFooter.png" alt="我的信息">
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 58px;
  width: 100%;
  background-color: #fff;
}

.footer-item {
  /* width: 25px;
  height: 25px;
  border: 1px solid #ddd; */
}

.footer-item img {
  width: 25px;
  height: 25px;
}
</style>
