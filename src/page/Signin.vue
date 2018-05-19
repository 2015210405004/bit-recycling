<template>
<div>
  <div class="signin-bg">
    <div class="signin-bg-masking"></div>
  </div>  
  <div class="signin-tel">
    <div class="siginin-tel-prompt"  :class="{'active':focus}">中国大陆+86</div>
    <input type="text" class="signin-tel-input" placeholder="输入手机号码" @focus="isfocus" @blur="isblur">
  </div>

</div>
  
</template>
<style scoped>
.signin-bg {
  height: 93px;
  width: 100%;
  background: linear-gradient(to right, #6ee0ff, #32aafa);
}

.signin-bg-masking {
  position: relative;
  bottom: -63px;
  border-width: 15px;
  border-right-width: 50vw;
  border-left-width: 50vw;
  border-style: solid;
  border-color: transparent transparent white white;
}
.signin-tel {
  margin: 0 auto;
  margin-top: 107px;
  width: 308px;
}
.siginin-tel-prompt {
  text-align: cAenter;
  color: #fff;
}
.active {
  color: #0188fb;
}
.signin-tel-input {
  width: 100%;
  font-family: PingFang-Regular;
  padding-bottom: 10px;

  font-size: 22px;
  border: none;
  border-bottom: solid 2px #c9c9c9;
  outline: medium;
  text-align: center;
}
.signin-tel-input:focus::-webkit-input-placeholder {
  color: transparent;
}
.signin-tel-input::-webkit-input-placeholder {
  font-size: 22px;
  color: #999da5;
}
@font-face {
  font-family: PingFang-Regular;
  src: url(../assets/font/PingFangRegular.ttf);
}
body {
  margin: 0;
}
</style>
<script>
export default {
  data() {
    return {
      focus: false
    };
  },
  methods: {
    isfocus: function() {
      this.focus = true;
    },
    isblur: function() {
      this.focus = false;
    }
  }
};
</script>


