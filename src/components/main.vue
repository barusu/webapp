<template>
  <div class="main">
    <router-view class="main-content"/>
    <div class="tabbar">
      <router-link class="tab" tag="div" :to="{name: 'index'}">
        <div class="icon"><img src="../assets/icon/home.png" alt=""></div>
        <p>首页</p>
      </router-link>
      <router-link class="tab" tag="div" :to="{name: 'manage'}">
        <div class="icon"><img src="../assets/icon/manage.png" alt=""></div>
        <p>办公</p>
      </router-link>
      <router-link class="tab" tag="div" :to="{name: 'workbench'}">
        <div class="icon"><img src="../assets/icon/workbench.png" alt=""></div>
        <p>办案</p>
      </router-link>
      <router-link class="tab" tag="div" :to="{name: 'addressbook'}">
        <div class="icon"><img src="../assets/icon/addressbook.png" alt=""></div>
        <p>通讯录</p>
      </router-link>
      <router-link class="tab" tag="div" :to="{name: 'user'}">
        <div class="icon"><img src="../assets/icon/user.png" alt=""></div>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  html, body {
    height: 100%;
  }
  header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 44px;
  }
  .main {
    padding: 0 0 3.5rem;
    height: inherit;
    background: url(../assets/bg.png) no-repeat center top / 100%;
    background-color: inherit;
  }
  .main-content {
    position: relative;
    height: 100%;
    overflow: auto;
    background-color: inherit;
  }
  .tabbar {
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 3.5rem;
    background: #fff;
    > div {
      flex: 1;
      padding: .5em 5px 0;
    }
    .icon {
      height: 1.5rem;
      filter: grayscale(100%);
    }
    img {
      height: 100%;
    }
    p {
      font-size: 12px;
      line-height: 2;
    }
    .router-link-exact-active {
      .icon {
        filter: grayscale(0%);
      }
      color: #3556a9;
    }
  }
</style>
