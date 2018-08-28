<template>
  <div class="meet-page">
    <div class="meets">
    </div>
  </div>
</template>

<script>
  import $ from '@/libs/ajax.js';

  export default {
    name: 'meet',
    data () {
      return {
        list: []
      };
    },
    methods: {
      loadList() {
        $.get('iccp-pmo-rest/v1/meetRoom/appGetMeetRoom/-1', data => {
          if(Array.isArray(data.data)) {
            this.list = data.data;
          }
        });
      }
    },
    computed: {
      List() {
        return this.list.map(i => {
          return {
            id: i.id,
            name: i.name,
            remark: i.remark,
            resources: i.resources.split(';')
          };
        });
      }
    },
    mounted() {
      // this.loadList();
    },
    beforeDestroy() {
    }
  }
</script>

<style lang="scss">
  .meet-page {
    padding-top: 5px;
    .meet {
      background: #fff;
      margin-bottom: 5px;
      text-align: left;
      padding: 10px 15px;
      .name {
        font-size: 18px;
      }
      .resources {
        font-size: 12px;
        > span {
          display: inline-block;
          color: #fff;
          background: #4465bd;
          line-height: 1;
          padding: 3px 6px;
          margin: 0 3px 3px 0;
          border-radius: 3px;
        }
      }
      .remark {
        font-size: 14px;
        color: #666;
      }
    }
  }
</style>
