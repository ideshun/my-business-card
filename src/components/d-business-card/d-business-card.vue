<template>
  <view class="card-container">
    <view :class="['card-content', theme]">
      <image
        class="card-content-bg"
        v-if="cardInfo.bgImg"
        :src="cardInfo.bgImg"
      />
      <view class="card-company">
        <view class="card-company-title">
          {{ cardInfo.companyName }}
        </view>
      </view>
      <view class="card-box">
        <view class="card-qrcode">
          <image
            :src="cardInfo.qrcode"
            :show-menu-by-longpress="true"
            class="card-qrcode-img"
          />
          <view class="card-qrcode-text"
            >Scan the QR Code to add me on WeChat</view
          >
        </view>
        <view class="card-info">
          <view class="card-info-name">{{ `${ cardInfo.lastName }${ cardInfo.firstName}` }}</view>
          <view class="card-info-position">{{ cardInfo.position }}</view>
          <view class="card-info-age"
            >({{ cardInfo.age }} · {{ cardInfo.workingYears }}年)</view
          >
        </view>
      </view>
      <view class="card-list-box">
        <view
          class="card-list-item"
          v-if="cardInfo.tel"
          @click="phoneCall(cardInfo.tel)"
        >
          <u-icon name="phone-fill" color="#eeac64" />
          <text>{{ cardInfo.tel }}</text>
        </view>
        <view class="card-list-item" v-if="cardInfo.address">
          <u-icon name="map-fill" color="#eeac64" />
          <text>{{ cardInfo.address }}</text>
        </view>
        <view class="card-list-item" v-if="cardInfo.weChat">
          <u-icon name="weixin-fill" color="#eeac64" />
          <text :user-select="true">{{ cardInfo.weChat }}</text>
        </view>
        <view class="card-list-item" v-if="cardInfo.mail">
          <u-icon name="email-fill" color="#eeac64" />
          <text :user-select="true">{{ cardInfo.mail }}</text>
        </view>
      </view>
    </view>
    <view class="card-tips">* 微信&邮箱长按可复制</view>
    <view class="card-function">
      <u-button
        shape="square"
        size="medium"
        type="success"
        @click="phoneCall(cardInfo.tel)"
        >拨打电话</u-button
      >
      <u-button 
        shape="square" 
        size="medium" 
        type="primary" 
        @click="addPhoneContact"
        >添加到通讯录</u-button
      >
    </view>
  </view>
</template>

<script>
import { myCard } from "@/api/data";
export default {
  props: {
    cardInfo: {
      type: Object,
      default: () => ({
        
      })
    },
    theme: {
      type: String,
      default: "default",
      validator(val) {
        return ["default", "light", "white"].indexOf(val) !== -1;
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    /*
     * 拨打电话
     * */
    phoneCall(tel) {
      uni.makePhoneCall({
        phoneNumber: tel,
      });
    },
    /*
     * 拨打电话
     * */
    addPhoneContact() {
      const { cardInfo } = this
      uni.addPhoneContact({
        nickName: cardInfo.nickName, // 昵称
        lastName: cardInfo.lastName, // 姓
        firstName: cardInfo.firstName, // 名
        remark: cardInfo.position, // 备注
        mobilePhoneNumber: cardInfo.tel, // 手机号
        weChatNumber: cardInfo.weChat, // 微信号
        url: cardInfo.weChat, // 微信号
        success: function () {
          console.log("添加成功");
        },
        fail: function () {
          console.log("添加失败");
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>
@import "d-business-card.scss";
</style>
