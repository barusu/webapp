<template>
  <div class="page">
    <header>
      <div class="back" @click="$router.go(-1)">
        <svg class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M769.405 977.483c-27.074 27.568-71.045 27.568-98.121 0l-416.591-423.804c-27.173-27.568-27.173-72.231 0-99.899l416.492-423.804c13.537-13.734 31.324-20.652 49.109-20.652s35.572 6.917 49.109 20.652c27.173 27.568 27.173 72.331 0 99.899l-367.482 373.806 367.482 373.904c27.074 27.568 27.074 72.231 0 99.899z"></path>
        </svg>
        <span>返回</span>
      </div>
    </header>
    <router-view class="page-content"/>
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
  .page {
    header {
      background: #fff;
    }
    .back {
      height: 100%;
      float: left;
      padding: .5em 1em;
      font-size: 16px;
      line-height: 1.8;
      span {
        vertical-align: middle;
      }
      .icon {
        width: 1em;
        height: 1em;
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
      }
    }
    .page-content {
      margin-top: 44px;
    }
  }
</style>
