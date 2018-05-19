<template>
  <div class="fill-order">
    <header class="add-addr">
      <router-link to="/address/">
        <div class="addr-btn" v-if="$route.params.id == 0">
          +添加地址
        </div>
        <div class="addr-info" v-for="item in addressData" :key="item.id" v-if="$route.params.id == item.id">
          {{item.location}}{{item.detail}}
        </div>
      </router-link>
    </header>
    <div class="order-time">
      <span class="order-time-label">上门时间</span>
      <span class="order-time-option">立即(默认)</span>
    </div>
    <div class="type-panel">
      <div class="type-item" v-for="(item,index) in type" :key="index">
        <div class="type-item-contanier">
          <div class="type-label">{{item.label}}</div>
          <div class="type-price">{{item.price}}元/斤</div>
          <div class="type-btn" @click="animateEnter(index)">{{item.selectedOptions}}</div>
          <div class="weight-options" @click="animateLeave(index)">
            <div class="weight-option-item" :key="index" v-for="(Opitem,index) in item.options" :class="{'selected':Opitem.selected}" @click="Select(item,Opitem)">
              {{Opitem.label}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pic-panel">

      <div class="pic-label">
        上传图片
      </div>
      <div class="pic-btn">
        <img src="/static/icon/add.png" alt="" id="blah">
      </div>
      <input type="file" accept="image/*" capture="camera" class="file-btn" @change="Change($event)" id="imgInp">
    </div>
    <div class="msg-panel">
      <div class="msg-label">
        留言
      </div>
      <input type="text" class="msg-input" placeholder="给回收员捎句话">
    </div>
    <footer class="order-foot">
      <div class="order-btn" @click="Order">
        一点回收
      </div>
      <div class="order-tips">
        切换至大商户回收模式
      </div>
    </footer>
 
  </div>
</template>
<script>
import axios from "axios";

export default {
  component:{

  },
  data() {
    return {
 
      addressData: [
        {
          id: 1,
          location: "江苏省无锡市江南大学",
          detail: "8幢502室",
          name: "林海瑞",
          tel: "13588888888"
        },
        {
          id: 2,
          location: "浙江省杭州市海曙路58号",
          detail: "8幢719室",
          name: "王懿琦",
          tel: "13588888888"
        },
        {
          id: 3,
          location: "浙江省温州市泰顺县",
          detail: "三魁镇府",
          name: "吴际",
          tel: "13588888888"
        }
      ],
      type: [
        {
          label: "废报纸",
          price: 0.68,
          selected: "",
          weight: 0,
          selectedOptions: "请选择",
          options: [
            { label: "100以上", selected: false, key: 150 },
            { label: "50-100", selected: false, key: 75 },
            { label: "1-50", selected: false, key: 25 }
          ]
        },
        {
          label: "废塑料",
          price: 0.58,
          selected: "",
          weight: 0,
          selectedOptions: "请选择",
          options: [
            { label: "100以上", selected: false, key: 150 },
            { label: "50-100", selected: false, key: 75 },
            { label: "1-50", selected: false, key: 25 }
          ]
        },
        {
          label: "废金属",
          price: 3.56,
          selected: "",
          weight: 0,
          selectedOptions: "请选择",
          options: [
            { label: "100以上", selected: false, key: 150 },
            { label: "50-100", selected: false, key: 75 },
            { label: "1-50", selected: false, key: 25 }
          ]
        }
      ],
      orderInfo: {
        addressId: 0,
        startTime: null,
        fromId: null,
        toId: null,
        detail: "",
        state: "待接单"
      }
    };
  },
  methods: {
    animateEnter(index) {
      $(".weight-options")
        .eq(index)
        .animate({ right: 10 });
    },
    animateLeave(index) {
      $(".weight-options")
        .eq(index)
        .animate({ right: -250 });
    },
    Select(item, Opitem) {
      item.selectedOptions = Opitem.label;
      item.weight = Opitem.key;
      console.log(item.selectedOptions);
      item.options.forEach(function(Opitem) {
        Opitem.selected = false;
      });
      Opitem.selected = true;
    },
    Order() {
      let time = new Date();
      let tempDetail = {
        废报纸: 0,
        废塑料: 0,
        废金属: 0
      };
      this.type.forEach(function(item) {
        if (item.label === "废报纸") {
          tempDetail.废报纸 = item.weight;
        } else if (item.label === "废塑料") {
          tempDetail.废塑料 = item.weight;
        } else {
          tempDetail.废金属 = item.weight;
        }
      });
      let startTime = `${time.toLocaleDateString()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
      console.log(startTime);
      this.orderInfo.detail = JSON.stringify(tempDetail);
      this.orderInfo.addressId = this.$route.params.id;
      this.orderInfo.fromId = window.localStorage.getItem("OID");
      // this.orderInfo.fromId = `oEwij0-ryS8R56w2xWriEFaKejiU`
      this.orderInfo.startTime = startTime;
      axios
        .post("/api/user/orders/order", {
          order: this.orderInfo
        })
        .then(res => {
          console.log("加入成功");
        })
        .catch(err => {
          console.log("加入失败", err);
        });
    },
    Change(e) {
      this.readURL(document.getElementById("imgInp"));
    },
    readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
          $("#blah").attr("src", e.target.result);
          console.log(e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
  },
  mounted() {
    let o  = document.getElementsByClassName("fill-order")[0];
    let h =  document.body.clientHeight ; //高度
    o.style.height = h+"px";
    
    axios
      .get("/api/address/all")
      .then(res => {
        console.log(res);
        this.addressData = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
.fill-order {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  overflow: hidden;
  position: relative;
}
.add-addr {
  font-family: "苹方";
  overflow: hidden;
  width: 100%;
  height: 69px;
  background: linear-gradient(to right, #6ee0ff, #32aafa);
}
.addr-btn {
  width: 138px;
  height: 33px;
  margin: auto;
  margin-top: 15px;
  border: #fff solid 1px;
  border-radius: 16px;
  line-height: 33px;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
.addr-info {
  font-weight: bold;
  line-height: 69px;
  font-size: 18px;
  color: #fff;
  padding-left: 20px;
}
.order-time {
  font-family: "苹方";
  line-height: 50px;
  height: 50px;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.order-time-label {
  margin-left: 20px;
}
.order-time-option {
  float: right;
  margin-right: 20px;
  color: #32aafa;
}
.type-panel {
  width: 96%;
  margin: 10px auto;
}
.type-item {
  display: flex;
  background: #fff;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(204, 204, 204, 0.349019607843137);
  text-align: center;
  margin-bottom: 1px;
}
.type-item-contanier {
  display: flex;
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  position: relative;
}
.type-label {
  font-size: 16px;
  color: #333;
}
.type-price {
  margin-left: 10px;
  font-size: 12px;
  color: #ffaa42;
}
.type-btn {
  margin-top :12px;
  position: absolute;
  right: 10px;
  height: 27px;
  width: 62px;
  border: #32aafa solid 1px;
  border-radius: 13px;
  line-height: 27px;
  font-size: 12px;
  color: #32aafa;
}
.weight-options {
  position: absolute;
  right: -250px;
  display: flex;
   margin-top :12px;
  width: 175px;
  height: 30px;
  border-radius: 15px;
  background: linear-gradient(to right, #6ee0ff, #32aafa);
}
.weight-option-item {
  align-self: center;
  height: 23px;
  width: 50px;
  margin-left: 5px;
  border-radius: 11px;
  font-size: 12px;
  color: #fff;
  line-height: 23px;
}
.selected {
  background-color: #fff;
  color: #32aafa;
}
.pic-panel {
  overflow: hidden;
  width: 96%;
  margin: 10px auto;
  height: 109px;
  box-shadow: 0 0 5px rgba(204, 204, 204, 0.349019607843137);
  background: #fff;
  border-radius: 3px;
}
.pic-label {
  margin-top: 7px;
  margin-left: 24px;
  font-size: 14px;
  color: #333;
}
.pic-btn {
  width: 60px;
  height: 60px;
  margin-top: 7px;
  margin-left: 22px;
}
.file-btn {
  margin-top: 7px;
  margin-left: 22px;
  width: 60px;
  height: 60px;
  position: relative;
  top: -65px;
  overflow: hidden;
  opacity: 0;
}
img {
  width: 100%;
  height: 100%;
}
.msg-panel {
  display: flex;
  width: 96%;
  margin: 10px auto;
  height: 50px;
  box-shadow: 0 0 5px rgba(204, 204, 204, 0.349019607843137);
  background: #fff;
  border-radius: 3px;
}
.msg-label {
  margin-left: 24px;
  line-height: 50px;
  font-size: 14px;
  color: #333;
}
.msg-input {
  font-family: "苹方";
  margin-left: 10px;
  border: none;
  outline: medium;
  height: 20px;
  align-self: center;
}
.order-foot {
  position: absolute;
  bottom: 0;
  height: 72px;
  width: 100%;
}
.order-btn {
  width: 96%;
  margin: 0 auto;
  height: 42px;
  background: #32aafa;
  border-radius: 21px;
  font-size: 16px;
  text-align: center;
  line-height: 42px;
  font-weight: bold;
  color: #fff;
}
.order-tips {
  margin-top: 5px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #999;
}
input::-webkit-input-placeholder {
  color: #b9b99b;
  font-size: 14px;
}
</style>

