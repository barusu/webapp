<template>
  <div class="auditing-page">
    <div class="item" v-for="i in list" :key="i.id">
      <div class="date" v-text="i.date"></div>
      <div class="title" v-text="i.approveTypeName"></div>
      <div class="apply">申请人： <span v-text="i.applyPersonName"></span></div>
    </div>
  </div>
</template>

<script>
  import $ from '@/libs/ajax.js';
  import auth from '@/libs/relic.js';
  import moment from 'moment';

  moment.locale('zh-cn');

  export default {
    name: 'auditing',
    data () {
      return {
        list: []
      };
    },
    methods: {
      loadData() {
        $.post('iccp-pmo-rest/v1/auditorRecord/appAuditorRecordList', {
          auditorId: auth.id
        }, data => {
          if(data.code === 0) {
            this.list = data.data.map(i => {
              i.date = moment(i.createTime).fromNow();
              console.log(i.createTime);
              console.log(moment(i.createTime));
              return i;
            });
          }
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
  .auditing-page {
    padding-top: 1px;
    .item {
      background: #fff;
      margin-top: 15px;
      padding: 10px;
    }
    .date {
      float: right;
      font-size: 14px;
      color: #888;
    }
    .title {
      overflow: hidden;
      font-size: 18px;
      text-align: left;
    }
    .apply {
      font-size: 14px;
      color: #555;
      text-align: left;
    }
  }
</style>
