<template>
  <main>
    <header>
      <div class="header-mask flex-center" ref='headerMask'>
        <div class="login-avatar-wrapper">
          <div class="login-avatar">
              <img src="https://upload.jianshu.io/users/upload_avatars/5377782/f1235844-4f9e-4049-ab95-d0a1005fcc6d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240" alt="">
          </div>
        </div>
      </div>
    </header>
    <div class="form-main">
      <div class="user-name flex-center">
        <input type="text" class="login-input" placeholder="Username">
      </div>
      <div class="user-password flex-center">
        <input class="login-input" placeholder="Password" type="password">
        <div class="border"></div>
      </div>
      <div class="btn-wrapper flex-center normal-login-wrapper">
        <button class='login-btn'>登录</button>
      </div>
      <div class="btn-wrapper flex-center">
        <button class='login-btn'>微信登录</button>
      </div>
    </div>
    <footer>
      <span class="register">新用户注册</span>
      <span class="forget-pwd">无法登陆？</span>
    </footer>
  </main>
</template>

<script>
export default {
  mounted () {
    this.transformMaskBackground()
  },
  methods: {
    /**
     * 根据屏幕绘制渐变背景
     */
    transformMaskBackground() {
      const width = document.body.clientWidth
      const height = this.$refs.headerMask.clientHeight
      const deg = 180 * Math.atan(height / width) / Math.PI
      const d = Math.sin(deg * Math.PI / 180) * width
      this.$refs.headerMask.style.background = `linear-gradient(${deg}deg, #fff ${d}px, transparent ${d}px` 
    },
  }
};
</script>
<style scoped>
input {
  padding: 0;
  margin: 0;
  border: none;
}

input:focus {
  border: none;
  outline: none;
}

header {
  box-sizing: border-box;
  padding-top: 1px;
  height: 169px;
  width: 100%;
  background: linear-gradient(to right, #6ee0ff, #32aafa);
}

.header-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  width: 100%;
  height: 137px;
}
.login-avatar-wrapper {
  padding: 3px;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 50%;
  z-index: 1;
}
.login-avatar {
  position: relative;
  height: 115px;
  width: 115px;
  border-radius: 50%;
  background: #ddd;
  box-shadow: -1px 1px 5px 1px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  z-index: 2;
}

.login-avatar img {
  width: 100%;
  height: 100%;
  z-index: 100;
}



.form-main {
  margin-top: 82px;
}

.user-name {
  margin-bottom: 21px;
}


.login-input {
  width: 200px;
  height: 34px;
  border-radius: 0 0 0 0;
  border-bottom: 2px solid #ddd;
}


.login-input:focus {
  border: none;
  outline: none;
  border-radius: 0 0 0 0;
  border-bottom: 1px solid;
  border-image-source: linear-gradient(to right, #6ee0ff, #32aafa);
  border-image-slice: 1;
  border-image-width: 0 0 1 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
}


.login-input::placeholder {
  font-family: San Francisco Display;
  font-size: 15px;
  font-weight: 200;
  color: #999DA5;
}

.normal-login-wrapper {
  margin-top: 45px;
  margin-bottom: 13px;
}

.login-btn {
  padding: 0;
  width: 200px;
  height: 44px;
  border: none;
  border-radius: 22px;
  background: linear-gradient(to right, #6ee0ff, #32aafa);
  font-family: '苹方';
  color: #fff;
  font-size: 16px;
}

.login-btn:focus {
  outline: none;
}

footer {
  margin-top: 69px;
  box-sizing: border-box;
  padding: 13px 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: '苹方';
  font-size: 14px;
  color: #0188FB;
}
</style>


