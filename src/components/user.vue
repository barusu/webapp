<template>
  <div class="user-page">
    <div class="user-info">
      <div class="user-img"></div>
      <div class="content">
        <div class="user-name" v-text="name"></div>
        <div class="tel">电话: <tel v-text="phone"></tel></div>
      </div>
    </div>
    <div class="user-items">
      <router-link class="item" tag="div" :to="{name: 'record'}">
        <div class="item-icon"></div>
        <p>个人日志</p>
      </router-link>
      <div class="item">
        <div class="item-icon"></div>
        <p>日程安排</p>
      </div>
      <div class="item">
        <div class="item-icon"></div>
        <p>工作提醒</p>
      </div>
    </div>
    <div class="user-items">
      <div class="item">
        <div class="item-icon"></div>
        <p>一学两做</p>
      </div>
      <div class="item">
        <div class="item-icon"></div>
        <p>咨询</p>
      </div>
      <div class="item">
        <div class="item-icon"></div>
        <p>考试</p>
      </div>
      <div class="item">
        <div class="item-icon"></div>
        <p>规章制度</p>
      </div>
      <div class="item">
        <div class="item-icon"></div>
        <p>警示提醒</p>
      </div>
    </div>
    <div class="user-items" @click="logout">
      <div class="item error">
        <p class="center">退出</p>
      </div>
    </div>
  </div>
</template>

<script>
  import auth from '@/libs/relic.js';

  export default {
    name: 'user',
    data () {
      return {
        name: auth.name,
        phone: auth.phone
      };
    },
    methods: {
      logout() {
        this.$router.push({name: 'login'});
      }
    },
    mounted() {
    },
    beforeDestroy() {
    }
  }
</script>

<style lang="scss">
  .user-page {
    padding-top: 15px;
    .user-items {
      background: #fff;
      margin-bottom: 20px;
      .item {
        line-height: 2;
        padding: .5em 0;
        border-top: 1px solid #eee;
        text-align: left;
        &:first-child {
          border: 0;
        }
        p {
          overflow: hidden;
          &.center {
            text-align: center;
          }
        }
        &.error {
          background: #ef5350;
          color: #fff;
        }
      }
      .item-icon {
        width: 2em;
        height: 2em;
        border-radius: 3px;
        margin: 0 15px;
        background: #eee;
        float: left;
      }
    }
    .user-info {
      padding: 10px 0 10px 15px;
      margin-bottom: 20px;
      background: #fff;
      min-height: 84px;
      .content {
        padding: 0 10px;
        text-align: left;
        overflow: hidden;
      }
    }
    .tel {
      color: #777;
    }
    .user-img {
      width: 64px;
      height: 64px;
      float: left;
      border-radius: 4px;
      background: #eee;
    }
    .user-name {
      font-size: 18px;
      line-height: 2;
    }
  }
</style>
