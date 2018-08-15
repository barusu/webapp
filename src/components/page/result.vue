<template>
  <div class="result-page">
    <div class="rs-icon">
      <o-svg type="ok"></o-svg>
    </div>
    <div class="msg" v-text="msg || '操作成功'"></div>
    <div class="btn-wrapper">
      <span class="btn" @click="$router.go(-1)">返回</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'result',
    data () {
      return {};
    },
    props: ['msg'],
    methods: {},
    computed: {},
    mounted() {},
    beforeDestroy() {
    }
  }
</script>

<style lang="scss">
  .result-page {
    .rs-icon {
      color: #09bb07;
      width: 40%;
      margin: 70px auto 0;
    }
    .msg {
      font-size: 20px;
      line-height: 2;
    }
    .btn-wrapper {
      margin-top: 1em;
      padding: 10px 15px;
    }
  }
</style>
