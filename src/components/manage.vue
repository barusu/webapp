<template>
  <div class="manage">
    <div class="manage-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swipe" style="background-image: url('./static/swipe.png');"></div>
          </div>
          <div class="swiper-slide">
            <div class="swipe" style="background-image: url('./static/swipe.png');"></div>
          </div>
          <div class="swiper-slide">
            <div class="swipe" style="background-image: url('./static/swipe.png');"></div>
          </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="content">
      <div class="group">
        <div class="title">办公申请</div>
        <div class="body clearfix">
          <router-link class="item" tag="div" :to="{name: 'meet'}">
            <div class="img bg1"></div>
            <p>会议室</p>
          </router-link>
          <router-link class="item" tag="div" :to="{name: 'vacation'}">
            <div class="img bg2"></div>
            <p>休假</p>
          </router-link>
          <div class="item">
            <div class="img bg3"></div>
            <p>用车</p>
          </div>
          <div class="item">
            <div class="img bg4"></div>
            <p>出差</p>
          </div>
          <div class="item">
            <div class="img bg5"></div>
            <p>接待</p>
          </div>
          <div class="item">
            <div class="img bg6"></div>
            <p>设备</p>
          </div>
        </div>
      </div>
      <div class="group">
        <div class="title">公文流转</div>
        <div class="body clearfix">
          <div class="item">
            <div class="img bg7"></div>
            <p>查询</p>
          </div>
          <div class="item">
            <div class="img bg8"></div>
            <p>审批</p>
          </div>
          <div class="item">
            <div class="img bg9"></div>
            <p>追踪</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import $ from '@/libs/ajax.js';

  export default {
    name: 'manage',
    data () {
      return {
        swiper: null
      };
    },
    methods: {
      initSwiper() {
        this.swiper = new Swiper('.swiper-container', {
          autoplay: true,
          direction: 'horizontal',
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        });
      }
    },
    mounted() {
      this.initSwiper();
    },
    beforeDestroy() {
      this.swiper.destroy();
    }
  }
</script>

<style lang="scss">
  .manage {
    padding-top: 180px;
    .swiper-container {
      height: 100%;
    }
    .content {
      .group {
        border-top: 1px solid #eee;
        padding: 10px 10px;
        background: #fff;
      }
      .title {
        font-size: 18px;
        font-weight: 600;
        text-align: left;
        line-height: 1.5;
      }
      .body {
      }
      .item {
        width: 33.33%;
        float: left;
        padding: 10px 0;
        .img {
          width: 48px;
          height: 48px;
          margin: auto;
          background: no-repeat center center / contain;
        }
        .bg1 {background-image: url(../assets/icon/bg_01.png); }
        .bg2 {background-image: url(../assets/icon/bg_02.png); }
        .bg3 {background-image: url(../assets/icon/bg_03.png); }
        .bg4 {background-image: url(../assets/icon/bg_04.png); }
        .bg5 {background-image: url(../assets/icon/bg_05.png); }
        .bg6 {background-image: url(../assets/icon/bg_06.png); }
        .bg7 {background-image: url(../assets/icon/bg_07.png); }
        .bg8 {background-image: url(../assets/icon/bg_08.png); }
        .bg9 {background-image: url(../assets/icon/bg_09.png); }
      }
    }
  }
  .manage-swiper {
    position: absolute;
    top: 0;
    height: 180px;
    width: 100%;
    .swipe {
      height: 100%;
      width: 100%;
      background: #fff center center / cover;
    }
  }
</style>
