<template>
  <div class="record-page">
    <div class="item" v-for="i in list" :key="i.id" @click="show(i.id)">
      <div class="date" v-text="i.date"></div>
      <div class="title" v-text="i.type"></div>
      <div class="apply" v-text="i.cause"></div>
    </div>
  </div>
</template>

<script>
  import $ from '@/libs/ajax.js';
  import auth from '@/libs/relic.js';
  import moment from 'moment';

  moment.locale('zh-cn');

  export default {
    name: 'record',
    data () {
      return {
        list: []
      };
    },
    methods: {
      loadData() {
        $.get('iccp-pmo-rest/v1/leaveApply/appGetLeaveApply/1/-1', {
          auditorId: auth.id
        }, data => {
          if(data.code === 0) {
            this.list = data.data.map(i => {
              i.date = moment(i.createdTime).fromNow();
              // console.log(i.createTime);
              // console.log(moment(i.createTime));
              return i;
            });
          }
        });
      },
      show(id) {
        $.get('iccp-pmo-rest/v1/leaveApply/appGetLeaveApply/1/' + id, {
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
      font-size: 16px;
      color: #666;
      text-align: left;
    }
  }
</style>
