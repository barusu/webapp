<template>
  <div class="record-page">
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
  import $ from '@/libs/ajax.js';
  import auth from '@/libs/relic.js';

  export default {
    name: 'record',
    data () {
      return {};
    },
    props: ['msg'],
    methods: {
      loadData() {
        $.post('/v1/auditorRecord/appAuditorRecordList', {
          auditorId: auth.id
        }, data => {
          console.log(data);
        });
      }
    },
    computed: {},
    mounted() {
      this.loadData();
    },
    beforeDestroy() {
    }
  }
</script>

<style lang="scss">
  .record-page {
  }
</style>
