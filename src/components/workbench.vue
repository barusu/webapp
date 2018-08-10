<template>
  <div class="workbench-page">
    <div class="workbench-items">
      <div class="item">
        <div class="item-icon"></div>
        <p>我的办案</p>
      </div>
      <div class="item">
        <div class="item-icon"></div>
        <p>我的案件</p>
      </div>
      <div class="item">
        <div class="item-icon"></div>
        <p>案件搜索</p>
      </div>
    </div>
    <div class="workbench-items">
      <div class="item">
        <div class="item-icon"></div>
        <p>用警</p>
      </div>
      <div class="item">
        <div class="item-icon"></div>
        <p>录音录像</p>
      </div>
      <div class="item">
        <div class="item-icon"></div>
        <p>办公工作区</p>
      </div>
    </div>
  </div>
</template>

<script>
  // import $ from '@/libs/ajax.js';

  export default {
    name: 'workbench',
    data () {
      return {
      };
    },
    methods: {
    },
    mounted() {
    },
    beforeDestroy() {
    }
  }
</script>

<style lang="scss">
  .workbench-page {
    padding-top: 15px;
    .workbench-items {
      background: #fff;
      margin-bottom: 20px;
      .item {
        line-height: 2;
        padding: .5em 0;
        border-top: 1px solid #eee;
        text-align: left;
        p {
          overflow: hidden;
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
  }
</style>
