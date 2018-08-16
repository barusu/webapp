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
      padding: .5em;
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
  .input-wrapper,
  .textarea-wrapper {
    position: relative;
    display: block;
    text-align: left;
    background: #fff;
    padding: 14px 15px;
    margin-bottom: 1px;
    span {
      display: block;
    }
    textarea {
      width: 100%;
      resize: none;
      margin-top: 10px;
    }
    input {
      width: 100%;
      margin-top: 10px;
    }
  }
  .date-wrapper,
  .select-wrapper {
    position: relative;
    display: block;
    width: 100%;
    background: #fff;
    border: 0;
    font-size: 16px;
    line-height: 1;
    padding: 14px 15px;
    text-align: left;
    margin-bottom: 1px;
    input,
    select {
      position: absolute;
      top: 0; right: 0;
      border: 0;
      outline: none;
      background: #fff;
      font-size: inherit;
      height: 100%;
      -webkit-appearance: unset;
    }
    .placeholder {
      position: absolute;
      top: 0; right: 0;
      line-height: 1;
      padding: 14px;
      pointer-events: none;
      color: #888;
    }
  }
</style>
