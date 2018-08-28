<template>
  <div class="component-page">
    <div class="component-items">
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
      <div class="item">
        <div class="item-icon"></div>
        <p>案件搜索</p>
      </div><div class="item">
        <div class="item-icon"></div>
        <p>案件搜索</p>
      </div>
    </div>
    <table class="table-items">
      <tbody>
        <tr>
          <td>我的办案</td>
          <td>我的案件</td>
          <td>案件搜索</td>
        </tr>
      </tbody>
    </table>
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
  .component-page {
    .table-items {
      width: 100%;
      td {
        background: hsla(0,0%,100%,.7);
      }
    }
    .component-items {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      border-top: 1px solid #fff;
      border-left: 1px solid #fff;
      .item {
        width: 33.33%;
        line-height: 2;
        padding: .5em;
        border-right: 1px solid #fff;
        border-bottom: 1px solid #fff;
        text-align: center;
        background: hsla(0,0%,100%,.7);
      }
    }
  }
</style>
